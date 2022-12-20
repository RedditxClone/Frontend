import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { useMemo } from 'react';

export default function ErrorMessage({ children }) {
  return (
    <p
      style={{
        color: '#d32f2f',
        margin: '0 0 0.5rem 0',
        fontSize: '12px',
        fontWeight: '500'
      }}
    >
      {children}
    </p>
  );
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

export function ErrorResponse({ msg }) {
  const values = useMemo(() => ({ color: '#d32f2f', size: '15px' }), []);
  return (
    <div style={{ display: 'flex', marginTop: '2px', alignItems: 'center' }}>
      <IconContext.Provider value={values}>
        <span>
          <BsExclamationCircleFill />
        </span>
      </IconContext.Provider>
      <span
        style={{
          color: '#d32f2f',
          fontSize: '12px',
          fontWeight: '500',
          marginLeft: '3px'
        }}
      >
        {msg}
      </span>
    </div>
  );
}

export function FulfilledMessage({ msg }) {
  return (
    <span
      style={{
        color: '#24a0ed',
        fontSize: '12px',
        fontWeight: '500',
        paddingTop: '2px'
      }}
    >
      {msg}
    </span>
  );
}
