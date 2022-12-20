/* eslint-disable import/prefer-default-export */
import { Box, createTheme, styled } from '@mui/material';

export const subredditTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      sm_2: 890,
      sm_3: 650,
      sm_4: 550,
      md: 970,
      md_2: 1030,
      lg: 1225,
      xl: 1536
    }
  }
});

/**
 * @param {Box} - the default Box
 * @return {CardsContainer} - The styled Container
 */
export const CardsContainer = styled(Box)({
  height: '100vh',
  maxWidth: '100%',
  padding: '2rem 2.4rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '0 auto'
});

/**
 * @param {Box} - the default Box
 * @return {PostsContainer} - The styled Container
 */
export const PostsContainer = styled(Box)({
  width: '55%',
  padding: 0,
  marginTop: '1rem',
  [subredditTheme.breakpoints.down('md')]: {
    width: '100%'
  }
});
