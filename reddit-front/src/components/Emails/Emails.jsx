/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import { Box, Switch } from '@mui/material';
import './EmailsStyle.css';
/**
 * this is the component that contains the email settings
 */
export default function Emails() {
  return (
    <div
      data-testid="emails-settings-container"
      className="emails"
    >
      <h2 className="h2">Manage Emails</h2>
      <div className="messages">
        <h3 className="main-h3">Messages</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Inbox messages</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div-last">
          <div className="child-div">
            <h3 className="h3">Chat requests</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
      </div>
      <div className="activity">
        <h3 className="main-h3">Activity</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">New user welcome</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Comments on your posts</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Replies to your comments</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Upvotes on your posts</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Upvotes on your comments</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Username mentions</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div-last">
          <div className="child-div">
            <h3 className="h3">New followers</h3>
          </div>
          <Box className="child-b">
            <Switch data-testid="new-followers-sw" />
          </Box>
        </div>
      </div>
      <div className="newsletters">
        <h3 className="main-h3">NewsLetters</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Daily Digest</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Weekly Recap</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div-last">
          <div className="child-div">
            <h3 className="h3">Community Discovery</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
      </div>
      <div className="last">
        <h3 className="main-h3"> </h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Unsubscribe from all emails</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
      </div>
    </div>
  );
}
