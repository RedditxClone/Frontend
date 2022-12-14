/* eslint-disable object-curly-newline */
import { Box, styled } from '@mui/material';

/**
 * @param {Box} - the default box
 * @return {PostInfo} - The styled PostInfo container
 */
export const PostInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

/**
 * @param {Box} - the default box
 * @return {StyledLogo} - The Styled Logo container
 */
export const StyledLogo = styled(Box)({
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  marginRight: '2px'
});

/**
 * @param {a} - the default html anchor tag
 * @return {Username} - The styled Username
 */
export const Username = styled('a')({
  fontSize: '11px',
  marginRight: '5px',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
});

/**
 * @param {span} - the default html span
 * @return {StyledSpan} - The styled version
 */
export const StyledSpan = styled('span')({
  color: '#787c7e',
  fontSize: '11px'
});

/**
 * @param {Box} - the default box
 * @return {CommentContainer} - The styled container
 */
export const CommentContainer = styled(Box)({
  backgroundColor: 'white'
});

/**
 * @param {Box} - the default box
 * @return {PostContent} - The styled Post Content
 */
export const PostContent = styled(Box)({
  margin: '1.2rem 0',
  wordBreak: 'break-word',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px'
});

/**
 * @param {Box} - the default box
 * @return {CommentContent} - The styled Comment Content
 */
export const CommentContent = styled(Box)({
  padding: '1rem',
  margin: '0 12px 12px',
  fontSize: '14px',
  borderRadius: '4px',
  backgroundColor: '#E9F5FD'
});

/**
 * @param {Box} - the default box
 * @return {Comment} - The styled Comment
 */
export const Comment = styled(Box)({
  margin: '1rem 1rem 1rem 2.2rem'
});

/**
 * @param {Box} - the default box
 * @return {GoToThread} - The styled text container
 */
export const GoToThread = styled(Box)({
  color: '#0079D3',
  fontSize: '14px',
  margin: '1rem .5rem 1rem 8px'
});

/**
 * @param {Box} - the default box
 * @return {PostStatistics} - The styled container
 */
export const PostStatistics = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  color: '#787c7e',
  fontSize: '12px'
});

/**
 * @param {Box} - the default box
 * @return {UpVotes} - The styled container
 */
export const UpVotes = styled(Box)({
  marginRight: '1rem'
});

/**
 * @param {Box} - the default box
 * @return {Comments}
 */
export const Comments = styled(Box)({
  marginRight: '1rem'
});
