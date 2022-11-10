import { createTheme } from '@mui/material';

const primary = '#0079d3';
const secondary = '#0e89e7';
const theme = createTheme(
  {
    palette: {
      primary: { main: primary },
      secondary: { main: secondary }
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        laptop: 1024,
        desktop: 1200
      }
    }
  }
);
theme.typography.h1 = {
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '22px'
};
export default theme;
