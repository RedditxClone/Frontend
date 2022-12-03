/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import { subredditTheme } from '../../../pages/Subreddit/Subreddit.Style';

/**
 * @param {Box} - the default Box
 * @return {SideBarContainer} - The styled Container
 */
export const SideBarContainer = styled(Box)({
  marginLeft: '2.4rem',
  marginTop: 0,
  flex: '0 0 31.2rem',
  width: '31.2rem',
  [subredditTheme.breakpoints.down('md')]: {
    width: '0',
    height: '0',
    display: 'none',
    visibility: 'hidden'
  },
  [subredditTheme.breakpoints.down('md_2')]: {
    width: '25%'
  }
});

/**
 * @param {Box} - the default Box
 * @return {SideBarContent} - The styled Container
 */
export const SideBarContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [subredditTheme.breakpoints.down('md')]: {
    width: '0',
    height: '0',
    display: 'none',
    visibility: 'hidden'
  },
  [subredditTheme.breakpoints.down('lg')]: {
    width: '28rem'
  }
});
