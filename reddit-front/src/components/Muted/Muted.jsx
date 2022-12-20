/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
// import React from 'react';
import { Button, TextField } from '@mui/material';
import { TbHammer } from 'react-icons/tb';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchComp from './SearchComp';
import {
  getMutedUsers,
  postMutedUsers
} from '../../services/requests/userManagment';

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

export default function Muted() {
  const maxTextCount = 300;
  const [countCharText, setCountCharText] = useState(maxTextCount);
  const [open, setOpen] = useState(false);
  const [reasonMute, setReasonMute] = useState('');
  const [userNameMute, setUserNameMute] = useState('');
  const [isAdded, setIsAdded] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen(false);
  };
  const [mutedUsers, setMutedUsers] = useState([]);
  useEffect(() => {
    const fetchMutedUsers = async () => {
      const results = await getMutedUsers();
      setMutedUsers(results);
    };
    fetchMutedUsers();
  }, [isAdded]);

  const onChangeUser = (e) => {
    setUserNameMute(e.target.value);
  };
  const handleChangetext = (e) => {
    setCountCharText(maxTextCount - e.target.value.length);
    setReasonMute(e.target.value);
  };
  const handleClose = () => {
    postMutedUsers({
      id: Math.random() * 1000,
      username: userNameMute,
      reason: reasonMute
    });
    setIsAdded(isAdded + 1);
    setReasonMute('');
    setUserNameMute('');
    setOpen(false);
  };

  const mutedUsersData =
    mutedUsers.length > 0 ? (
      <SearchComp mutedUsers={mutedUsers} />
    ) : (
      <div
        className="muted-users"
        style={{
          backgroundColor: '#ffffff',
          minHeight: '262px',
          borderRadius: '7px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span
          style={{
            marginLeft: '40%',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '22px',
            color: '#878a8c'
          }}
        >
          <span>
            <TbHammer
              style={{
                fontSize: '35px',
                marginLeft: '94px',
                marginBottom: '30px'
              }}
            />
          </span>
          <br />
          No muted users in r/eee123
        </span>
      </div>
    );

  return (
    <div
      className="muted-cont"
      style={{ backgroundColor: '#dae0e6', width: '100%' }}
    >
      <div
        className="cont-1"
        style={{
          height: '48px',
          margin: '0',
          backgroundColor: '#edeff1',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse'
        }}
      >
        <div
          className="button-cont"
          style={{ width: '100px', marginRight: '17px' }}
        >
          <Button
            style={{
              backgroundColor: '#0079d3',
              color: '#ffffff',
              borderRadius: '50px',
              fontSize: '14px',
              width: '95px',
              textTransform: 'none',
              height: '31px'
            }}
            onClick={handleClickOpen}
          >
            Mute user
          </Button>
          <BootstrapDialog
            onClose={handleClose2}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose2}
            >
              Mute user
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              style={{
                width: '550px',
                paddingTop: '0px',
                paddingBottom: '3px'
              }}
            >
              <br />
              <input
                type="text"
                placeholder="Username to mute"
                style={{ width: '100%', height: '40px' }}
                onChange={onChangeUser}
              />
              <br />
              <h2 style={{ marginTop: '30px', opacity: '0.7' }}>
                Note about why they are muted
              </h2>
              <h3
                style={{ marginTop: '5px', opacity: '0.7', color: '#878a8c' }}
              >
                Only visible to other moderators. Not visible to user
              </h3>
              <textarea
                style={{
                  width: '100%',
                  minHeight: '80px'
                }}
                placeholder="Reason they were muted"
                onChange={handleChangetext}
              />
              <p className="p2">
                {countCharText}
                <span style={{ marginLeft: '2px' }}>Characters remaining</span>
              </p>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose2}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Cancel
              </Button>
              <Button
                onClick={userNameMute ? handleClose : ''}
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  cursor: userNameMute ? 'pointer' : 'not-allowed',
                  backgroundColor: userNameMute ? '' : '#757575',
                  color: userNameMute ? '' : '#bdbdbd'
                }}
              >
                Mute User
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ padding: '10px 0 0px 25px' }}>Muted users</h2>
        <span
          style={{
            marginLeft: '7px',
            fontSize: '22px',
            marginTop: '19px',
            color: '#0079d3'
          }}
        >
          <a
            href="https://mods.reddithelp.com/hc/en-us/articles/360009161872"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExclamationCircle style={{ cursor: 'pointer' }} />
          </a>
        </span>
      </div>
      <div
        className="muted-user-cont"
        style={{ padding: '10px 25px 0 25px' }}
      >
        {mutedUsersData}
      </div>
    </div>
  );
}
