import { ThemeProvider } from '@mui/material';
import { StyledBody } from './components/GlobalStyles/GlobalStyles.style';
// import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import theme from './utilities/theme';

function App() {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}>
        {/* <Login /> */}
        <SignUp />
      </ThemeProvider>
    </StyledBody>
  );
}

export default App;
