import api from './api';

class OrganisationApi {
  static getAllLevels() {
    return api.get('/organisation/getAllLevels').then(response => response.data);
  }

  static getAllGroups() {
    return api.get('/organisation/getAllGroups').then(response => response.date);
  }
}

export default OrganisationApi;
