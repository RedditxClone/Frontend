import { Typography } from '@mui/material';
// import InfoInput from '../../components/InfoInput/InfoInput';
import SideImage from '../../components/SideImage/SideImage';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  DividerDiv,
  ContainerDiv,
  ButtonImageDiv,
  ImgDiv
} from './Login.style';
import {
  AllDiv,
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter
} from '../../components/GlobalStyles/GlobalStyles.style';
import LoginInputField from '../../components/loginInputField/LoginInputFiled';

export default function Login() {
  const outLined = true;
  const len = 28;
  const lhlen = 3;
  const ahlen = 5;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <Typography variant="h1">Log in</Typography>
        <UserAggrementDiv>
          <p>
            By continuing, you agree to our
            <a href="https://www.redditinc.com/policies/user-agreement">
              User Agreement
            </a>
            and
            <a href="https://www.reddit.com/policies/privacy-policy">
              Privacy Policy
            </a>
            .
          </p>
        </UserAggrementDiv>
        <form
          action="/login"
          method="post"
        >
          <div className="AnotherWayToLogin">
            <ContainerDiv>
              <InfoButton
                outlined={outLined}
                len={len}
                align="left"
                hlen={ahlen}
              >
                <ImgDiv className="ImgBackGroundDiv">
                  <ButtonImageDiv
                    id="GoogleImage"
                    className="ButtonImg"
                  >
                    {' '}
                  </ButtonImageDiv>
                </ImgDiv>
                CONTINUE WITH GOOGLE
              </InfoButton>
            </ContainerDiv>
            <ContainerDiv>
              <InfoButton
                outlined={outLined}
                len={len}
                align="left"
                hlen={ahlen}
              >
                <ImgDiv className="ImgBackGroundDiv">
                  <ButtonImageDiv
                    id="FaceBookImage"
                    className="ButtonImg"
                  >
                    {' '}
                  </ButtonImageDiv>
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
            <LoginInputField label="username" />
            <span className="Dot"> </span>
          </DotDiv>
          <DotDiv>
            <LoginInputField label="password" />
            <span className="Dot"> </span>
          </DotDiv>
          <InfoButton
            outlined={!outLined}
            len={len}
            align="center"
            hlen={lhlen}
          >
            LOG IN
          </InfoButton>
          <StyledFooter>
            <p id="forget">
              Forgot your
              <a href=" "> username </a>
              or
              <a href=" "> password </a>
            </p>
            <p id="newto">
              New to Reddit?
              <a
                href=" "
                id="BottomLink"
              >
                SIGN UP
              </a>
            </p>
          </StyledFooter>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
