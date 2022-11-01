import { ThemeProvider, Typography } from '@mui/material';
import theme from './CreateCommunity.style';

/**
 * A label with icon and text
 * @param {propType} props
 * @returns {Label} - Label defined with text and icon
 */

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
