import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';
import mapToStudentLessons from './mapToStudentLessons';

class LessonApi {

  static getLessonsForStudent() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getUserInformation',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      let lessons = response.data.lessons;
      lessons = mapToStudentLessons(lessons);
      return lessons;
    }).catch(error => {
      throw error;
    });
  }

  // TODO: this endpoint will be refactored - lose the NEW suffix (SOON)
  static getLessonSlides(programLessonId, lessonType, slideType) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/webresources/v1/getLessonNEW?programlessonid=" + programLessonId + "&lessontype=" + lessonType + "&slidetype=" + slideType,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      let lesson =  response.data;
      lesson.slideType = slideType;
      return lesson;
    }).catch(error => {
      throw error;
    });
  }

  static getLessonMetaData(programLessonId) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/webresources/v1/getLessonMetaData?programlessonid=" + programLessonId,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default LessonApi;
