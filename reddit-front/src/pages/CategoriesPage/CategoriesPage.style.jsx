import { styled } from '@mui/material';

const ColoredBody = styled('html')(
  {
    backgroundColor: '#dae0e6'
  }
);
const StyledCategoryiesBody = styled('div')(
  {
    fontFamily: "'IBM Plex Sans',Ariel,sans-serif",
    display: 'flex',
    backgroundColor: '#dae0e6',
    padding: '2rem 2.4rem',
    flexDirection: 'row',
    justifyContent: 'center'
  }
);

const CategoryHeader = styled('div')(
  {
    height: '9.6rem',
    padding: '0 8rem',
    display: 'flex',
    flex: '1 1 100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    '& h1': {
      color: '#1c1c1c',
      paddingBottom: '0.6rem',
      fontSize: '2.2rem',
      fontWeight: '500',
      lineHeight: '2.6rem',
      margin: '0'
    },
    '& span': {
      fontFamily: "'Noto Sans',Arial,sans-serif",
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '1.6rem',
      color: '#7c7c7c'
    }
  }
);

const AlphaStyledDiv = styled('div')(
  {
    width: '31rem',
    height: '9rem',
    backgroundColor: '#FFFFFF',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontFamily: 'inherit',
    position: 'sticky',
    '#AlphaCardTitle': {
      fontSize: '1.4rem',
      fontWeight: '500',
      lineHeight: '1.8rem',
      fontFamily: 'inherit',
      padding: '1.2rem 1.2rem 0',
      color: 'var(--newRedditTheme-titleText)'
    },
    '#AlphaCardLetter': {
      padding: '1.2rem'
    },
    '& a': {
      color: 'var(--newRedditTheme-linkText)',
      display: 'inline-block',
      marginRight: '0.8rem',
      textDecoration: 'none',
      fontSize: '1.4rem',
      fontWeight: '500',
      lineHeight: '1.8rem'
    }
  }
);
const StyledSideCards = styled('div')(
  {
    marginLeft: '2.4rem',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 1 85%',
    '& HomeCommunitiesCard': {
      marginBottom: '1rem'
    }
  }
);
const SideDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }

}));
export {
  ColoredBody,
  AlphaStyledDiv,
  StyledCategoryiesBody,
  CategoryHeader,
  StyledSideCards,
  SideDiv
};
