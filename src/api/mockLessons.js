import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const lessons = [
  {
    "id":193,
    "name":"Eddy",
    "order":0,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:45 PM",
    "createdby":"admin",
    "modifiedon":"Apr 17, 2017 8:56:31 PM",
    "modifiedby":"admin",
    "rowversion":10
  },
  {
    "id":30,
    "name":"Herhalingsles",
    "order":1,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Aug 22, 2017 8:43:56 PM",
    "modifiedby":"glenn",
    "rowversion":26
  },
  {
    "id":31,
    "name":"Flappy Droid",
    "order":2,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 4, 2017 5:39:54 PM",
    "modifiedby":"admin",
    "rowversion":13
  },
  {
    "id":32,
    "name":"Variabelen",
    "order":3,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 4, 2017 5:40:04 PM",
    "modifiedby":"admin",
    "rowversion":18
  },
  {
    "id":33,
    "name":"Lokale en Globale variabelen",
    "order":4,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 4, 2017 5:40:10 PM",
    "modifiedby":"admin",
    "rowversion":16
  },
  {
    "id":34,
    "name":"Monstertje klop!",
    "order":5,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 4, 2017 5:40:19 PM",
    "modifiedby":"admin",
    "rowversion":7
  },
  {
    "id":35,
    "name":"Vlieg op klok",
    "order":6,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 4, 2017 5:40:25 PM",
    "modifiedby":"admin",
    "rowversion":21
  },
  {
    "id":36,
    "name":"Methodes",
    "order":7,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"May 13, 2017 12:11:22 AM",
    "modifiedby":"ingrid",
    "rowversion":17
  },
  {
    "id":37,
    "name":"Stapsgewijze verfijning",
    "order":8,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"Apr 17, 2017 12:32:25 PM",
    "modifiedby":"admin",
    "rowversion":22
  },
  {
    "id":38,
    "name":"Parameters",
    "order":9,
    "group":"BYTEBUSTERS",
    "level":2,
    "activateTeacher":false,
    "activateStudent":true,
    "type":"CLASS",
    "version":"1.0",
    "createdon":"Jan 30, 2017 7:56:43 PM",
    "createdby":"admin",
    "modifiedon":"May 18, 2017 11:33:13 PM",
    "modifiedby":"peterkeyngnaert",
    "rowversion":8
  }
];

const lessonInfo = {
  "id": 193,
  "name":"De computer is dom",
  "order":1,
  "group":"BYTEBUSTERS",
  "level":1,
  "imagelocation":null,
  "activateTeacher":true,
  "activateStudent":true,
  "type":"CLASSHOME",
  "slides":[
    {
      "id":1031212,
      "title":"Dag Bytebuster!",
      "content":"\u003ch1\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlaar voor je eerste kennismaking met programmeren?\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/Avatars/transparant/characters-03.png\" style\u003d\"float: right; width: 310px; height: 451px; margin: 0px 5%;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/h1\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eVandaag leren we wat programmeren is! En je zal de eerste keer werken met het \u003cspan style\u003d\"color:#ff0000;\"\u003e\u003cstrong\u003eleerplatform \u003c/strong\u003e\u003c/span\u003een\u003cspan style\u003d\"color:#ff0000;\"\u003e \u003cstrong\u003eScratch\u003c/strong\u003e\u003c/span\u003e.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":1,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":0,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031186,
      "title":"Een game spelen",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eJe zal leren hoe je games moet maken! En hoe je moet denken\u0026nbsp;als een echte \u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003eprogrammeur\u003c/strong\u003e\u003c/span\u003e.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlik eens op de logo van Scratch:\u0026nbsp;\u003ca href\u003d\"https://scratch.mit.edu/projects/115466953/#editor\" target\u003d\"_blank\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/scratch_logo.png\" style\u003d\"width: 150px; height: 49px;\" /\u003e\u003c/a\u003e\u0026nbsp;om het programma Splash te openen.\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eEr gaat een nieuw venster open met daarin de game!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":2,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":2,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031224,
      "title":"Scratch opstarten en aanmelden",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eJe hebt deze game nu al eens gespeeld. Jij zal leren om dit soort games te maken.\u0026nbsp;\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_2/B1_2_Scratch_Inlog_Knop.png\" style\u003d\"float: right; width: 400px; height: 164px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eScratch kan je opstarten via het leerplatform.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eOm je programma\u0026#39;s in Scratch te bewaren, moet je je aanmelden.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cul style\u003d\"margin-left: 40px;\"\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eAanmelden bij Scratch\u003c/span\u003e\u003c/span\u003e\n\n\t\u003cul style\u003d\"margin-left: 40px;\"\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlik rechts bovenaan op Log in.\u0026nbsp;\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_2/B1_2_Scratch_Inlog_Knop_Uigeklikt.png\" /\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_2/B1_2_Scratch_Inlog_Knop_Uitgeklikt.png\" style\u003d\"float: right; width: 194px; height: 300px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eTyp je gebruikersnaam in.\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eTyp je wachtwoord in.\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003c/ul\u003e\n\t\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cu\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eSpelregels: \u003c/span\u003e\u003c/span\u003e\u003c/u\u003e\u003c/p\u003e\n\n\u003cul style\u003d\"margin-left: 40px;\"\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eZorg dat Miss Peacock niet in het water valt.\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eGebruik de muis om het balkje te bewegen.\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlik op het groene vlaggetje om dit game te spelen.\u0026nbsp;\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/flag.png\" style\u003d\"height: 50px; width: 50px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"color:#ff0000;\"\u003e\u003cstrong\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eSpeel Splash.\u003c/span\u003e\u003c/span\u003e\u003c/strong\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":3,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":5,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031187,
      "title":"Evaluatie",
      "content":"",
      "order":4,
      "type":"CLASSHOMEPROJECTION",
      "question":{
        "id":171552,
        "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eAl die scripts bij elkaar in de juiste volgorde (sequentie) is een .....\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
        "answers":[
          {
            "id":548394,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eProgramma\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548380,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eSequentie\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548397,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eScriptverhaal\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548393,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOpdrachtenlijst\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162510,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031223,
      "title":"Een sprite veranderen",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlik onderaan onder het titeltje \u0026quot;\u003cstrong\u003eSprites\u003c/strong\u003e\u0026quot; op het gele balkje.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/BC_level1/les1/splash_2.png\" style\u003d\"width: 610px; height: 170px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eZoek nu de knop \u0026quot;Uiterlijken\u0026quot;. Die staat bovenaan tussen \u0026quot;Scripts\u0026quot; en \u0026quot;Geluiden\u0026quot;.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eAls je op \u0026quot;Uiterlijken\u0026quot; hebt geklikt dan zie je dit:\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/BC_level1/les1/splash_3.png\" style\u003d\"width: 200px; height: 180px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eKlik nu op het eerste knopje links onder \u0026quot;Nieuw uiterlijk\u0026quot;\u003c/span\u003e\u003c/span\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e. Dan zie je een ganse lijst van verschillende sprites. Nu mag\u0026nbsp;je er zelf \u0026eacute;\u0026eacute;n uitkiezen.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":5,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":2,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031215,
      "title":"Het programma verder aanpassen.",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOp dezelfde manier kan je ook de achtergrond\u0026nbsp;veranderen.\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eProbeer eens een script\u0026nbsp;te verwijderen of te verplaatsen. Kijk wat er gebeurt?\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp style\u003d\"text-align: center;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_1/B1_1_Boink.png\" style\u003d\"width: 400px; height: 118px; margin: 0px 5%;\" /\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
      "order":6,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"EXERCISE",
      "method":"INDIVIDUALLY",
      "execution":"MANDETORY",
      "time":5,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031221,
      "title":"Evaluatie",
      "content":"",
      "order":7,
      "type":"CLASSHOME",
      "question":{
        "id":171551,
        "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOp welke manier kunnen we het programma steeds vanaf het begin opnieuw starten?\u003c/span\u003e\u003c/p\u003e\n",
        "answers":[
          {
            "id":548390,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eDoor de game\u0026nbsp;te beginnen spelen.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548376,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eScratch te sluiten en opnieuw te openen.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548379,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eBij je buurman te gaan spelen\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548388,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-family:Arial,Helvetica,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOm echt vanaf het begin te starten, moet ik op de groene vlag klikken.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162511,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031195,
      "title":"Wijzigingen bewaren in Scratch",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eHeb je een sprite aangepast?\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_2/B1_2_Scratch_Remix.png\" style\u003d\"width: 400px; height: 118px; float: right;margin: 0 5%;\" /\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eDit moet je dan ook bewaren in Scratch. Kies bovenaan rechts voor de knop \u003cu\u003eRemix\u003c/u\u003e. \u0026nbsp;\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOp deze manier word je programma bewaard.\u003c/span\u003e\u003c/p\u003e\n",
      "order":8,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":5,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031188,
      "title":"Afmelden in Scratch",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eJe moet afmelden in Scratch, anders zal de volgende gebruiker van deze computer met jouw programma\u0026rsquo;s kunnen werken en dat is uiteraard niet de bedoeling.\u003c/span\u003e\u003c/p\u003e\n\n\u003cul\u003e\n\t\u003cli style\u003d\"list-style-type:none\"\u003e\n\t\u003cul style\u003d\"list-style-type: circle; margin-left: 40px;\"\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eKlik rechtsboven op je naam \u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_1/B1_1_Loguit_Scratch_1.png\" style\u003d\"width: 200px; height: 119px;\" /\u003e\u0026nbsp;en kies\u0026nbsp;\u003cu\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_1/B1_1_Loguit_Scratch_2.png\" style\u003d\"width: 144px; height: 125px;\" /\u003e\u003c/u\u003e.\u003c/span\u003e\u003cbr /\u003e\n\t\t\u0026nbsp;\u003c/li\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eGa via het tabblad bovenaan naar het leerplatform.\u0026nbsp;\u003cbr /\u003e\n\t\t\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_1/B1_1_Loguit_Leerplatform.png\" style\u003d\"width: 300px; height: 220px;\" /\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003c/ul\u003e\n\t\u003c/li\u003e\n\t\u003cli style\u003d\"list-style-type:none\"\u003e\n\t\u003cul style\u003d\"list-style-type: circle; margin-left: 40px;\"\u003e\n\t\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eKies ook daar\u0026nbsp;\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/SpecifiekeAfbeeldingenLessen/B1_1/B1_1_Afmelden.png\" style\u003d\"width: 200px; height: 119px;\" /\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003c/ul\u003e\n\t\u003c/li\u003e\n\u003c/ul\u003e\n",
      "order":9,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":2,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031222,
      "title":"Evaluatie",
      "content":"",
      "order":10,
      "type":"CLASSHOME",
      "question":{
        "id":171554,
        "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eWat is programmeren?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
        "answers":[
          {
            "id":548378,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIets downloaden vanop het internet.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548389,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eProgrammeren is\u0026nbsp;stap voor stap uitleggen aan de computer wat hij moet doen in de juiste volgorde.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548383,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eEen lijstje maken met opdrachten voor de computer.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548391,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eComputers herstellen noemt men programmeren.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162508,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"INDIVIDUALLY",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031180,
      "title":"Evaluatie",
      "content":"",
      "order":11,
      "type":"CLASSHOME",
      "question":{
        "id":171556,
        "value":"\u003cp\u003e\u003cfont face\u003d\"verdana, geneva, sans-serif\"\u003e\u003cspan style\u003d\"font-size: 16px;\"\u003eWat is een programmeur?\u003c/span\u003e\u003c/font\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
        "answers":[
          {
            "id":548374,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIemand die programma\u0026#39;s schrijft.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548384,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIemand die programma\u0026#39;s installeert.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548396,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eIemand die programma\u0026#39;s download.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548387,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIemand die computers herstelt.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162512,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"INDIVIDUALLY",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031210,
      "title":"Evaluatie",
      "content":"",
      "order":12,
      "type":"CLASSHOME",
      "question":{
        "id":171553,
        "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eEen figuurtje die we laten bewegen, draaien, ... noemen we in Scratch een ...\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
        "answers":[
          {
            "id":548385,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eCola\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548392,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eFanta\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548375,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eIce tea\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548377,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eSprite\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162513,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"INDIVIDUALLY",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031185,
      "title":"Evaluatie",
      "content":"",
      "order":13,
      "type":"CLASSHOME",
      "question":{
        "id":171555,
        "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eWat is een script?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
        "answers":[
          {
            "id":548386,
            "question":null,
            "numbering":"A",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eEen reeks van blokjes in Scratch.\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548395,
            "question":null,
            "numbering":"B",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eHet is een tekening op de achtergrond van ons game in Scratch.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548382,
            "question":null,
            "numbering":"C",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eEen sprite\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          },
          {
            "id":548381,
            "question":null,
            "numbering":"D",
            "value":"\u003cp\u003e\u003cspan style\u003d\"font-size: 16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eE\u0026eacute;n blokje in Scratch noemen we een script.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
            "createdon":"Sep 13, 2017 8:38:14 AM",
            "createdby":"fienspriet",
            "modifiedon":"Sep 13, 2017 8:38:14 AM",
            "modifiedby":null,
            "rowversion":1
          }
        ],
        "layout":{
          "id":162509,
          "columns":2,
          "multipleAnswers":true,
          "questionEntity":null,
          "createdon":"Sep 13, 2017 8:38:14 AM",
          "createdby":"fienspriet",
          "modifiedon":"Sep 13, 2017 8:38:14 AM",
          "modifiedby":null,
          "rowversion":1
        },
        "track":true,
        "createdon":"Sep 13, 2017 8:38:14 AM",
        "createdby":"fienspriet",
        "modifiedon":"Sep 13, 2017 8:38:14 AM",
        "modifiedby":null,
        "rowversion":1
      },
      "part":"THEORY",
      "method":"INDIVIDUALLY",
      "execution":"MANDETORY",
      "time":1,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031182,
      "title":"Wat heb je nu geleerd?",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eWe weten nu dat de computer dom is en niets kan zonder jouw hulp.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eEn we hebben ook al een beetje met Scratch leren werken.\u0026nbsp;\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/2.0/Avatars/Baba_RamDass_Hoofd.png\" style\u003d\"position: absolute; bottom: 2%; right: 5%; width: 300px; height: 272px;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cul style\u003d\"margin-left: 40px;\"\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eeen game starten en stoppen\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eeen nieuwe sprite kiezen\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003ede achtergrond veranderen\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eeen game openen\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\t\u003cli\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eeen game\u0026nbsp;opslaan\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n",
      "order":14,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":"THEORY",
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":2,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":1031196,
      "title":"Goed gedaan Bytebuster!",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/Avatars/transparant/more%20characters-07.png\" style\u003d\"float: right; height: 458px; width: 260px; position: absolute; bottom: 2%; right: 5%;\" /\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eWaauw je hebt net je eerste programma aangepast!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eVolgende keer gaan we zelf een game\u0026nbsp;maken.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eTot dan.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":15,
      "type":"CLASSHOMEPROJECTION",
      "question":null,
      "part":null,
      "method":"CLASS",
      "execution":"MANDETORY",
      "time":0,
      "createdon":"Sep 13, 2017 8:38:14 AM",
      "createdby":"fienspriet",
      "modifiedon":"Sep 13, 2017 8:38:14 AM",
      "modifiedby":null,
      "rowversion":1
    }
  ],
  "version":"2.0",
  "createdon":"Aug 12, 2017 3:25:31 PM",
  "createdby":"henkgenbrugge",
  "modifiedon":"Sep 13, 2017 8:38:14 AM",
  "modifiedby":"fienspriet",
  "rowversion":438
};

class LessonApi {
  static getLessons(type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], lessons));
      }, delay);
    });
  }

  static getLessonSlides(type, lessonId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (lessonId == 193 || lessonId == "193") {
          resolve(Object.assign([], lessonInfo));
        } else {
          reject("De slides werden niet gevonden");
        }
      }, delay);
    });
  }

}

export default LessonApi;
