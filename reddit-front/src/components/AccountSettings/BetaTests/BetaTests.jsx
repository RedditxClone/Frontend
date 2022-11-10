/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import { Switch, Box } from '@mui/material';
import './BetaTestsStyle.css';
import { useState } from 'react';
import Box3 from '../ActionComponents/Box3';

export default function BetaTests() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(true);
  };
  return (
    <>
      {isToggled && <div className="overlay"></div>}
      <div className="beta-tests">
        <h3 className="main-h3">Beta Tests</h3>
        <div className="user-info">
          <div className="user">
            <h3 className="h3">Opt into beta tests</h3>
            <p className="p">
              See the newest features from Reddit and join the r/beta community
            </p>
          </div>
          <Box className="cont">
            <Switch />
          </Box>
        </div>
        <div className="beta-2">
          <div className="user">
            <h3 className="h3">Opt out of the redesign</h3>
            <p className="p">Revert back to old Reddit for the time being</p>
          </div>
          <Box className="cont">
            <Switch onChange={handleToggle} />
          </Box>
          {isToggled && <Box3 setIsToggled={setIsToggled} />}
        </div>
      </div>
    </>
  );
}
