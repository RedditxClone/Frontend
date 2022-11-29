/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosAdd, IoMdStats, IoIosNotificationsOutline } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { HiOutlineBarsArrowUp } from 'react-icons/hi2';
import { CgArrowTopRightO } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  StyledInputBase,
  StyledText,
  StyledButton
} from '../AppBar/AppBar.Style';
import CreateCommunity from '../../CreateCommunity/CreateCommunity';
/**
 * @description this function is the sideDrawer that appears when u click on side Icon which found inside menu box(home) in the navigation bar , it consists of list of items communities and feedand other
 * @param {bool} showSideBar this for showing SideBar or not it depends
 * @param {function} onClickSideIcon this fucntion is executed when u need to close SideDrawer (it is a handler in Home function)
 * @return {React.Component} it return the Side Drawer
 */
function SideDrawer({ showSideBar, onClickSideIcon }) {
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);
  const navigate = useNavigate();

  const notificationsClickHandler = () => {
    navigate('/settings/notifications');
  };

  const homeClickHandler = () => {
    navigate('/');
  };
  const createPostClickHandler = () => {
    navigate('/submit');
  };
  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '250px',
          mt: '6rem'
        }
      }}
      MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      open={showSideBar}
    >
      <CreateCommunity
        open={openCreateCommunity}
        setOpen={setOpenCreateCommunity}
      />
      <List>
        <ListItem data-testid="items">
          <IconButton
            onClick={onClickSideIcon}
            sx={{ ml: '170px' }}
          >
            {' '}
            <AiOutlineClose size="2rem" />
          </IconButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledInputBase
            placeholder="Filter"
            sx={{
              fontSize: '1.5rem',
              width: '20rem',
              height: '3rem',
              backgroundColor: '#DAE0E0',
              borderRadius: '0px',
              pl: '6px',
              ':hover': { border: '1px solid #4d4dff' }
            }}
          />
        </ListItem>
        <ListItem data-testid="items">
          <StyledText sx={{ fontSize: '13px' }}>YOUR COUMMUNITIES</StyledText>
        </ListItem>
        <ListItem
          data-testid="items"
          onClick={() => setOpenCreateCommunity(true)}
        >
          <IconButton sx={{ fontSize: '2rem' }}>
            <IoIosAdd color="#1A3043" />
          </IconButton>
          <StyledButton>Create Community</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
        </ListItem>
        <ListItem
          data-testid="items"
          onClick={homeClickHandler}
        >
          <IconButton sx={{ fontSize: '2rem' }}>
            {' '}
            <HiHome color="black" />
          </IconButton>

          <StyledButton>Home</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <IconButton sx={{ fontSize: '2rem' }}>
            <CgArrowTopRightO color="#1A3043" />
          </IconButton>

          <StyledButton>Popular</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <IconButton sx={{ fontSize: '2rem' }}>
            <IoMdStats color="#1A3043" />
          </IconButton>
          <StyledButton>All</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledText sx={{}}>OTHER</StyledText>
        </ListItem>
        <ListItem
          data-testid="items"
          onClick={createPostClickHandler}
        >
          <IconButton sx={{ fontSize: '2rem' }}>
            <IoIosAdd color="#1A3043" />
          </IconButton>
          <StyledButton>Create Posts</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <IconButton sx={{ fontSize: '2rem' }}>
            {' '}
            <HiOutlineBarsArrowUp color="#1A3043" />
          </IconButton>
          <StyledButton>Top Communities</StyledButton>
        </ListItem>
        <ListItem
          data-testid="items"
          onClick={notificationsClickHandler}
        >
          <IconButton sx={{ fontSize: '2rem' }}>
            <IoIosNotificationsOutline color="#1A3043" />
          </IconButton>
          <StyledButton>Notifications</StyledButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
