import { Typography } from '@mui/material';
import InfoInput from '../../components/InfoInput/InfoInput';
import SideImage from '../../components/SideImage/SideImage';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  DividerDiv,
  ButtonImageDiv
} from './Login.style';
import {
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter
} from '../../components/GlobalStyles/GlobalStyles.style';

export default function Login() {
  const outLined = true;
  const len = 280;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <Typography variant="h1">Log in</Typography>
        <UserAggrementDiv>
          <p>
            By continuing, you agree to our
            <a href="https://www.redditinc.com/policies/user-agreement"> User Agreement </a>
            and
            <a href="https://www.reddit.com/policies/privacy-policy"> Privacy Policy</a>
            .
          </p>
        </UserAggrementDiv>
        <form action="/login" method="post">
          <div className="AnotherWayToLogin">
            <InfoButton outlined={outLined} len={len}>
              <ButtonImageDiv id="GoogleImage"> </ButtonImageDiv>
              CONTINUE WITH GOOGLE
            </InfoButton>
            <InfoButton outlined={outLined} len={len}>
              <ButtonImageDiv id="FaceBookImage"> </ButtonImageDiv>
              CONTINUE WITH FACEBOOK
            </InfoButton>
          </div>
          <DividerDiv>
            <span className="DividerLine"> </span>
            <span className="DividerText">OR</span>
            <span className="DividerLine"> </span>
          </DividerDiv>
          <DotDiv>
            <InfoInput id="loginUserName" label="username" />
            <span className="Dot"> </span>
          </DotDiv>
          <DotDiv>
            <InfoInput id="loginPassword" label="password" />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton outlined={!outLined} len={len}>LOG IN</InfoButton>
          <StyledFooter>
            <p id="forget">
              Forgot your
              <a href=" "> username </a>
              or
              <a href=" "> password </a>
              ?
            </p>
            <p id="newto">
              New to Reddit?
              <a href=" " id="BottomLink"> SIGN UP </a>
            </p>
          </StyledFooter>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
