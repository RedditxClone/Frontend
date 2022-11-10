/* eslint-disable eqeqeq */
import Box from '@mui/material/Box';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdRocket } from 'react-icons/io';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { AiOutlineToTop, AiOutlineStar, AiOutlineFire } from 'react-icons/ai';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import {
  StyledButton,
  CreatePostCardRoot,
  StyledBox,
  StyledMenuItem
} from './HomePageCards.style';

/**
 * @description This component is resposinble to render the Best Hot New Top Card In the Home Screen
 * @returns the card with the Best Hot New Top Card
 */

function BestHotNewCard() {
  const [clickedButton, setClickedButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedItem, setClickedItem] = useState('Today');
  const open = Boolean(anchorEl);
  /**
   * opens the Rising Menu */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   * @description closes the Rising Menu */
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElTodayMenu, setAnchorElTodayMenu] = useState(null);
  const openTodayMenu = Boolean(anchorElTodayMenu);
  /**
   * @description  opens the Today Menu */
  const handleClickTodayMenu = (event) => {
    setAnchorElTodayMenu(event.currentTarget);
  };
  /**
   * @description  closes the Today Menu */
  const handleCloseTodayMenu = (clicked) => {
    if (clicked == null) { console.log(' Error'); }
    if (clicked != null) {
      setClickedItem(clicked);
      console.log('No Error');
    }
    setAnchorElTodayMenu(null);
  };
  /**
   * @description  handels clicks on buttons */
  const buttonClickedHandler = (clicked) => {
    setClickedButton(clicked);
  };

  return (
    <CreatePostCardRoot>

      <StyledBox sx={{ justifyContent: 'flex-start' }}>
        <StyledButton
          sx={{
            color: clickedButton == 0 ? '#1976d2 !important' : '#9DA0A1',
            backgroundColor:
              clickedButton == 0 ? '#F7f8f9 !important' : '#ffffff'
          }}
          variant="text"
          onClick={() => buttonClickedHandler(0)}
        >
          <IoMdRocket
            size={28}
            color={clickedButton == 0 ? '#1976d2 ' : '#9DA0A1'}
          />
          &nbsp;Best
        </StyledButton>
        <StyledButton
          sx={{
            color: clickedButton == 1 ? '#1976d2 !important' : '#9DA0A1',
            backgroundColor:
              clickedButton == 1 ? '#F7f8f9 !important' : '#ffffff'
          }}
          variant="text"
          onClick={() => buttonClickedHandler(1)}
        >
          <AiOutlineFire
            size={28}
            color={clickedButton == 1 ? '#1976d2 ' : '#9DA0A1'}
          />
          &nbsp;Hot
        </StyledButton>
        <StyledButton
          sx={{
            color: clickedButton == 2 ? '#1976d2 !important' : '#9DA0A1',
            backgroundColor:
              clickedButton == 2 ? '#F7f8f9 !important' : '#ffffff'
          }}
          variant="text"
          onClick={() => buttonClickedHandler(2)}
        >
          <AiOutlineStar
            size={28}
            color={clickedButton == 2 ? '#1976d2 ' : '#9DA0A1'}
          />
          &nbsp;New
        </StyledButton>
        <StyledButton
          sx={{
            color: clickedButton == 3 ? '#1976d2 !important' : '#9DA0A1',
            backgroundColor:
              clickedButton == 3 ? '#F7f8f9 !important' : '#ffffff'
          }}
          variant="text"
          onClick={() => buttonClickedHandler(3)}
        >
          <AiOutlineToTop
            size={28}
            color={clickedButton == 3 ? '#1976d2 ' : '#9DA0A1'}
          />
          &nbsp;Top
        </StyledButton>
        {clickedButton == 3 ? (
          <>
            <StyledButton
              sx={{
                color: '#1976d2 !important',
                backgroundColor: '#F7f8f9 !important'
              }}
              variant="text"
              id="basic-buttonTodayMenu"
              aria-controls={openTodayMenu ? 'basic-menuTodayMenu' : undefined}
              aria-haspopup="true"
              aria-expanded={openTodayMenu ? 'true' : undefined}
              onClick={handleClickTodayMenu}
              data-testid="today_button"
            >
            &nbsp;
              {clickedItem}
              <HiOutlineChevronDown
                size={24}
                color="#1976d2 "
              />
            </StyledButton>
            <Menu
              id="basic-menuTodayMenu"
              anchorEl={anchorElTodayMenu}
              open={openTodayMenu}
              onClose={handleCloseTodayMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-buttonTodayMenu'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('Now')}>
                  Now
                </StyledMenuItem>
                <StyledMenuItem data-testid="today_menu_item" onClick={() => handleCloseTodayMenu('Today')}>
                  Today
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('This Week')}>
                  This Week
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('This Month')}>
                  This Month
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('This Year')}>
                  This Year
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('All Time')}>
                  All Time
                </StyledMenuItem>
              </Box>
            </Menu>
          </>

        ) : null}

        <StyledButton
          variant="text"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          data-testid="rising_button"
        >
          <BsThreeDots size={24} color="#9DA0A1" />
        </StyledButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <StyledMenuItem onClick={handleClose} data-testid="rising">
            <HiOutlineArrowTrendingUp size={25} />
            {' '}
&nbsp; Rising
          </StyledMenuItem>
        </Menu>
      </StyledBox>
    </CreatePostCardRoot>
  );
}
export default (BestHotNewCard);
