import {
  Toolbar,
  styled,
  Box,
  InputBase,
  Typography,
  Select,
  Button,
  TextField
} from '@mui/material';

export const StyledToolBar = styled(Toolbar)({
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'row',
  maxHeight: '50px',
  position: 'fixed',
  margin: '0'
});

export const Search = styled('div')({
  backgroundColor: '#DAE0E2',
  padding: '0px',
  height: '50%',
  alignItems: 'center',
  display: 'flex',
  gap: '5px',
  borderRadius: '15px',
  ':hover': {
    border: '1px solid #0079D3'
  }
  // maxWidth: '50%'
});

export const SearchContainer = styled('div')({
  flexBasis: '50%'
});

export const Icons = styled(Box)({
  display: 'flex',
  backgroundColor: 'white',
  gap: '10px',
  alignItems: 'center',
  flexBasis: '15%',
  marginLeft: '5px',
  marginRight: '5px'
});

export const StyledSelect = styled(Select)({
  width: '100%',
  height: '100%',
  padding: '0',
  color: 'black'
});

export const StyledInputBase = styled(InputBase)({
  width: '90%',
  height: '100%',
  padding: '0',
  borderRadius: '15px'
});
export const StyledText = styled(Typography)({
  color: 'black',
  fontSize: '15px',
  padding: '0',
  textTransform: 'none'
});

export const StyledLogo = styled(Box)({
  display: 'flex',
  // gap: '1px',
  flexBasis: '10%',
  alignItems: 'center',
  height: '50%',
  marginRight: '5px'
});

export const Home = styled(Box)({
  flexBasis: '20%',
  height: '100%',
  position: 'relative'
});

export const StyledButton = styled(Button)({
  width: '100%',
  height: '5%',
  color: 'black',
  textTransform: 'none',
  fontSize: '15px',
  padding: '0'
});

export const StyledTtextField = styled(TextField)({
  heigh: '20%'
});

export const ProfileContainer = styled('div')({
  flexBasis: '20%',
  height: '50px',
  alignItems: 'center'
});

export const ProfileLogging = styled('div')({
  flexBasis: '5%',
  marginLeft: '10px'
});

export const SignInBox = styled('div')({
  flexBasis: '10%',
  backgroundColor: 'white',
  marginLeft: '10px'
});

export const LogInBox = styled('div')({
  flexBasis: '10%',
  backgroundColor: '#0079D3',
  borderRadius: '15px',
  marginLeft: '10px',

  ':hover': {
    backgroundColor: ' #1484D6'
  }
});

export const BackToTop = styled('div')({
  borderRadius: '1rem',
  backgroundColor: '#1484D6',
  padding: '0.3rem 1.5rem',
  position: 'fixed',
  top: '44.5rem',
  left: '65rem'
});
