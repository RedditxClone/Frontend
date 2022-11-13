/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unescaped-entities */
import { Box, Switch } from '@mui/material';
import './NotificationsStyle.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import CommunityAlert from './CommunityAlert/CommunityAlert';
/**
 * this is the component that contains the notifications settings
 */
export default function Notifications() {
  const [isForward, setIsForward] = useState(false);
  const handleClickForward = () => {
    setIsForward(true);
  };
  return (
    <>
      {isForward && <CommunityAlert setIsForward={setIsForward} />}
      {!isForward && (
        <div
          data-testid="notifi-settings-container"
          className="notifications"
        >
          <h2 className="h2">Notifications settings</h2>
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
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Chat messages</h3>
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
                <h3
                  className="h3"
                  onClick={handleClickForward}
                  style={{ cursor: 'pointer' }}
                >
                  Community alerts
                </h3>
              </div>
              <Box
                className="child-b"
                style={{ justifyContent: 'flex-start', paddingBottom: '6px' }}
              >
                <ArrowForwardIcon
                  style={{ marginLeft: '7px', cursor: 'pointer' }}
                  onClick={handleClickForward}
                />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Mentions of u/username</h3>
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
                <h3 className="h3">Replies to your comments</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Activity on your comments</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Activity on threads you're in</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Activity on chat posts you're in</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">New followers</h3>
              </div>
              <Box className="child-b">
                <Switch data-testid="new-follower-sw" />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">New post flair</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">New user flair</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Pinned posts</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Awards you receive</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Posts you follow</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Comments you follow</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div-last">
              <div className="child-div">
                <h3 className="h3">Reddit Talk in your communities</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
          </div>
          <div className="recommendation">
            <h3 className="main-h3">Recommendation</h3>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Trending posts</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Broadcast recommendations</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Community recommendations</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div-last">
              <div className="child-div">
                <h3 className="h3">ReReddit</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
          </div>
          <div className="updates">
            <h3 className="main-h3">Updates</h3>
            <div className="parent-div">
              <div className="child-div">
                <h3 className="h3">Reddit announcements</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
            <div className="parent-div-last">
              <div className="child-div">
                <h3 className="h3">Cake day</h3>
              </div>
              <Box className="child-b">
                <Switch />
              </Box>
            </div>
          </div>
          {/* <div className="moderation">
        <h3 className="main-h3">Moderation</h3>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">Mod notifications</h3>
          </div>
          <Box className="child-b">
            <Switch />
          </Box>
        </div>
        <div className="parent-div">
          <div className="child-div">
            <h3 className="h3">r/sports_20</h3>
          </div>
          <Box className="child-b">
            <ArrowForwardIcon />
          </Box>
        </div>
      </div> */}
        </div>
      )}
    </>
  );
}
