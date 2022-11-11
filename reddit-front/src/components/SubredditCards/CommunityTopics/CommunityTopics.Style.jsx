/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import { Box, Link, styled, Typography } from '@mui/material';

/**
 * @param {Link} - the default Link
 * @return {StyledActionButton} - The styled button
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
 * @param {Box} - the default box
 * @return {HeadingContainer} - The styled container
 */
export const HeadingContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'start',
  alignItems: 'center'
});

/**
 * @param {Typography} - the default Typography
 * @return {PopupInfo} - The styled Typography
 */
export const PopupInfo = styled(Typography)({
  display: 'block',
  position: 'absolute',
  top: '-137px',
  left: '-122px',
  backgroundColor: '#0079D3',
  padding: '15px',
  width: '280px',
  borderRadius: '6px',
  lineHeight: '1.5',
  color: 'white',
  fontSize: '16px',
  zIndex: 1000,
  '&::after': {
    content: "''",
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: '#0079D3 transparent transparent transparent',
    position: 'absolute',
    left: '128px',
    top: '125px'
  }
});

/**
 * @param {Box} - the default box
 * @return {SelectList} - The styled List
 */
export const SelectList = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  width: '100%',
  padding: '5px',
  borderRadius: '5px',
  cursor: 'pointer'
});

/**
 * @param {Box} - the default box
 * @return {TopicDropdownList} - The styled List
 */
export const TopicDropdownList = styled(Box)({
  position: 'absolute',
  top: '29px',
  left: '0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  overflowY: 'auto',
  height: '180px',
  borderRadius: '5px',
  backgroundColor: 'white',
  zIndex: 10
});

/**
 * @param {Box} - the default box
 * @return {SelectListOption} - The styled option
 */
export const SelectListOption = styled(Box)({
  display: 'block',
  width: '100%',
  textAlign: 'left',
  backgroundColor: 'white',
  padding: '10px',
  fontWeight: '500',
  fontSize: '15px',
  cursor: 'pointer',
  zIndex: 10000
});

/**
 * @param {Box} - the default box
 * @return {SubTopicsContainer} - The styled container
 */
export const SubTopicsContainer = styled(Box)({
  position: 'relative',
  borderRadius: '4px',
  width: '100%',
  border: '1px solid #ccc',
  paddingBottom: '30px',
  cursor: 'pointer'
});

/**
 * @param {Box} - the default box
 * @return {CancelSaveContainer} - The styled container
 */
export const CancelSaveContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  bottom: '0',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  padding: '5px 5px',
  cursor: 'pointer',
  width: '100%'
});

/**
 * @param {Box} - the default box
 * @return {SuggestedSubTopicsContainer} - The styled container
 */
export const SuggestedSubTopicsContainer = styled(Box)({
  position: 'absolute',
  bottom: '-161px',
  right: '-10px',
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  overflowY: 'auto',
  maxHeight: '160px',
  borderRadius: '5px',
  backgroundColor: 'white'
});

/**
 * @param {Box} - the default box
 * @return {SubTopic} - The styled div
 */
export const SubTopic = styled(Box)({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '18px',
  backgroundColor: '#F6F7F8',
  borderRadius: '12px',
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-block',
  marginTop: '8px',
  marginLeft: '4px',
  textAlign: 'center',
  maxWidth: '245px'
});

/**
 * @param {Typography} - the default Typography
 * @return {SuggestedSubTopic} - The styled Typography
 */
export const SuggestedSubTopic = styled(Typography)({
  display: 'block',
  width: '94%',
  textAlign: 'left',
  backgroundColor: 'white',
  padding: '5px',
  color: 'black',
  fontWeight: '500',
  fontSize: '15px',
  cursor: 'pointer'
});

/**
 * @param {span} - the default span
 * @return {StylesSpan} - The styled span
 */
export const StylesSpan = styled('span')({
  width: '95%',
  padding: '2px 2px 10px 10px'
});
