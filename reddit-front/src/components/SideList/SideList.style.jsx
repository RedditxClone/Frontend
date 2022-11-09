import { NavLink as NavLinkBase } from 'react-router-dom';
import { styled } from '@mui/material';

const NavLink = styled(NavLinkBase)({
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  color: '#1c1c1c',
  fontFamily: "'IBM Plex Sans',sans-serif",
  width: '200px',
  //   height: '36px',
  '&.active': {
    // color: 'green',
    backgroundColor: '#F6F7F8',
    fontSize: '12.5px',
    fontWeight: '700',
    lineHeight: '16px'
  }
});

export default NavLink;
