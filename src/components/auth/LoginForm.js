import React from 'react';
import PropTypes from 'prop-types';
import {Form, Message} from 'semantic-ui-react';

const LoginForm = ({onSubmit, onChange, error, errorMessage}) => {
    return (
      <Form onSubmit={onSubmit} error={error}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="username" onChange={onChange} name="username"/>
        </Form.Field>
        <Form.Field>
          <label>Paswoord</label>
          <input type="password" placeholder="paswoord" onChange={onChange} name="password"/>
        </Form.Field>
        <Message
          error
          header="Login mislukt"
          content={errorMessage}
        />
        <Form.Button primary>Login</Form.Button>
      </Form>
    );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default LoginForm;
