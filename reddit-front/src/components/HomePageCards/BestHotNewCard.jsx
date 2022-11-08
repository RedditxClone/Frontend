/* eslint-disable no-console */
/* eslint-disable eqeqeq */
// /* eslint-disable */
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

const buttonIcons = [
  // eslint-disable-next-line eqeqeq
  <IoMdRocket size={28} color="#9DA0A1" />,
  <AiOutlineFire
    size={28}
    color="#9DA0A1"
  />,
  <AiOutlineStar
    size={28}
    color="#9DA0A1"
  />,
  <AiOutlineToTop
    size={28}
    color="#9DA0A1"
  />,
  <HiOutlineArrowTrendingUp size={25} color="#9DA0A1" />
];

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

export default function BestHotNewCard() {
  const [clickedButton, setClickedButton] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedItem, setClickedItem] = useState('Today');
  const [clickedButtonItem, setClickedButtonItem] = useState('Best');
  const open = Boolean(anchorEl);
  /**
   * opens the Rising Menu */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  /**
   * closes the Rising Menu */
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElTodayMenu, setAnchorElTodayMenu] = useState(null);
  const openTodayMenu = Boolean(anchorElTodayMenu);
  /**
   * opens the Today Menu */
  const handleClickTodayMenu = (event) => {
    setAnchorElTodayMenu(event.currentTarget);
  };
  /**
   * closes the Today Menu */
  const handleCloseTodayMenu = (clicked) => {
    if (clicked == null) {
      console.log(' Error');
    }
    if (clicked != null) {
      setClickedItem(clicked);
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
  const buttonClickedHandler = (clicked) => {
    setClickedButton(clicked);
  };
  /**
   * closes the Today Menu */
  const handleCloseButtonMenu = (clicked) => {
    console.log(clickedButton); // بيتغير متأخر ليه ؟
    if (clicked == null) {
      console.log(' Error');
    }
    if (clicked != null) {
      setClickedButtonItem(clicked);// بردو بتتغير متأخر و مش عارفة اغير الايقون بسببها
      console.log(clicked);
    }

    if (clicked === 'Best') {
      buttonClickedHandler(0);
      console.log('0');
    } else if (clicked === 'Hot') {
      buttonClickedHandler(1);
    } else if (clicked === 'New') {
      buttonClickedHandler(2);
    } else if (clicked === 'Top') {
      buttonClickedHandler(3);
      setClickedButton(3);
    }
    setAnchorElButtonMenu(null);
  };
  /**
   * handels clicks on buttons */

  return (
    <CreatePostCardRoot>
      <StyledBox sx={{ justifyContent: 'flex-start' }}>
        <CreatePostCardButtonsRoot>
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
                aria-controls={
                  openTodayMenu ? 'basic-menuTodayMenu' : undefined
                }
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
                onClose={handleCloseTodayMenu}
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
            onClose={handleCloseButtonMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-buttonMenu'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Best')}>
                {buttonIcons[0]}
&nbsp; Best
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Hot')}>
                {buttonIcons[1]}
&nbsp; Hot
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('New')}>
                {buttonIcons[2]}
&nbsp; New
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Top')}>
                {buttonIcons[3]}
&nbsp;  Top
              </StyledMenuItem>
              <StyledMenuItem onClick={() => handleCloseButtonMenu('Rising')}>
                {buttonIcons[4]}
&nbsp;  Rising
              </StyledMenuItem>
            </Box>
          </Menu>
        </CreatePostCardOneButtonRoot>
      </StyledBox>
    </CreatePostCardRoot>
  );
}
