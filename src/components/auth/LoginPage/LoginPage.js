import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as roles from '../../../constants/roles';
import Loader from '../../shared/Loader';
import _ from 'lodash';
import toastr from 'toastr';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      hidden: true
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.loggedIn)) {
      if (nextProps.loggedIn.role == roles.STUDENT_ROLE) {
        this.context.router.push('/studentprofile/clan');
      } else if (nextProps.loggedIn.role == roles.TEACHER_ROLE) {
        this.context.router.push('/teacherprofile/overview');
      } else if (nextProps.loggedIn.role == roles.WORKSHOP_STUDENT_ROLE) {
        this.context.router.push('/workshopprofile/overview');
      } else if (nextProps.loggedIn.role == roles.EDITOR_ROLE) {
        this.context.router.push('/editorprofile/overview');
      } else if (nextProps.loggedIn.role == roles.ADMIN_ROLE) {
        toastr.error('Geen toegang voor admins');
        this.props.actions.logOut();
      }
    }
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.props.actions.login(this.state.credentials);
  }

  onLoginChange(event) {
    const field = event.target.name;
    const credentials = Object.assign({}, this.state.credentials);
    credentials[field] = event.target.value;
    this.setState({ credentials: credentials });
  }

  toggleHidden() {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    return (
      <div className="login-form">
        <img
          className="rambdass-welcome"
          src={require('../../../assets/images/login/ramdass-welkom.png')}
        />
        <Loader active={this.props.loading} />
        <div className="login-form-wrapper">
          <LoginForm
            onChange={this.onLoginChange}
            onSubmit={this.onLoginSubmit}
            error={this.props.hasError}
            errorMessage={this.props.error}
            credentials={this.state.credentials}
            toggleHidden={this.toggleHidden}
            hidden={this.state.hidden}
          />
        </div>
        <div className="impersonate-link">
          <Link to="/impersonate">
            <Icon name="lock" />
          </Link>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loggedIn: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  actions: PropTypes.object
};

LoginPage.contextTypes = {
  router: PropTypes.object
};

export default LoginPage;
