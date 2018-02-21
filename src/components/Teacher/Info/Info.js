import React from 'react';
import { Menu } from 'semantic-ui-react';
import './Info.css';
import LetOpPage from './LetOpPage';
import WatVindJeWaarPage from './WatVindJeWaarPage';
import AfwezighedenPage from './AfwezighedenPage';
import FeedbackLeerlingenPage from './FeedbackLeerlingenPage';
import HoeLoggenKinderenInPage from './HoeLoggenKinderenInPage';
import OnbekendKindPage from './OnbekendKindPage';
import InhoudelijkeVerbeteringPage from './InhoudelijkeVerbeteringPage';
import WatBijProblemenPage from './WatBijProblemenPage';
import HoeBereidIkMijnLesVoorPage from './HoeBereidIkMijnLesVoorPage';
import CampusverantwoordelijkePage from './CampusverantwoordelijkePage';
import HuisregelsPage from './HuisregelsPage';

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
    const { activeItem } = this.state;

    return (
      <div className="Info">
        <Menu secondary vertical className="Info__SideBar">
          <Menu.Item name="let_op" active={activeItem === 'let_op'} onClick={this.handleItemClick}>
            Let op
          </Menu.Item>
          <Menu.Item
            name="wat_vind_je_waar"
            active={activeItem === 'wat_vind_je_waar'}
            onClick={this.handleItemClick}
          >
            Wat vind je waar?
          </Menu.Item>
          <Menu.Item
            name="afwezigheden"
            active={activeItem === 'afwezigheden'}
            onClick={this.handleItemClick}
          >
            Afwezigheden
          </Menu.Item>
          <Menu.Item
            name="feedback_leerlingen"
            active={activeItem === 'feedback_leerlingen'}
            onClick={this.handleItemClick}
          >
          Feedback over leerlingen
          </Menu.Item>
          <Menu.Item
            name="hoe_loggen_kinderen_in"
            active={activeItem === 'hoe_loggen_kinderen_in'}
            onClick={this.handleItemClick}
          >
            Hoe loggen kinderen in?
          </Menu.Item>
          <Menu.Item
            name="onbekend_kind"
            active={activeItem === 'onbekend_kind'}
            onClick={this.handleItemClick}
          >
            Onbekend kind
          </Menu.Item>
          <Menu.Item
            name="inhoudelijke_verbetering"
            active={activeItem === 'inhoudelijke_verbetering'}
            onClick={this.handleItemClick}
          >
            Inhoudelijke verbetering
          </Menu.Item>
          <Menu.Item
            name="wat_bij_problemen"
            active={activeItem === 'wat_bij_problemen'}
            onClick={this.handleItemClick}
          >
            Wat bij problemen?
          </Menu.Item>
          <Menu.Item
            name="hoe_bereid_ik_mijn_les_voor"
            active={activeItem === 'hoe_bereid_ik_mijn_les_voor'}
            onClick={this.handleItemClick}
          >
            Hoe bereid ik mijn les voor?
          </Menu.Item>
          <Menu.Item
            name="campusverantwoordelijke"
            active={activeItem === 'campusverantwoordelijke'}
            onClick={this.handleItemClick}
          >
            Campusverantwoordelijke
          </Menu.Item>
          <Menu.Item
            name="huisregels"
            active={activeItem === 'huisregels'}
            onClick={this.handleItemClick}
          >
            Huisregels
          </Menu.Item>
        </Menu>
        <div className="Profile__Content">
          {activeItem === 'let_op' && <LetOpPage />}
          {activeItem === 'wat_vind_je_waar' && <WatVindJeWaarPage />}
          {activeItem === 'afwezigheden' && <AfwezighedenPage />}
          {activeItem === 'feedback_leerlingen' && <FeedbackLeerlingenPage />}
          {activeItem === 'hoe_loggen_kinderen_in' && <HoeLoggenKinderenInPage />}
          {activeItem === 'onbekend_kind' && <OnbekendKindPage />}
          {activeItem === 'inhoudelijke_verbetering' && <InhoudelijkeVerbeteringPage />}
          {activeItem === 'wat_bij_problemen' && <WatBijProblemenPage />}
          {activeItem === 'hoe_bereid_ik_mijn_les_voor' && <HoeBereidIkMijnLesVoorPage />}
          {activeItem === 'campusverantwoordelijke' && <CampusverantwoordelijkePage />}
          {activeItem === 'huisregels' && <HuisregelsPage />}
        </div>
      </div>
    );
  }
}

export default Info;
