import React from 'react';
import {Modal, Button, Item} from 'semantic-ui-react';
import moment from 'moment';

const CalendarDetails = ({onDetailsClose, isOpen, event}) => {
  return(
    <Modal open={isOpen} onClose={onDetailsClose}>
      <Modal.Header>{event.name}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <div className="calendar-details-content">
            <div className="starttime">Startuur: {moment(event.start).format("HHumm")}</div>
            <div className="endtime">Einduur: {moment(event.end).format("HHumm")}</div>
            <div className="clan">Clan: {event.clan}</div>
            <div className="level">Level: {event.level}</div>
          </div>
          <div className="calendar-details-buttons">
            <Button>Klas</Button>
            <Button>Projectie</Button>
            <Button>Info</Button>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
};

export default CalendarDetails;
