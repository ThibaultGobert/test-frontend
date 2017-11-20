import React from 'react';
import PropTypes from 'prop-types';
import lessonApi from '../../../../api/lessons';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import CalendarDetail from "./CalendarDetail";

class CalendarDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToCalendar = this.redirectToCalendar.bind(this);
    this.downloadLesContent = this.downloadLesContent.bind(this);
    this.state = {
      lessonContentLoading: true,
      contentUrl: null
    };
  }

  componentDidMount() {
    // TODO: update redux state with action and reducer
    lessonApi.getLessonMetaData(this.props.event.programlessonid).then(metadata => {
      let contentUrls = metadata.filter(dataForLesson => {
          return dataForLesson.ziplocation !== undefined && dataForLesson.ziplocation;
      }).map(dataForLesson => dataForLesson.ziplocation);
      contentUrls = _.without(contentUrls, undefined);
      this.setState({
        lessonContentLoading: false,
        contentUrl: contentUrls[0]
      });
    });
  }

  redirectToCalendar() {
    browserHistory.goBack();
  }

  downloadLesContent(e) {
    e.preventDefault();
    window.location.assign(this.state.contentUrl);
  }

  render() {
    const { event } = this.props;

    return null;
    return(
      <CalendarDetail
        event={event}
        redirectToCalendar={this.redirectToCalendar}
        downloadLesContent={this.downloadLesContent}
        {...this.state}
      />
    );
  }
}

CalendarDetailContainer.propTypes = {
  event: PropTypes.object.isRequired,
};

CalendarDetailContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CalendarDetailContainer;

