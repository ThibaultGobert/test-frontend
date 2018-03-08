import axios from 'axios';
import merge from 'lodash/merge';
import { lpfUrl as url } from './baseUrl';
import { getUser } from './../storage';

export default (endpoint, { headers = {}, body, ...options }, method) => {
  let allHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  if (getUser() !== null) {
    allHeaders['x-token'] = getUser().token;
  }
  allHeaders = merge(allHeaders, headers);

  return axios(`${url}${endpoint}`, {
    ...options,
    headers: allHeaders,
    timeout: options.timeout ? options.timeout : 5000,
    data: body ? JSON.stringify(body) : undefined,
    method,
  }).then(response => {
    if (!response.data) {
      throw new Error('API returned null');
    }
    return response.data;
  });
};
