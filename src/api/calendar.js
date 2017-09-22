/*{
  "id": 189,
  "name": "C2 ZA 11:00 Gent",
  "clan": "CodeKraks",
  "program_type": "serie",
  "level": 2,
  "lessons": [
  {
    "id": 1881,
    "startdate": "23-09-2017 11:00",
    "enddate": "23-09-2017 12:30",
    "order": 10,
    "name":"Herhalingsles",
  },*/

import axios from 'axios';
import store from '../index';
import mapToCalendar from './mapToCalendar';
import baseUrl from './baseUrl';

class CalendarApi {
  static getCalendar() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/webresources/v1/getTeacherCourse?replacements=false',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      let calendar = mapToCalendar(response.data);
      return calendar;
    }).catch(error => {
      throw error;
    });
  }
}

export default CalendarApi;
