import api from './api';
import setUser, { setAuthenticatedUser } from '../redux_helpers/auth';

const signUpWithGoogle = async (body) => {
  try {
    const response = await api.post('/api/auth/google/signup', {
      token: body.credential
    });
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      setAuthenticatedUser(true);
      setUser(response.data);
    }
  } catch (e) {
    setAuthenticatedUser(false);
    console.log(e);
  }
};

export default signUpWithGoogle;
