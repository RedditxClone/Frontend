/* eslint-disable object-curly-newline */
import { styled } from '@mui/material';

/**
 * @param {a} - the default anchor element
 * @return {StyledCommunityName} - The styled name
 */
export const StyledCommunityName = styled('a')({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: '700',
  lineHeight: '16px',
  color: 'black',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  },
  '&:hover .subreddit_members_count': {
    textDecoration: 'none'
  }
});

/**
 * @param {span} - the default span
 * @return {MembersCount} - The styled component
 */
export const MembersCount = styled('span')({
  color: '#7c7c7c',
  marginLeft: '5px',
  fontWeight: '300',
  fontSize: '1.1rem',
  lineHeight: '16px'
});
