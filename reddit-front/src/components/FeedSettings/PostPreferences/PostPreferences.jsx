/* eslint-disable linebreak-style */
import { Box, Switch } from '@mui/material';

export default function PostPreferences() {
  return (
    <div className="post-preferences">
      <h3 className="main-h3">Post Preferences</h3>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Default to markdown</h3>
          <p className="p">
            When posting, your input will default to markdown text instead of
            fancy pants.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
    </div>
  );
}
