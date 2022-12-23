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
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchComp from './SearchComp';
import {
  getBannedUsers,
  postBannedUsers
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
 * This component is in banned page in mod tools
 * this represent each banned user component
 */

function Banned() {
  const maxTextCharCount = 300;
  const maxTextCount = 5000;
  const [countChar, setCountChar] = useState(maxTextCharCount);
  const [countCharText, setCountCharText] = useState(maxTextCount);
  const [open, setOpen] = useState(false);
  const [messageBan, setMessageBan] = useState('');
  const [userNameBan, setUserNameBan] = useState('');
  const [modNote, setModNote] = useState('');
  const [duration, setDuration] = useState('');
  const [reasonBan, setReasonBan] = useState('');
  const [permanent, setPermanent] = useState('');
  const [isAdded, setIsAdded] = useState(0);

  const handleChange = (e) => {
    setReasonBan(e.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose2 = () => {
    setOpen(false);
  };
  const [bannedUsers, setBannedUsers] = useState([]);
  useEffect(() => {
    const fetchBannedUsers = async () => {
      const results = await getBannedUsers();
      setBannedUsers(results);
    };
    fetchBannedUsers();
  }, [isAdded]);

  const onChangeUser = (e) => {
    setUserNameBan(e.target.value);
  };
  const onChangePermanent = (e) => {
    setPermanent(e.target.checked);
    if (permanent) {
      setDuration('undefined');
    }
  };
  const handleChangeMod = (e) => {
    setCountChar(maxTextCharCount - e.target.value.length);
    setModNote(e.target.value);
  };
  const handleChangetext = (e) => {
    setCountCharText(maxTextCount - e.target.value.length);
    setMessageBan(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleClose = () => {
    postBannedUsers({
      id: Math.random() * 1000,
      username: userNameBan,
      reason: reasonBan,
      modNote,
      permanent,
      duration,
      message: messageBan
    });
    setIsAdded(isAdded + 1);
    setDuration('');
    setMessageBan('');
    setModNote('');
    setPermanent(false);
    setUserNameBan('');
    setReasonBan('');
    setOpen(false);
  };

  const bannedUsersData =
    bannedUsers.length > 0 ? (
      <SearchComp bannedUsers={bannedUsers} />
    ) : (
      <div
        className="banned-users"
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
          No banned users in r/eee123
        </span>
      </div>
    );

  return (
    <div
      data-testid="banned-container"
      className="banned-cont"
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
            data-testid="ban-btn"
          >
            Ban user
          </Button>
          <BootstrapDialog
            onClose={handleClose2}
            aria-labelledby="customized-dialog-title"
            open={open}
            data-testid="ban-card"
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose2}
              style={{ fontSize: '16px' }}
            >
              Ban a user:
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              style={{
                width: '550px',
                paddingTop: '0px',
                paddingBottom: '3px'
              }}
            >
              <h4 style={{ marginBottom: '4px', color: '#878a8c' }}>
                ENTER USERNAME
              </h4>
              <input
                type="text"
                placeholder="u/username"
                style={{ width: '100%', height: '40px' }}
                onChange={onChangeUser}
              />
              <br />
              <h4 style={{ marginBottom: '4px', color: '#878a8c' }}>
                REASON FOR BAN
              </h4>
              <FormControl sx={{ width: '100%' }}>
                <Select
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="Spam">Spam</MenuItem>
                  <MenuItem value="Personal and confidential information">
                    Personal and confidential information
                  </MenuItem>
                  <MenuItem value="Threatening, harassing, or inciting violence">
                    Threatening, harassing, or inciting violence
                  </MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </Select>
              </FormControl>
              <h4 style={{ marginBottom: '4px', color: '#878a8c' }}>
                MOD NOTE
              </h4>
              <input
                type="text"
                placeholder="Mod note"
                style={{ width: '100%', height: '40px' }}
                onChange={handleChangeMod}
              />
              <p className="p2">
                {countChar}
                <span style={{ marginLeft: '2px' }}>Characters remaining</span>
              </p>
              <h4 style={{ color: '#878a8c' }}>HOW LONG ?</h4>
              <input
                style={{
                  width: '23%',
                  height: '40px',
                  pointerEvents: permanent ? 'none' : '',
                  opacity: permanent ? '0.1' : ''
                }}
                type="number"
                min="0"
                onChange={onChangeDuration}
              />
              <span
                style={{
                  width: '23%',
                  height: '40px',
                  marginLeft: '12px',
                  fontSize: '17px',
                  pointerEvents: permanent ? 'none' : '',
                  opacity: permanent ? '0.1' : ''
                }}
              >
                Days
              </span>
              <input
                type="checkbox"
                style={{
                  marginLeft: '24px',
                  fontSize: '20px',
                  cursor: 'pointer'
                }}
                onChange={onChangePermanent}
              />
              <span
                style={{
                  width: '23%',
                  height: '40px',
                  marginLeft: '6px',
                  fontSize: '17px'
                }}
              >
                Permanent
              </span>
              <h2 style={{ marginTop: '30px', opacity: '0.7' }}>
                Note to include in ban message•
              </h2>
              <textarea
                style={{
                  width: '100%',
                  minHeight: '80px'
                }}
                placeholder="Reason they were banned"
                onChange={handleChangetext}
              />
              <p className="p2">
                {countCharText}
                <span style={{ marginLeft: '2px' }}>Characters remaining</span>
              </p>
            </DialogContent>
            <DialogActions>
              <h3 style={{ marginRight: '248px' }}>•Visible to banned user</h3>
              <Button
                onClick={handleClose2}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Cancel
              </Button>
              <Button
                onClick={userNameBan && reasonBan ? handleClose : ''}
                variant="outlined"
                style={{
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  cursor: userNameBan && reasonBan ? 'pointer' : 'not-allowed',
                  backgroundColor: userNameBan && reasonBan ? '' : '#757575',
                  color: userNameBan && reasonBan ? '' : '#bdbdbd'
                }}
              >
                Ban User
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ padding: '10px 0 0px 25px' }}>Banned users</h2>
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
        className="banned-user-cont"
        style={{ padding: '10px 25px 0 25px' }}
      >
        {bannedUsersData}
      </div>
    </div>
  );
}
export default Banned;
