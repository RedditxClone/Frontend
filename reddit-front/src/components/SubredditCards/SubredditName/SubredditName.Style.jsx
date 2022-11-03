/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import Typography from '@mui/material/Typography';

/**
 * @param {Box} - the default Box
 * @return {StyledSubredditName} - The styled container
 */
export const StyledSubredditName = styled(Box)({
  display: 'inline-block',
  maxWidth: 'calc(100% - 9.6rem)',
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
  color: 'black',
  display: 'inline-block',
  flex: 1,
  fontSize: '2.8rem',
  fontWeight: 700,
  lineHeight: '3.2rem',
  overflow: 'hidden',
  padding: '0 2px 4px 0',
  textOverflow: 'ellipsis',
  width: '100%',
  margin: 0,
  letterSpacing: 0
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
