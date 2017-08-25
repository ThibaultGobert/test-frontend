import React from 'react';
import {Form, Message} from 'semantic-ui-react';

const LoginForm = ({onSubmit, onChange, error, loading, errorMessage}) => {
    return (
      <Form onSubmit={onSubmit} error={error} loading={loading}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="username" onChange={onChange} name="username"/>
        </Form.Field>
        <Form.Field>
          <label>Paswoord</label>
          <input placeholder="paswoord" onChange={onChange} name="password"/>
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

export default LoginForm;
