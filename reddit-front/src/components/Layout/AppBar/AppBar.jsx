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
* @description this function is the main function which describes the navigation bar as
  loggedin or not it consists of many components
* @param {string} topid this an id for nav bar used when back to top button to scroll up to it
* @return {React.Component} the navigation bar of the site
*/
function AppBarReddit() {
  const { isAuth, user } = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);

  return (
    <StyledToolBar id="navbar">
      <Logo />
      {isAuth && <HomeBox allkindcomm={user} />}
      <SearchBox login={isAuth} />
      {isAuth && <IconsBox />}
      {isAuth && <Profile />}
      {!isAuth && <SignUp />}
      {!isAuth && <LogIn />}
      {!isAuth && <ProfileLogin />}

      {/* <Logo />
      {true && <HomeBox allkindcomm={user} />}
      <SearchBox login={isAuth} />
      {true && <IconsBox />}
      {true && <Profile />}
      {false && <SignUp />}
      {false && <LogIn />}
      {false && <ProfileLogin />} */}
    </StyledToolBar>
  );
}

export default AppBarReddit;
