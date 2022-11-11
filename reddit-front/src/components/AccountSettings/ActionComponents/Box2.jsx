/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import CloseIcon from '@mui/icons-material/Close';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import { Button } from '@mui/material';
import './ActionComponents.css';

export default function Box2({ setIsShownContinue, email }) {
  const handleClickOk = () => {
    const ele = document.getElementById('confg-2');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownContinue(false);
  };
  return (
    <div
      className="box-2"
      id="confg-2"
    >
      <div
        className="icon-1"
        onClick={handleClickOk}
      >
        <CloseIcon />
      </div>
      <div className="box-2-parent">
        <div className="box-2-icon-2">
          <MarkEmailUnreadIcon
            className="msg-icon"
            style={{ fontSize: '2rem' }}
          />
        </div>
        <h2 className="box-2-h2">Check your email</h2>
      </div>
      <p className="box-2-p">
        We sent a message to
        {email}
        with a link to create your password.
      </p>
      <div className="buttons">
        <div className="btn-1">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickOk}
          >
            Ok
          </Button>
        </div>
      </div>
    </div>
  );
}
