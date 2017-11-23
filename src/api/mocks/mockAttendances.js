import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const attendances = [
  {
    lessonId: 1900,
    attendanceList: [
      {
        id: 1,
        userId: 1027,
        isPresent: false,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 2,
        userId: 1717,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 3,
        userId: 1803,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 4,
        userId: 1809,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 5,
        userId: 1815,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 6,
        userId: 1816,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
    ],
  },
  {
    lessonId: 1900,
    attendanceList: [
      {
        userId: 7,
        isPresent: false,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        userId: 8,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
    ],
  },
];

class AttendancesApi {
  static getAttendances() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], attendances));
      }, delay);
    });
  }
}

export default AttendancesApi.getAttendances;
