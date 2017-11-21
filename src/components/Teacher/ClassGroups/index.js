import { connect } from 'react-redux';
import ClassGroups from './ClassGroups';

import { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesError } from '../../../actions/courses';
import { getCourseById, getChildrenByCourseId } from '../../../selectors';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

function mapStateToProps(state, ownProps) {
  return {
    courses: Object.values(state.courses.data),
    users: state.users.data,
    locations: state.locations.data,
  };
}

export default connect(mapStateToProps)(ClassGroups);
