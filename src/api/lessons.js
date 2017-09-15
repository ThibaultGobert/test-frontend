import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

class LessonApi {

  static getLessons(type) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getAllLessons?type=' + type,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }

  static getLessonSlides(lessonId, lessonType, slideType) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/webresources/v1/getLessonForTeacher?programlessonid=" + lessonId + "&lessontype=" + lessonType + "&slidetype=" + slideType,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
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
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default LessonApi;
