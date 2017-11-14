import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attendance from "./Attendance";
import Loader from "../../shared/Loader";
import ErrorMessage from "../../shared/ErrorMessage";

class AttendanceContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  componentDidMount() {
    const { loadChildrenIfNeeded, loadCoursesIfNeeded } = this.props.actions;
    const { courseId } = this.props;
    loadChildrenIfNeeded(courseId);
    loadCoursesIfNeeded();
  }

  submit(event) {
    event.preventDefault();

    const { markPresence } = this.props.actions;

  }

  redirectToOverview() {
    this.context.router.push('/teacherprofile/overview');
  }

  onChange({ target }) {
    // change state on form change
    this.setState(prevState => ({}));
  }

  render() {
    const { error, loading, classList, course, hasError } = this.props;

    if (loading) {
      return (
        <Loader active/>
      );
    }

    if (!loading && hasError) {
      return (<ErrorMessage message="Fout bij inladen van de lesdata" />);
    }
    return (
      <div className="AttendanceContainer">
        <Attendance
          submit={this.submit}
          onChange={this.onChange}
          classList={classList}
          course={course}
          redirectToOverview={this.redirectToOverview}
          {...this.state}
        />
      </div>
      );
  }
}

AttendanceContainer.propTypes = {
  classList: PropTypes.array,
  course: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  actions: PropTypes.object,
  hasError: PropTypes.bool
};

AttendanceContainer.contextTypes = {
  router: PropTypes.object
};

export default AttendanceContainer;
