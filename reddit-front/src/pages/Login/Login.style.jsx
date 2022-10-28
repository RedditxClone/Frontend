import { styled } from '@mui/material';

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

export {
  DividerDiv,
  ButtonImageDiv
};
