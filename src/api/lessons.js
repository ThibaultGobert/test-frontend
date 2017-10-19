import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';
import _ from 'lodash';
import * as userRoles from '../constants/roles';

class LessonApi {

  static getLessonsForStudent(slidetype) {
    return axios.request({
      method: 'get',
      url: baseUrl + '/lessons/getAllLessons?type=CLASSHOME&slidetype=' + slidetype,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      let lessons = response.data.filter(lesson => lesson.activateStudent);
      if (_.isEmpty(lessons)) {
        throw "Geen lessen beschikbaar";
      }
      return lessons;
    }).catch(error => {
      throw error;
    });
  }

  // TODO: this endpoint will be refactored - lose the NEW suffix (SOON)
  static getLessonSlides(programLessonId, lessonType, slideType) {
    return axios.request({
      method: 'get',
      url: baseUrl + "/lessons/getLessonNEW?programlessonid=" + programLessonId + "&lessontype=" + lessonType + "&slidetype=" + slideType,
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      let lesson =  response.data;
      lesson.slideType = slideType;
      let role = store.getState().loggedIn.data.role;

      if (role === userRoles.TEACHER_ROLE && !lesson.activateTeacher ||
        role === userRoles.STUDENT_ROLE && !lesson.activateStudent) {
        throw "Les is niet beschikbaar";
      }

      debugger;

      return lesson;
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
}

export default LessonApi;
