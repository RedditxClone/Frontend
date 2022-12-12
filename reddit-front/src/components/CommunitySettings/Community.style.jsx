/* eslint-disable react/jsx-props-no-spreading */
import { styled } from '@mui/material';
import { BsChevronDown } from 'react-icons/bs';
import Switch from '@mui/material/Switch';

const CommunityDiv = styled('div')({
  margin: '2.4rem',
  padding: '1.6rem 2.4rem',
  backgroundColor: '#FFFFFF',
  borderRadius: '4px',
  boxSizing: 'border-box',
  maxWidth: '85.6rem',
  fontFamily: "'IBM Plex Sans', Arial,sans-serif",
  '& h1': {
    fontSize: '1.8rem',
    fontWeight: '501',
    lineHeight: '2.2rem',
    color: '#1c1c1c',
    marginBottom: '1.6rem'
  },
  '& h3': {
    fontSize: '1rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    lineHeight: '1.2rem',
    borderBottom: '1px solid #EDEFF1',
    color: '#7c7c7c',
    marginBottom: '3.2rem',
    paddingBottom: '6px'
  },
  '& h2': {
    fontSize: '1.6rem',
    fontWeight: '501',
    lineHeight: '2rem',
    color: '#1c1c1c',
    marginBottom: '4px'
  },
  '& p': {
    color: '#7c7c7c',
    fontWeight: '400',
    fontSize: '1.2rem',
    lineHeight: '1.6rem'
  },
  '& .red': {
    color: '#ea0027'
  },
  '& div': {
    marginBottom: '3.2rem'
  },
  '& input': {
    width: '99%',
    height: '4.8rem'
  },
  '& textarea': {
    width: '98%',
    padding: '8px'
  },
  '& #FirstButton': {
    background: 'none',
    color: '#0079D3',
    border: 'none',
    display: 'flex',
    padding: '4px 0',
    '& span': {
      fontSize: '1.6rem',
      lineHeight: '2rem',
      fontWeight: '500'
    }
  },
  '& button': {
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    lineHeight: '2.4rem',
    color: '#878A8C',
    whiteSpace: 'nowrap',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  '& li': {
    display: 'flex',
    alignItems: 'center',
    '& label': {
      display: 'flex',
      alignItems: 'center'
    },
    '& input': {
      width: '1.5rem',
      marginTop: '8px',
      height: '1.5rem',
      '&:checked': {
        backgroundColor: '#0079D3',
        color: 'red'
      }
    },

    '& p': {
      margin: '1.2rem 0 0 0.4rem'
    }
  },
  '& .Settings': {
    color: '#0079D3',
    textDecoration: 'none',
    fontSize: '1.6rem',
    fontWeight: '501',
    lineHeight: '20px',
    display: 'flex',
    height: '20px',
    marginBottom: '4px'
  },
  '& #Menu': {
    width: '17rem',
    padding: '0',
    border: '1px solid #EDEFF1',
    borderRadius: '4px',
    boxShadow: '0 2px 4px 0 rgba(28,28,28,0.2)',
    position: 'absolute',
    zIndex: '10',
    top: '1rem',
    backgroundColor: '#fff',
    '& li': {
      padding: '0.8rem 1.6rem 0.8rem 0.8rem',
      fontSize: '1.4rem',
      fontWeight: '501',
      lineHeight: '1.8rem',
      color: '#878A8C',
      borderBottom: '1px solid #EDEFF1',
      '&:hover': {
        backgroundColor: '#E9F5FD',
        color: '#1c1c1c'
      },
      '&:focus': {
        color: '#0079D3'
      }
    }
  },
  '& #NsfwFlair': {
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '1.6rem',
    borderRadius: '2px',
    color: '#fff',
    display: 'inline-block',
    margin: '0 4px 0 8px',
    padding: '0 4px',
    backgroundColor: '#ff585b'
  }
});
const Down = styled(BsChevronDown)({
  fontSize: '1.2rem',
  fontWeight: '400',
  height: '20px',
  lineHeight: '20px',
  verticalAlign: 'middle',
  width: '15px',
  padding: '0 4px'

});
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#0079D3',
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}));
export { CommunityDiv, Down, IOSSwitch };
