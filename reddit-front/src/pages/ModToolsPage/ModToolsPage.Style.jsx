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
