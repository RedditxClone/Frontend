import { NavLink as NavLinkBase } from 'react-router-dom';
import { styled } from '@mui/material';

// const SideBorder = styled ('div')(
//   {
//     borderLeft: '6px solid var(--newCommunityTheme-button)',
//     height: '3.6rem',
//     display: 'none'
//   }
// );

const NavLink = styled(NavLinkBase)({
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '16px',
  color: '#1c1c1c',
  fontFamily: "'IBM Plex Sans',sans-serif",
  width: '200px',
  height: '36px',
  '& #SideBorder': {
    position: 'absolute',
    // left: `${len}rem`,
    width: '100%',
    height: '3.6rem',
    backgroundColor: '#F6F7F8',
    borderLeft: '6px solid var(--newCommunityTheme-button)',
    display: 'none'
  },
  '&.active': {
    // color: 'green',
    backgroundColor: 'red',
    fontSize: '12.5px',
    fontWeight: '700',
    lineHeight: '16px',
    '& #SideBorder': {
      display: 'inline'
    }
  },
  '&:focus': {
    '& #SideBorder': {
      display: 'inline'
    }
  }
});

export default NavLink;
