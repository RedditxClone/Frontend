import { ThemeProvider, Typography } from '@mui/material';
import theme from './CreateCommunity.style';

/**
 * @description This component is resposinble to render the label connected to a specific button
 * @param {ReactIcon} icon icon displayed in the label
 * @param {string} type String represents the type of the community
 * @param {string} description String in the label which represents
 * a short brief for each community type
 * @returns {React.Component} CheckBox with its label
 */

function ButtonLabel({ icon, type, description }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <Typography
          sx={{ margin: '0 0.5rem 0 0.5rem' }}
          variant="h2"
        >
          {type}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </div>
    </ThemeProvider>
  );
}

export default ButtonLabel;
