import api from './api';

const continueWithGoogle = async (accessToken) => {
  try {
    console.log('Token: ', accessToken);
    const response = await api.post('/api/auth/google', { token: accessToken });
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      console.log('Authenticated', response.data);
      document.cookie = `Authorization=Bearer ${response.data.token}`;
      return response.data;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default continueWithGoogle;
