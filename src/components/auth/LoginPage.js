import React from 'react';
import LoginForm from './LoginForm';
import * as authActions from '../../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as roles from '../../constants/roles';
import {Icon} from 'semantic-ui-react';
import Loader from '../shared/Loader';
import toastr from 'toastr';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '',
        password: '',
      },
      hidden: true,
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  onLoginChange(event) {
    let field = event.target.name;
    const credentials = Object.assign({}, this.state.credentials);
    credentials[field] = event.target.value;
    this.setState({credentials: credentials});
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.props.actions.login(this.state.credentials).then((data) => {
      if (this.props.loggedIn.role == roles.STUDENT_ROLE) {
        this.context.router.push('/studentprofile/clan');
      } else if (this.props.loggedIn.role == roles.TEACHER_ROLE) {
        this.context.router.push('/teacherprofile/overview');
      } else if (this.props.loggedIn.role == roles.WORKSHOP_STUDENT_ROLE) {
        this.context.router.push('/workshopprofile/overview');
      } else if (this.props.loggedIn.role == roles.ADMIN_ROLE){
        toastr.error("Geen toegang voor admins");
        this.props.actions.logOut();
      } else if (this.props.loggedIn.role == roles.EDITOR_ROLE) {
        toastr.error("Geen toegang voor lesmakers");
        this.props.actions.logOut();
      }
    });
  }

  toggleHidden() {
    this.setState((prevState) => {
      return {hidden: !prevState.hidden};
    });
  }

  render() {
    return(
      <div className="login-form">
        <img className="rambdass-welcome" src={require('../../../images/login/ramdass-welkom.png')}/>
        <Loader active={this.props.loading}/>
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
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired,
  hasError: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object
};

LoginPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.loggedIn.data,
    loading: state.loggedIn.loading,
    error: state.loggedIn.error,
    hasError: state.loggedIn.hasError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
