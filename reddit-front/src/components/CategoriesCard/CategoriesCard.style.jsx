import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import { NavLink as NavLinkBase } from 'react-router-dom';

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

export const NavLink = styled(NavLinkBase)({
  textDecoration: 'none'
});
