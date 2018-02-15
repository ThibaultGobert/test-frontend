import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import { removeUser } from '../../../api/storage';
import * as authActions from '../../../actions/auth';
import FeedBackButton from '../SlideViewer/FeedBackButton';

class StudentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    toastr.remove();
    removeUser();
    window.location = '/';
  }

  render() {
    const {
      user,
    } = this.props;

    return (
      <div className="header">
        <div className="banner" />

        <div className="header-bar">
          <div className="wrapper">
            <div className="header-lockup">
              <img className="logo" src={require('../../../assets/images/logo.png')} alt="" />
              <span className="welcome-message">Hey {user.fullname}</span>
            </div>

            <Button primary onClick={this.logOut}>Uitloggen</Button>
          </div>
          <div className="clearfix" />
        </div>

        <nav>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <NavLink to="/studentprofile/class" className="item" activeClassName="active">
                <i className="group layout icon" />Klas
              </NavLink>
              <NavLink to="/studentprofile/home" className="item" activeClassName="active">
                <i className="home layout icon" />Thuis
              </NavLink>
              { !user.isVersion2 &&
              <NavLink to="/studentprofile/extra" className="item" activeClassName="active">
                <i className="trophy layout icon" />Extra
              </NavLink>}
              <FeedBackButton loggedInUser={user} />
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

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentHeader));
