/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';
import './PostReply.style.css';
import { Button } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
export default function PostReply() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [spamClicked, setSpamClicked] = useState(false);
  const [spammed, setSpammed] = useState(false);
  const handleClickSpam = () => {
    setSpamClicked(true);
  };
  const handleClickSpamNo = () => {
    setSpamClicked(false);
  };
  const handleClickSpamYes = () => {
    setSpamClicked(false);
    setSpammed(true);
  };
  const [removeClicked, setRemoveClicked] = useState(false);
  const [removed, setRemoved] = useState(false);
  const handleClickRemove = () => {
    setRemoveClicked(true);
  };
  const handleClickRemoveNo = () => {
    setRemoveClicked(false);
  };
  const handleClickRemoveYes = () => {
    setRemoveClicked(false);
    setRemoved(true);
  };
  const [blockClicked, setBlockClicked] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const handleClickBlocked = () => {
    setBlockClicked(true);
  };
  const handleClickBlockedNo = () => {
    setBlockClicked(false);
  };
  const handleClickBlockedYes = () => {
    setBlockClicked(false);
    setBlocked(true);
  };
  const [markRead, setMarkRead] = useState(false);
  const handleClickMarkRead = () => {
    setMarkRead(true);
  };
  const [reply, setReply] = useState(false);
  const handleClickReply = () => {
    setReply(true);
  };
  const handleClickSave = () => {
    setReply(false);
  };
  const handleClickCancel = () => {
    setReply(false);
  };
  return (
    <div
      style={{
        margin: '0',
        padding: '10px 15px',
        backgroundColor: '#f6f7f8',
        paddingBottom: '20px',
        borderBottom: '1px solid rgb(229, 222, 222)'
      }}
    >
      <p style={{ margin: '0' }}>
        <span>post reply: </span>{' '}
        <a
          href="##"
          style={{
            textDecoration: 'none',
            marginLeft: '5px',
            cursor: 'pointer',
            color: '#551a8b'
          }}
        >
          r/karim12 Lounge
        </a>
      </p>
      <div style={{ marginLeft: '-1px', marginTop: '10px', color: '#bdbdbd' }}>
        <div>
          <ImArrowUp style={{ cursor: 'pointer' }} />
        </div>
        <div>
          <ImArrowDown style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div
        style={{
          marginLeft: '33px',
          marginTop: '-30px',
          paddingBottom: '11px'
        }}
      >
        <div>
          <span
            style={{
              fontSize: '14px',
              color: !markRead ? '#8B8787' : 'red',
              fontWeight: markRead ? 'bold' : 'normal'
            }}
          >
            from
          </span>
          <a
            href="##"
            style={{
              textDecoration: 'none',
              marginLeft: '4px',
              marginRight: '4px',
              cursor: 'pointer',
              color: '#0079d3',
              fontSize: '14px',
              fontWeight: markRead ? 'bold' : 'normal'
            }}
          >
            /u/ahmed
          </a>
          <span
            style={{
              fontSize: '14px',
              color: !markRead ? '#8B8787' : 'red',
              fontWeight: markRead ? 'bold' : 'normal'
            }}
          >
            via
          </span>
          <a
            href="##"
            style={{
              textDecoration: 'none',
              marginLeft: '4px',
              marginRight: '4px',
              cursor: 'pointer',
              color: '#0079d3',
              fontSize: '14px',
              fontWeight: markRead ? 'bold' : 'normal'
            }}
          >
            /r/karim12
          </a>
          <span
            style={{
              fontSize: '14px',
              color: !markRead ? '#8B8787' : 'red',
              fontWeight: markRead ? 'bold' : 'normal'
            }}
          >
            sent 1 day ago
          </span>
        </div>
        <div style={{ marginTop: '-10px', opacity: '0.7' }}>
          <p>Hello, Iam Karim</p>
        </div>
        <div style={{ marginTop: '-6px' }}>
          <a
            className="link-comment-message"
            href="##"
            style={{ marginLeft: '0' }}
          >
            Context
          </a>
          <a
            className="link-comment-message"
            href="##"
          >
            Full Comments
          </a>
          {!spamClicked ? (
            !spammed ? (
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickSpam}
              >
                Spam
              </a>
            ) : (
              <p
                style={{
                  margin: '0 8px',
                  fontSize: '14px',
                  display: 'inline-block',
                  opacity: '0.7'
                }}
              >
                spammed
              </p>
            )
          ) : (
            <span
              style={{ color: 'red', fontWeight: 'normal', fontSize: '13px' }}
            >
              <span style={{ marginLeft: '3px' }}>are you sure?</span>
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickSpamYes}
              >
                Yes
              </a>
              /
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickSpamNo}
              >
                No
              </a>
            </span>
          )}
          {!removeClicked ? (
            !removed ? (
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickRemove}
              >
                Remove
              </a>
            ) : (
              <p
                style={{
                  margin: '0 8px',
                  fontSize: '14px',
                  display: 'inline-block',
                  opacity: '0.7'
                }}
              >
                removed
              </p>
            )
          ) : (
            <span
              style={{ color: 'red', fontWeight: 'normal', fontSize: '13px' }}
            >
              <span style={{ marginLeft: '3px' }}>are you sure?</span>
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickRemoveYes}
              >
                Yes
              </a>
              /
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickRemoveNo}
              >
                No
              </a>
            </span>
          )}
          <a
            onClick={handleClickOpen}
            className="link-comment-message"
            href="##"
          >
            Report
          </a>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              style={{ color: '#888', fontSize: '15px' }}
            >
              Submit a Report
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Thanks for looking out for yourself and your fellow redditors by
                reporting things that break the rules. Let us know what&apos;s
                happening, and we&apos;ll look into it.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                autoFocus
                onClick={handleClose}
              >
                Spam
              </Button>
            </DialogActions>
          </BootstrapDialog>
          {!blockClicked ? (
            !blocked ? (
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickBlocked}
              >
                Block User
              </a>
            ) : (
              <p
                style={{
                  margin: '0 8px',
                  fontSize: '14px',
                  display: 'inline-block',
                  opacity: '0.7'
                }}
              >
                blocked
              </p>
            )
          ) : (
            <span
              style={{ color: 'red', fontWeight: 'normal', fontSize: '13px' }}
            >
              <span style={{ marginLeft: '3px' }}>are you sure?</span>
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickBlockedYes}
              >
                Yes
              </a>
              /
              <a
                className="link-comment-message"
                href="##"
                onClick={handleClickBlockedNo}
              >
                No
              </a>
            </span>
          )}
          {!markRead ? (
            <a
              className="link-comment-message"
              href="##"
              onClick={handleClickMarkRead}
            >
              Mark Unread
            </a>
          ) : (
            ''
          )}
          <a
            className="link-comment-message"
            href="##"
            onClick={handleClickReply}
          >
            Reply
          </a>
        </div>
      </div>
      {reply ? (
        <div style={{ paddingTop: '22px' }}>
          <textarea style={{ width: '540px', height: '100px' }} />
          <div style={{ display: 'flex', marginTop: '12px' }}>
            <Button
              variant="contained"
              style={{
                width: '73px',
                marginRight: '8px',
                height: '30px',
                fontWeight: 'Bold',
                fontSize: '13px',
                borderRadius: '4px'
              }}
              onClick={handleClickSave}
            >
              Save
            </Button>
            <Button
              variant="contained"
              style={{
                width: '93px',
                marginRight: '8px',
                height: '30px',
                fontWeight: 'Bold',
                fontSize: '13px',
                borderRadius: '4px'
              }}
              onClick={handleClickCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
