import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ len }) => (
  {
    marginBottom: '18px',
    display: 'block',
    '& .MuiOutlinedInput-root': {
      ' & fieldset': {
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '4px',
        backgroundColor: '#fcfcfb',
        width: `${len}rem`
      },
      '&.Mui-focused fieldset': {
        border: '1px solid rgba(0,0,0,.2)',
        backgroundColor: '#fff',
        outline: '0'
      }
    },
    '& label': {
      fontSize: '1rem',
      fontWeight: '500',
      letterSpacing: '.5px',
      position: 'absolute',
      // display: 'inline-block',
      verticalAlign: 'middle',
      top: '1.4rem',
      left: '1.2rem',
      color: '#a5a4a4',
      textTransform: 'uppercase',
      transform: 'translateZ(0)',
      pointerEvents: 'none'
    },

    '&:hover label': {
      transform: 'translate3d(0,-0.8rem,0) scale(.83333333)',
      lineHeight: '1.4rem',
      color: '#a5a4a4'
    }

  }
));
export default StyledTextField;
