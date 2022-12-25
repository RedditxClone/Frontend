import { NavLink as NavLinkBase } from 'react-router-dom';
import { styled } from '@mui/material';

const GrayDiv = styled('div')(
  {
    backgroundColor: '#dae0e6'
  }
);
const AlphabeticHeader = styled('div')(({ theme }) => ({
  // height: '9.6rem',
  padding: '1.6rem 22rem',
  display: 'flex',
  flex: '1 1 100%',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#FFFFFF',
  fontFamily: "'IBM Plex Sans',sans-serif",
  '& h1': {
    fontSize: '2.2rem',
    fontWeight: '500',
    lineHeight: '2.6rem',
    color: 'var(--newRedditTheme-titleText)',
    margin: '0'
  },
  '& div': {
    margin: '0.8rem 0 0.4rem 0'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.6rem'
  }
}));
const NavCategoriesContainer = styled('div')(
  {
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    margin: '1.2rem auto 6.4rem',
    maxWidth: '88%',
    width: '98.6rem',
    height: '98.6rem',
    padding: '1.6rem 2rem',
    '& h2': {
      fontSize: '1.6rem',
      fontWeight: '500',
      lineHeight: '2rem',
      color: 'var(--newRedditTheme-titleText)',
      margin: '0 0 1.6rem'
    },
    '& #LinksDiv': {
      borderTop: '1px solid #EDEFF1',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '0.5rem 0',
      margin: '1.6rem -0.8rem',
      padding: '1.6rem 0 2.4rem'
    }
  }
);

const NavLink = styled(NavLinkBase)(({ theme }) => ({

  color: 'var(--newRedditTheme-linkText)',
  display: 'inline-block',
  marginRight: '0.8rem',
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '1.8rem',
  '&.active': {
    color: 'var(--newRedditTheme-titleText)'
  },
  [theme.breakpoints.down('sm')]: {
    margin: '2rem'
  }

}));

const SubRedditNavLink = styled(NavLinkBase)({
  marginRight: '0.8rem',
  textDecoration: 'none',
  color: 'var(--newRedditTheme-linkText)',
  fontSize: '1.6rem',
  fontWeight: '400',
  lineHeight: '2rem',
  display: 'inline-block',
  maxWidth: '100%',
  overflow: 'hidden',
  padding: '0 0.8rem',
  '&.active': {
    color: 'var(--newRedditTheme-titleText)'
  }
});

export {
  GrayDiv,
  AlphabeticHeader,
  NavCategoriesContainer,
  NavLink,
  SubRedditNavLink
};
