/* eslint-disable object-curly-newline */
import { Button, styled, Typography, TextField } from '@mui/material';

export const StyledButton = styled(Button)({
  height: '60%',
  color: 'black',
  textTransform: 'none',
  fontSize: '1.5rem',
  padding: '1.5rem 2rem',
  border: '0.1rem solid #75B3E2',
  borderRadius: '4rem',
  marginRight: '1.5rem'

  // '&.MuiButtonBase-root': {
  //   justifyContent: 'normal'
  // }
});
export const StyledTextField = styled(TextField)({
  fontSize: '3rem',
  paddingTop: '2rem',
  width: '30rem',
  '&.MuiFormControl-root': {
    padding: '0'
  }

  // '&.MuiInputBase-root': {
  //   height: '15rem'
  // }
});

export const Head = styled('div')({
  width: '100%',
  backgroundColor: '#EDEFF1',
  height: '7%',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'flex-end',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const StyledText = styled(Typography)({
  color: 'black',
  fontSize: '2rem',
  // padding: '0',
  textTransform: 'none',
  height: '8%',
  width: '80%',
  marginLeft: '20rem',

  '&.MuiTypography-root': {
    padding: '1.5rem 0'
  }
});

export const Content = styled('div')({
  width: '80%',
  backgroundColor: '#FFFFFF',
  height: '80%',
  color: 'black',
  // display: 'flex',
  // flexDirection: 'row',
  borderRadius: '1rem',
  // alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginLeft: '20rem'
});
export const PostFlairTab = styled('div')({
  height: '75rem',
  width: '100%',
  backgroundColor: '#DAE0E6'
});
export const Body = styled('div')({
  backgroundColor: '#DAE0E6',
  height: '93%',
  width: '100%'
  // marginLeft: '4rem'
});

export const FirstRow = styled('div')({
  color: 'black',
  height: '10%',
  width: '100%',
  borderRadius: '1rem 1rem 0 0',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#EDEFF1',
  // padding: '1.5rem 0'
  alignItems: 'center'
  // justifyContent: 'center'
});

export const FirstRowText = styled('p')({
  color: '#878A8C',
  fontSize: '1rem'
});
export const SecondRowFlairs = styled('div')({
  // alignItems: 'center',
  height: '90%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
  // justifyItems: 'center'
  // justifyContent: 'center'
});
export const SecondRowText = styled('p')({
  color: 'black',
  fontSize: '1.5rem',
  margin: '0.5rem'
});
export const Flairs = styled('div')({
  alignItems: 'center',
  // height: '90%',
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
  // justifyItems: 'center'
  // justifyContent: 'center'
});
export const AddFlairLayout = styled('div')({
  height: '90%',
  // marginTop: '4rem',
  backgroundColor: '#EDEFF1',
  paddingLeft: '3rem'
});
export const FlairBackGround = styled('div')({
  width: '26%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});
export const FlairTextColor = styled('div')({
  width: '26%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});
// export const StyledInputBase = styled(InputBase)({
//   width: '90%',
//   height: '100%',
//   padding: '0',
//   borderRadius: '15px'
// });
