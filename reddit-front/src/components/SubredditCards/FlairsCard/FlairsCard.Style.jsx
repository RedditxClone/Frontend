/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';
import Link from '@mui/material/Link';

/**
 * @param {Box} - the default box
 * @return {FlairsContainer} - The styled container
 */
export const FlairsContainer = styled(Box)({
  backgroundColor: 'white',
  marginTop: '1rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
});

/**
 * @param {Box} - the default box
 * @return {FlairItemContainer} - The styled container
 */
export const FlairItemContainer = styled(Box)({
  padding: '5px',
  display: 'inline-block',
  maxWidth: '97%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '&:hover': {
    opacity: '0.6'
  }
});

/**
 * @param {Link} - the default Link
 * @return {FlairItem} - The styled Link
 */
export const FlairItem = styled(Link)({
  backgroundColor: 'lime',
  color: 'white',
  textDecoration: 'none',
  margin: 0,
  maxWidth: '100%',
  borderRadius: '20px',
  fontSize: '14px',
  padding: '3px 15px',
  fontWeight: 500,
  lineHeight: '1.6rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  verticalAlign: 'text-bottom',
  whiteSpace: 'pre',
  wordBreak: 'normal',
  cursor: 'pointer',
  textTransform: 'capitalize'
});
