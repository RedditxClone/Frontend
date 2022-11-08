import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import {
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv,
  CheckDiv
} from './ResetPassword.style';
import InfoButton from '../../components/InfoButton/InfoButton';

export default function ForgetUserPassword() {
  const outLined = true;
  const len = 38;
  const blen = 15;
  const dlen = 10.5;
  const ulen = 12;
  const lhlen = 3;
  return (
    <ContentDiv>
      <RedditImageDiv />
      <Typography variant="h3">Reset your password</Typography>
      <DescriptionDiv>
        <p>Choose a new password here, then log in to your account.</p>
      </DescriptionDiv>
      <form
        action="/resetuserpassword"
        method="post"
      >
        <DotDiv len={dlen}>
          <LoginInputField
            id="loginNewPassword"
            label="new password"
            len={len}
          />
          <span className="Dot"> </span>
        </DotDiv>
        <DotDiv len={ulen}>
          <LoginInputField
            id="loginVerifyPassword"
            label="verify password"
            len={len}
          />
          <span className="Dot"> </span>
        </DotDiv>
        <CheckDiv>
          <input type="checkbox" />
          <div id="Check">
            Changing your password logs you out of all browsers on your
            <br />
            device(s). Checking this box also logs you out of all apps you have
            <br />
            authorized.
          </div>
        </CheckDiv>
        <InfoButton
          outlined={!outLined}
          len={blen}
          align="center"
          hlen={lhlen}
        >
          SET PASSWORD
        </InfoButton>
        <ForgetFooterDiv>
          <p>
            <Link
              className="BottomLink"
              to="/user/login"
            >
              LOG IN
            </Link>
            <Link
              className="BottomLink"
              to="/user/signup"
            >
              SIGN UP
            </Link>
          </p>
        </ForgetFooterDiv>
      </form>
    </ContentDiv>
  );
}
