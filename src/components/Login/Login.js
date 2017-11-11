import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon } from 'semantic-ui-react';

import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';

import './Login.css';
import ramdassWelcome from '../../assets/images/login/ramdass-welkom.png';

const Login = ({
  impersonate,
  credentials,
  hidden,
  hasError,
  error,
  loading,
  submit,
  onChange,
  toggleHidden,
  toggleImpersonate
}) => {
  return (
    <div className="Login">
      <img className="Login__Rambdass" src={ramdassWelcome} />
      <Loader active={loading} />

      <div className="Login__Wrapper">
        <Form className="Login__Form" onSubmit={submit}>
          <div className="Login__CodeTag">&lt;Start&gt;</div>
          <Form.Group inline>
            <Form.Field>
              <label className="Login__CodeTag Login__CodeTag--highlight">&lt;Uw gebruikersnaam /&gt;</label>
              <input
                placeholder="Uw gebruikersnaam"
                onChange={onChange}
                name="username"
                value={credentials.username}
              />
            </Form.Field>
          </Form.Group>

          {impersonate && (
            <Form.Group inline>
              <Form.Field>
                <label className="Login__CodeTag Login__CodeTag--highlight">&lt;Gebruikersnaam kind /&gt;</label>
                <input
                  placeholder="Gebruikersnaam kind"
                  onChange={onChange}
                  name="child_username"
                />
              </Form.Field>
            </Form.Group>
          )}

          <Form.Group inline>
            <Form.Field>
              <label className="Login__CodeTag Login__CodeTag--highlight">&lt;Wachtwoord /&gt;</label>
              <Input
                type={hidden ? 'password' : 'text'}
                placeholder="Wachtwoord"
                onChange={onChange}
                name="password"
                value={credentials.password}
                icon={!impersonate && <Icon name="eye" className="eye-icon" inverted link onClick={toggleHidden} />}
              />
            </Form.Field>
          </Form.Group>
          <div className="Login__CodeTag">&lt;/Start&gt;</div>
          {hasError && <ErrorMessage header="Login mislukt" message={error} />}
          <Form.Button primary>Login</Form.Button>
        </Form>
      </div>

      <button className="Login__ImpersonateLink" onClick={toggleImpersonate}>
        <Icon name="lock" />
      </button>
    </div>
  );
};

Login.propTypes = {
  impersonate: PropTypes.bool,
  credentials: PropTypes.object,
  hidden: PropTypes.bool,
  hasError: PropTypes.bool,
  error: PropTypes.object,
  loading: PropTypes.bool
};

export default Login;
