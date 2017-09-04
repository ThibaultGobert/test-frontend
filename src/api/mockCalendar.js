import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const calendar = [
  {
    "id": 484,
    "name": "IT-girls in Gent",
    "program_type": "workshop",
    "lessons": [
      {
        "id": 2981,
        "startdate": "11-09-2017 13:00",
        "enddate": "11-09-2017 18:00",
      }
    ]
  },
  {
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
        "name": "Eddy"
      },
      {
        "id": 1882,
        "startdate": "30-09-2017 11:00",
        "enddate": "30-09-2017 12:30",
        "order": 1,
        "name": "Les 1"
      },
      {
        "id": 1883,
        "startdate": "07-10-2017 11:00",
        "enddate": "07-10-2017 12:30",
        "order": 2,
        "name": "Les 2"
      },
      {
        "id": 1884,
        "startdate": "14-10-2017 11:00",
        "enddate": "14-10-2017 12:30",
        "order": 3,
        "name": "Les 3"
      },
      {
        "id": 1885,
        "startdate": "21-10-2017 11:00",
        "enddate": "21-10-2017 12:30",
        "order": 4,
        "name": "Les 4"
      },
      {
        "id": 1886,
        "startdate": "18-11-2017 11:00",
        "enddate": "18-11-2017 12:30",
        "order": 5,
        "name": "Les 5"
      },
      {
        "id": 1887,
        "startdate": "25-11-2017 11:00",
        "enddate": "25-11-2017 12:30",
        "order": 6,
        "name": "Les 6"
      },
      {
        "id": 1888,
        "startdate": "02-12-2017 11:00",
        "enddate": "02-12-2017 12:30",
        "order": 7,
        "name": "Les 7"
      },
      {
        "id": 1889,
        "startdate": "09-12-2017 11:00",
        "enddate": "09-12-2017 12:30",
        "order": 8,
        "name": "Les 8"
      },
      {
        "id": 1890,
        "startdate": "16-12-2017 11:00",
        "enddate": "16-12-2017 12:30",
        "order": 9,
        "name": "Les 9"
      }
    ]
  }
];

class CalendarApi {
  static getCalendar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], calendar));
      }, delay);
    });
  }

}

export default CalendarApi;
