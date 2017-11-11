import React from 'react';
import LoginForm from './ImpersonateForm';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import * as roles from '../../../constants/roles';
import Loader from '../../shared/Loader';
import toastr from 'toastr';

class ImpersonatePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '',
        password: '',
        child_username: ''
      }
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginChange(event) {
    const field = event.target.name;
    const credentials = Object.assign({}, this.state.credentials);
    credentials[field] = event.target.value;
    this.setState({ credentials: credentials });
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.props.actions.login(this.state.credentials).then(data => {
      if (this.props.loggedIn.role == roles.STUDENT_ROLE) {
        this.context.router.push('/studentprofile/clan');
      } else if (this.props.loggedIn.role == roles.TEACHER_ROLE) {
        this.context.router.push('/teacherprofile/overview');
      } else if (this.props.loggedIn.role == roles.WORKSHOP_STUDENT_ROLE) {
        this.context.router.push('/workshopprofile/overview');
      } else if (this.props.loggedIn.role == roles.ADMIN_ROLE) {
        toastr.error('Geen toegang voor admins');
        this.props.actions.logOut();
      } else if (this.props.loggedIn.role == roles.EDITOR_ROLE) {
        toastr.error('Geen toegang voor lesmakers');
        this.props.actions.logOut();
      }
    });
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
          />
        </div>

        <div className="impersonate-link">
          <Link to="/login">
            <Icon name="unlock alternate" />
          </Link>
        </div>
      </div>
    );
  }
}

ImpersonatePage.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object
};

ImpersonatePage.contextTypes = {
  router: PropTypes.object
};

export default ImpersonatePage;
