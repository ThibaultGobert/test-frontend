import React from 'react';
import PropTypes from 'prop-types';
import {Form, Message} from 'semantic-ui-react';
import ErrorMessage from "../shared/ErrorMessage";

const LoginForm = ({onSubmit, onChange, error, errorMessage}) => {
    return (
      <div className="login-form">
        <Form onSubmit={onSubmit}>
          <div className="code-tag">&lt;Start&gt;</div>
          <Form.Group inline>
            <Form.Field>
              <label className="code-tag">&lt;Username /&gt;</label>
              <input placeholder="username" onChange={onChange} name="username"/>
            </Form.Field>
          </Form.Group>

          <Form.Group inline>
            <Form.Field>
              <label className="code-tag">&lt;Paswoord /&gt;</label>
              <input type="password" placeholder="paswoord" onChange={onChange} name="password"/>
            </Form.Field>
          </Form.Group>

          { error && <ErrorMessage header="Login mislukt" message={errorMessage}/>}

          <div className="code-tag">&lt;/Start&gt;</div>
          <Form.Button primary>Login</Form.Button>
        </Form>
      </div>
    );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.object
};

export default LoginForm;
