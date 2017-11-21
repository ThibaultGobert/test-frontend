/* global window */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as authActions from '../../../actions/auth';

class TeacherHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOut();

    toastr.remove();

    window.location = '/';
  }

  render() {
    return (
      <div className="header">
        <div className="banner" />
        <div className="header-bar">
          <div className="wrapper">
            <div className="header-lockup">
              <img className="logo" src={require('../../../assets/images/logo.png')} alt="" />
              <span className="welcome-message">Hey {this.props.user.fullname}</span>
            </div>

            <Button primary onClick={this.logOut}>
              Uitloggen
            </Button>
          </div>
          <div className="clearfix" />
        </div>

        <nav>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <NavLink to="/teacherprofile/overview" className="item" activeClassName="active">
                <i className="group layout icon" />Klasgroepen
              </NavLink>
              <NavLink to="/teacherprofile/calendar" className="item" activeClassName="active">
                <i className="calendar layout icon" />Lesdata
              </NavLink>
              <NavLink to="/teacherprofile/info" className="item" activeClassName="active">
                <i className="info layout icon" />Info
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

TeacherHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

TeacherHeader.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHeader);
