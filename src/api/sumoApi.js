import axios from 'axios';
import { sumoUrl } from './baseUrl';

const request = (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  const allHeaders = {
    ...headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  return axios(`${sumoUrl}${endpoint}`, {
    ...otherOptions,
    headers: allHeaders,
    timeout: 5000,
    data: body ? JSON.stringify(body) : undefined,
    method
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
  }
};

export default api;
