/* eslint-disable object-curly-newline */
import { MenuItem, InputLabel, Divider, FormControl } from '@mui/material';
import { BsToggleOn } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import {
  StyledSelect,
  StyledButton,
  StyledText,
  ProfileContainer
} from '../AppBar/AppBar.Style';

/**
 * description : this function describes the profile select in the nav bar in case u are loggedin
 *  which includes the settings and etc..
 * it returns profile box
 */
function Profile() {
  return (
    <ProfileContainer>
      <FormControl
        sx={{
          p: '0',
          height: '100%',
          width: '100%',
          m: '0',
          'label + MuiInput': {
            formControl: {
              marginTop: '0px'
            }
          }
        }}
      >
        <InputLabel
          sx={{
            color: 'black',
            height: '100%',
            '&.Mui-focused': {
              color: 'black'
            }
          }}
          shrink={false}
        >
          Name
        </InputLabel>
        <StyledSelect
          sx={{
            height: '100%',
            '&.MuiInputBase-root': { m: '0' },
            '&.MuiSelect-select': {
              ':focus': { backgroundColor: 'white' }
            },
            ':hover': { border: '1px solid #DAE0E2', borderRadius: '3px' }
          }}
          MenuProps={{ PaperProps: { sx: { maxHeight: 350 } } }}
          variant="standard"
          disableUnderline
        >
          <MenuItem sx={{ gap: '8px' }}>
            <CgProfile
              color="#1A3043"
              size="1.5rem"
            />
            <StyledText sx={{ width: '100%' }}>My Stuff</StyledText>
          </MenuItem>
          <MenuItem sx={{ gap: '3px' }}>
            <StyledButton sx={{ pl: '10px' }}> Online Status</StyledButton>
            <BsToggleOn
              color="#249FEC"
              size="2rem"
            />
          </MenuItem>
          <MenuItem>
            <StyledButton sx={{ pr: '40px' }}>My Profile</StyledButton>
          </MenuItem>
          <MenuItem>
            <StyledButton sx={{ pr: '20px' }}>User Settings</StyledButton>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: '5px' }}>
            <AiOutlineEye
              color="#1A3043"
              size="1.5rem"
            />
            <StyledText>View Options</StyledText>
          </MenuItem>
          <MenuItem sx={{ gap: '3px' }}>
            <StyledButton sx={{ pl: '2px' }}>Dark Mode </StyledButton>
            <BsToggleOn
              color="#249FEC"
              size="2rem"
            />
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: '5px' }}>
            <AiOutlineCopyrightCircle
              color="#1A3043"
              size="1.5rem"
            />
            <StyledButton>Create community </StyledButton>
          </MenuItem>
          <Divider />
          <MenuItem sx={{ gap: '5px' }}>
            <IoMdExit
              color="#1A3043"
              size="1.5rem"
            />
            <StyledButton sx={{ pr: '67px' }}>Log Out </StyledButton>
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </ProfileContainer>
  );
}

export default Profile;
