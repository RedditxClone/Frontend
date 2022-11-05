/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import Link from '@mui/material/Link';

/**
 * @param {Box} - the default box
 * @return {ModeratorsContainer} - The styled container
 */
export const ModeratorsContainer = styled(Box)({
  backgroundColor: 'white',
  marginTop: '1rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
});

/**
 * @param {Link} - the default Link
 * @return {MessageModsButton} - The styled button
 */
export const MessageModsButton = styled(Link)({
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '1.7rem',
  minHeight: '3.2rem',
  minWidth: '3.2rem',
  padding: '4px 1.6rem',
  textDecoration: 'none',
  borderRadius: '9999px',
  boxSizing: 'border-box',
  textAlign: 'center',
  width: 'auto',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#DAE0E6'
  }
});

/**
 * @param {Link} - the default Link
 * @return {ModeratorUsername} - The styled username
 */
export const ModeratorUsername = styled(Link)({
  display: 'inline-block',
  maxWidth: '100%',
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  marginBottom: '1.6rem',
  width: '100%',
  cursor: 'pointer'
});
