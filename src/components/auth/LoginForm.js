import React from 'react';
import {Form} from 'semantic-ui-react';

const LoginForm = ({onSubmit, onChange}) => {
    return (
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="username" onChange={onChange} name="username"/>
        </Form.Field>
        <Form.Field>
          <label>Paswoord</label>
          <input placeholder="paswoord" onChange={onChange} name="password"/>
        </Form.Field>
        <Form.Button>Login</Form.Button>
      </Form>
    );
};

export default LoginForm;
