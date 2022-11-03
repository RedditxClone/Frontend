import { Typography } from '@mui/material';
import InfoInput from '../../components/InfoInput/InfoInput';
import SideImage from '../../components/SideImage/SideImage';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  DividerDiv,
  ContainerDiv,
  ButtonImageDiv,
  ImgDiv
} from './SignUp.style';
import {
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter
} from '../../components/GlobalStyles/GlobalStyles.style';

export default function Login() {
  const outLined = true;
  const len = 28;
  const lhlen = 3;
  const ahlen = 5;
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
            <ContainerDiv>
              <InfoButton outlined={outLined} len={len} align="left" hlen={ahlen}>
                <ImgDiv className="ImgBackGroundDiv">
                  <ButtonImageDiv id="GoogleImage" className="ButtonImg"> </ButtonImageDiv>
                </ImgDiv>
                CONTINUE WITH GOOGLE
              </InfoButton>
            </ContainerDiv>
            <ContainerDiv>
              <InfoButton outlined={outLined} len={len} align="left" hlen={ahlen}>
                <ImgDiv className="ImgBackGroundDiv">
                  <ButtonImageDiv id="FaceBookImage" className="ButtonImg"> </ButtonImageDiv>
                </ImgDiv>
                CONTINUE WITH FACEBOOK
              </InfoButton>
            </ContainerDiv>
          </div>
          <DividerDiv>
            <span className="DividerLine"> </span>
            <span className="DividerText">OR</span>
            <span className="DividerLine"> </span>
          </DividerDiv>
          <DotDiv>
            <InfoInput id="signupUserEmail" label="useremail" len={len} />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton outlined={!outLined} len={len} align="center" hlen={lhlen}>CONTINUE</InfoButton>
          <StyledFooter>
            <p id="Newto">
              Already a redditor?
              <a href=" " id="BottomLink"> LOG IN </a>
            </p>
          </StyledFooter>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
