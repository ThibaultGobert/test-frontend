export default
process.env.NODE_ENV === 'production' ?
  'https://leerplatform.codefever.be/test':
  'http://localhost:8080';
