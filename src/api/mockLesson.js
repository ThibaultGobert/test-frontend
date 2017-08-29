import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses_lessons = [
  {
    "courses": [
      {
        "id": 484,
        "name": "IT-girls in Gent",
        "clan": null,
        "level": 0,
        "roomname": "B107",
        "roomremark": "<p>Chlo&euml;&#39;s lokaal</p>\r\n\r\n<p>Projector met lerarenPC</p>\r\n\r\n<p>Kabel om eigen laptop op aan te sluiten + een switch</p>\r\n\r\n<p>Geen smartboard, enkel Whiteboard</p>\r\n",
        "locationName": "Hogeschool VIVES - Campus Brugge",
        "lessons": [
          {
            "id": 2981,
            "courseid": 484,
            "subscriptionid": 0,
            "number": 1,
            "startdate": "11-09-2017 13:00",
            "enddate": "11-09-2017 18:00",
            "name": "IT-girls in Gent"
          }
        ]
      },
      {
        "id": 189,
        "name": "C2 ZA 11:00 Gent",
        "clan": "CodeKraks",
        "level": 2,
        "roomname": "GSCHB 1.026",
        "roomremark": "<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p>De &#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd stond, is&#39;verdwenen&#39;.</p>\r\n\r\n<p>Nu staat er een gewone cursist PC in de plaats. We gaan steeds een console PC halen uit een ander lokaal waar geen les gegeven wordt.</p>\r\n\r\n<p>Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n",
        "locationName": "Hogeschool Gent - Campus Schoonmeersen",
        "lessons": [
          {
            "id": 1881,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 1,
            "startdate": "23-09-2017 11:00",
            "enddate": "23-09-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1882,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 2,
            "startdate": "30-09-2017 11:00",
            "enddate": "30-09-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1883,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 3,
            "startdate": "07-10-2017 11:00",
            "enddate": "07-10-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1884,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 4,
            "startdate": "14-10-2017 11:00",
            "enddate": "14-10-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1885,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 5,
            "startdate": "21-10-2017 11:00",
            "enddate": "21-10-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1886,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 6,
            "startdate": "18-11-2017 11:00",
            "enddate": "18-11-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1887,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 7,
            "startdate": "25-11-2017 11:00",
            "enddate": "25-11-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1888,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 8,
            "startdate": "02-12-2017 11:00",
            "enddate": "02-12-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1889,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 9,
            "startdate": "09-12-2017 11:00",
            "enddate": "09-12-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          },
          {
            "id": 1890,
            "courseid": 189,
            "subscriptionid": 0,
            "number": 10,
            "startdate": "16-12-2017 11:00",
            "enddate": "16-12-2017 12:30",
            "name": "C2 ZA 11:00 Gent"
          }
        ]
      }
    ]
  }
];

class LessonApi {
  static getCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses_lessons["courses"]));
      }, delay);
    });
  }

}

export default LessonApi;
