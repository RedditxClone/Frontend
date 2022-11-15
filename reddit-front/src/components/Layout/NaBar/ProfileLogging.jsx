/* eslint-disable object-curly-newline */
import { MenuItem, FormControl, InputLabel, Divider } from '@mui/material';
import { BsClock, BsToggleOn } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
// import { MdExpandMore } from 'react-icons/md';
import { useState } from 'react';
import { StyledSelect, StyledButton, ProfileLogging } from './AppBar.Style';

/**
 *@description this is the profie box in the nav bar in case u are not logged in
 *@return {React.Component} progileLogin select
 */

function ProfileLogin() {
  const [opencommunity, setOpencom] = useState(false);
  const [opensettings, setOpensett] = useState(false);

  /**
   * description : this handler for openCommunity in the profile box
   * which controls it is opened or not
   */

  function handleComClick() {
    setOpencom(!opencommunity);
  }

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
          <CgProfile
            size="1.5rem"
            color="#878A8C"
          />
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
            data-testid="elements"
          >
            <BsClock
              color="#1A3043"
              size="1.5rem"
            />
            <StyledButton>Recent Communities</StyledButton>
            {opencommunity ? (
              <MdExpandLess size="2rem" />
            ) : (
              <MdExpandMore size="2rem" />
            )}
          </MenuItem>
          {/* here is the list of recent communities will handle when backend is done */}
          {opencommunity ? (
            <MenuItem data-testid="elements">
              <StyledButton>any community</StyledButton>
            </MenuItem>
          ) : null}
          <MenuItem onClick={() => handleSettingClick()}>
            <IoSettingsOutline size="2rem" />
            <StyledButton sx={{ pr: '95px', pl: '5px' }}>Settings</StyledButton>
            {opensettings ? (
              <MdExpandLess size="2.2rem" />
            ) : (
              <MdExpandMore size="2.2rem" />
            )}
          </MenuItem>
          {/* here is the list of seetingse */}
          {opensettings ? (
            <MenuItem data-testid="elements">
              <StyledButton sx={{ pl: '40px' }}>
                Dark Mode
                <BsToggleOn
                  color="#249FEC"
                  size="2rem"
                  style={{ paddingLeft: '80px' }}
                />
              </StyledButton>
            </MenuItem>
          ) : null}
          <Divider />
          <MenuItem data-testid="elements">
            <CgProfile
              size="1.5rem"
              color="#1A3043"
            />
            <StyledButton sx={{ pr: '50px' }}>Sign Up or Log In</StyledButton>
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </ProfileLogging>
  );
}

export default ProfileLogin;
