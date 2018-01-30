import delay from './delay';

const personalInformation = {
  firstName: 'Simon',
  lastName: 'De Gheselle',
  email: 'simondegheselle@hotmail.com',
  phone: '+32 476 28 22 06',
  birthDate: '07/09/1995',
  rrnr: '93.11.05-153.78',
  statute: 'vrijwilliger',
  profession: '',
  vat: '21',
  address: {
    street: 'beelbroekstraat 97',
    city: 'Sint-Amandsberg',
    postalcode: '9040',
    province: 'Oost-Vlaanderen',
    country: 'Belgium',
  },
  invoiceAddress: {
    street: 'beelbroekstraat 97',
    city: 'Sint-Amandsberg',
    postalcode: '9040',
    province: 'Oost-Vlaanderen',
    country: 'Belgium',
  },
  avatarUrl: 'url-to-avatar',
  avatarSmall: 'url-to-avatar',
  avatarMedium: 'url-to-avatar',
  avatarLarge: 'url-to-avatar',
  possibleWorkdays: ['Monday', 'Saturday'],
  possibleLocations: [
    'Gent * De Krook',
    'Gent * Hogeschool Gent - Campus Schoonmeersen',
    'Oostakker * Edugo - Campus De Brug',
  ],
  bankAccount: {
    id: 1,
    exemptVat: true,
    accountNumber: 'BE 31...',
    startdate: '2017-01-01',
    enddate: '2017-12-31',
  },
};
class UserAdministrationApi {
  static getPersonalInformation(token) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign({}, personalInformation));
      }, delay);
    });
  }
}

export default UserAdministrationApi;
