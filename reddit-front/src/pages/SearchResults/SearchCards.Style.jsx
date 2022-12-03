/* eslint-disable import/prefer-default-export */
import { createTheme, styled } from '@mui/material';

export const searchTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1225,
      xl: 1536
    }
  }
});

/**
 * @param {Box} - the default Box
 * @return {PageContainer} - The styled container
 */
export const PageContainer = styled('span')({
  minHeight: '100vh',
  margin: '0 auto',
  maxWidth: '102.4rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2rem',
  [searchTheme.breakpoints.down('md')]: {
    width: '97%'
  }
});
