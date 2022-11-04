import { ThemeProvider } from '@mui/material';
import { StyledBody } from './components/GlobalStyles/GlobalStyles.style';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import ForgetUserName from './pages/ForgetUserName/ForgetUserName';
// import ForgetPasswordName from './pages/ForgetUserPassword/ForgetUserPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import theme from './utilities/theme';

function App() {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <ForgetUserName /> */}
        {/* <ForgetPasswordName /> */}
        <ResetPassword />
      </ThemeProvider>
    </StyledBody>
  );
}

export default App;
