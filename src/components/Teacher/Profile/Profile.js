import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Profile.css';
import PersonalInformation from './PersonalInformation';
import ContractList from './Contract/ContractList';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'gegevens',
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const {
      activeItem,
    } = this.state;

    return (
      <div className="Profile">
        <Menu secondary vertical className="Profile__SideBar">
          <Menu.Item
            name="gegevens"
            active={activeItem === 'gegevens'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="contracten"
            active={activeItem === 'contracten'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <div className="Profile__Content">
          { activeItem === 'gegevens' && <PersonalInformation {...this.props} /> }
          { activeItem === 'contracten' && <ContractList {...this.props} /> }
        </div>
      </div>
    );
  }
}

export default Profile;
