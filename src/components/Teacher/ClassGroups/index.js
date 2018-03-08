import { connect } from 'react-redux';
import ClassGroups from './ClassGroups';
import { getReplacementCourses, getCourses } from '../../../selectors';

function mapStateToProps(state) {
  return {
    plannedCourses: getCourses(state),
    replacements: getReplacementCourses(state),
    teachers: state.teachers.data,
    locations: state.locations.data,
  };
}

export default connect(mapStateToProps)(ClassGroups);
