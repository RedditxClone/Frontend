/* eslint-disable object-curly-newline */
import {
  MenuItem,
  InputLabel,
  Divider,
  FormControl,
  IconButton
} from '@mui/material';
import { BsToggleOn, BsPencil } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineEye, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { IoMdExit } from 'react-icons/io';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthActions } from '../../../store/slices/AuthSlice';
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
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openexplore, setOpenExplore] = useState(false);
  const [opened, setOpened] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const handleExploreClick = () => {
    setOpenExplore((current) => !current);
  };

  const openCategoriesHandler = (index) => {
    const CopyOpened = [...opened];
    // console.log(CopyOpened);
    let open = CopyOpened[index];
    // console.log(open);
    open = !open;
    // console.log(open);
    CopyOpened[index] = open;
    // console.log(CopyOpened);
    setOpened([CopyOpened]);
  };

  const userSettingsClickHandler = () => {
    navigate('/settings/account');
  };

  const logoutHandler = () => {
    dispatch(AuthActions.logOut());
    navigate('/');
  };

  const CommCatogeries = [
    'Gaming',
    'Sports',
    'Bussiness,Economics...',
    'Crypto',
    'Television',
    'Celeberity',
    'MoreTopics'
  ];
  const Catogeries = CommCatogeries.map((comm, index) => (
    <MenuItem
      onClick={() => openCategoriesHandler(index)}
      key={comm}
      data-testid="catogeries"
    >
      <StyledButton>{comm}</StyledButton>
      {opened[index] ? (
        <MdExpandLess size="2rem" />
      ) : (
        <MdExpandMore size="2rem" />
      )}
    </MenuItem>
  ));
  return (
    <ProfileContainer>
      <FormControl
        sx={{
          height: '100%',
          width: '100%',
          m: '0',
          'label + MuiInput': {
            formControl: {
              marginTop: '0px'
            }
          },
          '&.MuiFormLabel-root': { pb: '0' }
        }}
      >
        <InputLabel
          sx={{
            color: 'black',
            height: '50%',
            display: 'flex',
            flexDirection: 'row',
            pt: '0.5rem',
            mt: '-0.8rem',
            alignItems: 'center',
            '&.Mui-focused': {
              color: 'black'
            }
            // '&.MuiFormLabel-root': { pt: '1rem' }
          }}
          shrink={false}
        >
          <IconButton
            sx={{
              color: '#1A3043',
              fontSize: '1.5rem',
              '&.MuiButtonBase-root': { p: '0.5rem 0 0.5rem 0' }
            }}
          >
            <CgProfile />
          </IconButton>
          {/* <BiRadioCircle /> */}
          &nbsp;
          <StyledText sx={{ display: { xs: 'none', sm: 'block' }, p: '0' }}>
            {user.username}
          </StyledText>
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
          data-testid="select"
        >
          <MenuItem
            sx={{ gap: '0.3rem' }}
            data-testid="options"
          >
            <CgProfile
              color="#1A3043"
              size="1.5rem"
            />
            <StyledText sx={{ width: '100%' }}>My Stuff</StyledText>
          </MenuItem>
          <MenuItem data-testid="options">
            <StyledButton> Online Status</StyledButton>
            <IconButton
              sx={{
                color: '#249FEC',
                fontSize: '1.8rem',
                '&.MuiButtonBase-root': {
                  padding: '0.2rem'
                }
              }}
            >
              <BsToggleOn />
            </IconButton>
          </MenuItem>
          <MenuItem data-testid="options">
            <StyledButton>My Profile</StyledButton>
          </MenuItem>
          <MenuItem data-testid="options">
            <StyledButton onClick={userSettingsClickHandler}>
              User Settings
            </StyledButton>
          </MenuItem>
          <Divider />
          <MenuItem
            sx={{ gap: '0.3rem' }}
            data-testid="options"
          >
            <AiOutlineEye
              color="#1A3043"
              size="1.5rem"
            />
            <StyledText>View Options</StyledText>
          </MenuItem>
          <MenuItem data-testid="options">
            <StyledButton>Dark Mode </StyledButton>
            <BsToggleOn
              color="#249FEC"
              size="2rem"
            />
          </MenuItem>
          <Divider />
          <MenuItem
            sx={{ gap: '0.3rem' }}
            data-testid="options"
          >
            <AiOutlineCopyrightCircle
              color="#1A3043"
              size="1.5rem"
            />
            <StyledButton>Create community </StyledButton>
          </MenuItem>
          <MenuItem
            sx={{ gap: '8px' }}
            onClick={() => handleExploreClick()}
            data-testid="options"
          >
            <IconButton
              sx={{
                color: '#1A3043',
                fontSize: '1.2rem',
                '&.MuiButtonBase-root': {
                  padding: '0.2rem'
                }
              }}
            >
              <BsPencil />
            </IconButton>
            <StyledButton>Explore</StyledButton>
            {openexplore ? (
              <MdExpandLess size="2rem" />
            ) : (
              <MdExpandMore size="2rem" />
            )}
          </MenuItem>
          {openexplore ? Catogeries : null}
          {/* here is the list of recent communities will handle when backend is done */}
          <Divider />
          <MenuItem
            sx={{ gap: '0.3rem' }}
            data-testid="options"
          >
            <IoMdExit
              color="#1A3043"
              size="1.5rem"
            />
            <StyledButton onClick={logoutHandler}>Log Out </StyledButton>
          </MenuItem>
        </StyledSelect>
      </FormControl>
    </ProfileContainer>
  );
}

export default Profile;
