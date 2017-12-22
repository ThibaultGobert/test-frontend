import { connect } from 'react-redux';
import ClassGroups from './ClassGroups';

function mapStateToProps(state) {
  return {
    courses: Object.values(state.courses.data),
    teachers: state.teachers.data,
    locations: state.locations.data,
  };
}

export default connect(mapStateToProps)(ClassGroups);
