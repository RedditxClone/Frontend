import { Typography } from '@mui/material';
import SideImage from '../../components/SideImage/SideImage';
import InfoInput from '../../components/InfoInput/InfoInput';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  AllDiv,
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv,
  CheckDiv
} from './ResetPassword.style';

export default function ForgetUserPassword() {
  const outLined = true;
  const len = 38;
  const blen = 15;
  const dlen = 10.5;
  const ulen = 12;
  const lhlen = 3;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <RedditImageDiv />
        <Typography variant="h1">Reset your password</Typography>
        <DescriptionDiv>
          <p>
            Choose a new password here, then log in to your account.
          </p>
        </DescriptionDiv>
        <form action="/resetuserpassword" method="post">
          <DotDiv len={dlen}>
            <InfoInput id="loginNewPassword" label="new password" len={len} />
            <span className="Dot"> </span>
          </DotDiv>
          <DotDiv len={ulen}>
            <InfoInput id="loginVerifyPassword" label="verify password" len={len} />
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
          <InfoButton outlined={!outLined} len={blen} align="center" hlen={lhlen}>SET PASSWORD</InfoButton>
          <ForgetFooterDiv>
            <p>
              <a className="BottomLink" href=" ">LOG IN .</a>
              <a className="BottomLink" href=" "> SIGN UP</a>
            </p>
          </ForgetFooterDiv>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
