/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import { Box, styled, Typography, Link, TextareaAutosize } from '@mui/material';

/**
 * Global Style for About Community Card
 */

/**
 * @param {Box} - the default box
 * @return {AboutCardContainer} - The styled container
 */

export const AboutCardContainer = styled(Box)({
  backgroundColor: 'white',
  marginTop: '1rem',
  marginBottom: '1rem',
  border: '1px solid #ccc',
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px'
});

/**
 * @param {Typography} - the default Typography
 * @return {CommunityDescription}
 */
export const CommunityDescription = styled(Typography)({
  marginBottom: '8px',
  fontSize: '1.4rem',
  lineHeight: '2rem',
  fontWeight: '400',
  wordWrap: 'break-word',
  display: 'block'
});

/**
 * @param {Typography} - the default Typography
 * @return {CommunityCreatedDate}
 */
export const CommunityCreatedDate = styled(Typography)({
  marginTop: '1.2rem',
  fontSize: '1.4rem',
  fontWeight: '400',
  lineHeight: '1.8rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'no-wrap',
  alignItems: 'center'
});

/**
 * @param {Box} - the default Box
 * @return {OnlineMembersBox} - A container
 */
export const OnlineMembersBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: '35%'
});

/**
 * @param {Typography} - the default Typography
 * @return {MembersTypography} - A Styled Typography
 */
export const MembersTypography = styled(Typography)({
  display: 'inline-block',
  wordBreak: 'break-word',
  fontSize: '1.2rem',
  lineHeight: '1.6rem',
  fontWeight: '400'
});

/**
 * @param {Link} - the default Link
 * @return {CreatePostButton} - A Styled Button
 */
export const CreatePostButton = styled(Link)({
  color: 'white',
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '1.7rem',
  minHeight: '3.2rem',
  minWidth: '3.2rem',
  padding: '4px 1.6rem',
  textDecoration: 'none',
  borderRadius: '9999px',
  boxSizing: 'border-box',
  textAlign: 'center',
  width: 'auto',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  alignItems: 'center',
  '&:hover': {
    opacity: '0.9'
  }
});

/**
 * @param {Link} - the default Link
 * @return {ShowOptionsButton} - A Styled Button
 */
export const ShowOptionsButton = styled(Link)({
  fontSize: '1.4rem',
  fontWeight: 700,
  lineHeight: '1.7rem',
  minHeight: '3.2rem',
  minWidth: '3.2rem',
  padding: '4px 1.6rem',
  textDecoration: 'none',
  borderRadius: '9999px',
  boxSizing: 'border-box',
  textAlign: 'center',
  width: 'auto',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  alignItems: 'center',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: '#1a1a1b12'
  }
});

/**
 * @param {Box} - the default Box
 * @return {CommunityThemeOption}
 */
export const CommunityThemeOption = styled(Box)({
  fontSize: '1.4rem',
  fontWeight: '400',
  lineHeight: '2.1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '8px 0',
  transition: 'all 0.14s ease-in-out',
  textAlign: 'left',
  overflowWrap: 'break-word',
  padding: '5px 10px',
  borderRadius: '10px'
});

/**
 * @param {TextareaAutosize} - the default Textarea
 * @return {StyledTextarea} - the Styled Textarea
 */
export const StyledTextarea = styled(TextareaAutosize)({
  outline: 'none',
  display: 'block',
  borderRadius: '4px',
  padding: '10px 10px 40px 10px',
  cursor: 'pointer',
  overflow: 'hidden',
  overflowWrap: 'break-word',
  minHeight: '84px',
  width: '100%',
  resize: 'none',
  color: 'black',
  transition: 'none',
  border: 'none',
  backgroundColor: '#F6F7F8',
  '&:focus': {
    cursor: 'auto'
  }
});

/**
 * @param {Link} - the default Link
 * @return {StyledActionButton} - A Styled Button
 */
export const StyledActionButton = styled(Link)({
  fontWeight: '600',
  fontSize: '12px',
  marginRight: '5px',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer'
});

/**
 * @param {Link} - the default Link
 * @return {EditCommunityActionsContainer} - A Styled Button Container
 */
export const EditCommunityActionsContainer = styled(Link)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  padding: '5px 5px',
  cursor: 'pointer',
  width: '100%',
  backgroundColor: '#F6F7F8',
  textDecoration: 'none'
});
