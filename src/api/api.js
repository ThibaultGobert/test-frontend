import axios from 'axios';
import lpfUrl from './baseUrl';
import merge from 'lodash/merge';
import { getUser } from './storage';

const request = (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  let allHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  if (getUser() !== null) {
    allHeaders['x-token'] = getUser().token;
  }
  allHeaders = merge(allHeaders, headers);

  return axios(`${lpfUrl}${endpoint}`, {
    ...otherOptions,
    headers: allHeaders,
    timeout: 5000,
    data: body ? JSON.stringify(body) : undefined,
    method,
  }).then(response => response.data);
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
  },
};

export default api;
