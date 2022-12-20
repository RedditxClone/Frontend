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
  getApprovedUsers,
  postApprovedUsers
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

export default function Approved() {
  const [open, setOpen] = useState(false);
  const [userNameApprove, setUserNameApprove] = useState('');
  const [isAdded, setIsAdded] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen(false);
  };
  const [approvedUsers, setApprovedUsers] = useState([]);
  useEffect(() => {
    const fetchApprovedUsers = async () => {
      const results = await getApprovedUsers();
      setApprovedUsers(results);
    };
    fetchApprovedUsers();
  }, [isAdded]);

  const onChangeUser = (e) => {
    setUserNameApprove(e.target.value);
  };
  const handleClose = () => {
    postApprovedUsers({
      username: userNameApprove
    });
    setIsAdded(isAdded + 1);
    setUserNameApprove('');
    setOpen(false);
  };

  const approvedUsersData =
    approvedUsers.length > 0 ? (
      <SearchComp approvedUsers={approvedUsers} />
    ) : (
      <div
        className="approved-users"
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
          No approved users in r/eee123
        </span>
      </div>
    );

  return (
    <div
      className="approved-cont"
      style={{ backgroundColor: '#dae0e6', width: '100%', height: '85.3vh' }}
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
          style={{ width: '115px', marginRight: '20px' }}
        >
          <Button
            style={{
              backgroundColor: '#0079d3',
              color: '#ffffff',
              borderRadius: '50px',
              fontSize: '14px',
              width: '115px',
              textTransform: 'none',
              height: '31px'
            }}
            onClick={handleClickOpen}
          >
            Approve user
          </Button>
          <BootstrapDialog
            onClose={handleClose2}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose2}
              style={{ fontSize: '14px' }}
            >
              Add Approved user
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              style={{
                width: '550px',
                paddingTop: '0px',
                paddingBottom: '3px'
              }}
            >
              <input
                type="text"
                placeholder="Enter username"
                style={{
                  width: '100%',
                  height: '40px',
                  marginTop: '17px',
                  marginBottom: '17px'
                }}
                onChange={onChangeUser}
              />
              <br />
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
                onClick={userNameApprove ? handleClose : ''}
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  cursor: userNameApprove ? 'pointer' : 'not-allowed',
                  backgroundColor: userNameApprove ? '' : '#757575',
                  color: userNameApprove ? '' : '#bdbdbd'
                }}
              >
                Add User
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ padding: '10px 0 0px 25px' }}>Approved users</h2>
        <span
          style={{
            marginLeft: '7px',
            fontSize: '22px',
            marginTop: '19px',
            color: '#0079d3'
          }}
        >
          <a
            href="https://mods.reddithelp.com/hc/en-us/articles/360009164452"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExclamationCircle style={{ cursor: 'pointer' }} />
          </a>
        </span>
      </div>
      <div
        className="approved-user-cont"
        style={{ padding: '10px 25px 0 25px' }}
      >
        {approvedUsersData}
      </div>
    </div>
  );
}
