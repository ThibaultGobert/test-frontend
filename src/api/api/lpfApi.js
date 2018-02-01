import request from './lpfRequest';

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
