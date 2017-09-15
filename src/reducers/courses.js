import * as types from '../actions/types';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.LOAD_CHILDREN_SUCCESS: {
      let course = state.filter(course => course.id === action.childrenForCourse.courseId)[0];
      let extendedCourse = Object.assign({}, course, {"classlist": action.childrenForCourse.children});
      let otherCourses = state.filter(course => course.id !== action.childrenForCourse.courseId);
      return [...otherCourses, extendedCourse];
    }

    default:
      return state;
  }
}
