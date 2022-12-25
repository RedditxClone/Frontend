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
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  color: '#1c1c1c',
  fontFamily: "'IBM Plex Sans',sans-serif",
  height: '40px',
  margin: '0 5px',
  '& #SideBorder': {
    position: 'absolute',
    left: '0.3rem',
    top: '4.2rem',
    width: '100%',
    height: '.3rem',
    backgroundColor: 'var(--newCommunityTheme-button)',
    display: 'none'
  },
  '&:hover': {
    color: '#0079D3'
  },
  '&:focus': {
    color: '#0079D3',
    '& #SideBorder': {
      display: 'inline'
    }
  }
});

export default NavLink;
