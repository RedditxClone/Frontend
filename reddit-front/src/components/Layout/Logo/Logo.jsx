import { BsReddit } from 'react-icons/bs';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StyledLogo } from '../AppBar/AppBar.Style';
import RedditLogo from '../../../utilities/RedditLogo/RedditLogo';

const Sec1 = styled('div')(({ theme }) => ({
  color: '#FF4500',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    fontSize: '2rem'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    fontSize: '2.5rem'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    fontSize: '2.5rem'
  }
}));

const Sec2 = styled('div')(({ theme }) => ({
  width: '5rem',
  marginLeft: '0.5rem',
  [theme.breakpoints.up('xs')]: {
    display: 'none'
  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}));
/**
 * description : this function for the first section in the nav bar which is the package of
 * Logo of reddit
 * it return the whole logo of reddit
 */
function Logo() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };
  return (
    <StyledLogo onClick={clickHandler}>
      <Sec1 data-testid="redditimg">
        <BsReddit />
      </Sec1>
      <Sec2 data-testid="redditword">
        <RedditLogo />
      </Sec2>
    </StyledLogo>
  );
}

export default Logo;
