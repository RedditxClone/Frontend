/* eslint-disable quotes */
import styled from '@emotion/styled';

const StyledLabel = styled('label')({
  position: 'absolute',
  opacity: '0.6',
  fontSize: '10px',
  fontWeight: '600',
  color: '#a5a4a4',
  transition: 'all .2s ease-in-out',
  pointerEvents: 'none',
  display: 'block',
  top: '50%',
  left: '1rem',
  transform: 'translateY(-50%)'
});

const StyledInput = styled('input')(({ color }) => ({
  width: '100%',
  position: 'relative',
  padding: '1.5rem',
  margin: '1.5rem 0 0 0',
  border: `1px solid ${color}`,
  borderRadius: '4px',
  '&:focus': {
    outline: `1px solid ${color}`
  },
  '&:hover+label, &:focus+label, &:valid+label': {
    top: '0',
    fontSize: '9px',
    transform: 'translateY(20px)',
    opacity: '1'
  }
}));

function StyledTextField({
  label,
  type,
  onFocus,
  onBlur,
  error,
  success,
  onChange,
  value,
  id
}) {
  let color;
  if (error) {
    color = '#d32f2f';
  } else if (success) {
    color = '#24a0ed';
  } else {
    color = 'rgba(0,0,0,.1)';
  }
  return (
    <div style={{ position: 'relative', width: '28rem' }}>
      <StyledInput
        id={id}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        color={color}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </div>
  );
}

export default StyledTextField;
