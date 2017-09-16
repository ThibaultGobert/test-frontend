import React from 'react';
import CFModal from './Modal';
import {Modal} from 'semantic-ui-react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

function setup(isOpen, header, body, button) {
  const props = {
    isOpen: isOpen,
    header: header ? header: '',
    body: body ? body: '',
    button: button ? button: '',
    onClose: () => {}
  };

  return shallow(<CFModal {...props} />);
}

describe('<CFModal />', () => {
  it('Renders a semantic header component', () => {
    const wrapper = setup(true, "Jammer");
    expect(wrapper.find(Modal.Header)).to.have.length(1);
  });

  it('Renders an element with classname modal', () => {
    const wrapper = setup(true, "Test");
    expect(wrapper.find('.modal')).to.have.length(1);
  });

  it('Renders a Modal.Content & Modal.Description semantic component containing the body text', () => {
    const body = "Dat was niet het juiste antwoord";
    const wrapper = setup(true, "Jammer", body);
    expect(wrapper.find(Modal.Content)).to.have.length(1);
    expect(wrapper.find(Modal.Content).find(Modal.Description)).to.have.length(1);
    expect(wrapper.find(Modal.Content).find(Modal.Description).render().text()).to.equal(body);
  });
});

