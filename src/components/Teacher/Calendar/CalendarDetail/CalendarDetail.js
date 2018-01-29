import React from 'react';
import _ from 'lodash';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import * as lessonTypes from '../../../../constants/lessonTypes';
import * as slideTypes from '../../../../constants/slideTypes';
import ErrorMessage from '../../../shared/ErrorMessage';
import './CalendarDetail.css';

const CalendarDetail = ({
  course,
  event,
  downloadLesContent,
  hasLessonContent,
  isOpen,
  onClose,
}) => {
  const classHome = _.find(event.lessonEntities, { lessonType: lessonTypes.CLASSHOME });
  const extra = _.find(event.lessonEntities, { lessonType: lessonTypes.EXTRA });

  let slideViewerUrl;
  let extraSlideViewerUrl;

  if (classHome) {
    slideViewerUrl = `/slideviewer/${classHome.lessonId}`;
  }

  if (extra) {
    extraSlideViewerUrl = `/slideviewer/${extra.lessonId}`;
  }

  return (
    <Modal className="CalendarDetail" open={isOpen} closeIcon onClose={onClose}>
      <Modal.Header>
        {' '}
        {event.name} - {new Date(event.start).toLocaleDateString()}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description className="CalendarDetail__Description">
          {classHome && (
            <Header as="h2">
              Les {event.number} {classHome.name}
            </Header>
          )}

          <div className="calendar-details-content">
            <div className="starttime">Startuur: {moment(event.start).format('HHumm')}</div>
            <div className="endtime">Einduur: {moment(event.end).format('HHumm')}</div>
            {course && (
              <div>
                <div className="clan">Clan: {course.clan}</div>
                <div className="level">Level: {course.level}</div>
              </div>
            )}
          </div>

          <div className="calendar-details-buttons">
            {slideViewerUrl && (
              <span>
                <NavLink to={`${slideViewerUrl}/${slideTypes.CLASS}`}>
                  <Button primary>
                    <Icon name="group" />Klas
                  </Button>
                </NavLink>
                <NavLink to={`${slideViewerUrl}/${slideTypes.HOME}`}>
                  <Button primary>
                    <Icon name="home" />Thuis
                  </Button>
                </NavLink>
                <NavLink to={`${slideViewerUrl}/${slideTypes.PROJECTION}`}>
                  <Button primary>
                    <Icon name="tv" />Projectie
                  </Button>
                </NavLink>
                <NavLink to={`${slideViewerUrl}/${slideTypes.INFO}`}>
                  <Button primary>
                    <Icon name="info" />Info
                  </Button>
                </NavLink>
              </span>
            )}
            {!slideViewerUrl && (
              <ErrorMessage
                header="Geen links naar de lesinhoud beschikbaar"
                message="Contacteer CodeFever HQ"
              />
            )}
            {extraSlideViewerUrl && (
              <NavLink to={extraSlideViewerUrl}>
                <Button primary>
                  <Icon name="trophy" />Extra
                </Button>
              </NavLink>
            )}

            {hasLessonContent && <Button onClick={downloadLesContent}>Download lescontent</Button>}
            {!hasLessonContent && (
              <ErrorMessage
                header="Geen download link beschikbaar"
                message="Contacteer CodeFever HQ"
              />
            )}
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CalendarDetail;
