import React from 'react';
import {persistStore} from 'redux-persist';
import routes from './routes';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {Loader} from 'semantic-ui-react';

export default class Preloader extends React.Component {

  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(this.props.store, {whitelist: ['loggedIn']}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if(!this.state.rehydrated){
      return <Loader />;
    }
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          {routes(this.props.store)}
        </Router>
      </Provider>
    );
  }
}
