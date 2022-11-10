import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)({
  display: 'block',
  '& .MuiOutlinedInput-root': {
    ' & fieldset': {
      outline: 0,
      border: '1px solid rgba(0,0,0,.1)',
      borderRadius: '4px',
      width: '280px'
    },
    fontSize: '1.5rem'
  }
  //   '& .MuiOutlinedInput-root': {
  //     ' & fieldset': {
  //       border: '1px solid rgba(0,0,0,.1)',
  //       borderRadius: '4px',
  //       width: '26rem'
  //     },
  //     '&.Mui-focused fieldset': {
  //       border: '1px solid rgba(0,0,0,.2)',
  //       outline: '0'
  //     }
  //   },
  //   '& label': {
  //     fontSize: '1.2rem',
  //     fontWeight: '500',
  //     letterSpacing: '.5px',
  //     color: '#a5a4a4',
  //     textTransform: 'uppercase'
  //   }

  //   '&:hover label': {
  //     transform: 'translate3d(0,-0.8rem,0) scale(.83333333)',
  //     lineHeight: '1.4rem',
  //     color: '#a5a4a4'
  //   }
});
export default StyledTextField;
