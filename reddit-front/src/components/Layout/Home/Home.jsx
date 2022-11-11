/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { IconButton, MenuList, MenuItem, Paper, Box } from '@mui/material';
import { IoIosAdd, IoMdStats } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { CgArrowTopRightO } from 'react-icons/cg';
import { useState } from 'react';
import { MdExpandMore } from 'react-icons/md';
import {
  StyledInputBase,
  StyledText,
  Home,
  StyledButton
} from '../AppBar/AppBar.Style';
import SideDrawer from '../Drawer/Drawer';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          alignItems: 'center'
        }}
      >
        <StyledButton
          sx={{
            width: '100%',
            height: '50px',
            position: 'relative',
            ':hover': { border: '1px solid #DAE0E2', borderRadius: '3px' }
          }}
          onClick={handleopen}
          startIcon={<HiHome style={{ color: 'black', size: '1.5rem' }} />}
          endIcon={<MdExpandMore style={{ marginLeft: '130px' }} />}
        >
          Home
        </StyledButton>
        {Open ? (
          <IconButton
            onClick={() => handleSide()}
            sx={{ ml: '-68px' }}
          >
            <BsLayoutTextSidebar style={{ size: '1rem' }} />
          </IconButton>
        ) : null}
      </Box>
      {Open ? (
        <Paper
          style={{
            overflowY: 'auto',
            maxHeight: '250px',
            position: 'absolute',
            top: '55px',
            width: '100%'
          }}
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
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>
                YOUR COMMNUNITIES
              </StyledText>
            </MenuItem>
            <MenuItem>
              <IoIosAdd style={{ color: '#1A3043', size: '1.5rem' }} />
              <StyledButton sx={{ pr: '20px' }}>Create Community</StyledButton>
            </MenuItem>
            <MenuItem>
              <StyledText sx={{ fontSize: '13px' }}>FEEDS</StyledText>
            </MenuItem>
            <MenuItem>
              <HiHome style={{ color: 'black', size: '1.5rem' }} />
              <StyledButton sx={{ pr: '100px' }}>Home</StyledButton>
            </MenuItem>
            <MenuItem>
              <CgArrowTopRightO style={{ color: '#1A3043', size: '1.5rem' }} />
              <StyledButton sx={{ pr: '90px' }}>Popular</StyledButton>
            </MenuItem>
            <MenuItem>
              <IoMdStats style={{ color: '#1A3043', size: '1.5rem' }} />
              <StyledButton sx={{ pr: '120px' }}>All</StyledButton>
            </MenuItem>
          </MenuList>
        </Paper>
      ) : null}
      {Side ? (
        <SideDrawer
          showSideBar={Side}
          onClickSideIcon={handleSide}
        />
      ) : null}
    </Home>
  );
}

export default HomeBox;
