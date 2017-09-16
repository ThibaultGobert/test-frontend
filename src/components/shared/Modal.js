import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Icon} from 'semantic-ui-react';

const CFModal = ({isOpen, onClose, body, header, button}) => {
  return (
    <Modal open={isOpen} onClose={onClose} onActionClick={onClose} className="modal">
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {body}
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onClose}>
          {button} <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

CFModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
};

export default CFModal;
