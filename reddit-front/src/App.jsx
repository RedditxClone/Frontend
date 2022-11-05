import { ThemeProvider } from '@mui/material';
import { StyledBody } from './components/GlobalStyles/GlobalStyles.style';
<<<<<<< HEAD
=======
// import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
// import ForgetUserName from './pages/ForgetUserName/ForgetUserName';
// import ForgetPasswordName from './pages/ForgetUserPassword/ForgetUserPassword';
// import ResetPassword from './pages/ResetPassword/ResetPassword';
>>>>>>> a5f042e3f5dcc85910a09781d8bb24c0466f1ce4
import theme from './utilities/theme';

function App() {
  return (
    <StyledBody>
<<<<<<< HEAD
      <ThemeProvider theme={theme}></ThemeProvider>
=======
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <SignUp />
        {/* <ForgetUserName /> */}
        {/* <ForgetPasswordName /> */}
        {/* <ResetPassword /> */}
      </ThemeProvider>
>>>>>>> a5f042e3f5dcc85910a09781d8bb24c0466f1ce4
    </StyledBody>
  );
}

export default App;
