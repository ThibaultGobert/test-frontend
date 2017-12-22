import React from 'react';
import { Link } from 'react-router-dom';
import * as authActions from '../../../actions/auth';
import { Menu, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import {removeUser} from "../../../api/api";
import toastr from 'toastr';

class EditorHeader extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    toastr.remove();
    removeUser();
    window.location = "/";    
  }

  render() {
    return (
      <div className="header editor">
        <Menu inverted>
          <Menu.Item name='home' as={Link} to="/editorprofile/overview" >
            <Icon name='archive' />
            Overzicht
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item disabled>
              {this.props.user.fullname}
            </Menu.Item>
            <Menu.Item name='logout' color="blue" onClick={this.logOut}>
              Uitloggen
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

EditorHeader.propTypes = {
  actions: PropTypes.object.isRequired,
  loggedIn: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(EditorHeader);
