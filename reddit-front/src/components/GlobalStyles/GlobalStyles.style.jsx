import { styled } from '@mui/material';

const StyledBody = styled('body')(
  {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '18px',
    color: '#1a1a1b',
    fontFamily: "'IBM Plex Sans',sans-serif",
    margin: '0'
  }
);
const AllDiv = styled('div')(
  {
    display: 'flex'
  }
);

const ContentDiv = styled('div')(
  {
    alignSelf: 'center',
    padding: '24px',
    paddingBottom: '0px'
  }
);

const UserAggrementDiv = styled('div')(
  {
    fontSize: '12px',
    fontWeight: '400',
    fontFamily: "'Noto Sans Wancho',sans-serif",
    lineHeight: '18px',
    marginTop: '8px',
    marginBottom: '48px',
    '& a': {
      color: '#0079d3',
      textDecoration: 'none'
    }
  }
);

const DotDiv = styled('div')(
  {
    position: 'relative',
    '& .Dot': {
      position: 'absolute',
      top: '20px',
      left: '80px',
      width: '6px',
      height: '6px',
      borderRadius: '3px',
      backgroundColor: '#24a0ed'
    },
    '&:hover': {
      '& .Dot': {
        display: 'none'
      }
    }
  }
);

const StyledFooter = styled('footer')(
  {
    '& a': {
      color: '#0079d3',
      textDecoration: 'none'
    },
    '& #forget': {
      fontFamily: "'IBM Plex Sans',sans-serif",
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
      marginTop: '8px',
      marginBottom: '20px',
      color: '#252526'
    },
    '& #Newto': {
      fontFamily: "'Noto Sans Wancho',sans-serif",
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
      marginTop: '8px'
    },

    '& #BottomLink': {
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
  StyledBody,
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter
};
