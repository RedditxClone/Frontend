import { styled } from '@mui/material';

const SettingsIconDiv = styled('button')(
  {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #0079D3',
    borderRadius: '50%',
    bottom: '0.8rem',
    display: 'flex',
    height: '3.6rem',
    justifyContent: 'center',
    width: '3.6rem',
    color: '#0079D3',
    fontSize: '2.5rem',
    position: 'absolute',
    left: '26.5rem',
    top: '5rem'
  }
);
const UserName = styled('div')(
  {
    fontWeight: '500',
    color: '#222222',
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    marginTop: '1.8rem',
    marginLeft: '1.3rem'
  }
);
const CreateAvatar = styled('button')(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'linear-gradient(90deg,#ec0623,#ff8717)',
    color: '#fff',
    padding: '0.8rem 1.6rem',
    borderRadius: '999px',
    width: '100%',
    fontSize: '1.4rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    // lineHeight: '3.2rem',
    textTransform: 'uppercase',
    lineHeight: '1.7rem',
    border: 'none',
    margin: '0.8rem 0',
    '&:focus': {
      opacity: '.8'
    }
  }
);
const CakeDayTitle = styled('div')(
  {

    fontSize: '1.4rem',
    fontWeight: '501',
    lineHeight: '1.8rem',
    color: '#222222'

  }
);
const CakeDay = styled('div')(
  {
    alignItems: 'center',
    display: 'flex',
    marginTop: '2px',
    marginBottom: '1.2rem',
    '& span': {
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '1.6rem',
      color: '#7c7c7c',
      marginLeft: '4px'
    }
  }
);

const SocialLinkButton = styled('button')(
  {
    fontSize: '1.2rem',
    fontWeight: '700',
    lineHeight: '1.6rem',
    alignItems: 'center',
    backgroundColor: '#EDEFF1',
    borderRadius: '9999px',
    color: '#1c1c1c',
    cursor: 'pointer',
    marginRight: '0.8rem',
    padding: '1rem 1.2rem',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'center',
    border: 'none'
  }
);
const NewPostButton = styled('button')(
  {
    backgroundColor: '#0079D3',
    border: 'none',
    color: '#FFFFFF',
    fontFamily: "'Noto Sans',Arial,sans-serif",
    fontSize: '1.4rem',
    fontWeight: '700',
    lineHeight: '1.7rem',
    padding: '0.8rem 1.6rem',
    width: '100%',
    margin: '1rem 0 1.8rem 0',
    borderRadius: '9999px'
  }
);
const OptionsButton = styled('button')(
  {
    fontFamily: "'Noto Sans',Arial,sans-serif",
    fontSize: '1.2rem',
    fontWeight: '700',
    lineHeight: '1.6rem',
    marginTop: '0.8rem',
    padding: '0.4rem 0.8rem',
    border: '1px solid transparent',
    color: '#0079D3',
    borderRadius: '9999px',
    display: 'block',
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: '#EDEDED'
    },
    '&:focus': {
      backgroundColor: '#DBDBDB'
    }
  }
);
const ProfileImage = styled('div')(
  {
    // height: '4rem',
    // width: '4rem',
    position: 'absolute',
    borderRadius: '6px',
    boxSizing: 'border-box',
    height: '8.6rem',
    backgroundColor: '#ffffff',
    padding: '3px',
    width: '8.6rem',
    top: '2.4rem',
    left: '1.5rem'
  }
);
export {
  SettingsIconDiv,
  UserName,
  CreateAvatar,
  CakeDayTitle,
  CakeDay,
  ProfileImage,
  SocialLinkButton,
  OptionsButton,
  NewPostButton
};
