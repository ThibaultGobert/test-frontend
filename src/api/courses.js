import api from './api';
import mapToCourses from './mappers/mapToCourses';
import mapToClassList from './mappers/mapToClassList';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return api
      .get(`/courses/getTeacherCourse?replacements=${replacementsIncluded}`)
      .then(response => mapToCourses(response.data));
  }

  static getChildrenForCourse(courseId) {
    return api
      .get(`/courses/getChildrenForCours?courseid=${courseId}`)
      .then(response => mapToClassList(response.data));
  }
}

export default CourseApi;
