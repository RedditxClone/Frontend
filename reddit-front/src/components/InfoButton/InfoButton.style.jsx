import { styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({
  outlined,
  len,
  align,
  hlen
}) => (
  {
    fontFamily: "'IBM Plex Sans',sans-serif",
    fontSize: '1.4rem',
    fontWeight: '600',
    padding: outlined ? '16px 0 16px 65px' : '16px 0 16px 0px',
    letterSpacing: '.5px',
    lineHeight: outlined ? '15px' : '1px',
    borderRadius: '4px',
    textAlign: align,
    textTransform: 'uppercase',
    backgroundColor: outlined ? '#fff' : '#0079d3',
    color: outlined ? '#0079d3' : '#fff',
    border: '1px solid #0079d3',
    display: 'block',
    margin: '.8rem 0',
    width: `${len}rem`,
    height: `${hlen}rem`,
    '&:hover': {
      color: '#fff',
      border: 'none',
      background: outlined ? '#0079d3' : '#0e89e7'
    }
  }
));
export default StyledButton;
