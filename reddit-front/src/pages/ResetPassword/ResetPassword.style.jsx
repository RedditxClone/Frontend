import { styled } from '@mui/material';

const RedditImageDiv = styled('div')(
  {
    width: '40px',
    height: '40px',
    backgroundImage: 'url(https://www.redditstatic.com/accountmanager/18e257d5fdea817c0f12cccf8867d930.svg)',
    marginBottom: '8px'
  }
);

const DescriptionDiv = styled('div')(
  {
    fontFamily: "'Noto Sans Wancho',sans-serif",
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px'
  }
);

const ForgetFooterDiv = styled('div')(
  {
    '& #Forget': {
      fontFamily: "'IBM Plex Sans',sans-serif",
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
      marginTop: '8px',
      marginBottom: '20px',
      color: '#252526'
    },
    '& .BottomLink': {
      fontFamily: "'IBM Plex Sans',sans-serif",
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '.5px',
      lineHeight: '24px',
      textTransform: 'uppercase',
      color: '#0079d3',
      textDecoration: 'none',
      '& div': {
        marginBottom: '5px',
        display: 'inline',
        alignItems: 'center'
      }
    }
  }
);
const CheckDiv = styled('div')(
  {
    display: 'flex',
    fontSize: '1.2rem',
    fontWeight: '400',
    // alignItems: 'center',
    margin: '3rem 0',
    '& #Check': {
      display: 'absolute',
      top: '4rem'
    }
  }
);

export {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv,
  CheckDiv
};
