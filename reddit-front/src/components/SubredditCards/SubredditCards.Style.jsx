/* eslint-disable import/prefer-default-export */
import { Box, createTheme, styled } from '@mui/material';

export const subredditTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 970,
      lg: 1200,
      xl: 1536
    }
  }
});

/**
 * @param {Box} - the default Box
 * @return {CardsContainer} - The styled Container
 */
export const CardsContainer = styled(Box)({
  maxWidth: '100%',
  padding: '2rem 2.4rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '0 auto'
});
