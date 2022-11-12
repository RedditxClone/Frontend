/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import { Switch, Box } from '@mui/material';
import './ProfileCategoryStyle.css';
import { useState } from 'react';
import Box3 from '../ActionComponents.jsx/Box3';

export default function ProfileCategory() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(true);
  };
  return (
    <>
      {isToggled && <div className="overlay"></div>}
      <div className="profile-category">
        <h3 className="main-h3">ProfileCategory</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">NSFW</h3>
            <p className="p">
              This content is NSFW (may contain nudity, pornography, profanity
              or inappropriate content for those under 18)
            </p>
          </div>
          <Box className="child-b">
            <Switch onChange={handleToggle} />
          </Box>
          {isToggled && <Box3 setIsToggled={setIsToggled} />}
        </div>
      </div>
    </>
  );
}
