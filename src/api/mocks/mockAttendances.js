import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const attendances = [
  {
    lessonId: 1952,
    attendanceList: [
      {
        id: 1,
        userId: 1304,
        isPresent: false,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 2,
        userId: 1007,
        isPresent: true,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 3,
        userId: 1301,
        isPresent: true,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 4,
        userId: 976,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 5,
        userId: 1009,
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
    lessonId: 1951,
    attendanceList:[
      {
        id: 7,
        userId: 1304,
        isPresent: false,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 8,
        userId: 1007,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 9,
        userId: 1301,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 10,
        userId: 976,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 11,
        userId: 1009,
        isPresent: null,
        isAssistant: null,
        arrivalTime: null,
        departureTime: null,
      },
      {
        id: 12,
        userId: 1816,
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
