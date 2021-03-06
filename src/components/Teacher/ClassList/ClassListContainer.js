import React from 'react';
import _ from 'lodash';
import ErrorMessage from '../../shared/ErrorMessage';
import Loader from '../../shared/Loader';
import courseApi from '../../../api/courses';
import * as subscriptionTypes from '../../../constants/subscriptionTypes';
import Feedback from '../../shared/FeedbackModal';
import ClassList from './ClassList';
import columns from './ClassListColumns';

class ClassListContainer extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { isOpen: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    const { courseId } = this.props;
    const { fetchStudentsStart, fetchStudentsSuccess, fetchStudentsError } = this.props.actions;

    fetchStudentsStart();

    courseApi
      .getStudentsForCourse(courseId)
      .then(data => fetchStudentsSuccess(data, courseId))
      .catch(fetchStudentsError);
  }

  redirectToClassGroups() {
    const { history } = this.props;
    history.push('/teacherprofile/overview');
  }

  showModal(studentId) {
    this.setState({ isOpen: true, studentId });
  }

  render() {
    const { classlist, loading, error, course } = this.props;
    const { isOpen, studentId } = this.state;

    const classListWithHighlights = classlist.map(child => {
      return { ...child, highlight: child.subscription_type === subscriptionTypes.TRIAL };
    });

    if (error) {
      return <ErrorMessage header="Fout bij inladen" message={error.message} />;
    }

    if (loading) {
      return <Loader active />;
    }

    const user = _.find(classlist, { id: studentId });

    return (
      <div className="ClassListContainer">
        {isOpen && (
          <Feedback
            isOpen={isOpen}
            course={course}
            user={user}
            onClose={() => {
              this.setState({ isOpen: false });
            }}
          />
        )}
        <ClassList
          data={classListWithHighlights}
          columns={columns}
          redirectToClassGroups={this.redirectToClassGroups}
          showModal={this.showModal}
          course={course}
        />
      </div>
    );
  }
}

export default ClassListContainer;
