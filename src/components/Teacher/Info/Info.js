import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Info.css';
import LetOpPage from './LetOpPage';
import WatVindJeWaarPage from './WatVindJeWaarPage';
import AfwezighedenPage from './AfwezighedenPage';
import FeedbackLeerlingenPage from './FeedbackLeerlingenPage';

class Info extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'let_op',
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
      <div className="Info">
        <Menu secondary vertical className="Info__SideBar">
          <Menu.Item
            name="let_op"
            active={activeItem === 'let_op'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="wat_vind_je_waar"
            active={activeItem === 'wat_vind_je_waar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="afwezigheden"
            active={activeItem === 'afwezigheden'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="feedback_leerlingen"
            active={activeItem === 'feedback_leerlingen'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <div className="Profile__Content">
          { activeItem === 'let_op' && <LetOpPage /> }
          { activeItem === 'wat_vind_je_waar' && <WatVindJeWaarPage /> }
          { activeItem === 'afwezigheden' && <AfwezighedenPage /> }
          { activeItem === 'feedback_leerlingen' && <FeedbackLeerlingenPage /> }
        </div>
      </div>
    );
  }
}

export default Info;
