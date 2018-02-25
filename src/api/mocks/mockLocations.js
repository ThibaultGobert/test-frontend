import delay from './delay';
import mapToLocations from '../mappers/mapToLocations';

const locations = [
  {
    id: 1,
    name: 'Hogeschool Gent - Campus Schoonmeersen',
    address: {
      id: 2508,
      street: 'Valentin Vaerwyckweg 1',
      number: null,
      city: 'Gent',
      province: 'Oost-Vlaanderen',
      country: 'BE',
      mailboxExtension: null,
      postalCode: '9000',
    },
    organisation: 'Hogeschool Gent - Campus Schoonmeersen',
    roomname: null,
    roomremark: null,
    teacherremark:
      '<p><strong>AFSPRAAKPLAATS 1STE LES</strong></p>\r\n\r\n<p>Lees grondig de info waar de verzamelplaats is en zorg uiteraard dat je zelf tijdig aan de verzamelplaats staat.&#160;&#160;Neem de ouders en kinderen mee naar het lokaal dat je gekozen hebt. Stel dat er kinderen bij zijn die niet op je klaslijst staan, dan noteer je graag de naam van de ouders, mailadres, telefoonnummer en naam kind. Het desbetreffende kind mag uiteraard de les gewoon meevolgen (op voorwaarde dat er voldoende PC&#39;s zijn).&#160;Spoor de ouders aan om achteraf nog in te schrijven via de website mochten ze definitief verder willen doen.&#160;</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>BADGES</strong></p>\r\n\r\n<p>Er zijn 3&#160;badges!</p>\r\n\r\n<p>Badge A&#160;en B&#160;bevinden zich bij Simon. Deze werken niet.</p>\r\n\r\n<p>Badge C is bij Thomas.</p>\r\n\r\n<p><strong>Alle badges dienen jullie eerst te updaten aan het &#39;bakje&#39; op het gelijkvloers&#39;</strong></p>\r\n\r\n<p>Wie worden de nieuwe badgedragers?</p>\r\n\r\n<p>Badge A:&#160;Simon de Gheselle</p>\r\n\r\n<p>Badge B: tbc: Simon</p>\r\n\r\n<p>Badge C: Thomas Desmedt</p>\r\n\r\n<p>@Thomas: kan jij er altijd voor zorgen dat&#160;op het einde van de dag de 4 lokalen goed afgesloten worden aub. Thnx!</p>\r\n\r\n<p><strong>Bewaar jullie badges aub goed, niet kwijtraken please! </strong></p>\r\n\r\n<p><strong>LOGIN NETWERK</strong></p>\r\n\r\n<p><em>Gebruikersnaam: EDU\\codefevergent<br />\r\nWachtwoord: CFGent!3</em></p>\r\n\r\n<p>De logins werken op alle toestellen op voorwaarde dat er niks veranderd werd aan de kabels.<br />\r\nDe authenticatie van deze Logins dient te gebeuren via het netwerk, zonder netwerk geen authenticatie.<br />\r\nHet gebeurt vaak dat er kabels uitgetrokken worden door studenten, of per ongeluk door de kuisploeg. Als je melding ontvangt dat je niet kan inloggen, dan de kabels checken! Als je de kabels terug insteekt, dan moet alles werken.<br />\r\n&#160;</p>\r\n\r\n<p><strong>GUEST NETWERK</strong></p>\r\n\r\n<p>Als je een externe laptop wil aanmelden, kan dat ook wel handig zijn om het HG-guestnetwork te gebruiken.&#160;</p>\r\n\r\n<p>Als je op guest browser openzetten krijgen je een login, waar je je gegevens moeten ingeven, daarna krijgen ze inloggegevens die ze kunnen gebruiken. Deze zijn 4 uur actief.</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>CONTACT IN NOOD</strong></p>\r\n\r\n<p>- Aan de receptie zit er vaak iemand, die je soms in de nood kan helpen</p>\r\n\r\n<p>- Bij problemen bel Kristien: 0486 12 22 04 of Katelijne 0499 30 01 20.</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>CAMPUSVERANTWOORDELIJKE (CV)</strong></p>\r\n\r\n<p>De campusverantwoordelijke&#160;is Simon De Gheselle. De CV is verantwoordelijk voor:</p>\r\n\r\n<p><strong>1) ROLLUP</strong></p>\r\n\r\n<p>- Elke les opstellen op goed zichtbare plaats, bv. inkomhal/verzamelplaats</p>\r\n\r\n<p>- hoe opzetten? voetjes openschuiven onderaan en stok in gaatje onderaan en boven&#160;vastklikken:&#160;<a href="https://www.krekels.net/producten/roll-up">https://www.krekels.net/producten/roll-up</a></p>\r\n\r\n<p>- niet buiten plaatsen aub (waait om/weg/regen)</p>\r\n\r\n<p>- handle wit care please (duur)</p>\r\n\r\n<p>- nooit achterlaten op locatie tenzij je met school veilige plaats afspreekt waar je wel telkens terug aan kan.</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>2) PIJLEN &#38; AFFICHES&#160;</strong></p>\r\n\r\n<p>Gebruik de pijlen en de affiches om de ouders makkelijk tot de lokalen te leiden. Sommige ouders zijn nl. te laat en moeten op eigen kracht de lokalen kunnen vinden. De affiches kunnen extra duidelijkheid bieden, bv. &#34;ga naar 1ste verdieping&#34; ter ondersteuning van de pijlen. De affiches graag ook gebruiken om de groepen op te schrijven. Hang dit op de deur van desbetreffende lokalen. Vergeet niet een alcoholstift mee te nemen. Let op: Graag geen beschadigingen aan muur veroorzaken bij het opplakken op muren (gebruik washitape of verftape aub). Wij willen geen problemen met onze locaties.&#160;</p>\r\n\r\n<p>Hang de pijlen aub op tijdens les 1, les 2, les&#160;3,&#160;les 5 en les 10. Verwijder de pijlen (neem hiervoor een schaar mee) telkens na de lesdag&#160;en bewaar deze goed (campusverantwoordelijke). Je collega&#39;s kunnen je natuurlijk helpen bij deze taak.&#160;</p>\r\n\r\n<ul>\r\n</ul>\r\n\r\n<p><strong>3) BADGES/SLEUTELS</strong></p>\r\n\r\n<p>De sleutelsl/badges na de reeks terug te bezorgen of veilig bij te houden indien dit ons gevraagd wordt.</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>4) GOEDE OPSTART 1STE LES</strong></p>\r\n\r\n<p>De CV neemt de leiding over de goede opstart van de lesreeks. De CV zorgt dat alles in goede banen geleid wordt en dat alle collega&#39;s (leraren en asistenten) duidelijk weten hoe ze de CV hierbij moeten helpen. De CV staat er niet alleen voor!</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>5) EXTRA MOGELIJKE TAKEN</strong></p>\r\n\r\n<p>Het kan zijn dat we de CV vragen om iets op te halen op de locatie, iets in bewaring te houden (bv. hardware). Of bv. de locatie op voorhand te bezoeken ivm codes, ophalen sleutel, of iets dergelijks.&#160;</p>\r\n\r\n<p>&#160;</p>\r\n\r\n<p><strong>6) VERGOEDING</strong></p>\r\n\r\n<ul>\r\n</ul>\r\n\r\n<p>De CV ontvangt 100 euro voor deze extra taken gedurende een volledige lesreeks.&#160;</p>\r\n\r\n<p>&#160;</p>\r\n',
    rooms: [
      {
        id: 3,
        name: 'GSCHB 1.026',
        capacity: 24,
        teacherRemark:
          '<p>Gebouw B, eerste verdieping - Tweede lokaal links</p>\r\n\r\n<p>Er staat een&#160;&#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd staat. Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n\r\n<p>Laat het lokaal netjes achter aub.&#160;Deuren niet vergeten af te sluiten van het lokaal.</p>\r\n',
      },
      {
        id: 4,
        name: 'GSCHB 1.031 ',
        capacity: 25,
        teacherRemark:
          '<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>Er staat een&#160;&#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd staat. Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n\r\n<p>Laat het lokaal netjes achter aub.&#160;Deuren niet vergeten af te sluiten van het lokaal.</p>\r\n',
      },
      {
        id: 5,
        name: 'GSCHB 1.037',
        capacity: 32,
        teacherRemark:
          '<p>Gebouw B, eerste verdieping</p>\r\n\r\n<p>Er staat een&#160;&#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd staat. Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n\r\n<p>Laat het lokaal netjes achter aub.&#160;Deuren niet vergeten af te sluiten van het lokaal.</p>\r\n',
      },
      {
        id: 6,
        name: 'GSCHB 1.029',
        capacity: 24,
        teacherRemark:
          '<p>Gebouw B, eerste verdieping - Eerste lokaal links</p>\r\n\r\n<p>Er staat een&#160;&#39;console&#39; pc, waar Netsupport School (Docent console) op ge&#239;nstalleerd staat. Deze applicatie heeft ongelooflijk veel mogelijkheden die het les geven een pak makkelijker maakt.</p>\r\n\r\n<p>Laat het lokaal netjes achter aub.&#160;Deuren niet vergeten af te sluiten van het lokaal.</p>\r\n',
      },
    ],
    teachers: [
    ],
  },
  {
    id: 69,
    name: 'Brussels Expo',
    address: {
      id: 4498,
      street: 'Belgiëplein 1',
      number: null,
      city: 'Brussel',
      province: 'Brussel Hoofdstedelijk Gewest',
      country: 'BE',
      mailboxExtension: null,
      postalCode: '1020',
    },
    organisation: 'Brussels Expo',
    roomname: null,
    roomremark: null,
    teacherremark: '',
    rooms: [
      {
        id: 124,
        name: 'Room 1',
        capacity: 20,
        teacherRemark: null,
      },
    ],
    teachers: [],
  },
  {
    id: 63,
    name: 'BenedictusPoort',
    address: {
      id: 4481,
      street: 'Hundelgemsesteenweg 93',
      number: null,
      city: 'Ledeberg',
      province: 'Oost-Vlaanderen',
      country: 'BE',
      mailboxExtension: null,
      postalCode: '9050',
    },
    organisation: 'BenedictusPoort',
    roomname: null,
    roomremark: null,
    teacherremark:
      '<ul>\r\n\t<li>toegang tot de gebouwen: u krijgt een sleutel voor de rode schuifpoort tussen de school en de welzijnsknoop</li>\r\n\t<li>toegang tot de lokalen blok D: ook hier krijgt u een sleutel</li>\r\n\t<li>beide sleutels worden u overhandigd door <a href="mailto:eddy.donne@benedictuspoort.be">eddy.donne@benedictuspoort.be</a></li>\r\n\t<li>computerlokaal blok D gelijkvloers naast jullie &#34;refterruimte&#34; zal over 20 pc&#39;s beschikken + 1 pc leerkracht met beamer, adobe flash reader staat standaard ge&#239;nstalleerd. Welke browser er gebruikt wordt, gebruikersnaam en wachtwoord, code wifi, ... dient u na te vragen bij <a href="mailto:jeroen.vandenberghe@benedictuspoort.be">jeroen.vandenberghe@benedictuspoort.be</a></li>\r\n\t<li>sportmateriaal + geluidsinstallatie in de sporthal blok B zullen ter beschikking staan. het sportmateriaal mag ook op de speelplaats gebruikt worden.</li>\r\n\t<li>parkeren kan gratis voor de school (kleine parking) kant Hundelgemsesteenweg. Gelieve niet voor de poort zelf te parkeren (veiligheid)</li>\r\n\t<li>EHBO post en materiaal zoals afgesproken aanwezig in blok D</li>\r\n\t<li>noodtelefoon Eddy Donn&#233; 0494 64 93 84 of Philippe De Bruycker 0493 63 72 83</li>\r\n\t<li>noodtelefoon IT Frans De Mol 0484 65 78 23</li>\r\n\t<li>noodtelefoon technisch IT Jeroen Van den Berghe 0497 08 00 02</li>\r\n\t<li>fietsen van de deelnemers worden best onder de luifel ter hoogte van de schoolcafetaria geplaatst, gelieve de schuifpoort ook overdag steeds te sluiten.</li>\r\n\t<li>auto&#39;s op de speelplaats niet op de tegels of het rode sportterrein rijden.</li>\r\n</ul>\r\n',
    rooms: [
      {
        id: 120,
        name: 'Room1',
        capacity: 20,
        teacherRemark: null,
      },
    ],
    teachers: [],
  },
  {
    id: 78,
    name: 'Koninklijk Atheneum Dendermonde (basisschool)',
    address: {
      id: 4620,
      street: 'Begijnhoflaan 1',
      number: null,
      city: 'Dendermonde',
      province: 'Oost-Vlaanderen',
      country: 'BE',
      mailboxExtension: null,
      postalCode: '9200',
    },
    organisation: 'Koninklijk Atheneum Dendermonde (basisschool)',
    roomname: null,
    roomremark: null,
    teacherremark: '',
    rooms: [
      {
        id: 141,
        name: 'R1',
        capacity: 20,
        teacherRemark: null,
      },
    ],
    teachers: [],
  },
];

class LocationApi {
  static getLocations() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign({}, mapToLocations(locations)));
      }, delay);
    });
  }
}

export default LocationApi;
