import axios from 'axios';
import store from '../index';
import mapToCourses from './mapToCourses';
import mapToClassList from './mapToClassList';
import baseUrl from './baseUrl';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getTeacherCourse?replacements=' + replacementsIncluded,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      let courses = mapToCourses(response.data);
      return courses;
    }).catch(error => {
      throw error;
    });
  }

  static getChildrenForCourse(courseId) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getChildrenForCours?courseid=' + courseId,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      let classlist = mapToClassList(response.data);
      return classlist;
    }).catch(error => {
      throw error;
    });
  }
}

export default CourseApi;
