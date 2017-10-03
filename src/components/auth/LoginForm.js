import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Icon} from 'semantic-ui-react';
import ErrorMessage from "../shared/ErrorMessage";

const LoginForm = ({onSubmit, onChange, error, errorMessage, toggleHidden, hidden, credentials}) => {
    let passwordtype = hidden? "password": "text";
    return (
      <div className="login-form">
        <Form onSubmit={onSubmit}>
          <div className="code-tag">&lt;Start&gt;</div>
          <Form.Group inline>
            <Form.Field>
              <label className="code-tag">&lt;Gebruikersnaam /&gt;</label>
              <input placeholder="username" onChange={onChange} name="username" value={credentials.username}/>
            </Form.Field>
          </Form.Group>

          <Form.Group inline>
            <Form.Field>
              <label className="code-tag">&lt;Wachtwoord /&gt;</label>
              <Input type={passwordtype} placeholder="paswoord" onChange={onChange} name="password" value={credentials.password}
                     icon={<Icon name="eye" className="eye-icon" inverted link onClick={toggleHidden} />}/>
            </Form.Field>
          </Form.Group>
          <div className="code-tag">&lt;/Start&gt;</div>
          { error && <ErrorMessage header="Login mislukt" message={errorMessage}/>}
          <Form.Button primary>Login</Form.Button>
        </Form>
      </div>
    );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  toggleHidden: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  credentials: PropTypes.object.isRequired
};

export default LoginForm;
