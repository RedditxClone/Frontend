/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material';

const PostsAndCommentsDiv = styled('div')({
  margin: '2.4rem',
  padding: '1.6rem 2.4rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px',
  boxSizing: 'border-box',
  maxWidth: '85.6rem',
  fontFamily: "'IBM Plex Sans', Arial,sans-serif",
  '& h1': {
    fontSize: '1.8rem',
    fontWeight: '501',
    lineHeight: '2.2rem',
    color: '#1c1c1c',
    marginBottom: '1.6rem'
  },
  '& h3': {
    fontSize: '1rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    lineHeight: '1.2rem',
    borderBottom: '1px solid #EDEFF1',
    color: '#7c7c7c',
    marginBottom: '3.2rem',
    paddingBottom: '6px'
  },
  '& h2': {
    fontSize: '1.6rem',
    fontWeight: '501',
    lineHeight: '2rem',
    color: '#1c1c1c',
    marginBottom: '4px'
  },
  '& p': {
    color: '#7c7c7c',
    fontWeight: '400',
    fontSize: '1.2rem',
    lineHeight: '1.6rem'
  },
  '& div': {
    marginBottom: '3.2rem'
  },

  '& button': {
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    lineHeight: '2.4rem',
    color: '#878A8C',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center'
  },

  '& .Settings': {
    color: '#0079D3',
    textDecoration: 'none',
    fontSize: '1.6rem',
    fontWeight: '501',
    lineHeight: '20px',
    display: 'flex',
    height: '20px',
    marginBottom: '4px'
  },
  '& #Menu': {
    width: '15rem',
    padding: '0',
    border: '1px solid #EDEFF1',
    borderRadius: '4px',
    boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
    position: 'absolute',
    zIndex: '10',
    top: '1rem',
    listStyle: 'none',
    backgroundColor: '#fff',
    '& li': {
      padding: '0.8rem 1.6rem 0.8rem 0.8rem',
      fontSize: '1.4rem',
      fontWeight: '501',
      lineHeight: '1.8rem',
      color: '#878A8C',
      borderBottom: '1px solid #EDEFF1',
      '&:hover': {
        backgroundColor: '#E9F5FD',
        color: '#1c1c1c'
      },
      '&:focus': {
        color: '#0079D3'
      }
    }
  },
  '& #SpoilerFlair': {
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '1.6rem',
    borderRadius: '2px',
    color: '#fff',
    display: 'inline-block',
    margin: '0 4px 0 8px',
    padding: '0 4px',
    backgroundColor: '#7c7c7c'
  }
});
export { PostsAndCommentsDiv };
