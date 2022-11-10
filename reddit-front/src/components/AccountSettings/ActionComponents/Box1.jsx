/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import CloseIcon from '@mui/icons-material/Close';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Button } from '@mui/material';
// import { useState } from 'react';
import './ActionComponents.css';

export default function Box1({ setIsShownChange, setIsShownContinue }) {
  const handleClickClose = () => {
    const ele = document.getElementById('confg-1');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownChange(false);
  };
  const handleClickContinue = () => {
    setIsShownContinue(true);
    handleClickClose();
  };
  return (
    <div className="b-contain">
      <div
        className="box-1"
        id="confg-1"
      >
        <div
          className="icon-1"
          onClick={handleClickClose}
        >
          <CloseIcon />
        </div>
        <div className="box-1-parent">
          <div className="box-1-icon-2">
            <MarkEmailUnreadIcon
              className="msg-icon"
              style={{ fontSize: '2rem' }}
            />
          </div>
          <h2 className="box-1-h2">Change your email address</h2>
        </div>
        <p className="box-1-p">
          To change your email address, you need to create a Reddit password
          first. We'll walk you through it.
        </p>
        <div className="buttons">
          <div className="btn-1">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickClose}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              onClick={handleClickContinue}
              variant="contained"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
