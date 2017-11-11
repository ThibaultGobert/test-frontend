import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Form, Input, Icon } from 'semantic-ui-react';
import { isEmpty } from 'lodash';
import toastr from 'toastr';

import Login from './Login';
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

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.loggedIn)) {
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

  submit(event) {
    event.preventDefault();

    const { login } = this.props.actions;

    login(this.state.credentials);
  }

  onChange({ target }) {
    console.log(target);

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
      credentials: { ...prevState.credentials, child_username: '' }
    }));
  }

  render() {
    const { hasError, error } = this.props;

    return (
      <Login
        hasError={hasError}
        error={error}
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
  hasError: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  actions: PropTypes.object
};

LoginContainer.contextTypes = {
  router: PropTypes.object
};

export default LoginContainer;
