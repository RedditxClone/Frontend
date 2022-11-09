import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function ErrorMessage({ children }) {
  return <p style={{ color: '#d32f2f', margin: '0 0 0.5rem 0' }}>{children}</p>;
}

export const BackLink = styled(Link)({
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'IBMPlexSans,sans-serif',
  textDecoration: 'none',
  color: '#1a1a1b',
  '&:hover': {
    color: '#0079d3'
  }
});
