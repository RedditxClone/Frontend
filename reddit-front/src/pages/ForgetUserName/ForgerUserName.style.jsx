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
      textTransform: 'uppercase'
    }
  }
);

export {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv
};
