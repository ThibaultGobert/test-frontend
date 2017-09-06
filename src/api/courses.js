import axios from 'axios';
import store from '../index';
import mapToCourses from './mapToCourses';

class CourseApi {
  static getCourses(replacementsIncluded) {
    return axios.request({
      method: 'get',
      url: 'http://localhost:8080/CodefeverWebservice/webresources/v1/getTeacherCourse?replacements=' + replacementsIncluded,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      let courses = mapToCourses(response.data);
      debugger;
      return courses;
    }).catch(error => {
      throw error;
    });
  }
}

export default CourseApi;
