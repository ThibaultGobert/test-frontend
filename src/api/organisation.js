import api from './api/lpfApi';

class OrganisationApi {
  static getAllLevels() {
    return api.get('/organisation/getAllLevels');
  }

  static getAllGroups() {
    return api.get('/organisation/getAllGroups');
  }
}

export default OrganisationApi;
