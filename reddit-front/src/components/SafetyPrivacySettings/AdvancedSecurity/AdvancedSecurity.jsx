/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import { Box, Switch } from '@mui/material';
import { useState } from 'react';
import './AdvancedSecurityStyle.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import Box1 from '../ActionComponents/Box1';
import Box2 from '../ActionComponents/Box2';

export default function AdvancedSecurity() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(true);
  };
  const [isShownContinue, setIsShownContinue] = useState(false);
  const email = ' karim.moh2052@gamil.com ';
  return (
    <>
      {(isToggled || isShownContinue) && <div className="overlay"></div>}
      <div className="advanced-security">
        <h3 className="main-h3">Advanced Security</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Use two-factor authentication</h3>
            <p className="p">
              Help protect your account (even if someone gets your password) by
              requiring a verification code and a password to log in.
            </p>
          </div>
          <Box className="child-b">
            <Switch onClick={handleToggle} />
            {isToggled && (
              <Box1
                setIsToggled={setIsToggled}
                setIsShownContinue={setIsShownContinue}
              />
            )}
            {isShownContinue && (
              <Box2
                setIsShownContinue={setIsShownContinue}
                email={email}
              />
            )}
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <a href="##">
              <p
                className="p"
                style={{ color: '#0079d3' }}
              >
                Manage third-party app authorization
              </p>
              <LaunchIcon style={{ color: '#0079d3', fontSize: 18 }} />
            </a>
          </div>
          <Box className="child-b">
            <ArrowForwardIcon style={{ color: '#0079d3' }} />
          </Box>
        </div>
      </div>
    </>
  );
}
