/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-wrap-multilines */
import './ConnectedAccountsStyle.css';
import { Switch, Button, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import google from '../../../assets/images/google.png';

export default function ConnectedAccounts() {
  return (
    <div className="connected-accounts">
      <h3 className="main-h3">Connected Accounts</h3>
      <div className="account">
        <div className="facebook">
          <h3
            className="h3"
            id="fa-h3"
          >
            Connect to Facebook
          </h3>
          <p className="p">
            Connect a Facebook account to enable the choice to share your new
            posts and display a link on your profile. We will never post to
            Facebook without your permission.
          </p>
          <Box className="cont">
            <Button
              startIcon={<FacebookIcon />}
              variant="contained"
              style={{ backgroundColor: '#1da1f2' }}
            >
              Connect to Facebook
            </Button>
          </Box>
        </div>
      </div>
      <div className="disabled-div">
        <div className="user">
          <h3 className="h3">Show link on profile</h3>
          <p className="p">
            you can show a link to your Facebook account on your profile
          </p>
        </div>
        <Box className="cont">
          <Switch />
        </Box>
      </div>
      <div className="account">
        <div className="google">
          <h3 className="h3">Connected to Google</h3>
          <p className="p">Connect account to log in to Reddit with Google</p>
        </div>
        <Box className="cont">
          <Button
            startIcon={
              <img
                src={google}
                alt="google"
                style={{ backgroundColor: '#ffffff' }}
              />
            }
            variant="contained"
            style={{ backgroundColor: '#1da1f2' }}
          >
            Connect to Google
          </Button>
        </Box>
      </div>
    </div>
  );
}
