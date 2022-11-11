// /* eslint-disable */
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Card, styled } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
/**
 * Global style for Home Page Cards
 */

/**
 * Responsively showing cards or not
 */

export const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

/**
 * Modify the style of the default link
 * @param {Link} Link - the default link
 * @return {Link} - The styled link
 */

export const StyledLink = styled(Link)({
  fontSize: '12px',
  color: '#1a1b1a',
  padding: '0.4rem'
});

/**
 * Modify the style of the default Box to use it to display a row
 * @param {Box} Box - the default Box
 * @return {Box} - The styled Box
 */

export const StyledRowBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

/**
 * Modify the style of the default Box to use it to display a column
 * @param {Box} Box - the default Box
 * @return {Box} - The styled Box
 */

export const StyledColBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});
/**
 * Modify the style of the default Box
 * @param {Box} Box - the default Box
 * @return {Box} - The styled Box
 */

export const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #D7DEF2',
  backgroundColor: '#FFFFFF',
  padding: '0.8rem',
  borderRadius: '0.5rem',
  height: '5rem',
  justifyContent: 'center',
  margin: '2rem'
});
/**
 * Modify the style of the default TextField
 * @param {TextField} TextField - the default TextField
 * @return {TextField} - The styled TextField
 */

export const StyledTextField = styled(TextField)({
  padding: '0.6rem',
  alignSelf: 'center',
  marginBottom: '20px',
  marginTop: '20px',
  '& div': {
    backgroundColor: '#FAFAFA',
    fontSize: '1.5rem',
    height: '4rem'
  }
});

/**
 * Modify the style of the default Button to be rounded
 * @param {Button} Button - the default Button
 * @return {Button} - The styled Button
 */

export const RoundedButton = styled(Button)(() => ({
  borderRadius: '2rem',
  margin: '1rem',
  textTransform: 'capitalize',
  alignSelf: 'flex-end'
}));

/**
 * Modify the style of the default Button
 * @param {Button} Button - the default Button
 * @return {Button} - The styled Button
 */

export const OverButton = styled(Button)({
  fontSize: '1.6rem',
  color: '#ffffff',
  textTransform: 'capitalize'
});

/**
 * Modify the style of the default Button
 * @param {Button} Button - the default Button
 * @return {Button} - The styled Button
 */

export const StyledButton = styled(Button)({
  fontSize: '1.6rem',
  borderRadius: '20px',
  margin: '0.2rem',
  borderColor: '#DAE0E6',
  color: '#9DA0A1',
  textTransform: 'capitalize',
  ':hover': {
    backgroundColor: '#EDEDED',
    cursor: 'pointer'
  }
});

/**
 * Modify the style of the default MenuItem
 * @param {MenuItem} MenuItem - the default MenuItem
 * @return {MenuItem} - The styled MenuItem
 */

export const StyledMenuItem = styled(MenuItem)({
  color: '#9DA0A1',
  padding: '0.5rem',
  fontSize: '1.6rem',
  '&li:hover': { backgroundColor: 'blue' }
});

export const LargeRoundedButton = styled(RoundedButton)({
  alignSelf: 'center',
  width: '90%',
  fontSize: '1.3rem',
  padding: '4px 7px',
  '&:hover': {
    backgroundColor: '#F5FAFD'
  },
  '&:active': {
    backgroundColor: '#F5FAFD'
  }
});

export const StyledCard = styled(Card)({
  padding: '0', maxWidth: 345, border: '1px solid #1a1a1b12', borderRadius: '5px'
});
/**
 * Responsively changing the width of the Create Post Card
 * and Best Hot New Card that is displayed in the home screen
 */

export const CreatePostCardRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    width: '50%'
  },
  [theme.breakpoints.down('lg')]: {
    width: '65%'
  },
  [theme.breakpoints.down('md')]: {
    width: '95%'
  }
}));
