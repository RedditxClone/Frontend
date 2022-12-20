import api from './api';
import getCookie from './getCookie';

const getUser = async () => {
  const token = getCookie('Authorization');
  try {
    const response = await api.get('api/user/me', {
      headers: { Authorization: token }
    });
    if (response.status >= 200 && response.status < 300) {
      const { data } = response;
      return data;
    }
    return null;
  } catch (e) {
    return null;
  }
};

export default getUser;
