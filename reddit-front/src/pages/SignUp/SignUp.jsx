import { Typography } from '@mui/material';
import InfoInput from '../../components/InfoInput/InfoInput';
import SideImage from '../../components/SideImage/SideImage';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  DividerDiv,
  ButtonImageDiv,
  StyledFooter
} from '../../components/GlobalStyles/GlobalStyles.style';

export default function Login() {
  const outLined = true;
  const len = 280;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <Typography variant="h1">Sign up</Typography>
        <UserAggrementDiv>
          <p>
            By continuing,  you are setting up a Reddit
            <br />
            account and agree to our
            <a href="https://www.redditinc.com/policies/user-agreement"> User Agreement </a>
            and
            <br />
            <a href="https://www.reddit.com/policies/privacy-policy"> Privacy Policy</a>
            .
          </p>
        </UserAggrementDiv>
        <form action="/signup" method="post">
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
            <InfoInput id="signupUserEmail" label="useremail" />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton outlined={!outLined} len={len}>CONTINUE</InfoButton>
          <StyledFooter>
            <p id="newto">
              Already a redditor?
              <a href=" " id="BottomLink"> LOG IN </a>
            </p>
          </StyledFooter>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
