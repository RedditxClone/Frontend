/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import { subredditTheme } from '../SubredditCards.Style';

/**
 * @param {Box} - the default Box
 * @return {LogoNameContainer} - The styled Container
 */
export const LogoNameContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 15%',
  [subredditTheme.breakpoints.down('md')]: {
    marginLeft: '20px'
  },
  maxWidth: '9.84rem',
  padding: '0 16px 0 24px'
});

/**
 * @param {Box} - the default Box
 * @return {LogoNameContent} - The styled content
 */
export const LogoNameContent = styled(Box)({
  marginBottom: '1.2rem',
  marginTop: '-1.4rem',
  display: 'flex',
  alignItems: 'flex-start'
});
