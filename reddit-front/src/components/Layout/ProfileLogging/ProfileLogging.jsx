/* eslint-disable object-curly-newline */
import {
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  IconButton
} from '@mui/material';
import { BsClock, BsToggleOn } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
// import { MdExpandMore } from 'react-icons/md';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  StyledSelect,
  StyledButton,
  ProfileLogging
} from '../AppBar/AppBar.Style';

/**
 * @description this is the profie box in the nav bar in case u are not logged in
 * @return {React.Component} progileLogin select
 */

function ProfileLogin() {
  const [opencommunity, setOpencom] = useState(false);
  const [opensettings, setOpensett] = useState(false);
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  /**
   * description : this handler for openCommunity in the profile box
   * which controls it is opened or not
   */

  function handleComClick() {
    setOpencom(!opencommunity);
  }

  const clickSignUpHandler = () => {
    navigate('/auth/login');
  };
  /**
   * description : this handler for opensettings in the profile box
   * which controls it is opened or not
   */

  function handleSettingClick() {
    setOpensett(!opensettings);
  }
  return (
    <ProfileLogging>
      <FormControl
        sx={{
          width: '100%',
          p: '0',
          height: '100%'
        }}
      >
        <InputLabel
          sx={{
            mt: '13px',
            color: 'black',
            '&.Mui-focused': {
              color: 'black'
            }
          }}
          shrink={false}
        >
          <CgProfile style={{ color: '#878A8C', fontSize: '2rem' }} />
        </InputLabel>
        <StyledSelect
          sx={{
            ':hover': {
              border: '1px solid #DAE0E2',
              borderRadius: '3px'
            },
            width: '100%',
            height: '50%',
            mt: '30px',
            mb: '20px',
            '& .MuiSelect-select': {
              paddingBottom: '20px'
            }
          }}
          MenuProps={{
            PaperProps: { sx: { maxHeight: 350 } }
          }}
          variant="standard"
          disableUnderline
          data-testid="profileselect"
          defaultValue="1"
        >
          <MenuItem
            style={{ gap: '8px' }}
            onClick={() => handleComClick()}
            data-testid="items"
          >
            <IconButton sx={{ fontSize: '1.7rem' }}>
              <BsClock color="#1A3043" />
            </IconButton>
            <StyledButton data-testid="recent-comm">
              Recent Communities
            </StyledButton>
            {opencommunity ? (
              <MdExpandLess size="2rem" />
            ) : (
              <MdExpandMore size="2rem" />
            )}
          </MenuItem>
          {/* here is the list of recent communities will handle when backend is done */}
          {opencommunity ? (
            <MenuItem data-testid="items">
              <StyledButton sx={{ ml: '4rem' }}>any community</StyledButton>
            </MenuItem>
          ) : null}
          {isAuth && (
            <MenuItem onClick={() => handleSettingClick()}>
              <IoSettingsOutline size="2rem" />
              <StyledButton
                sx={{ pr: '95px', pl: '5px' }}
                data-testid="settings"
              >
                Settings
              </StyledButton>
              {opensettings ? (
                <MdExpandLess size="2.2rem" />
              ) : (
                <MdExpandMore size="2.2rem" />
              )}
            </MenuItem>
          )}
          {/* here is the list of seetingse */}
          {opensettings ? (
            <MenuItem data-testid="items">
              <StyledButton sx={{ pl: '40px' }}>
                Dark Mode
                <IconButton sx={{ fontSize: '2rem' }}>
                  <BsToggleOn
                    color="#249FEC"
                    style={{ paddingLeft: '80px' }}
                  />
                </IconButton>
              </StyledButton>
            </MenuItem>
          ) : null}
          <Divider />
          <MenuItem data-testid="items">
            <IconButton sx={{ fontSize: '2rem' }}>
              <CgProfile color="#1A3043" />
            </IconButton>
            <StyledButton
              onClick={clickSignUpHandler}
              data-testid="Sign Up or Log In"
            >
              Sign Up or Log In
            </StyledButton>
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </ProfileLogging>
  );
}

export default ProfileLogin;
