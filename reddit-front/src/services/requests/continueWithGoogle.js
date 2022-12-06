import { useDispatch } from 'react-redux';
import api from './api';
import { AuthActions } from '../../store/slices/AuthSlice';

const signInWithGoogle = async (body) => {
  const dispatch = useDispatch();
  try {
    const response = await api.post('/api/auth/google/login', {
      token: body.credential
    });
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      dispatch(AuthActions.setIsAuthenticated(true));
      dispatch(AuthActions.setUser(response.data));
    }
  } catch (e) {
    setAuthenticatedUser(false);
    console.log(e);
  }
};

export default signInWithGoogle;
