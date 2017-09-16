import React from 'react';
import {persistStore} from 'redux-persist';
import PropTypes from 'prop-types';
import routes from './routes';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import {Loader} from 'semantic-ui-react';

class Preloader extends React.Component {

  constructor() {
    super();
    this.state = { rehydrated: false};
  }

  componentWillMount(){
    persistStore(this.props.store, {whitelist: ['loggedIn', 'courses', 'lessons', 'calendar']}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if(!this.state.rehydrated){
      return <Loader />;
    }
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          {routes(this.props.store)}
        </Router>
      </Provider>
    );
  }
}

Preloader.propTypes = {
  store: PropTypes.object.isRequired
};

export default Preloader;
