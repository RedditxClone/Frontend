/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import { subredditTheme } from '../SubredditCards.Style';

/**
 * @param {Box} - the default Box
 * @return {SideBarContainer} - The styled Container
 */
export const SideBarContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [subredditTheme.breakpoints.down('md')]: {
    display: 'none',
    visibility: 'hidden'
  }
});
