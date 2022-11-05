import { ThemeProvider } from '@mui/material';
import { StyledBody } from './components/GlobalStyles/GlobalStyles.style';
import theme from './utilities/theme';

function App() {
  return (
    <StyledBody>
      <ThemeProvider theme={theme}></ThemeProvider>
    </StyledBody>
  );
}

export default App;
