import React, { Component } from 'react';

import courseApi from '../../../api/courses';

class Bootstrap extends Component {
  componentDidMount() {
    courseApi
      .getCourses(false)
      .then(this.props.actions.fetchCoursesSuccess)
      .then(this.props.actions.finishBootstrap);
  }

  render() {
    return <div>TODO: een coole loader. Eventueel iets met het Logo van CodeFever.</div>;
  }
}

export default Bootstrap;
