import { styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({ outlined, len }) => (
  {
    fontFamily: "'IBM Plex Sans',sans-serif",
    fontSize: '14px',
    fontWeight: '600',
    padding: outlined ? '16px 0 16px 65px' : '16px 0 16px 0px',
    letterSpacing: '.5px',
    lineHeight: '20px',
    borderRadius: '4px',
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: outlined ? '#fff' : '#0079d3',
    color: outlined ? '#0079d3' : '#fff',
    border: '1px solid #0079d3',
    display: 'block',
    margin: '8px 0',
    width: len,
    height: '55px',
    '&:hover': {
      color: '#fff',
      border: 'none',
      background: outlined ? '#0079d3' : '#0e89e7'
    }
  }
));
export default StyledButton;
