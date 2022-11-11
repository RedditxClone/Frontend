import { useSelector } from 'react-redux';
import { StyledToolBar } from './AppBar.Style';
import Logo from '../Logo/Logo';
import HomeBox from '../Home/Home';
import IconsBox from '../Icons/Icons';
import SearchBox from '../Search/Search';
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import ProfileLogin from '../ProfileLogging/ProfileLogging';

/**
 *description : this function is the main function which describes the navigation bar as loggedin
 *or not it consists of many components
 *it returns the navigation bar of the site
 */
function AppBarReddit({ topid }) {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <StyledToolBar id={topid}>
      <Logo />
      {isAuth && <HomeBox />}
      <SearchBox login={isAuth} />
      {isAuth && <IconsBox />}
      {isAuth && <Profile />}
      {!isAuth && <SignUp />}
      {!isAuth && <LogIn />}
      {!isAuth && <ProfileLogin />}
    </StyledToolBar>
  );
}

export default AppBarReddit;
