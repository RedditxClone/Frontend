import { BsReddit } from 'react-icons/bs';
import { StyledLogo } from '../AppBar/AppBar.Style';
import RedditLogo from '../../../utilities/RedditLogo/RedditLogo';

function Logo() {
  /**
   * description : this function for the first section in the nav bar which is the package of
   * Logo of reddit
   * it return the whole logo of reddit
   */
  return (
    <StyledLogo>
      <div style={{ flexBasis: '45%' }}>
        <BsReddit
          size="2.5rem"
          color="#FF4500"
        />
      </div>
      <div style={{ flexBasis: '65%' }}>
        <RedditLogo />
      </div>
    </StyledLogo>
  );
}

export default Logo;
