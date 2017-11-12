import React from 'react';
import {Button, Message, Header, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link,browserHistory} from 'react-router';
import * as calendarActions from '../../actions/calendar';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import * as slideTypes from '../../constants/slideTypes';
import lessonApi from '../../api/lessons';
import * as lessonTypes from '../../constants/lessonTypes';
import _ from 'lodash';

class CalendarDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.downloadLescontent = this.downloadLescontent.bind(this);
    this.state = {
      lessonContentLoading: true,
      contentUrl: null
    };
  }

  componentDidMount() {
    lessonApi.getLessonMetaData(this.props.event.programlessonid).then(metadata => {
      let contentUrls = metadata.map(dataForLesson => {
        if(dataForLesson.ziplocation !== undefined && dataForLesson.ziplocation) {
          return dataForLesson.ziplocation;
        }
      });
      contentUrls = _.without(contentUrls, undefined);
      this.setState({
        lessonContentLoading: false,
        contentUrl: contentUrls[0]
      });
    });
  }

  goBack() {
    browserHistory.goBack();
  }

  downloadLescontent(e) {
    e.preventDefault();
    window.location.assign(this.state.contentUrl);
  }

  render() {
    const {
      event
    } = this.props;

    let classhome = _.find(event.lessonEntities, {lessonType: lessonTypes.CLASSHOME});
    let extra = _.find(event.lessonEntities, {lessonType: lessonTypes.EXTRA});

    let slideviewerUrl;
    let extraSlideviewerUrl;
    let hasExtraLesson = false;

    if (classhome) {
      slideviewerUrl = "/slideviewer/" + classhome.lessonId;
    }

    if (extra) {
      extraSlideviewerUrl = "/slideviewer/" + extra.lessonId;
      hasExtraLesson = true;
    }

    return(
      <div className="calendar-details">
        <div className="back-button">
          <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.goBack}/>
        </div>
        <Header as="h1">{event.name} - {new Date(event.start).toLocaleDateString()}</Header>

        <div className="calendar-details-content">
          <div className="starttime">Startuur: {moment(event.start).format("HHumm")}</div>
          <div className="endtime">Einduur: {moment(event.end).format("HHumm")}</div>
          <div className="clan">Clan: {event.clan}</div>
          <div className="level">Level: {event.level}</div>
        </div>

        <Message className="aanwezigheden-info">
          <Message.Header>De aanwezigheden invullen</Message.Header>
          <p>Binnenkort gaat het mogelijk zijn om hier de aanwezigheden van de kinderen bij de les in te vullen. Gelieve dit voorlopig nog zelf bij te houden en door te mailen naar<a href="mailto:lieve@codefever.be"> lieve@codefever.be</a></p>
        </Message>

        <div className="calendar-details-buttons">
          <Link to={slideviewerUrl + "/" + slideTypes.CLASS}>
            <Button primary><Icon name="group"/>Klas</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.HOME}>
            <Button primary><Icon name="home"/>Thuis</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.PROJECTION}>
            <Button primary><Icon name="tv"/>Projectie</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.INFO}>
            <Button primary><Icon name="info"/>Info</Button>
          </Link>
          <Link to={extraSlideviewerUrl}>
            { hasExtraLesson && <Button primary ><Icon name="trophy"/>Extra</Button>}
          </Link>
          <Button loading={this.state.lessonContentLoading} onClick={this.downloadLescontent} disabled={this.state.contentUrl === undefined}>Download lescontent</Button>
        </div>
      </div>
    );
  }
}

CalendarDetailPage.propTypes = {
  event: PropTypes.object.isRequired,
};

CalendarDetailPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getEventById(events, id) {
  const event = events.filter(event => event.id === id);
  if (event) {
    return event[0];
  }
  return null;
}

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const eventId = ownProps.params.eventId; // from path /course/:id
  let event = getEventById(state.calendar.data, eventId);

  return {
    event: event,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDetailPage);

