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

  static getLessonSlides(type, lessonId) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/webresources/v1/getLesson?lesson=" + lessonId + "&type=" + type,
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
