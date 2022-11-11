import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthActions } from '../../store/slices/AuthSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
    navigate('/login');
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home Page</h1>
      <h2>{user.username}</h2>
      <Button
        variant="contained"
        size="large"
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </div>
  );
}
