import axios from 'axios';
import { sumoUrl } from './baseUrl';

const sumoRequest = (endpoint, { headers = {}, body, ...otherOptions }, method) => {
  const allHeaders = {
    ...headers,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Token token=nS4riFujBdhsQPQGEU4BCwrNUd8KQKPX7F17ZhSLTsoZnA3i4ZQiMwzn87nbmNXvCP19',
  };

  return axios(`${sumoUrl}${endpoint}`, {
    ...otherOptions,
    headers: allHeaders,
    timeout: 5000,
    data: body ? JSON.stringify(body) : undefined,
    method
  }).then(response => response.data);
};

const sumoApi = {
  get(endpoint, options = {}) {
    return sumoRequest(endpoint, options, 'get');
  },
  post(endpoint, options = {}) {
    return sumoRequest(endpoint, options, 'post');
  },
  put(endpoint, options = {}) {
    return sumoRequest(endpoint, options, 'put');
  }
};

export default sumoApi;
