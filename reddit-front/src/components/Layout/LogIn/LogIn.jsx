import { useNavigate } from 'react-router-dom';
import { StyledButton, LogInBox } from '../AppBar/AppBar.Style';
/**
 * description : this login box which appears in the navigation bar when u are not loggedin
 * it returns Login button
 */
function LogIn() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login');
  };
  return (
    <LogInBox>
      <StyledButton
        sx={{
          color: 'white',
          height: '35px',
          borderRadius: '15px',
          '&.MuiButtonBase-root': {
            justifyContent: 'center'
          }
        }}
        variant="outlined"
        onClick={handleClickLogin}
      >
        Log In
      </StyledButton>
    </LogInBox>
  );
}

export default LogIn;
