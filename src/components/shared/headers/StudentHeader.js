import React from 'react';
import { Link } from 'react-router';
import * as authActions from '../../../actions/auth';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class StudentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOut();
    toastr.remove();
    this.context.router.push('/login'); // Redirect to courses page after save
  }

  render() {
    const {
      user
    } = this.props;

    return (
      <div className="header">
        <div className="banner" />

        <div className="header-bar">
          <div className="wrapper">
            <div className="header-lockup">
              <img className="logo" src={require('../../../assets/images/logo.png')} alt=""/>
              <span className="welcome-message">Hey {user.fullname}</span>
            </div>

            <Button primary onClick={this.logOut}>Uitloggen</Button>
          </div>
          <div className="clearfix" />
        </div>

        <nav>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <Link to="/studentprofile/clan" className="item" activeClassName="active"><i
                className="group layout icon" />Klas</Link>
              <Link to="/studentprofile/homework" className="item" activeClassName="active"><i
                className="home layout icon" />Thuis</Link>
              { !user.isVersion2 && <Link to="/studentprofile/extra" className="item" activeClassName="active"><i
                className="trophy layout icon" />Extra</Link>}
            </div>
          </div>


        </nav>
      </div>
    );
  }
}

StudentHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

StudentHeader.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentHeader);
