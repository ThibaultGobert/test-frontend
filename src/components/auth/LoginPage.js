import React from 'react';
import {Link} from 'react-router';
import {Grid} from 'semantic-ui-react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: ''
    };

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginChange(event) {
    let field = event.target.name;
    this.setState({[field]: event.target.value});
  }

  onLoginSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <LoginForm onChange={this.onLoginChange} onSubmit={this.onLoginSubmit}/>
      </div>
    );
  }
}

export default LoginPage;
