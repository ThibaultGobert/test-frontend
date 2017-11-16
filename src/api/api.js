import axios from 'axios';
import store from '../index';
import baseUrl from './baseUrl';

const request = (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  const allHeaders = {
    ...headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  if(store.getState().loggedIn) {
    allHeaders['x-token'] = store.getState().loggedIn.data.token;
  }

  return axios(`${baseUrl}${endpoint}`, {
    ...otherOptions,
    headers: allHeaders,
    timeout: 5000,
    data: body ? JSON.stringify(body) : undefined,
    method
  });
};

const api = {
  get(endpoint, options = {}) {
    return request(endpoint, options, 'get');
  },
  post(endpoint, options = {}) {
    return request(endpoint, options, 'post');
  },
  put(endpoint, options = {}) {
    return request(endpoint, options, 'put');
  }
};

export default api;
