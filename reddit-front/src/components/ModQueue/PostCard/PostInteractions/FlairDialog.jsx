/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
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
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { FiSearch } from 'react-icons/fi';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function FlairDialog({ open, handleClose, postId, subredditName }) {
  const maxRemovalReasonLength = 65;
  const [removalReason, setRemovalReason] = useState(0);
  const handleSelectChange = (event) => {
    setRemovalReason(event.target.value);
  };
  const [charCounter, setCharCounter] = useState(0);
  const removalReasonInput = useRef(null);
  const dispatch = useDispatch();
  const [selectedFlair, setSelectedFlair] = useState(0);
  const flairs = ['flair_1', 'flair_2'];
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

  const handleChooseFlair = (e) => (number) => {
    const radioInput = e.target.firstChild;
    radioInput.checked = true;
    setSelectedFlair(number);
    console.log('num', number);
    console.log('state', selectedFlair);
  };

  const handleClearFlairs = () => {
    const radioInputs = document.querySelectorAll('.radio-input-flair');
    radioInputs.forEach((radioInput) => {
      radioInput.checked = false;
    });
    setSelectedFlair(0);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth="400px"
    >
      <DialogTitle fontSize="16px">
        {`Select r/${subredditName} flair`}
      </DialogTitle>

      <DialogContent>
        <div
          className="selectetd-flair"
          style={{ margin: '2rem 0', fontSize: '13px', fontWeight: 'bold' }}
        >
          Post Title :
          {selectedFlair !== 0 ? (
            <span
              style={{
                display: 'inline-block',
                fontSize: '12px',
                marginLeft: '5px',
                padding: '2px 5px',
                borderRadius: '5px',
                backgroundColor: 'orange',
                fontWeight: '600'
              }}
            >
              {flairs[selectedFlair - 1]}
            </span>
          ) : (
            'No Flair Selected'
          )}
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
          <input
            style={{
              width: '100%',
              display: 'inline-block',
              padding: '10px 2rem',
              paddingLeft: '3rem'
            }}
            type="text"
            placeholder="Search for flair"
          />
          <FiSearch
            fontSize="2rem"
            style={{ position: 'absolute', top: '7px', left: '7px' }}
          />
        </div>
        {/* // show flairs */}
        <div>
          <form>
            <Box
              onClick={() => {
                setSelectedFlair(1);
              }}
              sx={{
                display: 'flex',
                align: 'center',
                marginTop: '1rem',
                padding: '5px 0',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#0079D3'
                }
              }}
            >
              <input
                className="radio-input-flair"
                type="radio"
                name="flair"
                value="male"
                style={{
                  display: 'inline-block',
                  width: '15px',
                  cursor: 'pointer',
                  height: '15px'
                }}
                checked={selectedFlair === 1}
              />
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  marginLeft: '5px',
                  padding: '2px 5px',
                  borderRadius: '5px',
                  backgroundColor: 'orange',
                  fontWeight: '600'
                }}
              >
                flair 1
              </span>
            </Box>

            <Box
              onClick={() => {
                setSelectedFlair(2);
              }}
              sx={{
                display: 'flex',
                align: 'center',
                marginTop: '1rem',
                padding: '5px 0',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#0079D3'
                }
              }}
            >
              <input
                className="radio-input-flair"
                type="radio"
                name="flair"
                value="male"
                style={{
                  display: 'inline-block',
                  width: '15px',
                  cursor: 'pointer',
                  height: '15px'
                }}
                checked={selectedFlair === 2}
              />
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '12px',
                  marginLeft: '5px',
                  padding: '2px 5px',
                  borderRadius: '5px',
                  backgroundColor: 'orange',
                  fontWeight: '600'
                }}
              >
                flair 2
              </span>
            </Box>
          </form>
        </div>

        {/* edit flair  */}
        <Box sx={{ marginTop: '2rem' }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 'bold',
              marginBottom: '0.5rem'
            }}
          >
            Edit Flair
          </div>
          <Input
            fullWidth
            className="removal-reason-input"
            id="outlined-basic"
            variant="outlined"
            sx={{
              fontSize: '14px'
            }}
            onChange={handleRemovalReasonInput}
            value={flairs[selectedFlair]}
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
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClearFlairs}
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
          Clear Flairs
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
export default FlairDialog;
