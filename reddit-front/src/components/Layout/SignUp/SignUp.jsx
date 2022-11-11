import { StyledButton, SignInBox } from '../AppBar/AppBar.Style';

/**
 * description : this Signup box which appears in the navigation bar when u are not loggedin
 * it returns SignUp button
 */
function SignUp({ clicked }) {
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
        onClick={clicked}
      >
        Sign Up
      </StyledButton>
    </SignInBox>
  );
}

export default SignUp;
