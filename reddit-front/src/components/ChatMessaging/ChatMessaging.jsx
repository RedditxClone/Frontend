/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import { Box, Button, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
import './ChatMessagingStyle.css';
/**
 * this is the component that contains the chat settings
 */
export default function ChatMessaging() {
  const [state, setState] = useState('EVERYONE');
  const handleChangeState = (e) => {
    setState(e.target.value);
  };
  const [stat, setStat] = useState('EVERYONE');
  const handleChangeStat = (e) => {
    setStat(e.target.value);
  };
  return (
    <div
      data-testid="chat-mes-settings-container"
      className="chat-messaging"
    >
      <h2 className="h2">Chat & Messaging</h2>
      <div className="parent-div-first">
        <div className="child-div">
          <h3 className="h3">Who can send you chat requests</h3>
        </div>
        <Box className="child-b">
          <TextField
            style={{ marginTop: '-7px' }}
            variant="standard"
            select
            fullwidth
            value={state}
            onChange={handleChangeState}
          >
            <MenuItem
              style={{ fontSize: 11, fontWeight: 500 }}
              value="EVERYONE"
            >
              EVERYONE
            </MenuItem>
            <MenuItem
              style={{ fontSize: 11, fontWeight: 500 }}
              value="ACCOUNT OLDER THAN 30 DAYS"
            >
              ACCOUNT OLDER THAN 30 DAYS
            </MenuItem>
            <MenuItem
              style={{ fontSize: 11, fontWeight: 500 }}
              value="NOBODY"
            >
              NOBODY
            </MenuItem>
          </TextField>
        </Box>
      </div>
      <div
        className="parent-div"
        style={{ marginTop: '32px' }}
      >
        <div className="child-div">
          <h3 className="h3">Who can send you private messages</h3>
          <p className="p-1">
            Heads up—Reddit admins and moderators of communities you’ve joined
            can message you even if they’re not approved.
          </p>
        </div>
        <Box className="child-b">
          <TextField
            style={{ marginTop: '15px' }}
            variant="standard"
            select
            fullwidth
            value={stat}
            onChange={handleChangeStat}
          >
            <MenuItem
              style={{ fontSize: 11, fontWeight: 500 }}
              value="EVERYONE"
            >
              EVERYONE
            </MenuItem>
            <MenuItem
              style={{ fontSize: 11, fontWeight: 500 }}
              value="NOBODY"
            >
              NOBODY
            </MenuItem>
          </TextField>
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Invite someone to chat</h3>
          <p className="p-2">
            Copy a link to invite someone to a direct chatroom with you.
          </p>
        </div>
        <Box
          className="child-b"
          style={{
            justifyCcontent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1
          }}
        >
          <Button
            data-testid="copy-btn"
            variant="outlined"
            color="primary"
            style={{ marginBottom: '50px', padding: '6px 18px' }}
            // style={{
            //   fontWeight: '700',
            //   letterSpacing: 'unset',
            //   lineHeight: '17px',
            //   textTransform: 'unset',
            //   minHeight: '32px',
            //   padding: '4px 16px',
            //   borderRadius: '50px',
            // }}
          >
            Copy link
          </Button>
        </Box>
      </div>
      <div className="parent-div-last">
        <div className="child-div">
          <h3 className="h3">Mark all as read</h3>
          <p className="p">Mark all conversations and invites as read.</p>
        </div>
        <Box
          className="child-b"
          style={{
            justifyCcontent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1
          }}
        >
          <Button
            style={{ marginBottom: '50px', padding: '6px 18px' }}
            variant="outlined"
            color="primary"
          >
            Mark as Read
          </Button>
        </Box>
      </div>
    </div>
  );
}
