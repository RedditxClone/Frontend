import { useNavigate } from 'react-router-dom';
import { StyledButton, SignInBox } from '../AppBar/AppBar.Style';

/**
 * @description this Signup box which appears in the navigation bar when u are not loggedin
 * @param {bool} this for if u signed up
 * @return {React.Component} SignUp button
 */
function SignUp() {
  const navigate = useNavigate();
  const onClickSignUp = () => {
    navigate('/auth/signup');
  };
  return (
    <SignInBox>
      <StyledButton
        sx={{
          color: '#0079D3',
          height: '35px',
          borderRadius: '15px',
          '&.MuiButtonBase-root': {
            justifyContent: 'center'
          }
        }}
        variant="outlined"
        onClick={onClickSignUp}
      >
        Sign Up
      </StyledButton>
    </SignInBox>
  );
}

export default SignUp;
