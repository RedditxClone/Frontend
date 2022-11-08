import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  DividerDiv,
  ContainerDiv,
  ButtonImageDiv,
  ImgDiv
} from './SignUp.style';
import {
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter,
  LinkWithMargin
} from '../../components/GlobalStyles/GlobalStyles.style';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import { checkEmail } from '../../utilities/Helpers';
import useInput from '../../hooks/use-input';
import Recaptcha from '../../components/Recaptcha/Recaptcha';

export default function SignUp() {
  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEailHandler,
    isTouched: touchedEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));
  const [recaptcha, setRecaptcha] = useState(false);
  const formIsValid = recaptcha && !errorEmail;

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!errorEmail) {
      navigate('/chooseuname', { state: { email } });
    }
  };
  const outLined = true;
  const len = 28;
  const lhlen = 3;
  const ahlen = 5;
  return (
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
      <form onSubmit={onSubmitHandler}>
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
          <LoginInputField
            value={email}
            onChange={onChangeEmailHandler}
            onBlur={onBlurEailHandler}
            error={errorEmail}
            label="Email address"
          />
          <span className="Dot"> </span>
          {errorEmail && (
            <ErrorMessage>Please fix your email to continue</ErrorMessage>
          )}
        </DotDiv>
        {!errorEmail && touchedEmailInput && (
          <Recaptcha setRecaptcha={setRecaptcha} />
        )}
        <InfoButton
          outlined={!outLined}
          len={len}
          align="center"
          hlen={lhlen}
          type="submit"
          disabled={!formIsValid}
        >
          CONTINUE
        </InfoButton>
        <StyledFooter>
          <p id="Newto">
            Already a redditor?
            <Link
              to="/user/login"
              id="BottomLink"
            >
              LOG IN
            </Link>
          </p>
        </StyledFooter>
      </form>
    </ContentDiv>
  );
}
