import React from 'react';
import PropTypes from 'prop-types';
import {Form } from 'semantic-ui-react';
import ErrorMessage from "../shared/ErrorMessage";

const ImpersonateForm = ({onSubmit, onChange, error, errorMessage}) => {
  return (
    <div className="impersonate-form login-form">
      <Form onSubmit={onSubmit}>
        <div className="code-tag">&lt;Start&gt;</div>


        <Form.Group inline>
          <Form.Field>
            <label className="code-tag">&lt;Gebruikersnaam kind /&gt;</label>
            <input placeholder="Gebruikersnaam kind" onChange={onChange} name="child_username"/>
          </Form.Field>
        </Form.Group>

        <Form.Group inline>
          <Form.Field>
            <label className="code-tag">&lt;Gebruikersnaam leraar /&gt;</label>
            <input placeholder="Gebruikersnaam leraar" onChange={onChange} name="username"/>
          </Form.Field>
        </Form.Group>

        <Form.Group inline>
          <Form.Field>
            <label className="code-tag">&lt;Wachtwoord /&gt;</label>
            <input type="password" placeholder="Wachtwoord" onChange={onChange} name="password"/>
          </Form.Field>
        </Form.Group>

        { error && <ErrorMessage header="Login mislukt" message={errorMessage}/>}

        <div className="code-tag">&lt;/Start&gt;</div>
        <Form.Button primary>Login</Form.Button>
      </Form>
    </div>
  );
};

ImpersonateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default ImpersonateForm;
