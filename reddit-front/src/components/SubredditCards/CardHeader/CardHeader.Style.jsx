/* eslint-disable import/prefer-default-export */
import { Box, styled, Typography } from '@mui/material';

/**
 * @param {Box} - the default box
 * @return {CardsHeaderContainer} - The styled container
 */

export const CardsHeaderContainer = styled(Box)({
  width: '100%',
  padding: '1rem',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  display: 'flex',
  alignItems: 'center'
});

/**
 * @param {Box} - the default box
 * @return {DropDownMenuContainer} - The styled container
 */

export const DropDownMenuContainer = styled(Box)({
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  position: 'absolute',
  top: '2.7rem',
  right: 0,
  backgroundColor: 'white',
  width: '17rem'
});

/**
 * @param {Typography} - the default Typography
 * @return {DropDownMenuItem} - The styled Item
 */
export const DropDownMenuItem = styled(Typography)({
  margin: 0,

  padding: '1rem 4px',
  color: '#7c7c7c',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: '#ccc',
    color: 'black'
  }
});
