import { useNavigate } from 'react-router-dom';
import { StyledButton, LogInBox } from '../AppBar/AppBar.Style';

/**
 * @description this login box which appears in the navigation bar when u are not loggedin
 * @param {bool} clicked this for if u logged in
 * @return {React.Component} Login button
 */
function LogIn() {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/auth/login');
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
