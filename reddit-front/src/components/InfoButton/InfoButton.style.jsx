import { styled, Button } from '@mui/material';

// eslint-disable-next-line object-curly-newline
const StyledButton = styled(Button)(({ len, hlen, bgcolor, colortext }) => ({
  fontFamily: "'IBM Plex Sans',sans-serif",
  fontSize: '1.4rem',
  fontWeight: '600',
  letterSpacing: '.5px',
  lineHeight: '15px',
  borderRadius: '4px',
  textAlign: 'center',
  backgroundColor: `${bgcolor}`,
  textTransform: 'uppercase',
  border: '1px solid #0079d3',
  display: 'block',
  margin: '.8rem 0',
  width: `${len}rem`,
  height: `${hlen}rem`,
  color: `${colortext}`,
  '&:hover': {
    color: `${colortext}`,
    border: 'none',
    background: `${bgcolor}`
  }
}));
export default StyledButton;
