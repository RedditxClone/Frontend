import { BackToTop, StyledButton } from '../Layout/AppBar/AppBar.Style';

function BackTop({ showGoTop, scrollUp }) {
  return (
    <BackToTop sx={{ display: showGoTop ? 'block' : 'none' }}>
      <StyledButton
        sx={{ color: 'white' }}
        onClick={scrollUp}
      >
        Back to Top
      </StyledButton>
    </BackToTop>
  );
}

export default BackTop;
