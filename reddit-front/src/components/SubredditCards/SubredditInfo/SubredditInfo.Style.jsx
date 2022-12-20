/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import { subredditTheme } from '../../../pages/Subreddit/Subreddit.Style';

/**
 * @param {Box} - the default Box
 * @return {LogoNameContainer} - The styled Container
 */
export const LogoNameContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 7%',
  [subredditTheme.breakpoints.down('lg')]: {
    marginLeft: '2%'
  },
  [subredditTheme.breakpoints.down('md')]: {
    marginLeft: '2%'
  },
  maxWidth: '9.84rem',
  padding: '0 16px 0 24px'
});

/**
 * @param {Box} - the default Box
 * @return {LogoNameContent} - The styled content
 */
export const LogoNameContent = styled(Box)({
  width: '80vw',
  marginBottom: '1.2rem',
  marginTop: '-1.4rem',
  display: 'flex',
  alignItems: 'flex-start'
});

/**
 * @param {img} - the default img tag
 * @return {LogoImg} - The sized img
 */
export const LogoImg = styled('img')({
  borderRadius: '100%',
  border: '4px solid white',
  width: '7.2rem',
  height: '7.2rem',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  zIndex: 10
});
