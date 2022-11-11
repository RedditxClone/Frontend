import { useState } from 'react';
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
  const [Logged, setLogged] = useState(false);

  const handlerLogIn = () => {
    setLogged((current) => !current);
  };

  return (
    <StyledToolBar id={topid}>
      <Logo />
      {Logged && <HomeBox />}
      <SearchBox login={Logged} />
      {Logged && <IconsBox />}
      {Logged && <Profile />}
      {!Logged && <SignUp />}
      {!Logged && <LogIn clicked={() => handlerLogIn()} />}
      {!Logged && <ProfileLogin clicked={() => handlerLogIn()} />}
    </StyledToolBar>
  );
}

export default AppBarReddit;
