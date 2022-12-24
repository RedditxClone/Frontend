import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../../store/slices/AuthSlice';
import getUser from '../../services/requests/getUser';
import {
  getMyCommunities,
  getModeratedCommunities
} from '../../store/slices/UserCommunitiesSlice';
/**
 * This component is called in the NavBar component and it is responsible to get the user's data
 * and set his authentication and token when refreshing every page
 * @returns {React.Component}
 */
export default function FetchUserData() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userData = await getUser();
      if (userData) {
        console.log(userData);
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
