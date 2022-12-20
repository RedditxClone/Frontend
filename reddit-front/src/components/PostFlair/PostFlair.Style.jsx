/* eslint-disable object-curly-newline */
import { Button, styled, Typography, TextField } from '@mui/material';

export const StyledButton = styled(Button)({
  height: '1.5rem',
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
  marginTop: '4.6rem',
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
  width: '73%',
  marginLeft: '10rem',

  '&.MuiTypography-root': {
    padding: '1.5rem 0'
  }
});

export const Content = styled('div')({
  width: '75%',
  backgroundColor: '#FFFFFF',
  height: '70%',
  color: 'black',
  // display: 'flex',
  // flexDirection: 'row',
  borderRadius: '1rem',
  // alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginLeft: '10rem'
});
export const PostFlairTab = styled('div')({
  height: '75rem',
  width: '100%',
  backgroundColor: '#DAE0E6'
});
export const Body = styled('div')({
  backgroundColor: '#DAE0E6',
  // height: '93%',
  width: '100%'
  // borderRadius: '0 0 1rem 1rem'
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
  // height: '90%',
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  marginLeft: '10rem',
  backgroundColor: '#FFFFFF',
  height: '70%',
  width: '75%',
  borderRadius: '1rem'

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
  paddingLeft: '3rem',
  borderRadius: '0 0 1rem 1rem'
  // borderRadius: '1rem'
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
export const LastPartAddFlair = styled('div')({
  width: '100%',
  marginTop: '8rem',
  // marginBottom: '10rem',
  // paddingBottom: '3rem',
  height: '7%',
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'flex-end',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const DeleteCard = styled('div')({
  width: '25%',
  backgroundColor: 'white',
  height: '25%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '1rem'
});

export const DeleteCardFirst = styled('div')({
  width: '100%',
  height: '25%',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  borderBottom: '0.2rem solid #EDEFF1',
  // alignItems: 'flex-end',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '1rem 1rem 0 0'
});
export const DeleteCardSecond = styled('div')({
  width: '100%',
  backgroundColor: 'white',
  height: '40%',
  color: 'black',
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});
export const DeleteCardThird = styled('div')({
  width: '100%',
  backgroundColor: '#EDEFF1',
  height: '35%',
  color: 'black',
  display: 'flex',
  flexDirection: 'row',
  // alignItems: 'flex-end',
  justifyContent: 'flex-end',
  alignItems: 'center',
  borderRadius: '0 0 1rem 1rem'
});

export const AllFlairs = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

// export const Flair = styled('div')({
//   // width: '10%'
//   // justifyContent: 'center'
// });

export const FlairsAction = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center'
});
// export const StyledInputBase = styled(InputBase)({
//   width: '90%',
//   height: '100%',
//   padding: '0',
//   borderRadius: '15px'
// });