import React from 'react';
import * as authActions from '../../../actions/auth';
import { withRouter } from 'react-router-dom';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import {removeUser} from "../../../api/api";
import toastr from 'toastr';

class StudentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    toastr.remove();
    removeUser();
  }

  render() {
    return (
      <div className="header">
        <div className="banner" />

        <div className="header-bar">
          <div className="wrapper">
            <div className="header-lockup">
              <img className="logo" src={require('../../../assets/images/logo.png')} alt=""/>
              <span className="welcome-message">{this.props.user.fullname}</span>
            </div>

            <Button primary onClick={this.logOut}>Uitloggen</Button>
          </div>
          <div className="clearfix" />
        </div>
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
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentHeader));
