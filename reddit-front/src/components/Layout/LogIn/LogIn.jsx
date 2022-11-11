import { StyledButton, LogInBox } from '../AppBar/AppBar.Style';
/**
 * description : this login box which appears in the navigation bar when u are not loggedin
 * it returns Login button
 */
function LogIn(props) {
  return (
    <LogInBox>
      <StyledButton
        sx={{
          color: 'white',
          height: '35px',
          borderRadius: '15px'
        }}
        variant="outlined"
        onClick={props.clicked}
      >
        Log In
      </StyledButton>
    </LogInBox>
  );
}

export default LogIn;
