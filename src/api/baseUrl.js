export default
process.env.NODE_ENV === 'production' ?
  'webresources/v1':
  'http://localhost:8080/webresources/v1';
