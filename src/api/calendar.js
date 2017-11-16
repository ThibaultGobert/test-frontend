import mapToCalendar from './mappers/mapToCalendar';
import api from './api';

class CalendarApi {
  static getCalendar() {
    return api
      .get('/courses/getTeacherCourse?replacements=false')
      .then(mapToCalendar);
  }
}

export default CalendarApi;
