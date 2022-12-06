/* eslint-disable no-console */
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
  StyledMenuItem,
  CreatePostCardButtonsRoot,
  CreatePostCardOneButtonRoot
} from './HomePageCards.style';

/**
 * @typedef {PropType} states
 * @property {object} anchorEl
 * @property {string} clickedItem Today Button Menu Clicked Item
 * @property {Number} clickedButton
 * @property {Boolean} open
 */
/**
 * this function returns Best Hot New Top Card In the Home Screen
 * @param {PropType} states
 */

export default function BestHotNewCard({ clickedObject }) {
  const [clickedButton, setClickedButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedItem, setClickedItem] = useState('Today');
  const [clickedButtonItem, setClickedButtonItem] = useState('Best');
  const open = Boolean(anchorEl);

  const buttonIcons = {
    // eslint-disable-next-line eqeqeq
    Best: (
      <IoMdRocket
        size={28}
        color={clickedButtonItem == 'Best' ? '#1976d2' : '#9DA0A1'}
      />
    ),
    Hot: (
      <AiOutlineFire
        size={28}
        color={clickedButtonItem == 'Hot' ? '#1976d2' : '#9DA0A1'}
      />
    ),
    New: (
      <AiOutlineStar
        size={28}
        color={clickedButtonItem == 'New' ? '#1976d2' : '#9DA0A1'}
      />
    ),
    Top: (
      <AiOutlineToTop
        size={28}
        color={clickedButtonItem == 'Top' ? '#1976d2' : '#9DA0A1'}
      />
    ),
    Rising: (
      <HiOutlineArrowTrendingUp
        size={25}
        color={clickedButtonItem == 'Rising' ? '#1976d2' : '#9DA0A1'}
      />
    )
  };
  /**
   * opens the Rising Menu */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   * closes the Rising Menu */
  const handleClose = () => {
    clickedObject.sort = 'Rising';
    clickedObject.time = null;
    console.log(clickedObject);
    setAnchorEl(null);
  };
  const [anchorElTodayMenu, setAnchorElTodayMenu] = useState(null);
  const openTodayMenu = Boolean(anchorElTodayMenu);
  /**
   * opens the Today Menu */
  const handleClickTodayMenu = (event) => {
    setAnchorElTodayMenu(event.currentTarget);
  };
  const buttonClickedHandler = (sort, time) => {
    setClickedButton(sort);
    console.log(clickedButton);
    if (sort == 0) {
      clickedObject.sort = 'Best';
      clickedObject.time = null;
      console.log(clickedObject);
    }
    if (sort == 1) {
      clickedObject.sort = 'Hot';
      clickedObject.time = null;
      console.log(clickedObject);
    }
    if (sort == 2) {
      clickedObject.sort = 'New';
      clickedObject.time = null;
      console.log(clickedObject);
    }
    if (sort == 3) {
      clickedObject.sort = 'Top';
      clickedObject.time = time;
      console.log(clickedObject);
    }
  };
  /**
   * closes the Today Menu */
  const handleCloseTodayMenu = (clicked) => {
    if (clicked == null) {
      console.log(' Error');
    }
    if (clicked != null) {
      setClickedItem(clicked);
      buttonClickedHandler(3, clicked);
      console.log('No Error');
    }
    setAnchorElTodayMenu(null);
  };

  const [anchorElButtonMenu, setAnchorElButtonMenu] = useState(null);
  const openButtonMenu = Boolean(anchorElButtonMenu);
  /**
   * opens the Today Menu */
  const handleClickButtonMenu = (event) => {
    setAnchorElButtonMenu(event.currentTarget);
  };

  /**
   * closes the Today Menu */
  const handleCloseButtonMenu = (clicked) => {
    console.log(clickedButton); // بيتغير متأخر ليه ؟
    if (clicked == null) {
      console.log(' Error');
    }

    if (clicked == 'Best') {
      setClickedButtonItem(clicked);
      buttonClickedHandler(0, null);
      console.log('0');
    } else if (clicked == 'Hot') {
      setClickedButtonItem(clicked);
      buttonClickedHandler(1, null);
    } else if (clicked == 'New') {
      setClickedButtonItem(clicked);
      buttonClickedHandler(2, null);
    } else if (clicked == 'Top') {
      buttonClickedHandler(3, 'Today');
      setClickedButtonItem(clicked);
    } else if (clicked == 'Rising') {
      setClickedButtonItem(clicked);
      clickedObject.sort = 'Rising';
      clickedObject.time = null;
      console.log(clickedObject);
    }
    setAnchorElButtonMenu(null);
  };
  /**
   * handels clicks on buttons */

  return (
    <CreatePostCardRoot>
      <StyledBox sx={{ justifyContent: 'flex-start' }}>
        <CreatePostCardOneButtonRoot>
          <StyledButton
            sx={{
              color: '#1976d2 !important',
              backgroundColor: '#F7f8f9 !important'
            }}
            variant="text"
            id="basic-buttonMenu"
            aria-controls={openButtonMenu ? 'basic-menuButtonMenu' : undefined}
            aria-haspopup="true"
            aria-expanded={openButtonMenu ? 'true' : undefined}
            onClick={handleClickButtonMenu}
          >
            {buttonIcons[clickedButtonItem]}
            &nbsp;
            {clickedButtonItem}
            {' '}
&nbsp;
            <HiOutlineChevronDown size={22} color="#1976d2 " />
          </StyledButton>
          <Menu
            id="basic-menuButtonMenu"
            anchorEl={anchorElButtonMenu}
            open={openButtonMenu}
            onClose={() => handleCloseButtonMenu(null)}
            MenuListProps={{
              'aria-labelledby': 'basic-buttonMenu'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Best')}>
                <IoMdRocket size={25} color="#9DA0A1" />
                &nbsp; Best
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Hot')}>
                <AiOutlineFire size={25} color="#9DA0A1" />
                &nbsp; Hot
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('New')}>
                <AiOutlineStar size={25} color="#9DA0A1" />
                &nbsp; New
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Top')}>
                <AiOutlineToTop size={25} color="#9DA0A1" />
                &nbsp; Top
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Rising')}>
                <HiOutlineArrowTrendingUp size={25} color="#9DA0A1" />
                &nbsp; Rising
              </StyledMenuItem>
            </Box>
          </Menu>
        </CreatePostCardOneButtonRoot>
        <CreatePostCardButtonsRoot>
          <StyledButton
            sx={{
              color: clickedButton == 0 ? '#1976d2 !important' : '#9DA0A1',
              backgroundColor:
                clickedButton == 0 ? '#F7f8f9 !important' : '#ffffff'
            }}
            variant="text"
            onClick={() => buttonClickedHandler(0, null)}
          >
            <IoMdRocket
              size={28}
              color={clickedButton == 0 ? '#1976d2 ' : '#9DA0A1'}
            />
            &nbsp;Best
          </StyledButton>
        </CreatePostCardButtonsRoot>
        <CreatePostCardButtonsRoot>
          <StyledButton
            sx={{
              color: clickedButton == 1 ? '#1976d2 !important' : '#9DA0A1',
              backgroundColor:
                clickedButton == 1 ? '#F7f8f9 !important' : '#ffffff'
            }}
            variant="text"
            onClick={() => buttonClickedHandler(1, null)}
          >
            <AiOutlineFire
              size={28}
              color={clickedButton == 1 ? '#1976d2 ' : '#9DA0A1'}
            />
            &nbsp;Hot
          </StyledButton>
        </CreatePostCardButtonsRoot>
        <CreatePostCardButtonsRoot>
          <StyledButton
            sx={{
              color: clickedButton == 2 ? '#1976d2 !important' : '#9DA0A1',
              backgroundColor:
                clickedButton == 2 ? '#F7f8f9 !important' : '#ffffff'
            }}
            variant="text"
            onClick={() => buttonClickedHandler(2, null)}
          >
            <AiOutlineStar
              size={28}
              color={clickedButton == 2 ? '#1976d2 ' : '#9DA0A1'}
            />
            &nbsp;New
          </StyledButton>
        </CreatePostCardButtonsRoot>
        <CreatePostCardButtonsRoot>
          <StyledButton
            sx={{
              color: clickedButton == 3 ? '#1976d2 !important' : '#9DA0A1',
              backgroundColor:
                clickedButton == 3 ? '#F7f8f9 !important' : '#ffffff'
            }}
            variant="text"
            onClick={() => buttonClickedHandler(3, 'Today')}
          >
            <AiOutlineToTop
              size={28}
              color={clickedButton == 3 ? '#1976d2 ' : '#9DA0A1'}
            />
            &nbsp;Top
          </StyledButton>
        </CreatePostCardButtonsRoot>
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
              <HiOutlineChevronDown size={22} color="#1976d2 " />
            </StyledButton>
            <Menu
              id="basic-menuTodayMenu"
              anchorEl={anchorElTodayMenu}
              open={openTodayMenu}
              onClose={() => handleCloseTodayMenu(null)}
              MenuListProps={{
                'aria-labelledby': 'basic-buttonTodayMenu'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <StyledMenuItem onClick={() => handleCloseTodayMenu('Now')}>
                  Now
                </StyledMenuItem>
                <StyledMenuItem
                  data-testid="today_menu_item"
                  onClick={() => handleCloseTodayMenu('Today')}
                >
                  Today
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => handleCloseTodayMenu('This Week')}
                >
                  This Week
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => handleCloseTodayMenu('This Month')}
                >
                  This Month
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => handleCloseTodayMenu('This Year')}
                >
                  This Year
                </StyledMenuItem>
                <StyledMenuItem
                  onClick={() => handleCloseTodayMenu('All Time')}
                >
                  All Time
                </StyledMenuItem>
              </Box>
            </Menu>
          </>
        ) : null}
        <CreatePostCardButtonsRoot>
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
        </CreatePostCardButtonsRoot>
      </StyledBox>
    </CreatePostCardRoot>
  );
}
