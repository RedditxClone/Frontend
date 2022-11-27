/* eslint-disable linebreak-style */
import { Switch, Box } from '@mui/material';
import './AdvancedStyle.css';
import { useDispatch } from 'react-redux';
import { UpdateSettings } from '../../../store/slices/UpdateSettings';

export default function Advanced({ settings }) {
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    dispatch(UpdateSettings({ allowFollow: e.target.checked }));
  };
  return (
    <div className="advanced">
      <h3 className="main-h3">Advanced</h3>
      <div className="parent-div-1">
        <div className="child-div">
          <h3 className="h3">Allow people to follow you</h3>
          <p className="p">
            Followers will be notified about posts you make to your profile and
            see them in their home feed.
          </p>
        </div>
        <Box className="child-b">
          <Switch
            onChange={handleToggle}
            checked={settings.allowFollow}
          />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Content visibility</h3>
          <p className="p">
            Posts to this profile can appear in r/all and your profile can be
            discovered in /users
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Active in communities visibility</h3>
          <p className="p">
            Show which communities I am active in on my profile.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
    </div>
  );
}
