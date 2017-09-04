import React from 'react';
import { Link } from 'react-router';
import * as authActions from '../../../actions/auth';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class TeacherHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    event.preventDefault();
    this.props.actions.logOut();
    toastr.remove();
    this.context.router.push('/login'); // Redirect to courses page after save
  }

  render() {
    return (
      <div className="header">
        <div className="banner" />
        <div className="header-bar">
          <div className="wrapper">
            <div className="header-lockup">
              <img className="logo" src={require('../../../../images/logo.png')}/>
              <span className="welcome-message">Hey {this.props.loggedIn.fullname}</span>
            </div>

            <Button primary onClick={this.logOut}>Uitloggen</Button>
          </div>
          <div className="clearfix" />
        </div>

        <nav>
          <div className="ui attached stackable menu">
            <div className="ui container">
              <Link to="/teacherprofile/overview" className="item" activeClassName="active"><i
                className="grid layout icon" />Klasgroepen</Link>
              <Link to="/teacherprofile/calendar" className="item" activeClassName="active"><i
                className="grid layout icon" />Lesdata</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

TeacherHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired
};

TeacherHeader.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHeader);
