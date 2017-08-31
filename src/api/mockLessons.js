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

const lessonInfo =   {
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
   "slides": [
     {
      "id":487580,
      "title":"Hallo daar!",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003eWelkom terug!\u003c/span\u003e\u003c/strong\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-size: 16px; font-family: verdana, geneva, sans-serif;\"\u003eBen je klaar voor alle spelletjes en uitdagingen van\u003c/span\u003e\u003cstrong style\u003d\"font-size: 16px; font-family: verdana, geneva, sans-serif;\"\u003e\u003cspan style\u003d\"color:#008000;\"\u003e level 2\u003c/span\u003e\u003c/strong\u003e\u003cspan style\u003d\"font-size: 16px; font-family: verdana, geneva, sans-serif;\"\u003e?\u0026nbsp;\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/avatars/transparant/Beatrix Kido - enkel hoofd.png\" style\u003d\"width: 214px; height: 262px; float: right; margin-right: 100px;\" /\u003e\u003cbr /\u003e\nHet zal je zeker wel lukken! Maar om die goed te kunnen maken, moeten we natuurlijk ook even \u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003eherhalen\u003c/span\u003e\u003c/strong\u003e wat we in level 1 gedaan hebben!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u0026nbsp;\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e3.. 2.. 1..\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n\n\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u0026nbsp;\u0026nbsp; \u0026nbsp; \u0026nbsp; \u0026nbsp; \u003cstrong\u003e\u003cspan style\u003d\"color:#0000FF;\"\u003e\u0026nbsp;START\u003c/span\u003e\u003c/strong\u003e!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\n",
      "order":1,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487585,
      "title":"Herhalen!",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eWe moeten natuurlijk eerst eens \u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003eherhalen\u003c/span\u003e\u003c/strong\u003e wat we geleerd hebben in level 1...\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cfont face\u003d\"verdana, geneva, sans-serif\"\u003e\u003cspan style\u003d\"font-size: 16px; line-height: 25.6px;\"\u003eWeten jullie nog wat je daar geleerd hebt? En \u003cstrong\u003e\u003cspan style\u003d\"color:#0000FF;\"\u003ewelke blokjes\u003c/span\u003e\u003c/strong\u003e je daarvoor dan nodig had?\u003c/span\u003e\u003c/font\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cfont face\u003d\"verdana, geneva, sans-serif\"\u003e\u003cspan style\u003d\"font-size: 16px; line-height: 25.6px;\"\u003eEerst zullen we\u0026nbsp;samen met jullie die blokjes eens opnieuw bekijken!\u003c/span\u003e\u003c/font\u003e\u003c/p\u003e",
      "order":2,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487583,
      "title":"Een oefeningetje",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIs het herhalen goed gelukt? Dan ben je nu klaar om \u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003eeen klein oefeningetje\u003c/span\u003e\u003c/strong\u003e te maken!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eKlik hier maar voor de oefening te openen in Scratch! \u003ca href\u003d\"https://scratch.mit.edu/projects/120298123/#editor\" target\u003d\"_blank\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/scratch_logo.png\" style\u003d\"width: 150px; height: 49px;\"\u003e\u003c/a\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cbr\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eIn deze versie staat er al wat code voor je klaar:\u0026nbsp;\u003c/span\u003e\u003c/span\u003e\u003ca href\u003d\"https://scratch.mit.edu/projects/143172800/#editor\" target\u003d\"_blank\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/scratch_logo.png\" style\u003d\"width: 150px; height: 49px;\" title\u003d\"\" class\u003d\"\" role\u003d\"\"\u003e\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003eHier zie je wat de bedoeling is:\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cvideo controls\u003d\"\" src\u003d\"http://content.codefever.be/files/filmpjes/herhalingsoefening.mp4\" width\u003d\"640\" height\u003d\"360\" class\u003d\"note-video-clip\"\u003e\u003c/video\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eJe moet dus een aantal sprites iets laten doen. Beatrix Kido draait \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003eheel de tijd\u003c/strong\u003e\u003c/span\u003e rechts bovenaan rond. Van links bovenaan vertrekt er een bal \u003cstrong\u003e\u003cspan style\u003d\"color:#0000FF;\"\u003enaar rechts\u003c/span\u003e\u003c/strong\u003e \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003etot\u003c/strong\u003e\u003c/span\u003e die Beatrix raakt. Links onderaan start de balk en die gaat een aantal stappen \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003enaar boven\u003c/strong\u003e\u003c/span\u003e. Links bovenaan begint een bal \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003ete vallen\u003c/strong\u003e\u003c/span\u003e, en die stopt \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003eals\u003c/strong\u003e\u003c/span\u003e hij de balk raakt. Killer Mike staat in het midden van het scherm, en de pijltjes staan rechts onderaan. Door op de pijltjes te klikken kunnen we Killer Mike \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003ebesturen\u003c/strong\u003e\u003c/span\u003e.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOp de volgende pagina vind je een stappenplan...\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e",
      "order":3,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487582,
      "title":"Stappenplan eerste oefening",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eBen je er klaar voor?\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e1. De blauwe balk moet links onderaan staan. Als er op het \u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003egroene vlagje\u003c/span\u003e\u003c/strong\u003e klikken, gaat hij 40 keer \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003e2 stappen omhoog\u003c/strong\u003e\u003c/span\u003e.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e2. Plaats bal 1\u0026nbsp;links bovenaan, boven de blauwe balk. Als we op het\u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003e groene vlagje\u003c/strong\u003e\u003c/span\u003e klikken, gaat hij telkens \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003e2 stappen omlaag\u003c/strong\u003e\u003c/span\u003e, tot hij de blauwe balk raakt.\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/Avatars/transparant/Killer Mike.png\" style\u003d\"float: right; width: 150px; height: 248px;\"\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e3. Beatrix Kido mag je ook links bovenaan zetten! Als we op het \u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003egroene vlagje\u003c/strong\u003e\u003c/span\u003e klikken, mag die beginnen \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003eronddraaien\u003c/strong\u003e\u003c/span\u003e, en je mag zelf kiezen hoe snel!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e4. Bal 2 mag je rechts bovenaan zetten. Als het programma start, dan mag die bal \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003enaar links bewegen\u003c/strong\u003e\u003c/span\u003e (kies zelf maar hoeveel stappen elke keer) \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003etot\u003c/strong\u003e\u003c/span\u003e\u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003e \u003c/strong\u003e\u003c/span\u003ede bal de Beatrix aanraakt.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e5. Plaats Killer Mike in het midden van het scherm, en de pijltjes rechts onderaan. Je kan de pijltjes zetten zoals ze op een toetsenbord staan!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e6. Als het programma bezig is, en we klikken op de pijl naar links, moet Mike 5 stappen \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003enaar links gaan\u003c/strong\u003e\u003c/span\u003e. Als we op de pijl naar rechts klikken, gaan we natuurlijk 5 stappen \u003cstrong\u003e\u003cspan style\u003d\"color:#0000FF;\"\u003enaar rechts\u003c/span\u003e\u003c/strong\u003e. Bij het pijltje naar boven doen we 5 stappen naar boven en het pijltje naar beneden laat Mike 5 stappen naar beneden gaan.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
      "order":4,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487587,
      "title":"Volgende oefening!",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eNu we alle \u003cstrong\u003e\u003cspan style\u003d\"color:#008000;\"\u003ebelangrijke blokjes\u003c/span\u003e\u003c/strong\u003e eens \u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003eherhaald\u003c/strong\u003e\u003c/span\u003e hebben, kunnen we een spelletje maken!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eHet spelletje dat we gaan maken heet \"\u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003eDe Pillenmachine\u003c/strong\u003e\u003c/span\u003e\"! Eerst leggen we\u0026nbsp;je uit wat de bedoeling is.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"text-align: center; \"\u003e\u003cvideo controls\u003d\"\" src\u003d\"http://content.codefever.be/files/filmpjes/pillenmachine.mp4\" width\u003d\"640\" height\u003d\"360\" class\u003d\"note-video-clip\"\u003e\u003c/video\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cbr\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003cspan style\u003d\"font-size: 16px; font-family: verdana, geneva, sans-serif; text-align: center;\"\u003eKlik hier om de opgave te openen:\u0026nbsp;\u003c/span\u003e\u003ca href\u003d\"https://scratch.mit.edu/projects/120298428/#editor\" target\u003d\"_blank\" style\u003d\"font-size: 16px; font-family: verdana, geneva, sans-serif; text-align: center; background-color: rgb(255, 255, 255);\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/scratch_logo.png\" style\u003d\"width: 150px; height: 49px;\"\u003e\u003c/a\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eEr is ook een versie waar al iets meer code klaarstaat! Die vind je hier:\u0026nbsp;\u003ca href\u003d\"https://scratch.mit.edu/projects/144490098/#editor\" target\u003d\"_blank\"\u003e\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/scratch/images/scratch_logo.png\" style\u003d\"width: 150px; height: 49px;\" title\u003d\"\" class\u003d\"\" role\u003d\"\"\u003e\u003c/a\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eOp de volgende pagina vind je het stappenplan.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
      "order":5,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487581,
      "title":"Stappenplan van De Pillenmachine",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eHier zijn nog even alle stappen die je kan volgen om het spelletje te laten werken:\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e1. Teken 4 knoppen voor de 4 kleuren van pillen (een rode, een blauwe, een groene en een gele cirkel), en zorg dat ze op de \u003cspan style\u003d\"color:#800080;\"\u003e\u003cstrong\u003ejuiste plaats zichtbaar zijn\u003c/strong\u003e\u003c/span\u003e als het spelletje start.\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/afbeeldingen/kraan.png\" style\u003d\"margin-right: 10px; float: right; width: 140px; height: 119px;\"\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e2. Zorg ervoor dat als je op een van de kleurknoppen \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003eklikt\u003c/strong\u003e\u003c/span\u003e, de beker ook in die kleur verandert. Kijk maar even bij de \u003cspan style\u003d\"color:#800080;\"\u003e\u003cstrong\u003euiterlijken \u003c/strong\u003e\u003c/span\u003evan de beker, daar zijn er 5 die je kan gebruiken! Ze hebben ook een gemakkelijke naam, dus met het juiste blokje kan je ze heel simpel van uiterlijk laten veranderen.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e3. Nu moet je de \u003cspan style\u003d\"color:#0000FF;\"\u003e\u003cstrong\u003epil laten vallen\u003c/strong\u003e\u003c/span\u003e natuurlijk. Als je eens kijkt bij de code van de kraan, dan zie je dat er van daar signalen verstuurd worden om de pillen te laten vallen. Zorg er nu voor dat de pillen vallen als ze hun \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003esignaal toekrijgen\u003c/strong\u003e\u003c/span\u003e.\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e4. Als de pil de beker raakt, moet de \u003cspan style\u003d\"color:#800080;\"\u003e\u003cstrong\u003epil \"Juist\" zeggen\u003c/strong\u003e\u003c/span\u003e als ze dezelfde kleur hebben! Indien ze een verschillende kleur hebben, dan moet de \u003cspan style\u003d\"color:#800080;\"\u003e\u003cstrong\u003epil \"Fout!\" roepen\u003c/strong\u003e\u003c/span\u003e!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp style\u003d\"margin-left: 40px;\"\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e5. Nu het voor een pil werkt, kunnen we het ook voor meer pillen laten werken. Als de pil \"Juist\" of \"Fout!\" roept, \u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003elaat je de kraan maar weten\u003c/strong\u003e\u003c/span\u003e dat de volgende pil mag komen!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
      "order":6,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487584,
      "title":"Goed zo!",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003e\u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003eDat heb je goed gedaan\u003c/strong\u003e\u003c/span\u003e!\u003cimg alt\u003d\"\" src\u003d\"http://content.codefever.be/files/avatars/transparant/killer mike.png\" style\u003d\"float: right; width: 180px; height: 298px; margin-right:60px;\"\u003e\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cp\u003e\u0026nbsp;\u003c/p\u003e\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eTot volgende week!\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e",
      "order":7,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    },
    {
      "id":487586,
      "title":"Wat hebben we nu geleerd vandaag?",
      "content":"\u003cp\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eWe hebben vandaag even herhaald wat we allemaal gezien hebben in \u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003elevel 1\u003c/strong\u003e\u003c/span\u003e:\u003c/span\u003e\u003c/span\u003e\u003c/p\u003e\u003cul\u003e\t\u003cli\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eWe gebruiken\u003cspan style\u003d\"color:#DAA520;\"\u003e\u003cstrong\u003e lussen\u003c/strong\u003e\u003c/span\u003e om stukjes code te herhalen. We kennen 3 verschillende lussen!\u003c/span\u003e\u003c/span\u003e\u003cbr\u003e\t\u0026nbsp;\u003c/li\u003e\t\u003cli\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eWe kunnen bepaalde dingen controleren aan de hand van\u003cspan style\u003d\"color:#008000;\"\u003e\u003cstrong\u003e condities\u003c/strong\u003e\u003c/span\u003e. Hiervan hebben we er ook al veel verschillende gezien.\u003c/span\u003e\u003c/span\u003e\u003cbr\u003e\t\u0026nbsp;\u003c/li\u003e\t\u003cli\u003e\u003cspan style\u003d\"font-family:verdana,geneva,sans-serif;\"\u003e\u003cspan style\u003d\"font-size:16px;\"\u003eSprites kunnen boodschappen naar elkaar sturen aan de hand van \u003cstrong\u003e\u003cspan style\u003d\"color:#DAA520;\"\u003esignalen\u003c/span\u003e\u003c/strong\u003e. We hebben een blokje om een signaal te verzenden, en ook een blokje om een signaal te ontvangen.\u003c/span\u003e\u003c/span\u003e\u003c/li\u003e\u003c/ul\u003e",
      "order":8,
      "type":"CLASS",
      "question":null,
      "part":null,
      "method":null,
      "execution":null,
      "time":0,
      "createdon":"Aug 22, 2017 8:43:56 PM",
      "createdby":"glenn",
      "modifiedon":"Aug 22, 2017 8:43:56 PM",
      "modifiedby":null,
      "rowversion":1
    }
  ],
  "modifiedby":"glenn",
  "rowversion":26
};

class LessonApi {
  static getLessons(type) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], lessons));
      }, delay);
    });
  }

  static getLessonSlides(lessonId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (lessonId == 193) {
          resolve(Object.assign([], lessonInfo));
        } else {
          reject("De slides werden niet gevonden");
        }
      }, delay);
    });
  }

}

export default LessonApi;
