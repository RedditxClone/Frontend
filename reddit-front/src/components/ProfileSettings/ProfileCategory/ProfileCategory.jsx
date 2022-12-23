/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
import { Switch, Box } from '@mui/material';
import './ProfileCategoryStyle.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box3 from '../ActionComponents.jsx/Box3';
import { UpdateSettings } from '../../../store/slices/Settings';

/**
 * @param {object} settings
 */

/**
 * this is component in profile information page
 * it contains the features : NSFW
 */

function ProfileCategory({ settings }) {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [nsfwState, setIsnsfwState] = useState(false);
  const handleToggle = (e) => {
    dispatch(UpdateSettings({ nsfw: e.target.checked }));
    setIsnsfwState(e.target.checked);
    setIsToggled(true);
  };
  return (
    <>
      {!nsfwState && isToggled && <div className="overlay"></div>}
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
            <Switch
              onChange={handleToggle}
              checked={settings.nsfw}
            />
          </Box>
          {!nsfwState && isToggled && <Box3 setIsToggled={setIsToggled} />}
        </div>
      </div>
    </>
  );
}
export default ProfileCategory;
