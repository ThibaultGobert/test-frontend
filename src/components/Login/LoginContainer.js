import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import toastr from 'toastr';
import { Redirect } from 'react-router-dom';

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
      impersonate: false,
      redirect: undefined
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.toggleImpersonate = this.toggleImpersonate.bind(this);
  }

  redirect(loggedIn) {
    const redirectTo = {
      [roles.STUDENT_ROLE]: '/studentprofile/clan',
      [roles.TEACHER_ROLE]: '/teacherprofile/overview',
      [roles.WORKSHOP_STUDENT_ROLE]: '/workshopprofile/overview',
      [roles.ADMIN_ROLE]: '/editorprofile/overview'
    };

    if (redirectTo[loggedIn.role]) {
      this.setState({ redirect: redirectTo[loggedIn.role] });
    } else {
      toastr.error('Geen toegang voor admins');
      this.props.actions.logOut();
    }
  }

  submit(event) {
    event.preventDefault();

    const { loginStart, loginSuccess, loginError } = this.props.actions;

    loginStart();

    api
      .login(this.state.credentials)
      .then(data => {
        loginSuccess(data);
        this.redirect(data);
      })
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
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

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
