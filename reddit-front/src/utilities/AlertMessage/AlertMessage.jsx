/* eslint-disable react/jsx-wrap-multilines */
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { AlertTitle } from '@mui/material';
/**
 * This is a component that is used to alert the user after taking an action,
 * We use The Alert component from MUI {@link https://mui.com/material-ui/react-alert/}
 * @param {string} type - This is a string that determines the type of the alert
 * @param {string} message - This is the message that appears to the user
 * @param {Boolean} openAlertMessage - controls the alert to show or not
 * @returns {React.component}
 */
function AlertMessage({ type, message, opnAlertMessage }) {
  const [open, setOpen] = useState(opnAlertMessage);
  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <Collapse in={open}>
        <Alert
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle sx={{ fontSize: '1.6rem' }}>{type}</AlertTitle>
          <p style={{ fontSize: '1.2rem' }}>{message}</p>
        </Alert>
      </Collapse>
    </Box>
  );
}
export default AlertMessage;
