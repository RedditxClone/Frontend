/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosAdd, IoMdStats, IoIosNotificationsOutline } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { HiOutlineBarsArrowUp } from 'react-icons/hi2';
import { CgArrowTopRightO } from 'react-icons/cg';
import {
  StyledInputBase,
  StyledText,
  StyledButton
} from '../AppBar/AppBar.Style';

/**
 * @description this function is the sideDrawer that appears when u click on side Icon which found inside menu box(home) in the navigation bar , it consists of list of items communities and feedand other
 * @param {bool} showSideBar this for showing SideBar or not it depends
 * @param {function} onClickSideIcon this fucntion is executed when u need to close SideDrawer (it is a handler in Home function)
 * @return {React.Component} it return the Side Drawer
 */
function SideDrawer({ showSideBar, onClickSideIcon }) {
  return (
    <Drawer
      BackdropProps={{ invisible: true }}
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '250px',
          mt: '65px'
        }
      }}
      MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      open={showSideBar}
    >
      <List>
        <ListItem data-testid="items">
          <IconButton
            onClick={onClickSideIcon}
            sx={{ ml: '170px' }}
          >
            {' '}
            <AiOutlineClose size="1.3rem" />
          </IconButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledInputBase
            placeholder="Filter"
            sx={{
              width: '200px',
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
        <ListItem data-testid="items">
          <IoIosAdd
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>Create Community</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
        </ListItem>
        <ListItem data-testid="items">
          <HiHome
            color="black"
            size="1.5rem"
          />
          <StyledButton>Home</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <CgArrowTopRightO
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>Popular</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <IoMdStats
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>All</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <StyledText sx={{ fontSize: '13px' }}>OTHER</StyledText>
        </ListItem>
        <ListItem data-testid="items">
          <IoIosAdd
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>Create Posts</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <HiOutlineBarsArrowUp
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>Top Communities</StyledButton>
        </ListItem>
        <ListItem data-testid="items">
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton>Notifications</StyledButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
