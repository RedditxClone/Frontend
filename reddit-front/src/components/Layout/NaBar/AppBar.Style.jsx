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

/**
 *@description this for styling toolbar of nav bar
 *@param {Toolbar} Toolbar which is built in in material ui
 *@return {React.Component} the the styling of tool bar but customized
 */

export const StyledToolBar = styled(Toolbar)({
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'row',
  maxHeight: '50px',
  position: 'relative',
  margin: '0'
});

/**
 *@description this for styling search of nav bar
 *@param {div} div simply div from html
 *@return {React.Component} the the styling of div as search
 */

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

/**
 *@description this for styling for the three icons in nav bar
 *@param {div} div simply div from html
 *@param {theme} theme for creating one for responive mode
 *@return {React.Component} the the styling of div as icons
 */

export const Icons = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '0.3rem',
  marginRight: '0.3rem',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '5%'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '10%'
  }
}));

/**
 *@description this for styling the selectbox in nav bar
 *@param {Select} Select select box from material ui
 *@return {React.Component} the the styling of select as profile list
 */

export const StyledSelect = styled(Select)({
  width: '100%',
  height: '100%',
  padding: '0',
  color: 'black'
});

/**
 *@description this for styling the InputBase for search in nav bar
 *@param {InputBase} InputBase InputBase box from material ui
 *@return {React.Component} the the styling of InputBase as Input for search
 */

export const StyledInputBase = styled(InputBase)({
  width: '90%',
  height: '100%',
  padding: '0',
  borderRadius: '15px'
});

/**
 *@description this for styling the Typography for any parapgrah in nav bar
 *@param {Typography} Typography InputBase box from material ui
 *@return {React.Component} the the styling of Typography in navbar
 */

export const StyledText = styled(Typography)({
  color: 'black',
  fontSize: '15px',
  padding: '0',
  textTransform: 'none'
});

/**
 *@description this for styling the div for the logo f reddit in nav bar
 *@param {div} div  div html
 *@param {theme} theme for styling reddit logo in responsive mode
 *@return {React.Component} the the styling of reddit logo in navbar
 */

export const StyledLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  // gap: '1px',
  flexBasis: '10%',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50%',
  marginRight: '5px',

  [theme.breakpoints.up('xs')]: {
    flexBasis: '5%'
  },
  [theme.breakpoints.up('md')]: {
    flexBasis: '10%'
  }
}));

/**
 *@description this for styling the div for the home in nav bar
 *@param {div} div  div html
 *@param {theme} theme for styling home in responsive mode
 *@return {React.Component} the styling of home in navbar
 */
export const Home = styled('div')(({ theme }) => ({
  height: '100%',
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '10%'
  },
  [theme.breakpoints.up('sm')]: {
    flexBasis: '20%'
  }
}));

/**
 *@description this for styling the div for basics of any button in nav bar
 *@param {Button} Button button in mui
 *@return {React.Component} the styling of button in navbar
 */
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
/**
 *@description this for styling the div for HomeIconButton in home in nav bar
 *@param {IconButton} IconButton iconbutton in mui
 *@return {React.Component} the styling of iconbutton in home in navbar
 */
export const StyledHomeIconButton = styled(IconButton)({
  color: '#1A3043',
  fontsize: '1.4rem',
  '&.MuiButtonBase-root': {
    padding: '0.2rem'
  }
});

/**
 *@description this for styling the div for TextField in nav bar
 *@param {TextField} TextField TextField in mui
 *@return {React.Component} the styling of TextField in navbar
 */

export const StyledTtextField = styled(TextField)({
  heigh: '20%'
});

/**
 *@description this for styling the div for profile in nav bar
 *@param {theme} theme for styling profile in nav bar in responive mode
 *@param {div} div html
 *@return {React.Component} the styling of profile in navbar in case logged in
 */

export const ProfileContainer = styled('div')(({ theme }) => ({
  height: '50px',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    flexBasis: '20%'
  }
}));
/**
 *@description this for styling the div for profile in nav bar  in case not logged in
 *@param {theme} theme for styling profile in nav bar in responive mode in case not logged in
 *@param {div} div html
 *@return {React.Component} the styling of profile in navbar
 */
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

/**
 *@description this for styling the div for signin in nav bar  in case not logged in
 *@param {theme} theme for styling signin in nav bar in responive mode in case not logged in
 *@param {div} div html
 *@return {React.Component} the styling of signinbox in navbar
 */
export const SignInBox = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  marginLeft: '0.2rem',
  '&.MuiButtonBase-root': { minwidth: '0' },
  [theme.breakpoints.up('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    flexBasis: '10%'
  }
}));
/**
 *@description this for styling the div for login in nav bar  in case not logged in
 *@param {theme} theme for styling login in nav bar in responive mode in case not logged in
 *@param {div} div html
 *@return {React.Component} the styling of login box in navbar
 */
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
/**
 *@description this for styling the div for back to top in any page
 *@param {theme} theme for styling backtotop button in responive mode
 *@param {div} div html
 *@return {React.Component} the styling of backtotop
 */
export const BackToTop = styled('div')(({ theme }) => ({
  borderRadius: '1rem',
  backgroundColor: '#1484D6',
  padding: '0.3rem 1.5rem',
  position: 'fixed',
  [theme.breakpoints.up('xs')]: {
    top: '48.5rem',
    left: '11rem'
  },
  [theme.breakpoints.up('sm')]: {
    top: '48.5rem',
    left: '26rem'
  },
  [theme.breakpoints.up('md')]: {
    top: '48.5rem',
    left: '40rem'
  },
  [theme.breakpoints.up('lg')]: {
    top: '48.5rem',
    left: '55rem'
  }
  // [theme.breakpoints.up('xl')]: {
  //   top: '44rem',
  //   left: '65rem'
  // }
}));
/**
 *@description this for styling the div for MessageAlert for any action taken in the page
 *@param {theme} theme for styling messagealert in responive mode
 *@param {div} div html
 *@return {React.Component} the styling of messagealert
 */

export const MessageAlert = styled('div')(({ theme }) => ({
  borderRadius: '0.2rem',
  border: '0.02rem solid #D4D7D9',
  width: '25rem',
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
  [theme.breakpoints.up('lg')]: {
    top: '43rem',
    left: '35rem'
  }
}));
