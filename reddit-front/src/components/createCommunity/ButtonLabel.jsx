import { ThemeProvider, Typography } from '@mui/material';
import theme from './CreateCommunity.style';

function ButtonLabel(props) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem' }}>{props.icon}</span>
        <Typography
          sx={{ margin: '0 0.5rem 0 0.5rem' }}
          variant="h2"
        >
          {props.type}
        </Typography>
        <Typography variant="subtitle2">{props.description}</Typography>
      </div>
    </ThemeProvider>
  );
}

export default ButtonLabel;
