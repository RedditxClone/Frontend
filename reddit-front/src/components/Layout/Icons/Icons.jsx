import { IoIosNotificationsOutline, IoIosAdd } from 'react-icons/io';
import { CgArrowTopRightO } from 'react-icons/cg';
import { IconButton } from '@mui/material';
import { Icons } from '../AppBar/AppBar.Style';
/**
 *description : this function describes the section of icons in the nav bar in case u are loggedin
 *it returns the icons box
 */
function IconsBox() {
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
          size="1.5rem"
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
          size="1.5rem"
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
          size="1.5rem"
        />
      </IconButton>
    </Icons>
  );
}

export default IconsBox;
