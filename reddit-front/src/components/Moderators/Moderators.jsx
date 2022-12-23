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
  getModerators,
  postModerators
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

/**
 * This component is in moderator page in mod tools
 * this represent each moderator component
 */

function Moderators() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [userNameModerator, setUserNameModerator] = useState('');
  const [isAdded, setIsAdded] = useState(0);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose12 = () => {
    setOpen1(false);
  };
  const handleClose22 = () => {
    setOpen2(false);
  };
  const [moderators, setModerators] = useState([]);
  useEffect(() => {
    const fetchModerators = async () => {
      const results = await getModerators();
      setModerators(results);
    };
    fetchModerators();
  }, [isAdded]);

  const onChangeUser = (e) => {
    setUserNameModerator(e.target.value);
  };
  const handleClose1 = () => {
    postModerators({
      id: Math.random() * 1000,
      username: userNameModerator
    });
    setIsAdded(isAdded + 1);
    setUserNameModerator('');
    setOpen1(false);
  };
  const handleClose2 = () => {
    // postModerators({
    //   id: Math.random() * 1000,
    //   username: userNameModerator
    // });
    // setIsAdded(isAdded + 1);
    // setUserNameModerator('');
    setOpen2(false);
  };

  const moderatorsData =
    moderators.length > 0 ? (
      <SearchComp moderators={moderators} />
    ) : (
      <div
        className="moderator-users"
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
          No moderators users in r/eee123
        </span>
      </div>
    );

  return (
    <div
      className="moderator-cont"
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
          style={{ width: '115px', marginRight: '20px' }}
        >
          <div
            className="btns-cont"
            style={{ display: 'flex', width: '300px', marginLeft: '-183px' }}
          >
            <Button
              variant="outlined"
              style={{
                borderRadius: '50px',
                fontSize: '14px',
                width: '130px',
                textTransform: 'none',
                height: '31px',
                marginRight: '10px'
              }}
              onClick={handleClickOpen2}
            >
              Leave as mod
            </Button>
            <Button
              style={{
                backgroundColor: '#0079d3',
                color: '#ffffff',
                borderRadius: '50px',
                fontSize: '14px',
                width: '152px',
                textTransform: 'none',
                height: '31px'
              }}
              onClick={handleClickOpen1}
            >
              Invite user as mod
            </Button>
          </div>
          <BootstrapDialog
            onClose={handleClose22}
            aria-labelledby="customized-dialog-title"
            open={open2}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose22}
              style={{ padding: '17px', fontSize: '14px' }}
            >
              Leave as mod
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              style={{
                width: '530px',
                paddingTop: '0px',
                paddingBottom: '3px'
              }}
            >
              <p style={{ fontSize: '15px' }}>
                Once you leave as a mod, you will lose mod permissions and will
                be unable to access any mod tools for this community. Are you
                sure you wish to leave as a mod of this community?
              </p>
            </DialogContent>
            <DialogActions
              style={{ paddingTop: '15px', paddingBottom: '15px' }}
            >
              <Button
                onClick={handleClose22}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose2}
                variant="contained"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Leave
              </Button>
            </DialogActions>
          </BootstrapDialog>
          <BootstrapDialog
            onClose={handleClose12}
            aria-labelledby="customized-dialog-title"
            open={open1}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose12}
              style={{ fontSize: '14px' }}
            >
              Invite Moderators
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
                onClick={handleClose12}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Cancel
              </Button>
              <Button
                onClick={userNameModerator ? handleClose1 : ''}
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  cursor: userNameModerator ? 'pointer' : 'not-allowed',
                  backgroundColor: userNameModerator ? '' : '#757575',
                  color: userNameModerator ? '' : '#bdbdbd'
                }}
              >
                Invite
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ padding: '10px 0 0px 25px' }}>
          Moderators of r/sports_20
        </h2>
        <span
          style={{
            marginLeft: '7px',
            fontSize: '22px',
            marginTop: '19px',
            color: '#0079d3'
          }}
        >
          <a
            href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExclamationCircle style={{ cursor: 'pointer' }} />
          </a>
        </span>
      </div>
      <div
        className="moderator-cont"
        style={{ padding: '10px 25px 0 25px' }}
      >
        {moderatorsData}
      </div>
    </div>
  );
}
export default Moderators;
