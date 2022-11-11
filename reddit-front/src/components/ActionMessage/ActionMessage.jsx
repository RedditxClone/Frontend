import { IconButton } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai';
import { IoLogoReddit } from 'react-icons/io';
import { useState } from 'react';
import { StyledButton, MessageAlert } from '../Layout/AppBar/AppBar.Style';

function ActionMessage({ message, show }) {
  const [showClose, setShowClose] = useState(false);
  const [Close, setClose] = useState(false);

  const showCloseHandler = () => {
    setShowClose((current) => !current);
  };

  const closeHandler = () => {
    setClose((current) => !current);
  };
  return show && !Close ? (
    <MessageAlert
      onMouseEnter={showCloseHandler}
      onMouseLeave={showCloseHandler}
      data-testid="enableclosing"
    >
      <StyledButton
        sx={{
          height: '100%',
          '&.MuiButtonBase-root': {
            justifyContent: 'normal'
          }
        }}
        data-testid="actionmessagebutton"
      >
        {/* <Box
          sx={{
            height: '100%',
            borderRadius: '0.2rem 0 0 0.2rem'
          }}
        > */}

        <IconButton
          sx={{
            backgroundColor: '#24A0ED',
            color: 'white',
            height: '100%',
            '&.MuiButtonBase-root': {
              borderRadius: '0.2rem 0 0 0.2rem',
              p: '0.2rem',
              ':hover': { backgroundColor: '#24A0ED' }
            }
          }}
          onClick={closeHandler}
          data-testid="closebutton"
        >
          {showClose ? (
            <AiOutlineClose
              size="1rem"
              data-testid="closeicon"
            />
          ) : null}
        </IconButton>
        {/* </Box> */}
        <IconButton data-testid="redditicon">
          <IoLogoReddit />
        </IconButton>
        {message}
      </StyledButton>
    </MessageAlert>
  ) : null;
}

export default ActionMessage;
