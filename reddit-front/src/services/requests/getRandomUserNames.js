import axios from 'axios';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: SERVER_NAME
});

const getRandomUserNames = async () => {
  const response = await api.get('/api/user/random-usernames');
  console.log(response.data);
  return response.data;
};

export default getRandomUserNames;
