import delay from './delay';
import mapToLocation from '../mappers/mapToLocation';

const location = {
  id: 1,
  remark:
    "<h1>Test belalala</h1><p>Lees grondig de info waar de verzamelplaats is en zorg uiteraard dat je zelf tijdig aan de verzamelplaats staat.&nbsp;&nbsp;Neem de ouders en kinderen mee naar het lokaal dat je gekozen hebt. Stel dat er kinderen bij zijn die niet op je klaslijst staan, dan noteer je graag de naam van de ouders, mailadres, telefoonnummer en naam kind. Het desbetreffende kind mag uiteraard de les gewoon meevolgen (op voorwaarde dat er voldoende PC's zijn).&nbsp;Spoor de ouders aan om achteraf nog in te schrijven via de website mochten ze definitief verder willen doen.&nbsp;</p>",
  rooms: [
    {
      id: 3,
      name: 'R1',
      capacity: 20,
      remark: 'Room remark',
    },
    {
      id: 4,
      name: 'R2',
      capacity: 20,
      remark: 'Room remark',
    },
  ],
  teachers: [
    {
      id: 198,
      firstname: 'Bruno',
      lastname: 'Chevalier',
      phone: '',
      cellphone: '+32499261146',
      email: 'bmgg.chevalier@gmail.com',
      avatarFileName: 'Thomas.png',
      avatarContentType: 'image/png',
      avatarurl:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/original/Thomas.png',
      avatarurllarge:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/large/Thomas.png',
      avatarurlmedium:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/medium/Thomas.png',
      avatarurlsmall:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/small/Thomas.png',
    },
    {
      id: 200,
      firstname: 'Simon',
      lastname: 'De Gheselle',
      phone: '',
      cellphone: '+32499261146',
      email: 'simondegheselle@gmail.com',
      avatarFileName: 'Thomas.png',
      avatarContentType: 'image/png',
      avatarurl:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/original/Thomas.png',
      avatarurllarge:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/large/Thomas.png',
      avatarurlmedium:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/medium/Thomas.png',
      avatarurlsmall:
        'https://app.codefever.be/system/teachers/avatars/000/000/105/small/Thomas.png',
    },
  ],
};

class LocationApi {
  static getLocation(locationId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign({}, mapToLocation(location)));
      }, delay);
    });
  }
}

export default LocationApi;
