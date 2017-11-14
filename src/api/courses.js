import axios from 'axios';
import store from '../index';
import mapToCourses from './mappers/mapToCourses';
import mapToClassList from './mappers/mapToClassList';
import baseUrl from './baseUrl';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/courses/getTeacherCourse?replacements=' + replacementsIncluded,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return mapToCourses(response.data);
    }).catch(error => {
      throw error;
    });
  }

  static getChildrenForCourse(courseId) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/courses/getChildrenForCours?courseid=' + courseId,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return mapToClassList(response.data);
    }).catch(error => {
      throw error;
    });
  }
}

export default CourseApi;
