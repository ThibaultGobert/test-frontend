import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    "id": 484,
    "name": "IT-girls in Gent",
    "day": "ZA",
    "starttime": "11:00",
    "endtime": "12:00",
    "clan": "Workshop",
    "level": 0,
    "headteacher": {
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "contact": "0548 75 26 56"
    },
    "assistents": [
        {
          "name": "John Doe",
          "email": "johndoe@gmail.com",
          "contact": "0548 75 26 56"
        },
        {
          "name": "Jane Doe",
          "email": "janedoe@gmail.com",
          "contact": "0548 75 26 56"
        }
      ],
      "location": {
        "name": "Hogeschool Gent - Campus Schoonmeersen",
        "address": "eenstraat 87",
        "city": "Gent",
        "organisation": "HoGent",
        "room": "GSCHB 1.026",
        "roomremark": "<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p>De &#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd stond, is&#39;verdwenen&#39;.</p>\r\n\r\n<p>Nu staat er een gewone cursist PC in de plaats. We gaan steeds een console PC halen uit een ander lokaal waar geen les gegeven wordt.</p>\r\n\r\n<p>Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n",
      }
  },
  {
    "id": 189,
    "name": "C2 ZA 11:00 Gent",
    "day": "ZA",
    "starttime": "11:00",
    "endtime": "12:00",
    "clan": "CodeKraks",
    "level": 2,
    "headteacher": {
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "contact": "0548 75 26 56"
    },
    "assistents": [
      {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "contact": "0548 75 26 56"
      },
      {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "contact": "0548 75 26 56"
      }
    ],
    "location": {
      "name": "Hogeschool Gent - Campus Schoonmeersen",
      "address": "eenstraat 87",
      "city": "Gent",
      "organisation": "HoGent",
      "room": "GSCHB 1.026",
      "roomremark": "<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p>De &#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd stond, is&#39;verdwenen&#39;.</p>\r\n\r\n<p>Nu staat er een gewone cursist PC in de plaats. We gaan steeds een console PC halen uit een ander lokaal waar geen les gegeven wordt.</p>\r\n\r\n<p>Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n",
    }
  }
];

class CourseApi {
  static getCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

}

export default CourseApi;
