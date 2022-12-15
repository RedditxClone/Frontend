import { Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * @param {Box} - the default box
 * @return {CardsHeaderContainer} - The styled container
 */

export const BreadCrumbContainer = styled(Box)({
  position: 'fixed',
  padding: '10px',
  borderTop: '1px solid #CCCCCC',
  width: '100%',
  backgroundColor: '#FFFFFF',
  zIndex: '30',
  top: '6.4rem'
});

export const SubredditIcon = styled(Box)({
  width: '25px',
  height: '25px',
  marginRight: '5px'
});

export const SideBarCategory = styled(Box)({
  marginBottom: '8px',
  paddingBottom: '8px'
});

export const SideBarCategoryTitle = styled(Box)({
  fontSize: '10px',
  fontWeight: '700',
  letterSpacing: '.5px',
  lineHeight: '12px',
  textTransform: 'uppercase',
  flexAlign: 'center',
  alignItems: 'center',
  color: '#878A8C',
  display: 'flex',
  padding: '8px 24px'
});

export const SideBarItem = styled(Link)({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '18px',
  flexAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  padding: '8px 24px',
  textTransform: 'capitalize',
  color: 'black',
  ':hover': {
    backgroundColor: '#d1d1d1'
  }
});
export const SideBarTitleItem = styled(Link)({
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  textDecoration: 'none',
  flexAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  padding: '8px 24px',
  textTransform: 'capitalize',
  borderBottom: '1px solid #EDEFF1',
  color: '#1c1c1c'
});

export const UpDiv = styled('div')({
  backgroundColor: '#EDEFF1',
  display: 'flex',
  flexDirection: 'row',
  height: '4.8rem',
  justifyContent: 'flex-end',
  left: '28rem',
  top: '11rem',
  padding: '0.4rem 2.4rem',
  position: 'fixed',
  right: '0',
  zIndex: '40',
  '& button': {
    position: 'relative',
    backgroundColor: '#0079D3',
    border: '1px solid #0079D3',
    color: '#ffffff',
    borderRadius: '9999px',
    fontFamily: "'Noto Sans',Arial,sans-serif",
    fontSize: '1.4rem',
    fontWeight: '700',
    lineHeight: '1.7rem',
    minHeight: '3rem',
    minWidth: '3.2rem',
    padding: '4px 16px'
  }
});
