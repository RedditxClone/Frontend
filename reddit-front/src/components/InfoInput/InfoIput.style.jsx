import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(
  {
    marginBottom: '18px',
    display: 'block',
    '& .MuiOutlinedInput-root': {
      ' & fieldset': {
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '4px',
        backgroundColor: '#fcfcfb',
        width: '260px'
      },
      '&.Mui-focused fieldset': {
        border: '1px solid rgba(0,0,0,.2)',
        backgroundColor: '#fff',
        outline: '0'
      }
    },
    // '& fieldset': {
    //   border: '1px solid rgba(0,0,0,.1)',
    //   borderRadius: '4px',
    //   backgroundColor: '#fcfcfb',
    //   width: '260px'
    // //   '&:focus': {
    // //     border: '1px solid rgba(0,0,0,.1)',
    // //     backgroundColor: 'red',
    // //     outline: '0'
    // //   }
    // },
    // '&.Mui-focused fieldset': {
    //   border: '10px solid rgba(0,0,0,.1)',
    //   backgroundColor: 'red',
    //   outline: '0'
    // },

    '& label': {
      fontSize: '10px',
      fontWeight: '600',
      letterSpacing: '.5px',
      position: 'absolute',
      // display: 'inline-block',
      verticalAlign: 'middle',
      top: '14px',
      left: '12px',
      color: '#a5a4a4',
      textTransform: 'uppercase',
      transform: 'translateZ(0)',
      pointerEvents: 'none'
    },

    '&:hover label': {
      transform: 'translate3d(0,-8px,0) scale(.83333333)',
      lineHeight: '14px',
      color: '#a5a4a4'
    }

  }
);
export default StyledTextField;
