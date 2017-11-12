import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon } from 'semantic-ui-react';

import CodeTag from '../CodeTag';
import Loader from '../shared/Loader';
import ErrorMessage from '../shared/ErrorMessage';

import './Login.css';
import ramdassWelcome from '../../assets/images/login/ramdass-welkom.png';

const Login = ({
  impersonate,
  credentials,
  hidden,
  error,
  loading,
  submit,
  onChange,
  toggleHidden,
  toggleImpersonate
}) => {
  return (
    <div className="Login">
      <img className="Login__Rambdass" src={ramdassWelcome} alt=""/>
      <Loader active={loading} message="Even geduld. Wij proberen u in te loggen..." />

      <div className="Login__Wrapper">
        <Form className="Login__Form" onSubmit={submit}>
          <CodeTag text="Start" />
          <Form.Group inline>
            <Form.Field>
              <CodeTag text="Uw gebruikersnaam" className="Login__CodeTag--highlight" closing />
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
                <CodeTag text="Gebruikersnaam kind" className="Login__CodeTag--highlight" closing />
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
              <CodeTag text="Wachtwoord" className="Login__CodeTag--highlight" closing />
              <Input
                type={hidden ? 'password' : 'text'}
                placeholder="Wachtwoord"
                onChange={onChange}
                name="password"
                value={credentials.password}
                icon={
                  !impersonate && (
                    <Icon name="eye" className="eye-icon" inverted link onClick={toggleHidden} />
                  )
                }
              />
            </Form.Field>
          </Form.Group>
          <CodeTag text="Start" closing />
          {error && <ErrorMessage header="Login mislukt" message={error} />}
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
  loading: PropTypes.bool
};

export default Login;
