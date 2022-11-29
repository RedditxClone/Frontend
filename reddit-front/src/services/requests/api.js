import axios from 'axios';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: SERVER_NAME
});

export default api;
