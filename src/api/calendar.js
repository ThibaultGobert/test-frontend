import axios from 'axios';
import store from '../index';
import mapToCalendar from './mappers/mapToCalendar';
import baseUrl from './baseUrl';

class CalendarApi {
  static getCalendar() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/courses/getTeacherCourse?replacements=false',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return mapToCalendar(response.data);
    }).catch(error => {
      throw error;
    });
  }
}

export default CalendarApi;
