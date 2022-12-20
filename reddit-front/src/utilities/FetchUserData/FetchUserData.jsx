import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../store/slices/AuthSlice';
import getUser from '../../services/requests/getUser';
import {
  getMyCommunities,
  getModeratedCommunities
} from '../../store/slices/UserCommunitiesSlice';

export default function FetchUserData() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userData = await getUser();
      if (userData) {
        dispatch(AuthActions.setIsAuthenticated(true));
        dispatch(AuthActions.setUser(userData));
        dispatch(getMyCommunities());
        dispatch(getModeratedCommunities());
      }
    }
    fetchData();
  }, []);
  return <div />;
}
