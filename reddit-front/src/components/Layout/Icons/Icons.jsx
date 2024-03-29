import { IoIosNotificationsOutline, IoIosAdd } from 'react-icons/io';
import { CgArrowTopRightO } from 'react-icons/cg';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../AppBar/AppBar.Style';
/**
 * @description this function describes the section of icons in the nav bar in case u are loggedin
 * @return {React.Component} the icons box
 */
function IconsBox() {
  const navigate = useNavigate();
  return (
    <Icons>
      <IconButton
        sx={{
          ':hover': {
            backgroundColor: '#DAE0E2',
            borderRadius: '3px'
          },
          display: { xs: 'none', sm: 'block' },
          '&.MuiButtonBase-root': { p: '0.2rem' }
        }}
      >
        <CgArrowTopRightO
          color="#1A3043"
          size="2.5rem"
        />
      </IconButton>
      <IconButton
        sx={{
          ':hover': {
            backgroundColor: '#DAE0E2',
            borderRadius: '3px'
          },
          display: { xs: 'block' },
          '&.MuiButtonBase-root': { p: '0.2rem' }
        }}
      >
        <IoIosNotificationsOutline
          color="#1A3043"
          size="2.5rem"
        />
      </IconButton>
      <IconButton
        sx={{
          ':hover': {
            backgroundColor: '#DAE0E2',
            borderRadius: '3px'
          },
          display: { xs: 'none', sm: 'block' },
          '&.MuiButtonBase-root': { p: '0.2rem' }
        }}
      >
        <IoIosAdd
          color="#1A3043"
          size="2.5rem"
          onClick={() => navigate('/submit')}
        />
      </IconButton>
    </Icons>
  );
}

export default IconsBox;
