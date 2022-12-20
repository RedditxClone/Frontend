import { useEffect, useState } from 'react';
import { BackToTop, StyledButton } from '../Layout/AppBar/AppBar.Style';

function BackTop({ id }) {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      setshowGoTop(true);
    }
    if (scrollPosition < 50) {
      setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  const handleScrollUp = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <BackToTop
      sx={{ display: showGoTop ? 'block' : 'none' }}
      onClick={handleScrollUp}
      data-testid="scrollup"
    >
      <StyledButton sx={{ color: 'white' }}>Back to Top</StyledButton>
    </BackToTop>
  );
}

export default BackTop;
