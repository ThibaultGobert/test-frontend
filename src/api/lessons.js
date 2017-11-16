import api from './api';
import store from '../index';
import mapToLessons from './mappers/mapToLessons';
import mapToLessonSlides from './mappers/mapToLessonSlides';
import * as userRoles from '../constants/roles';

class LessonApi {
  static getLessonsForStudent(lessonType, slideType) {
    let url = `/lessons/getAllLessons?type=${lessonType}`;

    if (slideType) {
      url = `${url} &slidetype=${slideType}`;
    }

    return api.get(url).then(response => mapToLessons(response.data));
  }

  // TODO: this endpoint will be refactored - lose the NEW suffix (SOON)
  static getLessonSlides(lessonId, lessonType, slideType) {
    return api
      .get('/lessons/getLessonNEW?lessonId=' + lessonId + '&slideType=' + slideType)
      .then(response => {
        const role = store.getState().loggedIn.data.role;
        return mapToLessonSlides(role, slideType, response.data);
      });
  }

  static getLessonMetaData(programLessonId) {
    return api
      .get('/lessons/getLessonMetaData?programlessonid=' + programLessonId)
      .then(response => response.data);
  }

  static searchLessons(filterValues) {
    return api
      .post('/lessons/searchLessons', {
        body: filterValues
      })
      .then(response => response.data);
  }
}

export default LessonApi;
