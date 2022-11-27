/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './ActionComponents.css';
import { useDispatch } from 'react-redux';
import { UpdateSettings } from '../../../store/slices/UpdateSettings';

export default function Box3({ setIsToggled }) {
  const dispatch = useDispatch();
  const handleClickClose = () => {
    const ele = document.getElementById('confg3');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsToggled(false);
    dispatch(UpdateSettings({ nsfw: true }));
  };
  const handleClicked = () => {
    const ele = document.getElementById('confg3');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsToggled(false);
    dispatch(UpdateSettings({ nsfw: false }));
  };
  return (
    <div
      className="box3"
      id="confg3"
    >
      <div className="div-d">
        <div
          className="icon-1"
          onClick={handleClickClose}
        >
          <CloseIcon />
        </div>
        <h2 className="h2-h">SWITCH ACCOUNT TO SFW</h2>
      </div>
      <p className="p-p">
        If your account contains NSFW content (contains nudity, pornography,
        profanity or inappropriate content for those under 18) and it’s not set
        to NSFW, this will result in actions up to and including suspension of
        your account.
      </p>
      <div className="buttons">
        <div className="btn-1">
          <Button
            variant="outlined"
            color="primary"
            onClick={handleClickClose}
          >
            CANCEL
          </Button>
        </div>
        <div>
          <Button
            onClick={handleClicked}
            variant="contained"
          >
            I UNDERSTAND
          </Button>
        </div>
      </div>
    </div>
  );
}
