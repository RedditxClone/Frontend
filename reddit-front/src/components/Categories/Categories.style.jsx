import { styled } from '@mui/material';

const StyledCategoryiesBody = styled('div')(
  {
    fontFamily: "'IBM Plex Sans',Ariel,sans-serif",
    backgroundColor: '#dae0e6',
    display: 'flex',
    padding: '20px 24px',
    flexDirection: 'row',
    justifyContent: 'center'
  }
);

const CategoryHeader = styled('div')(
  {
    height: '96px',
    padding: '0 80px',
    display: 'flex',
    flex: '1 1 100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    '& h1': {
      color: '#1c1c1c',
      paddingBottom: '6px',
      fontSize: '22px',
      fontWeight: '500',
      lineHeight: '26px',
      margin: '0'
    },
    '& span': {
      fontFamily: "'Noto Sans',Arial,sans-serif",
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      color: '#7c7c7c'
    }
  }
);

const AlphaStyledDiv = styled('div')(
  {
    width: '310px',
    height: '90px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginTop: '20px',
    fontFamily: 'inherit',
    '#AlphaCardTitle': {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '18px',
      fontFamily: 'inherit',
      padding: '12px 12px 0',
      color: '#1A1A1B'
    },
    '#AlphaCardLetter': {
      padding: '12px'
    },
    '& a': {
      color: '#0079D3',
      display: 'inline-block',
      marginRight: '8px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '18px'
    }
  }
);
const StyledSideCards = styled('div')(
  {
    marginLeft: '24px',
    display: 'flex',
    flexDirection: 'column'
  }
);
export {
  AlphaStyledDiv,
  StyledCategoryiesBody,
  CategoryHeader,
  StyledSideCards
};
