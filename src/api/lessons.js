import api from './api';
import mapToLessons from './mappers/mapToLessons';

class LessonApi {
  static getLessonsForStudent(lessonType, slideType) {
    let url = `/lessons/getAllLessons?type=${lessonType}`;

    if (slideType) {
      url = `${url} &slidetype=${slideType}`;
    }

    return api.get(url).then(mapToLessons);
  }


  static getLessonMetaData(programLessonId) {
    return api
      .get('/lessons/getLessonMetaData?programlessonid=' + programLessonId);
  }

  static searchLessons(filterValues) {
    return api
      .post('/lessons/searchLessons', {
        body: filterValues
      });
  }
}

export default LessonApi;
