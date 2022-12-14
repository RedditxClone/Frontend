import api from './api';

const getRandomUserNames = async () => {
  const response = await api.get('/api/user/random-usernames');
  console.log(response.data);
  return response.data;
};

export default getRandomUserNames;
