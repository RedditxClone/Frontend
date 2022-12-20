/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, Switch } from '@mui/material';
import './EmailsStyle.css';
import { getSettings, UpdateSettings } from '../../store/slices/Settings';

export default function Emails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, []);
  const { settings } = useSelector((state) => state.settings);
  const handleChatRequest = (e) => {
    dispatch(UpdateSettings({ chatRequest: e.target.checked }));
  };
  const handleFollower = (e) => {
    dispatch(UpdateSettings({ newFollower: e.target.checked }));
  };
  const handleUnsubscribe = (e) => {
    dispatch(UpdateSettings({ unSubscribe: e.target.checked }));
  };
  return (
    <div className="emails">
      <h2 className="h2">Manage Emails</h2>
      <div className="messages">
        <h3 className="main-h3">Messages</h3>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Inbox messages</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div-last"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Chat requests</h3>
          </div>
          <Box className="child-b">
            <Switch
              onChange={handleChatRequest}
              checked={settings.chatRequest}
              disabled={settings.unSubscribe}
            />
          </Box>
        </div>
      </div>
      <div className="activity">
        <h3 className="main-h3">Activity</h3>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">New user welcome</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Comments on your posts</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Replies to your comments</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Upvotes on your posts</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Upvotes on your comments</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Username mentions</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div-last"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">New followers</h3>
          </div>
          <Box className="child-b">
            <Switch
              onChange={handleFollower}
              checked={settings.newFollower}
              disabled={settings.unSubscribe}
            />
          </Box>
        </div>
      </div>
      <div className="newsletters">
        <h3 className="main-h3">NewsLetters</h3>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Daily Digest</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Weekly Recap</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
          </Box>
        </div>
        <div
          className="parent-div-last"
          style={settings.unSubscribe ? { opacity: 0.4 } : { opacity: 1 }}
        >
          <div className="child-div">
            <h3 className="h3">Community Discovery</h3>
          </div>
          <Box className="child-b">
            <Switch disabled={settings.unSubscribe} />
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
            <Switch
              onChange={handleUnsubscribe}
              checked={settings.unSubscribe}
            />
          </Box>
        </div>
      </div>
    </div>
  );
}
