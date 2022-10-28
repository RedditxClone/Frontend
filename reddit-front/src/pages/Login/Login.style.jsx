import { styled } from '@mui/material';

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

const DividerDiv = styled('div')(
  {
    alignItems: 'center',
    display: 'flex',
    margin: '28px 0',
    justifyContent: 'space-between',
    width: '300px',
    '.DividerLine': {
      borderTop: '1px solid #edeff1',
      width: '40%'
    },
    '.DividerText': {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '18px',
      color: '#878a8c'
    }
  }
);

const ButtonImageDiv = styled('div')(({ id }) => (
  {
    backgroundRepeat: 'no-repeat',
    content: '""',
    height: '20px',
    left: '16px',
    position: 'absolute',
    width: '20px',
    backgroundImage: id === 'GoogleImage' ? 'url(https://www.redditstatic.com/accountmanager/021031274726bcaef27a190f609eb59f.svg)' : 'url(../../assets/Images/Safeimagekit-resized-imgpng.png)'
  }
));

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
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DividerDiv,
  ButtonImageDiv,
  StyledFooter
};
