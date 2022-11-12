import { styled } from '@mui/material';

const DividerDiv = styled('div')(
  {
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    margin: '2.8rem 0 1.3rem 0',
    justifyContent: 'space-between',
    width: '28rem',
    '.DividerLine': {
      borderTop: '1px solid #edeff1',
      width: '40%'
    },
    '.DividerText': {
      fontSize: '1.4rem',
      fontWeight: '600',
      lineHeight: '1.8rem',
      color: '#878a8c'
    }
  }
);
const ContainerDiv = styled('div')(
  {
    '&:hover': {
      '.ImgBackGroundDiv': {
        display: 'inline'
      }

    }
  }
);

const ButtonImageDiv = styled('div')(({ id }) => (
  {
    backgroundRepeat: 'no-repeat',
    content: '""',
    height: '2rem',
    top: '1.4rem',
    left: '1.2rem',
    position: 'absolute',
    width: '2rem',
    backgroundImage: id === 'GoogleImage' ? 'url(https://www.redditstatic.com/accountmanager/021031274726bcaef27a190f609eb59f.svg)' : 'url(https://img.icons8.com/fluency/.5x/facebook-new.png)',
    bottom: '1.5rem'
  }
));

const ImgDiv = styled('div')(
  {
    backgroundColor: '#fff',
    borderRadius: '3px',
    content: '""',
    height: '4.4rem',
    left: '4px',
    alignItems: 'center',
    position: 'absolute',
    top: '3px',
    width: '4.4rem'
  }
);
export {
  DividerDiv,
  ContainerDiv,
  ButtonImageDiv,
  ImgDiv
};
