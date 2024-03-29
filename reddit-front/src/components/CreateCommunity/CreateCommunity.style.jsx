import {
  Button,
  Checkbox,
  createTheme,
  styled,
  Card,
  CardHeader
} from '@mui/material';

/**
 * Global Style for Create Community
 */

/**
 * adjust the break points of the theme
 * @type {theme}
 */

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 550,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});

theme.typography.htmlFontSize = 10;

/**
 * Adjust the typography h1 and its media query
 */
theme.typography.h1 = {
  fontSize: '1.6rem',
  color: '#1c1c1c',
  fontWeight: '500',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.2rem'
  }
};

/**
 * Adjust the typography h2 and its media query
 */
theme.typography.h2 = {
  fontSize: '1.4rem',
  color: '#1c1c1c',
  fontWeight: '500',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem'
  }
};

/**
 * Adjust the typography h3 and its media query
 */
theme.typography.h3 = {
  fontSize: '1.2rem',
  color: '#1c1c1c',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem'
  }
};

/**
 * Adjust the typography subtitle1 and its media query
 */
theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  color: '#7c7c7c',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem'
  }
};

/**
 * Adjust the typography subtitle2 and its media query
 */
theme.typography.subtitle2 = {
  fontSize: '1.1rem',
  color: '#7c7c7c',

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.7rem'
  }
};

/**
 * Modify the style of the default card
 * @param {Card} Card - the default card
 * @return {Card} - The styled card
 */

export const CenteredCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '56.8rem',
  maxWidth: '90%',
  maxHeight: '100vh',
  padding: '1rem'
});

/**
 * Modify the style of the default cardHeader
 * @param {CardHeader} CardHeader - the default cardHeader
 * @return {CardHeader} - The styled cardHeader
 */
export const CardHeaderUnderlined = styled(CardHeader)({
  borderBottom: '1px solid #edeff1;',
  marginBottom: '1.2rem'
});

/**
 * Modify the style of the default input
 * @param {input} input - the default input
 * @return {input} - The styled input
 */

export const CommunityNameTextField = styled('input')({
  backgroundColor: '#fff',
  border: '1px solid #edeff1',
  color: '#1c1c1c',
  height: '3.5rem',
  marginBottom: '0.8rem',
  borderRadius: '0.4rem',
  width: '100%',
  padding: '1.2rem 1.2rem 1.2rem 2rem ',
  boxSizing: 'border-box',
  fontSize: '1.4rem',
  fontWeight: '500',
  '&:focus': {
    outline: '1px solid #000'
  }
});

/**
 * Modify the style of the default CheckBox
 * @param {CheckBox} CheckBox - the default CheckBox
 * @return {CheckBox} - The styled CheckBox
 */

export const WiderCheckBox = styled(Checkbox)({
  '& > svg': {
    width: '2rem',
    height: '2rem',
    [theme.breakpoints.down('md')]: {
      width: '1.5rem',
      height: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      width: '1rem',
      height: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      width: '0.8rem',
      height: '0.8rem'
    }
  },
  padding: 0
});

/**
 * Modify the style of the default div to have a background of nsfw flair
 * @param {div} div - the default div
 * @return {div} - The styled div to wrap the flair
 */
export const FlairWrapper = styled('div')({
  fontSize: '1.2rem',
  display: 'inline-block',
  textAlign: 'center',
  backgroundColor: '#ff585b',
  color: '#fff',
  padding: '0 0.4rem',
  margin: '0 0.4rem 0 0.8rem',
  borderRadius: '2px',
  fontWeight: '500',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem'
  }
});

/**
 * Modify the style of the default Button
 * @param {Button} Button - the default Button
 * @return {Button} - The styled Button
 */
export const StyledButton = styled(Button)(() => ({
  borderRadius: '1000rem',
  fontSize: '1.4rem',
  fontWeight: '700',
  textTransform: 'capitalize',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem'
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem'
  }
}));

/**
 * Modify the style of the default span to have a black background and white color
 * @param {span} span - the default span
 * @return {span} - The styled span
 */

export const InfoBox = styled('span')({
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '1.1rem',
  fontWeight: '500',
  display: 'block',
  padding: '0.5rem',
  zIndex: '100',
  borderRadius: '0.5rem',
  maxWidth: '35rem',
  position: 'absolute'
});

export default theme;
