/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../../services/requests/Post';

function RemovalReasonDialog({ open, handleClose, postId }) {
  const maxRemovalReasonLength = 100;
  const [removalReason, setRemovalReason] = useState(0);
  const handleSelectChange = (event) => {
    setRemovalReason(event.target.value);
  };
  const [charCounter, setCharCounter] = useState(0);
  const removalReasonInput = useRef(null);
  const dispatch = useDispatch();

  /**
   * This Method handles the maximum number allowed for the removal reason
   *
   */
  const handleRemovalReasonInput = (e) => {
    const currentLength = e.target.value.length;

    if (currentLength <= maxRemovalReasonLength) {
      setCharCounter(maxRemovalReasonLength - currentLength);
    } else {
      e.target.maxLength = maxRemovalReasonLength;
    }
  };

  /**
   * This Method handles the submission of the post's removal reason
   *
   */
  const handleSubmit = () => {
    // getting the removal action
    const reason = document.querySelector(
      '.removal-reason-input > input'
    ).value;

    // dispatching the removal action
    const info = {
      body: { message: reason, reasonId: removalReason },
      removedPostId: postId
    };
    dispatch(removePost(info));

    // closing the dialog card
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth="800px"
    >
      <DialogTitle fontSize="16px">Add a removal reason</DialogTitle>
      <DialogContent>
        <Box
          noValidate
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 'auto',
            width: '100%'
          }}
        >
          <FormControl fullWidth>
            <Select
              value={removalReason}
              onChange={handleSelectChange}
              displayEmpty
              defaultValue={0}
              sx={{ fontSize: '15px', color: '#7c7c7c' }}
            >
              <MenuItem
                value={0}
                sx={{
                  fontWeight: '500',
                  fontSize: '15px',
                  backgroundColor: 'white',
                  color: '#7c7c7c',
                  ':hover': {
                    backgroundColor: '#d1d1d1',
                    color: 'black'
                  }
                }}
              >
                None
              </MenuItem>
              <MenuItem
                value={1}
                sx={{
                  fontWeight: '500',
                  fontSize: '15px',
                  backgroundColor: 'white',
                  color: '#7c7c7c',
                  ':hover': {
                    backgroundColor: '#d1d1d1',
                    color: 'black'
                  }
                }}
              >
                First Reason
              </MenuItem>
              <MenuItem
                value={2}
                sx={{
                  fontWeight: '500',
                  fontSize: '15px',
                  backgroundColor: 'white',
                  color: '#7c7c7c',
                  ':hover': {
                    backgroundColor: '#d1d1d1',
                    color: 'black'
                  }
                }}
              >
                Second Reason
              </MenuItem>
            </Select>
            <Box sx={{ marginTop: '2rem' }}>
              <div
                style={{
                  fontSize: '15px',
                  marginBottom: '1.5rem'
                }}
              >
                Mod note (Only mods will see this note)
              </div>
              <Input
                fullWidth
                className="removal-reason-input"
                id="outlined-basic"
                variant="outlined"
                placeholder="This is a short note to your mod team on why the content was removed."
                sx={{
                  fontSize: '14px'
                }}
                onChange={handleRemovalReasonInput}
              />
            </Box>
            <Box
              color="#7c7c7c"
              id="char-counter"
              sx={{
                marginTop: '1rem',
                fontSize: '15px'
              }}
            >
              {`${charCounter} `}
              Characters remaining
            </Box>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            fontSize: '15px',
            border: '1px solid #0079d3',
            color: '#0079d3',
            fontFamily: 'Noto Sans, Arial, sans serif',
            fontWeight: '700',
            lineHeight: '1.6rem',
            letterSpacing: '1.5',
            minHeight: '2.4rem',
            minWidth: '4rem',
            padding: '1rem 2rem',
            marginLeft: '1rem',
            alignItems: 'center',
            borderRadius: '999.9rem',
            boxSizing: 'border-box',
            cursor: 'pointer',
            textTransform: 'Capitalize'
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={handleSubmit}
          sx={{
            fontSize: '15px',
            border: 'none',
            backgroundColor: '#0079d3',
            color: 'white',
            fontFamily: 'Noto Sans, Arial, sansserif',
            fontWeight: '700',
            lineHeight: '1.6rem',
            letterSpacing: '1.5',
            minHeight: '2.4rem',
            minWidth: '4rem',
            padding: '1rem 2rem',
            marginLeft: '1rem',
            alignItems: 'center',
            borderRadius: '999.9rem',
            boxSizing: 'border-box',
            cursor: 'pointer',
            textTransform: 'Capitalize',
            '&:hover': {
              backgroundColor: '#0079d3'
            }
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default RemovalReasonDialog;
