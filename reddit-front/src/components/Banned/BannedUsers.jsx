/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { TbHammerOff } from 'react-icons/tb';
import { Button } from '@mui/material';
import { useState } from 'react';
import { duration, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import avatarImg from '../../assets/Images/avatar_default_5.png';
import { patchBannedUsers } from '../../services/requests/userManagment';

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
 * @param {object} bannedUser
 */

/**
 * This component is in banned page in mod tools
 * this represents banned users
 */

function BannedUsers({ bannedUser }) {
  const maxTextCharCount = 300;
  const maxTextCount = 5000;
  const [countChar, setCountChar] = useState(maxTextCharCount);
  const [countCharText, setCountCharText] = useState(maxTextCount);
  const [detail, setDetail] = useState(false);
  const [permanent, setPermanent] = useState(bannedUser.permanent);
  const [mod, setMod] = useState(bannedUser.modNote);
  const [messageBan, setMessageBan] = useState(bannedUser.message);
  const [dur, setDur] = useState(bannedUser.duration);
  const handleChangeMod = (e) => {
    setCountChar(maxTextCharCount - e.target.value.length);
    setMod(e.target.value);
  };
  const handleChangetext = (e) => {
    setCountCharText(maxTextCount - e.target.value.length);
    setMessageBan(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const [reasonBan, setReasonBan] = useState(bannedUser.reason);

  const handleChange = (e) => {
    setReasonBan(e.target.value);
  };
  const handleChangeDur = (e) => {
    setDur(e.target.value);
  };
  const handleChangePermanent = (e) => {
    setPermanent(e.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    patchBannedUsers({
      id: 1,
      reason: reasonBan,
      modNote: mod,
      permanent,
      duration: dur,
      message: messageBan
    });
    setDur(bannedUser.duration);
    setMessageBan(bannedUser.message);
    setMod(bannedUser.modNote);
    setPermanent(bannedUser.permanent);
    setReasonBan(bannedUser.reason);
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen(false);
  };
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const onDetail = () => {
    if (detail) {
      setDetail(false);
    } else {
      setDetail(true);
    }
  };
  const modNot = bannedUser.modNote;
  const reson = bannedUser.reason;
  const modNote =
    modNot && detail ? (
      <div
        style={{
          display: 'flex',
          padding: '8px 16px',
          backgroundColor: '#edeff1',
          alignItems: 'center'
        }}
      >
        <h4 style={{ marginRight: '5px', color: '#878a8c' }}>MOD NOTE:</h4>
        {bannedUser.modNote}
      </div>
    ) : (
      ''
    );
  const reason =
    reson && detail ? (
      <div
        style={{
          display: 'flex',
          padding: '8px 16px',
          backgroundColor: '#edeff1',
          alignItems: 'center'
        }}
      >
        <h4 style={{ marginRight: '5px', color: '#878a8c' }}>BANED FOR:</h4>
        {bannedUser.reason}
      </div>
    ) : (
      ''
    );
  return (
    <div data-testid="banned-user-container">
      <div
        style={{
          fontSize: '12px',
          fontWeight: '400',
          padding: '8px 16px',
          height: '48px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #edeff1',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            padding: '4px 8px 4px 4px',
            display: 'inline-block',
            cursor: 'pointer',
            backgroundColor: isHovering ? '#dae0e6' : '',
            borderRadius: '5px'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              minWidth: '160px'
            }}
          >
            <img
              src={avatarImg}
              style={{ borderRadius: '4px' }}
              alt="avatar"
            />
            <h3 style={{ marginLeft: '8px' }}>{bannedUser.username}</h3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '40px'
          }}
        >
          <p style={{ marginLeft: '6.25rem', color: '#878a8c' }}>4 hours ago</p>
          {bannedUser.permanent ? (
            <p style={{ marginLeft: '4px', color: '#878a8c' }}>(permanent)</p>
          ) : (
            ''
          )}
          {bannedUser.duration > 0 ? (
            <p style={{ marginLeft: '4px', color: '#878a8c' }}>
              ({bannedUser.duration} days left)
            </p>
          ) : (
            ''
          )}
          <p
            style={{
              marginLeft: '12px',
              marginRight: '12px',
              fontSize: '40px',
              marginBottom: '63px',
              color: '#878a8c'
            }}
          >
            .
          </p>
          <p style={{ color: '#878a8c' }}>{bannedUser.reason}</p>
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto' }}>
          <Button
            variant="text"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '9999px',
              textTransform: 'none'
            }}
            onClick={handleClickOpen}
            data-testid="edit-btn"
          >
            Edit
          </Button>
          <BootstrapDialog
            data-testid="edit-dialog"
            onClose={handleClose2}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose2}
            >
              Edit ban for: u/
              {bannedUser.username}
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
                REASON FOR BAN
              </h4>
              <FormControl sx={{ width: '100%' }}>
                <Select
                  value={reasonBan}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="spam">Spam</MenuItem>
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
                data-testid="text-input"
                type="text"
                placeholder="Mod note"
                style={{ width: '100%', height: '40px' }}
                onChange={handleChangeMod}
                value={mod}
              />
              <p className="p2">
                {countChar}
                <span style={{ marginLeft: '2px' }}>Characters remaining</span>
              </p>
              <h4 style={{ color: '#878a8c' }}>HOW LONG ?</h4>
              <input
                style={{ width: '23%', height: '40px' }}
                type="number"
                min="0"
                value={dur}
                onChange={handleChangeDur}
              />
              <span
                style={{
                  width: '23%',
                  height: '40px',
                  marginLeft: '12px',
                  fontSize: '18px'
                }}
              >
                Days
              </span>
              <input
                type="checkbox"
                style={{
                  marginLeft: '24px',
                  fontSize: '20px'
                }}
                checked={permanent}
                onChange={handleChangePermanent}
              />
              <span
                style={{
                  width: '23%',
                  height: '40px',
                  marginLeft: '6px',
                  fontSize: '18px'
                }}
              >
                Permanent
              </span>
              <h2
                style={{ marginTop: '30px', opacity: '0.7', color: '#878a8c' }}
              >
                Note to include in ban message•
              </h2>
              <textarea
                style={{
                  width: '100%',
                  minHeight: '80px'
                }}
                placeholder="Reason they were banned"
                onChange={handleChangetext}
                value={messageBan}
              />
              <p className="p2">
                {countCharText}
                <span style={{ marginLeft: '2px' }}>Characters remaining</span>
              </p>
            </DialogContent>
            <DialogActions>
              <h3 style={{ marginRight: '300px' }}>
                <Button
                  variant="text"
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '9999px',
                    textTransform: 'none',
                    color: 'red'
                  }}
                  startIcon={<TbHammerOff />}
                >
                  Unban
                </Button>
              </h3>
              <Button
                onClick={handleClose2}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Edit Ban
              </Button>
            </DialogActions>
          </BootstrapDialog>
          <Button
            variant="text"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '9999px',
              textTransform: 'none'
            }}
            endIcon={<IoIosArrowDown />}
            onClick={onDetail}
          >
            More Details
          </Button>
        </div>
      </div>
      {modNote}
      {reason}
    </div>
  );
}
export default BannedUsers;
