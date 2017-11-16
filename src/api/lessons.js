import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';
import mapToLessons from './mappers/mapToLessons'
import mapToLessonSlides from './mappers/mapToLessonSlides';
import * as userRoles from '../constants/roles';

class LessonApi {

  static getLessonsForStudent(lessonType, slideType) {
    let url = baseUrl + '/lessons/getAllLessons?type=' + lessonType;
    if (slideType) {
      url = url + "&slidetype=" + slideType;
    }
    return axios.request({
      method: 'get',
      url: url,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return mapToLessons(response.data);
    }).catch(error => {
      throw error;
    });
  }

  // TODO: this endpoint will be refactored - lose the NEW suffix (SOON)
  static getLessonSlides(lessonId, lessonType, slideType) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/lessons/getLessonNEW?lessonId=" + lessonId + "&slideType=" + slideType,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      const role = store.getState().loggedIn.data.role;
      return mapToLessonSlides(role, slideType, response.data);
    }).catch(error => {
      throw error;
    });
  }

  static getLessonMetaData(programLessonId) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/lessons/getLessonMetaData?programlessonid=" + programLessonId,
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

  static searchLessons(filterValues) {
    return axios.request({
      method: 'post',
      url: baseUrl + "/lessons/searchLessons",
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      },
      data: filterValues
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default LessonApi;
