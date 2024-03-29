/* eslint-disable import/prefer-default-export */
import { Box, styled, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { subredditTheme } from '../../../pages/Subreddit/Subreddit.Style';

/**
 * @param {Box} - the default Box
 * @return {StyledSubredditName} - The styled container
 */
export const StyledSubredditName = styled(Box)({
  display: 'inline-block',
  paddingRight: '2.4rem',
  boxSizing: 'border-box'
});

/**
 * @param {Box} - the default Box
 * @return {ButtonsContainer} - The styled container
 */
export const ButtonsContainer = styled(Box)({
  display: 'flex',
  margin: 0,
  padding: 0,
  width: '13.7rem',
  justifyContent: 'space-between'
});

/**
 * @param {Typography} - the default Typography
 * @return {SubredditTitle} - The styled container
 */
export const SubredditTitle = styled(Typography)({
  fontSize: '28px',
  color: 'black',
  display: 'inline-block',
  flex: 1,
  fontWeight: 700,
  lineHeight: '3.2rem',
  overflow: 'hidden',
  padding: '0 2px 4px 0',
  textOverflow: 'ellipsis',
  margin: 0,
  letterSpacing: 0,
  [subredditTheme.breakpoints.down('sm_3')]: {
    fontSize: '20px'
  },
  [subredditTheme.breakpoints.down('sm_4')]: {
    fontSize: '14px'
  }
});

/**
 * @param {Box} - the default Box
 * @return {NotificationTypesContainer} - The styled container
 */
export const NotificationTypesContainer = styled(Box)({
  width: '100px',
  backgroundColor: 'white',
  borderRadius: '5px',
  position: 'absolute',
  top: '35px',
  left: '3px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10000
});

/**
 * @param {Box} - the default Box
 * @return {SingleNotificationTypeContainer} - The styled container
 */
export const SingleNotificationTypeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '10px 5px',
  color: '#878A8C',
  fill: '#878A8C',
  fontSize: '15px',
  textTransform: 'capitalize'
});

/**
 * @param {Box} - the default Box
 * @return {TitleLogoContainer} - The styled container
 */
export const TitleLogoContainer = styled(Box)({
  boxSizing: 'border-box',
  justifyContent: 'flex-start',
  display: 'flex',
  paddingLeft: '1.6rem',
  marginTop: '2.6rem',
  position: 'relative',
  width: '80%'
});

/**
 * @param {h2} - the default h2
 * @return {SubTitle} - The styled sub title
 */
export const SubTitle = styled('h2')({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '1.8rem',
  color: '#7c7c7c',
  margin: 0,
  padding: 0
});

/**
 * @param {Button} - the default Button
 * @return {JoinButton} - The styled Button
 */
export const JoinButton = styled(Button)({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: '1.4rem',
  fontWeight: 700,
  letterSpacing: 'unset',
  minHeigh: '3.2rem',
  minWidth: '3.2rem',
  padding: '4px 16px',
  borderRadius: '9999px',
  width: '100%',
  boxSizing: 'border-box'
});
