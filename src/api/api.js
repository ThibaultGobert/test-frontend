/* global window */
import axios from 'axios';
import baseUrl from './baseUrl';

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('api.user'));
};

export const setUser = (newUser) => {
  window.localStorage.setItem('api.user', JSON.stringify(newUser));
};

export const removeUser = () => {
  window.localStorage.removeItem('api.user');
  window.location = "/";
};

const request = (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  const allHeaders = {
    ...headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  if (getUser() !== null) {
    allHeaders['x-token'] = getUser().token;
  }

  return axios(`${baseUrl}${endpoint}`, {
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
