import React from 'react';
import LoginForm from './LoginForm';
import * as authActions from '../../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as roles from '../../constants/roles';
import toastr from 'toastr';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '',
        password: '',
      },
      error: false,
      loading: false,
      errorMessage: '',
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginChange(event) {
    let field = event.target.name;
    const credentials = Object.assign({}, this.state.credentials);
    credentials[field] = event.target.value;
    this.setState({credentials: credentials});
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.setState({loading: true});
    this.props.actions.login(this.state.credentials).then((data) => {
      this.setState({loading: false});
      if (this.props.loggedIn.role == roles.STUDENT_ROLE) {
        this.context.router.push('/studentprofile/clan');
      } else if (this.props.loggedIn.role == roles.TEACHER_ROLE) {
        this.context.router.push('/teacherprofile/overview');
      } else if (this.props.loggedIn.role == roles.ADMIN_ROLE){
        toastr.error("Geen toegang voor admins");
        this.props.actions.logOut();
      } else if (this.props.loggedIn.role == roles.EDITOR_ROLE) {
        toastr.error("Geen toegang voor lesmakers");
        this.props.actions.logOut();
      }
    }).catch(error => {
      this.setState({loading: false});
      this.setState({error: true, errorMessage: error});
    });
  }

  render() {
    return(
      <div className="login-form">
        <LoginForm
          onChange={this.onLoginChange}
          onSubmit={this.onLoginSubmit}
          error={this.state.error}
          loading={this.state.loading}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired,
};

LoginPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
