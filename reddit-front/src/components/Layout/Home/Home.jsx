/* eslint-disable padded-blocks */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { IconButton, MenuList, MenuItem, Paper, Box } from '@mui/material';
import { IoIosAdd, IoMdStats, IoIosNotificationsOutline } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { CgArrowTopRightO } from 'react-icons/cg';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineBarsArrowUp } from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { TfiLayers } from 'react-icons/tfi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  StyledInputBase,
  StyledText,
  Home,
  StyledButton,
  StyledHomeIconButton
  // StyledHomeBoxIcon
} from '../AppBar/AppBar.Style';
import SideDrawer from '../Drawer/Drawer';
import UserSettingsLogo from '../../../utilities/UserSettingsLogo/UserLogo';
import CreateCommunity from '../../CreateCommunity/CreateCommunity';
import ActionMessage from '../../ActionMessage/ActionMessage';
/**
 * @description this function describes the home box in the bar in case u are loggedin it contains ur communities ,etc..
 * @return {React.Component} the home box
 */
function HomeBox({ allkindcomm }) {
  const [Side, setSide] = useState(false);
  const [Open, setOpen] = useState(false);
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);
  const [homeCurrentState, setHomeCurrentState] = useState('');
  // by redux as it is global state

  // eslint-disable-next-line no-unused-vars
  /// ///////////////////////////V.I////////////////////////////////
  // dont forget to put the comm got from attributes allkindcomm object got from user
  // fav comm , mod comm and all comm i join in

  // for navigate
  const navigate = useNavigate();
  // for changing the path
  const location = useLocation();

  const routeToCommunity = (communityName) => {
    navigate(`/r/${communityName}`);
  };

  useEffect(() => {
    const MyLocation = window.location.href;
    let lastSegment = MyLocation.split('/').pop();
    if (lastSegment === '') {
      lastSegment = 'Home';
    }
    setHomeCurrentState(lastSegment);
    console.log('Location changed');
  }, [location]);

  const { myCommunities, moderatedCommunities } = useSelector(
    (state) => state.communities
  );

  const [MyFavComm, setMyFavComm] = useState([]);

  const communities = myCommunities.map((comm) => (
    <MenuItem
      key={comm.name}
      onClick={() => {
        routeToCommunity(comm.name);
        setOpen(false);
      }}
    >
      <img
        src={comm.icon}
        alt=""
        style={{ width: '2.4rem', height: '2.4rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.name}
      </StyledButton>
      <IconButton>
        <AiOutlineStar size="2rem" />
      </IconButton>
    </MenuItem>
  ));

  const ModeratorComm = moderatedCommunities.map((comm) => (
    <MenuItem
      key={comm.name}
      onClick={() => {
        routeToCommunity(comm.name);
        setOpen(false);
      }}
    >
      <img
        src={comm.icon}
        alt=""
        style={{ width: '2rem', height: '2rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.name}
      </StyledButton>
      <IconButton>
        <AiOutlineStar />
      </IconButton>
    </MenuItem>
  ));
  const FavComm = MyFavComm.map((comm) => (
    <MenuItem
      key={comm.name}
      onClick={() => routeToCommunity(comm.name)}
    >
      <img
        src={comm.imgsrc}
        alt=""
        style={{ width: '2.3rem', height: '2.3rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.name}
      </StyledButton>
      <IconButton>
        <AiOutlineStar size="2rem" />
      </IconButton>
    </MenuItem>
  ));
  /**
   * description : this handler controls the list of home select status
   */
  const handleOpen = () => {
    // setOpen((current) => !current);
    const OpenTemp = !Open;
    setOpen(OpenTemp);
    console.log('inhandleopen');
    console.log(Open);
  };
  /**
   * description : this handler controls the Side status
   */
  const handleSide = () => {
    handleOpen();
    // console.log('inhandleside(open)');
    // console.log(Open);
    const SideTemp = !Side;
    setSide(SideTemp);
    // console.log('inhandleside(side)');
    // console.log(Side);
  };
  const handleSideClose = () => {
    const SideTemp = !Side;
    setSide(SideTemp);
  };
  // useEffect(() => {
  //   const MyLocation = window.location.href;
  //   console.log(MyLocation);
  //   console.log('nada');
  // });
  // const handleScrollUp = () => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const userSettingsClickHandler = () => {
    navigate('/settings/account');
  };

  const notificationsClickHandler = () => {
    navigate('/settings/notifications');
  };

  const messagingClickHandler = () => {
    navigate('/message/selfreply');
  };
  const homeClickHandler = () => {
    navigate('/');
  };
  const createPostClickHandler = () => {
    navigate('/submit');
  };
  return (
    <Home>
      <CreateCommunity
        open={openCreateCommunity}
        setOpen={setOpenCreateCommunity}
      />
      <StyledButton
        sx={{
          width: '100%',
          height: '50px',
          position: 'relative',
          justifyContent: 'space-between',
          ':hover': { border: '1px solid #DAE0E2', borderRadius: '3px' },
          '&.MuiButtonBase-root': {
            justifyContent: 'space-between',
            minWidth: '0'
          }
        }}
        onClick={handleOpen}
        data-testid="homebutton"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <IconButton
            sx={{
              fontSize: '2rem',
              color: 'black',
              '&.MuiButtonBase-root': { p: '0 0 0.3rem 0' }
            }}
          >
            <HiHome />
            {/* {HomeBoxIcon} */}
          </IconButton>
          <StyledText
            sx={{
              fontSize: '1.5rem',
              display: { xs: 'none', sm: 'block' }
            }}
            data-testid="homeinhomebutton"
          >
            {homeCurrentState}
          </StyledText>
        </div>
        <IconButton sx={{ '&.MuiButtonBase-root': { p: '0' } }}>
          {Open ? (
            <IconButton
              onClick={handleSide}
              data-testid="sidedrawerbutton"
            >
              <BsLayoutTextSidebar size="2rem" />
            </IconButton>
          ) : null}
          <MdExpandMore size="2rem" />
        </IconButton>
      </StyledButton>
      {Open ? (
        <Paper
          sx={{
            overflowY: 'auto',
            maxHeight: '250px',
            position: 'absolute',
            top: '55px',
            width: '23rem'
          }}
          data-testid="homelist"
        >
          <MenuList sx={{ backgroundColor: 'white' }}>
            <MenuItem>
              <StyledInputBase
                placeholder="Filter"
                sx={{
                  fontSize: '1.5rem',
                  width: '18rem',
                  backgroundColor: '#DAE0E0',
                  borderRadius: '0px',
                  pl: '6px',
                  ':hover': { border: '1px solid #4d4dff' }
                }}
              />
            </MenuItem>
            {MyFavComm.length ? (
              <MenuItem>
                <StyledText
                  sx={{ fontSize: '13px' }}
                  data-testid="favinhomelist"
                >
                  FAVORITES
                </StyledText>
              </MenuItem>
            ) : null}
            <MenuItem>
              {FavComm}
              <StyledText sx={{ fontSize: '13px' }}>MODERATING</StyledText>
            </MenuItem>
            {ModeratorComm}
            <MenuItem>
              <StyledHomeIconButton>
                <TfiLayers />
              </StyledHomeIconButton>
              <StyledButton
                sx={{ ml: '0.5rem' }}
                data-testid="r/mod"
              >
                r/Mod
              </StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>
                YOUR COMMNUNITIES
              </StyledText>
            </MenuItem>
            <MenuItem onClick={() => setOpenCreateCommunity(true)}>
              <StyledHomeIconButton>
                <IoIosAdd />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.3rem' }}>
                Create Community
              </StyledButton>
            </MenuItem>
            {communities}
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
            </MenuItem>
            <MenuItem onClick={homeClickHandler}>
              <StyledHomeIconButton
                sx={{
                  '&.MuiButtonBase-root': {
                    pb: '0.4rem'
                  }
                }}
              >
                <HiHome />
              </StyledHomeIconButton>
              <StyledButton
                sx={{ ml: '0.5rem' }}
                data-testid="homeinhomelist"
              >
                Home
              </StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledHomeIconButton>
                <CgArrowTopRightO />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>Popular</StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledHomeIconButton>
                <IoMdStats />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>All</StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>OTHER</StyledText>
            </MenuItem>
            <MenuItem onClick={userSettingsClickHandler}>
              <UserSettingsLogo />
              <StyledButton sx={{ ml: '0.5rem' }}>User Settings</StyledButton>
            </MenuItem>
            <MenuItem onClick={messagingClickHandler}>
              <UserSettingsLogo />
              <StyledButton sx={{ ml: '0.5rem' }}>Messages</StyledButton>
            </MenuItem>
            <MenuItem onClick={createPostClickHandler}>
              <StyledHomeIconButton>
                <IoIosAdd />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>Create Post</StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledHomeIconButton>
                <HiOutlineBarsArrowUp />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>Top Communities</StyledButton>
            </MenuItem>
            <MenuItem onClick={notificationsClickHandler}>
              <StyledHomeIconButton>
                <IoIosNotificationsOutline />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>Notifications</StyledButton>
            </MenuItem>
          </MenuList>
        </Paper>
      ) : null}
      {Side ? (
        <SideDrawer
          showSideBar={Side}
          onClickSideIcon={handleSideClose}
          data-testid="sidedrawer"
        />
      ) : null}
    </Home>
  );
}

export default HomeBox;
