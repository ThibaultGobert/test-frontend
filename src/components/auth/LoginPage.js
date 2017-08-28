import React from 'react';
import LoginForm from './LoginForm';
import * as loginActions from '../../actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
    this.props.actions.login(this.state.credentials).then(() => {
      this.setState({loading: false});
      toastr.success('Logged in');
      if (this.props.loggedIn.role == "STUDENT") {
        this.context.router.push('/studentprofile/clan'); // Redirect to courses page after save
      } else if (this.props.loggedIn.role == "TEACHER") {
        this.context.router.push('/teacherprofile/overview'); // Redirect to courses page after save
      } else {
        this.context.router.push('/adminprofile/overview'); // Redirect to courses page after save
      }
    }).catch(error => {
      console.log(error);
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
    actions: bindActionCreators(loginActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
