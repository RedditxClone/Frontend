import {
  Toolbar,
  styled,
  InputBase,
  Typography,
  Select,
  Button,
  TextField,
  IconButton
} from '@mui/material';

export const StyledToolBar = styled(Toolbar)({
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'row',
  maxHeight: '50px',
  position: 'relative',
  margin: '0',
  zIndex: '1000'
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

// export const SearchContainer = styled('div')({
//   flexBasis: '50%'
// });

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
export const Icons = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  alignItems: 'center',
  marginLeft: '0.3rem',
  marginRight: '0.3rem',
  height: '100%',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '10%',
    marginLeft: '0',
    marginRight: '0',
    justifyContent: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '16%',
    justifyContent: 'space-between'
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '11%',
    justifyContent: 'space-between'
  },
  [theme.breakpoints.up('lg')]: {
    flexBasis: '10%',
    justifyContent: 'space-between',
    marginLeft: '0.4rem',
    marginRight: '0.4rem'
  }
}));
export const StyledLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '50%',
  // marginRight: '5px',
  cursor: 'pointer',

  [theme.breakpoints.up('xs')]: {
    flexBasis: '10%',
    justifyContent: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '6%'
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '12.5%'
  },
  [theme.breakpoints.up('lg')]: {
    flexBasis: '10%'
  }
}));

export const Home = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '10%'
  },
  [theme.breakpoints.up('sm')]: {
    // flexBasis: '15%'
    flexBasis: '20%'
  }
}));

export const StyledButton = styled(Button)({
  width: '100%',
  height: '5%',
  color: 'black',
  textTransform: 'none',
  fontSize: '15px',
  padding: '0',
  '&.MuiButtonBase-root': {
    justifyContent: 'normal'
  }
});

export const StyledHomeIconButton = styled(IconButton)({
  color: '#1A3043',
  fontSize: '2rem',
  '&.MuiButtonBase-root': {
    padding: '0.2rem'
  }
});

// export const StyledHomeBoxIcon = styled(IconButton)({
//   fontSize: '2rem',
//   color: 'black',
//   '&.MuiButtonBase-root': { p: '0 0 0.3rem 0' }
// });
export const StyledTtextField = styled(TextField)({
  heigh: '20%'
});

export const ProfileContainer = styled('div')(({ theme }) => ({
  height: '50px',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '15%'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '15%'
  },
  [theme.breakpoints.up('lg')]: {
    flexBasis: '20%'
  }
}));

export const ProfileLogging = styled('div')(({ theme }) => ({
  marginLeft: '0.6rem',
  width: '100%',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '20%'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '10%'
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '5%'
  }
}));

export const SignInBox = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  '&.MuiButtonBase-root': { minwidth: '0' },
  [theme.breakpoints.up('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    flexBasis: '10%',
    marginLeft: '0.5rem',
    marginRight: '0.5rem'
  }
}));

export const LogInBox = styled('div')(({ theme }) => ({
  backgroundColor: '#0079D3',
  borderRadius: '15px',
  marginLeft: '0.2rem',

  ':hover': {
    backgroundColor: ' #1484D6'
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    flexBasis: '10%'
  }
}));

export const BackToTop = styled('div')(({ theme }) => ({
  borderRadius: '2rem',
  backgroundColor: '#1484D6',
  padding: '0.3rem 1.5rem',
  position: 'fixed',
  'button:hover': {
    color: 'white'
  },
  [theme.breakpoints.up('xs')]: {
    top: '95%',
    left: '50%'
  },
  [theme.breakpoints.up('sm')]: {
    top: '94.5%',
    left: '70%'
  }
}));

export const MessageAlert = styled('div')(({ theme }) => ({
  borderRadius: '0.2rem',
  border: '0.02rem solid #D4D7D9',
  width: '25%',
  height: '6%',
  backgroundColor: 'white',
  position: 'fixed',
  // [theme.breakpoints.up('xs')]: {
  //   top: '48.5rem',
  //   left: '11rem'
  // },
  // [theme.breakpoints.up('sm')]: {
  //   top: '48.5rem',
  //   left: '26rem'
  // },
  // [theme.breakpoints.up('md')]: {
  //   top: '48.5rem',
  //   left: '40rem'
  // },
  // [theme.breakpoints.up('lg')]: {
  //   top: '48.5rem',
  //   left: '55rem'
  // },
  [theme.breakpoints.up('xs')]: {
    top: '92%',
    left: '40%'
  }
}));
