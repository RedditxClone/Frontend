/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Button } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import avatarImg from '../../assets/Images/avatar_default_5.png';

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

export default function MutedUsers({ mutedUser }) {
  const [detail, setDetail] = useState(false);
  const [open, setOpen] = useState(false);
  const [reasonMute, setreasonMute] = useState(mutedUser.reason);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
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
  const reson = mutedUser.reason;
  const reason = detail ? (
    reson ? (
      <div
        style={{
          display: 'flex',
          padding: '8px 16px',
          backgroundColor: '#edeff1',
          alignItems: 'center'
        }}
      >
        <h4 style={{ marginRight: '5px', color: '#878a8c' }}>Mod Note:</h4>
        {mutedUser.reason}
      </div>
    ) : (
      <div
        style={{
          display: 'flex',
          padding: '8px 16px',
          backgroundColor: '#edeff1',
          alignItems: 'center'
        }}
      >
        <h3 style={{ marginRight: '5px', color: '#878a8c' }}>No mod note.</h3>
        {mutedUser.reason}
      </div>
    )
  ) : (
    ''
  );
  return (
    <div>
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
            <h3 style={{ marginLeft: '8px' }}>{mutedUser.username}</h3>
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
          <p style={{ color: '#878a8c' }}>{mutedUser.reason}</p>
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
          >
            Unmute
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
              Confirm
            </BootstrapDialogTitle>
            <DialogContent
              dividers
              style={{
                width: '550px',
                paddingTop: '0px',
                paddingBottom: '3px'
              }}
            >
              <h2
                style={{
                  marginTop: '15px',
                  opacity: '0.7',
                  backgroundColor: '#ffffff'
                }}
              >
                Are you sure you want to unmute {mutedUser.username}?
              </h2>
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
                onClick={handleClose}
                variant="outlined"
                style={{ borderRadius: '50px', fontSize: '12px' }}
              >
                Unmute
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
      {reason}
    </div>
  );
}
