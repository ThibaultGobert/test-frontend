import React from 'react';
import _ from 'lodash';

import lessonApi from '../../../../api/lessons';
import CalendarDetail from './CalendarDetail';
import Loader from '../../../shared/Loader';

class CalendarDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToCalendar = this.redirectToCalendar.bind(this);
    this.downloadLesContent = this.downloadLesContent.bind(this);
    this.state = {
      lessonContentLoading: true,
      contentUrl: null,
    };
  }

  componentDidMount() {
    // TODO: update redux state with action and reducer
    lessonApi.getLessonMetaData(this.props.event.programlessonid).then(metadata => {
      let contentUrls = metadata
        .filter(dataForLesson => {
          return dataForLesson.ziplocation !== undefined && dataForLesson.ziplocation;
        })
        .map(dataForLesson => dataForLesson.ziplocation);
      contentUrls = _.without(contentUrls, undefined);
      this.setState({
        lessonContentLoading: false,
        contentUrl: contentUrls[0],
      });
    });
  }

  redirectToCalendar() {
    const { history } = this.props;
    history.push('/teacherprofile/calendar');
  }

  downloadLesContent(e) {
    e.preventDefault();
    window.open(this.state.contentUrl, '_blank');
  }

  render() {
    const { lessonContentLoading, contentUrl } = this.state;
    const hasLessonContent = !_.isEmpty(contentUrl);

    if (lessonContentLoading) {
      return null;
    }

    return (
      <CalendarDetail
        redirectToCalendar={this.redirectToCalendar}
        downloadLesContent={this.downloadLesContent}
        hasLessonContent={hasLessonContent}
        {...this.props}
        {...this.state}
      />
    );
  }
}

export default CalendarDetailContainer;
