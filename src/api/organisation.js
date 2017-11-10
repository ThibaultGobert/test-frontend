import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

class OrganisationApi {
  static getAllLevels() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/organisation/getAllLevels',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }

  static getAllGroups() {
    return axios.request({
      method: 'get',
      url: baseUrl + '/organisation/getAllGroups',
      timeout: 3000,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-token': store.getState().loggedIn.data.token
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      throw error;
    });
  }
}

export default OrganisationApi;
