import axios from 'axios';
import merge from 'lodash/merge';
import { appServiceUrl as url } from './baseUrl';

export default (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  let allHeaders = {
    'Content-Type': 'application/json',
    Authorization:
      'Token token=nS4riFujBdhsQPQGEU4BCwrNUd8KQKPX7F17ZhSLTsoZnA3i4ZQiMwzn87nbmNXvCP19',
  };
  allHeaders = merge(allHeaders, headers);

  return axios(`${url}${endpoint}`, {
    ...otherOptions,
    headers: allHeaders,
    timeout: 5000,
    data: body ? JSON.stringify(body) : undefined,
    method,
  }).then(response => {
    if (!response.data) {
      throw new Error('API returned null');
    }
    return response.data;
  });
};
