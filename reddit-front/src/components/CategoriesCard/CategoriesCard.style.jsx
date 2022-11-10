import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { NavLink as NavLinkBase } from 'react-router-dom';

/**
 * @description this function styles the default box as needed in the bar of the categories card
 * @param {Box} Box - the default Box
 * @return {Box} - The styled Box
 */
export const CategoriesCardBar = styled(Box)({
  backgroundColor: '#F6F7F8',
  padding: ' 1.4rem',
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  border: ' 2px solid #Edeff1',
  top: '110px',
  zIndex: '2',
  width: 'calc(48.3% - 2px)'
  // flexGrow: '2'
});

/**
 * @description this function styles the default NavLinkBase
 * @param {NavLinkBase} NavLinkBase - the default NavLinkBase
 * @return {NavLinkBase} - The styled NavLinkBase
 */

export const NavLink = styled(NavLinkBase)({
  textDecoration: 'none'
});
