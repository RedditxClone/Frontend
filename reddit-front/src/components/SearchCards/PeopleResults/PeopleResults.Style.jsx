/* eslint-disable object-curly-newline */
import { Box, styled } from '@mui/material';
import { searchTheme } from '../../../pages/SearchResults/SearchCards.Style';

/**
 * @param {Box} - the default Box
 * @return {RootContainer} - The styled container
 */
export const RootContainer = styled(Box)({
  maxWidth: '102.4rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #efefef',
  marginTop: '2rem',
  [searchTheme.breakpoints.down('md')]: {
    width: '97%'
  }
});

/**
 * @param {Box} - the default Box
 * @return {ResultsContainer} - The styled container
 */
export const ResultsContainer = styled(Box)({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

/**
 * @param {Box} - the default Box
 * @return {SingleResultContainer} - The styled container
 */
export const SingleResultContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem',
  borderBottom: '1px solid #efefef',
  width: '100%',
  cursor: 'pointer'
});

/**
 * @param {Box} - the default Box
 * @return {NameLogoContainer} - The styled container
 */
export const NameLogoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

/**
 * @param {Box} - the default Box
 * @return {StyledLogoContainer} - The styled container
 */
export const StyledLogoContainer = styled(Box)({
  height: '100%',
  marginRight: '1rem'
});

/**
 * @param {img} - the default img
 * @return {StyledLogo} - The styled image
 */
export const StyledLogo = styled('img')({
  fontSize: '36px',
  height: '36px',
  maxHeight: '36px',
  maxWidth: '36px',
  overflow: 'hidden',
  width: '36px',
  lineHeight: 'normal',
  flexShrink: '0',
  borderRadius: '100%',
  verticalAlign: 'middle'
});

/**
 * @param {Box} - the default Box
 * @return {StyledDescription} - The Styled Description
 */
export const StyledDescription = styled(Box)({
  fontSize: '1.3rem',
  color: '#7c7c7c',
  marginTop: '5px'
});

/**
 * @param {a} - the default anchor element
 * @return {StyledUsername} - The Styled name
 */
export const StyledUsername = styled('a')({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: '700',
  lineHeight: '16px',
  color: 'black',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline'
  }
});

/**
 * @param {a} - the default anchor element
 * @return {StyledUsername} - The Styled button
 */
export const FollowButton = styled('a')({
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '1.4rem',
  letterSpacing: '1px',
  fontWeight: 700,
  padding: '1rem 2.1rem',
  borderRadius: '9999px',
  boxSizing: 'border-box',
  color: '#0079D3',
  textTransform: 'capitalize',
  cursor: 'pointer',
  alignItems: 'center',
  height: '4rem',
  backgroundColor: '#ededed',
  ':hover': {
    backgroundColor: '#e2e2e2'
  }
});

/**
 * @param {h4} - the default h4
 * @return {StyledDescription} - The Styled heading
 */
export const StyledHeading = styled('h4')({
  padding: '1.6rem 1.6rem 0',
  fontSize: '16px',
  lineHeight: '2rem',
  margin: 0,
  fontWeight: '500'
});
