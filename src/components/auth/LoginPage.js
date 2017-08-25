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
      username: '',
      password: '',
      error: false,
      loading: false,
      errorMessage: '',
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginChange(event) {
    let field = event.target.name;
    this.setState({[field]: event.target.value});
  }

  onLoginSubmit(event) {
    event.preventDefault();
    this.setState({loading: true});
    this.props.actions.login(this.state).then(() => {
      this.setState({loading: false});
      toastr.success('Logged in');
      this.context.router.push('/teacherprofile/overview'); // Redirect to courses page after save
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
