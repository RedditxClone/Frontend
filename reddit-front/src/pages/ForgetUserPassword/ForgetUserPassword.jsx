import { Typography } from '@mui/material';
import SideImage from '../../components/SideImage/SideImage';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  AllDiv,
  ContentDiv,
  DotDiv,
  LinkWithMargin
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv
} from './ForgetUserPassword.style';

export default function ForgetUserPassword() {
  const outLined = true;
  const len = 38;
  const blen = 15;
  const dlen = 10.5;
  const ulen = 8;
  const lhlen = 3;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <RedditImageDiv />
        <Typography variant="h3">Recover your password</Typography>
        <DescriptionDiv>
          <p>
            Tell us the username and email address associated with
            <br />
            your Reddit account, and we&#8217;ll send you an email with a link
            <br />
            to reset your password.
          </p>
        </DescriptionDiv>
        <form
          action="/forgetuserpassword"
          method="post"
        >
          <DotDiv len={ulen}>
            <LoginInputField
              label="username"
              len={len}
            />
            <span className="Dot"> </span>
          </DotDiv>
          <DotDiv len={dlen}>
            <LoginInputField
              label="email address"
              len={len}
            />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton
            outlined={!outLined}
            len={blen}
            align="center"
            hlen={lhlen}
          >
            RESET PASSWORD
          </InfoButton>
          <ForgetFooterDiv>
            <p>
              <a
                className="BottomLink"
                href=" "
              >
                FORGOT USERNAME?
              </a>
            </p>
            <p id="Forget">
              Don&#8217;t have an email or need assistance logging in?
              <a
                className="BottomLink"
                href="https://reddithelp.com/hc/en-us/sections/360008917491-Account-Security"
              >
                {' '}
                GET HELP
              </a>
            </p>
            <p>
              <LinkWithMargin
                className="BottomLink"
                href=" "
              >
                LOG IN .
              </LinkWithMargin>
              <LinkWithMargin
                className="BottomLink"
                href=" "
              >
                SIGN UP
              </LinkWithMargin>
            </p>
          </ForgetFooterDiv>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
