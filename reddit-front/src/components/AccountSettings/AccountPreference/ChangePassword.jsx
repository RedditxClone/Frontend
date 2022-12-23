/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Switch, Button } from '@mui/material';
import reddit from '../../../assets/Images/editedReddit.png';
import cover from '../../../assets/Images/redditCover.png';
import './ChangePassStyle.css';

/**
 * @param {fuction} setIsShownChangePass
 */

/**
 * this is change password component
 * when we click on change password button it shows this component
 */

function ChangePassword({ setIsShownChangePass }) {
  const handleClickClose = () => {
    const ele = document.getElementById('confgg1');
    ele.style.display = 'none';
    ele.style.visibility = 'hidden';
    setIsShownChangePass(false);
  };
  return (
    <div
      className="change-password"
      id="confgg1"
    >
      <div className="content-c">
        <div className="cover-image">
          <img
            src={cover}
            alt="cover"
          />
        </div>
        <div className="update-password">
          <div className="ic-container">
            <div className="icon-reddit">
              <img
                src={reddit}
                alt="reddit"
              />
            </div>
            <div className="icon-c">
              <CloseIcon
                onClick={handleClickClose}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
          <h3
            style={{ marginLeft: '30px' }}
            className="update-pass"
          >
            Update your password
          </h3>
          <div className="inputt-1">
            <TextField
              required
              id="outlined-basic"
              label="OLD PASSWORD"
              variant="outlined"
              style={{
                marginLeft: '30px',
                width: '450px'
              }}
            />
          </div>
          <div className="inputt-1">
            <TextField
              required
              id="outlined-basic"
              label="NEW PASSWORD"
              variant="outlined"
              style={{
                marginTop: '30px',
                marginLeft: '30px',
                width: '450px'
              }}
            />
          </div>
          <div className="inputt-1">
            <TextField
              required
              id="outlined-basic"
              label="CONFIRM NEW PASSWORD"
              variant="outlined"
              style={{
                marginTop: '30px',
                marginLeft: '30px',
                width: '450px'
              }}
            />
          </div>
          <div className="up-p-cont">
            <div className="cont-pp">
              <h3 className="update-pass">Log me out everywhere</h3>
              <p
                className="up-p"
                style={{ lineHeight: '1.5' }}
              >
                Changing your password logs you out of all browsers on your
                device(s). Checking this box also logs you out of all apps you
                have authorized.
              </p>
            </div>
            <div className="sw-icon">
              <Switch />
            </div>
          </div>
          <Button
            style={{ borderRadius: '50px', width: '150px', marginLeft: '30px' }}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
