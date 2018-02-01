import api from './api/lpfApi';
import mapToCourses from './mappers/mapToCourses';
import mapToClassList from './mappers/mapToClassList';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return api
      .get(`/courses/getTeacherCourse?replacements=${replacementsIncluded}`)
      .then(mapToCourses);
  }

  static getStudentsForCourse(courseId) {
    return api
      .get(`/courses/getChildrenForCours?courseid=${courseId}`)
      .then(mapToClassList);
  }
}

export default CourseApi;
