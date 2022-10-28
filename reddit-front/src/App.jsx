import { ThemeProvider } from '@mui/material';
import { StyledBody } from './components/GlobalStyles/GlobalStyles.style';
import Login from './pages/Login/Login';
import theme from './utilities/theme';

function App() {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </StyledBody>
  );
}

export default App;
