/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './ActionComponents.css';

export default function Box3({ setIsToggled }) {
  const handleClickClose = () => {
    const ele = document.getElementById('confg-3');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsToggled(false);
  };
  return (
    <div
      className="box-3"
      id="confg-3"
    >
      <div className="div-d">
        <div
          className="icon-1"
          onClick={handleClickClose}
        >
          <CloseIcon />
        </div>
        <h2 className="h2-h">Opt out of the redesign</h2>
      </div>
      <p className="p-p">
        There is an opt in to redesign setting in Preferences (in old Reddit) if
        you'd like to opt back in.
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
          <Button variant="contained">OPT OUT</Button>
        </div>
      </div>
    </div>
  );
}
