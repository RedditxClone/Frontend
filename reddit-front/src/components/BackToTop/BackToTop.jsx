/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { BackToTop, StyledButton } from '../Layout/AppBar/AppBar.Style';

/**
 * @description component for backttotop button which is exist in the website when u scroll down and it appears when click on it , it returns u back to the element which is its id is sent
 * @param {string} id id of the element which will return to in the page
 * @return {React.Component} backtotop buttton
 */

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
