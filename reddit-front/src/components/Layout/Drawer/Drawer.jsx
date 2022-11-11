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
 * @typedef {PropType} Side   Side object hat describes the status did u need the sidebar or not
 * @property {bool} showSideBar this property for showing SideBar or not it depends
 * @property {function} onClickSideIcon this fucntion is executed when u need to close SideDrawer (it is a handler in Home function)
 */

/**
 * description : this function is the sideDrawer that appears when u click on side Icon which found
 * inside menu box(home) in the navigation bar , it consists of list of items communities and feed
 * and other
 * it return the Side Drawer
 */
function SideDrawer(Side) {
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
      open={Side.showSideBar}
    >
      <List>
        <ListItem>
          <IconButton
            onClick={Side.onClickSideIcon}
            sx={{ ml: '170px' }}
          >
            {' '}
            <AiOutlineClose size="1.3rem" />
          </IconButton>
        </ListItem>
        <ListItem>
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
        <ListItem>
          <StyledText sx={{ fontSize: '13px' }}>YOUR COUMMUNITIES</StyledText>
        </ListItem>
        <ListItem>
          <IoIosAdd
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '20px' }}>Create Community</StyledButton>
        </ListItem>
        <ListItem>
          <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
        </ListItem>
        <ListItem>
          <HiHome
            color="black"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '100px' }}>Home</StyledButton>
        </ListItem>
        <ListItem>
          <CgArrowTopRightO
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '90px' }}>Popular</StyledButton>
        </ListItem>
        <ListItem>
          <IoMdStats
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '120px' }}>All</StyledButton>
        </ListItem>
        <ListItem>
          <StyledText sx={{ fontSize: '13px' }}>OTHER</StyledText>
        </ListItem>
        <ListItem>
          <IoIosAdd
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Create Posts</StyledButton>
        </ListItem>
        <ListItem>
          <HiOutlineBarsArrowUp
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '25px' }}>Top Communities</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
        <ListItem>
          <IoIosNotificationsOutline
            color="#1A3043"
            size="1.5rem"
          />
          <StyledButton sx={{ pr: '50px' }}>Notifications</StyledButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
