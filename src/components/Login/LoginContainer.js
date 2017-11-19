import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import toastr from 'toastr';

import Login from './Login';
import api from '../../api/auth';
import * as roles from '../../constants/roles';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '',
        password: '',
        child_username: ''
      },
      hidden: true,
      impersonate: false
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.toggleImpersonate = this.toggleImpersonate.bind(this);
  }

  componentWillReceiveProps({ loggedIn }) {
    console.log(loggedIn);

    if (!isEmpty(loggedIn)) {
      if (loggedIn.role === roles.STUDENT_ROLE) {
        this.context.router.push('/studentprofile/clan');
      } else if (loggedIn.role === roles.TEACHER_ROLE) {
        this.context.router.push('/teacherprofile/overview');
      } else if (loggedIn.role === roles.WORKSHOP_STUDENT_ROLE) {
        this.context.router.push('/workshopprofile/overview');
      } else if (loggedIn.role === roles.EDITOR_ROLE) {
        this.context.router.push('/editorprofile/overview');
      } else if (loggedIn.role === roles.ADMIN_ROLE) {
        toastr.error('Geen toegang voor admins');
        this.props.actions.logOut();
      }
    }
  }

  submit(event) {
    event.preventDefault();

    const { loginStart, loginSuccess, loginError } = this.props.actions;


    loginStart();

    api
      .login(this.state.credentials)
      .then(loginSuccess)
      .catch(loginError);
  }

  onChange({ target }) {
    this.setState(prevState => ({
      credentials: {
        ...prevState.credentials,
        [target.name]: target.value
      }
    }));
  }

  toggleHidden() {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  toggleImpersonate() {
    this.setState(prevState => ({
      impersonate: !prevState.impersonate,
      hidden: true,
      credentials: { ...prevState.credentials, child_username: '' }
    }));
  }

  render() {
    const { error, loading } = this.props;

    return (
      <Login
        error={error}
        loading={loading}
        submit={this.submit}
        onChange={this.onChange}
        toggleHidden={this.toggleHidden}
        toggleImpersonate={this.toggleImpersonate}

        {...this.state}
      />
    );
  }
}

LoginContainer.propTypes = {
  loggedIn: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  actions: PropTypes.object
};

LoginContainer.contextTypes = {
  router: PropTypes.object
};

export default LoginContainer;
