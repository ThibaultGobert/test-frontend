import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Header, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import * as lessonTypes from '../../../../constants/lessonTypes';
import * as slideTypes from '../../../../constants/slideTypes';
import ErrorMessage from "../../../shared/ErrorMessage";

const CalendarDetail = ({
  event, downloadLesContent, redirectToCalendar, hasLessonContent
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
    <div className="calendar-details">
      <div className="back-button">
        <Button labelPosition="left" icon="left chevron" content="Terug" onClick={redirectToCalendar} />
      </div>
      <Header as="h1">{event.name} - {new Date(event.start).toLocaleDateString()}</Header>

      <div className="calendar-details-content">
        <div className="starttime">Startuur: {moment(event.start).format('HHumm')}</div>
        <div className="endtime">Einduur: {moment(event.end).format('HHumm')}</div>
        <div className="clan">Clan: {event.clan}</div>
        <div className="level">Level: {event.level}</div>
      </div>

      <div className="calendar-details-buttons">
        { slideViewerUrl &&
          <span>
            <NavLink to={`${slideViewerUrl}/${slideTypes.CLASS}`}>
              <Button primary><Icon name="group" />Klas</Button>
            </NavLink>
            <NavLink to={`${slideViewerUrl}/${slideTypes.HOME}`}>
              <Button primary><Icon name="home" />Thuis</Button>
            </NavLink>
            <NavLink to={`${slideViewerUrl}/${slideTypes.PROJECTION}`}>
              <Button primary><Icon name="tv" />Projectie</Button>
            </NavLink>
            <NavLink to={`${slideViewerUrl}/${slideTypes.INFO}`}>
              <Button primary><Icon name="info" />Info</Button>
            </NavLink>
          </span>
        }
        { !slideViewerUrl && <ErrorMessage header="Geen links naar de lesinhoud beschikbaar" message="Contacteer CodeFever HQ"/>}
        { extraSlideViewerUrl &&
          <NavLink to={extraSlideViewerUrl}>
            <Button primary ><Icon name="trophy" />Extra</Button>
          </NavLink>
        }

        { hasLessonContent && <Button onClick={downloadLesContent}>Download lescontent</Button>}
        { !hasLessonContent &&  <ErrorMessage header="Geen download link beschikbaar" message="Contacteer CodeFever HQ"/>}
      </div>
    </div>
  );
};

CalendarDetail.propTypes = {
  event: PropTypes.object.isRequired,
  redirectToCalendar: PropTypes.func.isRequired,
  lessonContentLoading: PropTypes.bool.isRequired,
  contentUrl: PropTypes.string,
};

export default CalendarDetail;
