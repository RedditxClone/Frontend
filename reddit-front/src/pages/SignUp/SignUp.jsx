import { Typography } from '@mui/material';
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
  StyledFooter,
  LinkWithMargin
} from '../../components/GlobalStyles/GlobalStyles.style';
import LoginInputField from '../../components/LoginInputField/LoginInputField';

export default function SignUp() {
  const outLined = true;
  const len = 28;
  const lhlen = 3;
  const ahlen = 5;
  return (
    <AllDiv>
      <SideImage />
      <ContentDiv>
        <Typography variant="h3">Sign up</Typography>
        <UserAggrementDiv>
          <p>
            By continuing, you are setting up a Reddit
            <br />
            account and agree to our
            <LinkWithMargin href="https://www.redditinc.com/policies/user-agreement">
              User Agreement
            </LinkWithMargin>
            and
            <br />
            <LinkWithMargin href="https://www.reddit.com/policies/privacy-policy">
              Privacy Policy
            </LinkWithMargin>
            .
          </p>
        </UserAggrementDiv>
        <form
          action="/SignUp"
          method="post"
        >
          <div className="AnotherWayToSignUp">
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
          <InfoButton
            outlined={!outLined}
            len={len}
            align="center"
            hlen={lhlen}
          >
            CONTINUE
          </InfoButton>
          <StyledFooter>
            <p id="Newto">
              Already a redditor?
              <a
                href=" "
                id="BottomLink"
              >
                LOG IN
              </a>
            </p>
          </StyledFooter>
        </form>
      </ContentDiv>
    </AllDiv>
  );
}
