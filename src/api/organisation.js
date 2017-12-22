import api from './api';

class OrganisationApi {
  static getAllLevels() {
    return api.get('/organisation/getAllLevels');
  }

  static getAllGroups() {
    return api.get('/organisation/getAllGroups');
  }
}

export default OrganisationApi;
