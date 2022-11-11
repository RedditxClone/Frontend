import { styled } from '@mui/material';

const StyledBody = styled('body')({
  fontSize: '1.4rem',
  fontWeight: '500',
  lineHeight: '1.8rem',
  color: '#1a1a1b',
  fontFamily: "'IBM Plex Sans',sans-serif",
  margin: '0'
});

export const LinkWithMargin = styled('a')({
  marginLeft: '0.5rem',
  marginRight: '0.5rem'
});

const AllDiv = styled('div')({
  display: 'flex'
});

const ContentDiv = styled('div')({
  alignSelf: 'center',
  padding: '2.4rem',
  paddingBottom: '0px'
});

const UserAggrementDiv = styled('div')({
  fontSize: '1.2rem',
  fontWeight: '400',
  fontFamily: "'Noto Sans Wancho',sans-serif",
  lineHeight: '1.8rem',
  marginTop: '.8rem',
  marginBottom: '4.8rem',
  '& a': {
    color: '#0079d3',
    textDecoration: 'none'
  }
});

const DotDiv = styled('div')(({ len }) => ({
  position: 'relative',
  marginBottom: '1.5rem',
  '& .Dot': {
    position: 'absolute',
    top: '2rem',
    left: `${len}rem`,
    width: '.6rem',
    height: '.6rem',
    borderRadius: '3px',
    backgroundColor: '#24a0ed'
  },
  '&:hover': {
    '& .Dot': {
      display: 'none'
    }
  }
}));

const StyledFooter = styled('footer')({
  '& a': {
    color: '#0079d3',
    textDecoration: 'none'
  },
  '& #forget': {
    fontFamily: "'IBM Plex Sans',sans-serif",
    fontSize: '1.2rem',
    fontWeight: '400',
    lineHeight: '1.8rem',
    marginTop: '.8rem',
    marginBottom: '.2rem',
    color: '#252526'
  },
  '& #Newto': {
    fontFamily: "'Noto Sans Wancho',sans-serif",
    fontSize: '1.2rem',
    fontWeight: '400',
    lineHeight: '1.8rem',
    marginTop: '1.2rem'
  },

  '& #BottomLink': {
    fontFamily: "'IBM Plex Sans',sans-serif",
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '.5px',
    lineHeight: '3.2rem',
    textTransform: 'uppercase',
    margin: '0.5rem'
  }
});

export {
  StyledBody,
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter
};
