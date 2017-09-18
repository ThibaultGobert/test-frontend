import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

class LessonApi {

  static getLessonsForStudent() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getUserInformation',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.token
      }
    }).then(response => {
      let lessons = response.data.lessons;
      /* lessons = lessons.map(lesson => {
        this.getLessonMetaData(lesson.programlessonid).then(metadata => {
          lesson.activateStudent = metadata.activateStudent;
        });
        return lesson;
      });*/
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
