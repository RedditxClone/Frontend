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
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { TfiLayers } from 'react-icons/tfi';
import {
  StyledInputBase,
  StyledText,
  Home,
  StyledButton,
  StyledHomeIconButton
} from '../AppBar/AppBar.Style';
import SideDrawer from '../Drawer/Drawer';
import UserSettingsLogo from '../../../utilities/UserSettingsLogo/UserLogo';
/**
 * @typedef {PropType} state
 * @property {bool} Side this property describes if u want to see the SideDrawer or not and send it to SideElement
 * @property {bool} Open this property controls the list of the home if u want to show or not
 */

/**
 * description : this function describes the home box in the bar in case u are loggedin
 * it contains ur communities ,etc..
 * it returns the home box
 */
function HomeBox() {
  const [Side, setSide] = useState(false);
  const [Open, setOpen] = useState(false);
  const [Moderator, SetModetator] = useState(false);
  // by redux as it is global state

  // eslint-disable-next-line no-unused-vars
  const [MyCommunities, setMyCommunities] = useState([
    {
      imgsrc:
        'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      communityname: 'r/sports'
    }
  ]);
  const [ModComm, setModComm] = useState([]);
  const [MyFavComm, setMyFavComm] = useState([]);

  const favHandler = (community) => {
    // console.log('iam at the begnning');
    const CopyFavComm = [...MyFavComm];
    let found = false;
    if (MyFavComm.length !== 0) {
      found = CopyFavComm.map(
        (comm) => comm.communityname === community.communityname
      );
    } else {
      setMyFavComm((prevFavComm) => [community]);
      // console.log(MyFavComm);
      return;
    }
    //  console.log(found);
    if (found) {
      const NewFavComm = CopyFavComm.filter(
        (comm) => comm.communityname !== community.communityname
      );
      // console.log(NewFavComm);
      setMyFavComm((prevFavComm) => [NewFavComm]);
    } else {
      setMyFavComm((prevFavComm) => [...prevFavComm, community]);
    }
    // console.log(MyFavComm);
  };
  const communities = MyCommunities.map((comm) => (
    <MenuItem key={comm.name}>
      <img
        src={comm.imgsrc}
        alt={comm.communityname}
        style={{ width: '2rem', height: '2rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.communityname}
      </StyledButton>
      <IconButton onClick={() => favHandler(comm)}>
        <AiOutlineStar />
      </IconButton>
    </MenuItem>
  ));

  const ModeratorComm = ModComm.map((comm) => (
    <MenuItem key={comm.name}>
      <img
        src={comm.imgsrc}
        alt={comm.communityname}
        style={{ width: '2rem', height: '2rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.communityname}
      </StyledButton>
      <IconButton>
        <AiOutlineStar />
      </IconButton>
    </MenuItem>
  ));
  const FavComm = MyFavComm.map((comm) => (
    <MenuItem key={comm.name}>
      <img
        src={comm.imgsrc}
        alt={comm.communityname}
        style={{ width: '2rem', height: '2rem', borderRadius: '50%' }}
      />
      <StyledButton
        sx={{
          ml: '0.5rem'
        }}
      >
        {comm.communityname}
      </StyledButton>
      <IconButton>
        <AiOutlineStar />
      </IconButton>
    </MenuItem>
  ));
  /**
   * description : this handler controls the Side status
   */
  const handleSide = () => {
    setSide((current) => !current);
    setOpen(false);
  };
  /**
   * description : this handler controls the list of home select status
   */
  const handleopen = () => {
    setOpen((current) => !current);
  };

  return (
    <Home>
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
        onClick={handleopen}
        data-testid="homebutton"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <IconButton
            sx={{
              size: '1.5rem',
              color: 'black',
              '&.MuiButtonBase-root': { p: '0 0 0.3rem 0' }
            }}
          >
            <HiHome />
          </IconButton>
          <StyledText
            sx={{
              fontSize: '1rem',
              display: { xs: 'none', sm: 'block' }
            }}
            data-testid="homeinhomebutton"
          >
            Home
          </StyledText>
        </Box>
        <IconButton sx={{ '&.MuiButtonBase-root': { p: '0' } }}>
          {Open ? (
            <IconButton
              onClick={() => handleSide()}
              data-testid="sidedrawerbutton"
            >
              <BsLayoutTextSidebar style={{ size: '0.4rem' }} />
            </IconButton>
          ) : null}
          <MdExpandMore />
        </IconButton>
      </StyledButton>
      {Open ? (
        <Paper
          sx={{
            overflowY: 'auto',
            maxHeight: '250px',
            position: 'absolute',
            top: '55px',
            width: '275px'
          }}
          data-testid="homelist"
        >
          <MenuList sx={{ backgroundColor: 'white' }}>
            <MenuItem>
              <StyledInputBase
                placeholder="Filter"
                sx={{
                  width: '190px',
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
            {FavComm}
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>MODERATING</StyledText>
            </MenuItem>
            {Moderator ? { ModeratorComm } : null}
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
            <MenuItem>
              <StyledHomeIconButton>
                <IoIosAdd />
              </StyledHomeIconButton>
              <StyledButton sx={{ ml: '0.5rem' }}>
                Create Community
              </StyledButton>
            </MenuItem>
            {communities}
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
            </MenuItem>
            <MenuItem>
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
            <MenuItem>
              <UserSettingsLogo />
              <StyledButton sx={{ ml: '0.5rem' }}>User Settings</StyledButton>
            </MenuItem>
            <MenuItem>
              <UserSettingsLogo />
              <StyledButton sx={{ ml: '0.5rem' }}>Messages</StyledButton>
            </MenuItem>
            <MenuItem>
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
            <MenuItem>
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
          onClickSideIcon={handleSide}
          data-testid="sidedrawer"
        />
      ) : null}
    </Home>
  );
}

export default HomeBox;
