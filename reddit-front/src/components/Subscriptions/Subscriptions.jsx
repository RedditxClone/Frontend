/* eslint-disable linebreak-style */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box } from '@mui/material';
import './SubscriptionsStyle.css';

export default function Subscriptions() {
  return (
    <div className="subscriptions">
      <h2 className="h2">Reddit Premium</h2>
      <p className="p">
        Reddit Premium is a subscription membership that upgrades your account
        with extra features.
      </p>
      <h3 className="main-h3">SUBSCRIPTION STATUS</h3>
      <p className="p">Get Reddit Premium and help support Reddit.</p>
      <div className="parent-div">
        <div className="child-div">
          <a href="##">
            <p
              className="p"
              style={{ color: '#0079d3' }}
            >
              Get Premium
            </p>
            <LaunchIcon style={{ color: '#0079d3' }} />
          </a>
        </div>
        <Box className="child-b">
          <ArrowForwardIcon style={{ color: '#0079d3' }} />
        </Box>
      </div>
    </div>
  );
}
