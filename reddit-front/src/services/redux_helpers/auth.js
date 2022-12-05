import { useSelector } from 'react-redux';

let { user, isAuth } = useSelector((state) => state.auth);

export const setAuthenticatedUser = (authenticated) => {
  isAuth = authenticated;
  console.log(isAuth);
};

const setUser = (userData) => {
  user = userData;
};

export const getUser = () => user;
export const isAuthanticated = () => isAuth;
export default setUser;
