import axios from 'axios';

const SERVER_NAME = 'http://localhost:3005';
const api = axios.create({
  baseURL: SERVER_NAME
});
export default api;
