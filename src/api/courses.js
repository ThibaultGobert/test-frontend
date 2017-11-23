import api from './api';
import mapToCourses from './mappers/mapToCourses';
import mapToClassList from './mappers/mapToClassList';
import mapToAttendances from './mappers/mapToAttendances';

import mockAttendances from './mocks/mockAttendances';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return api
      .get(`/courses/getTeacherCourse?replacements=${replacementsIncluded}`)
      .then(mapToCourses);
  }

  static getChildrenForCourse(courseId) {
    return api
      .get(`/courses/getChildrenForCours?courseid=${courseId}`)
      .then(mapToClassList);
  }

  static getAttendanceForCourse(courseId) {
    if (true) {
      return mockAttendances()
        .then(mapToAttendances);
    }

    return api
      .get(`/courses/getAttendanceForCourse?courseid=${courseId}`)
      .then(mapToAttendances);
  }
}

export default CourseApi;
