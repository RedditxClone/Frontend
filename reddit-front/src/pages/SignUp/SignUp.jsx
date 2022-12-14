/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GrFacebook } from 'react-icons/gr';
import FacebookLogin from 'react-facebook-login';
import InfoButton from '../../components/InfoButton/InfoButton';
import { DividerDiv } from './SignUp.style';
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

/**
 * This component returns a signup page contains:
 * 1- one input for Email
 * 2- two buttons for continue with google or facebook
 * 3- Continue button to redirect you to choose your username and password
 * @returns {React.Component}
 */

function SignUp() {
  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEmailHandler,
    inputFocusHandler: onFocusEmailHandler,
    isTouched: touchedEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));
  const [signUpWithGoggle, setSignUpWithGoggle] = useState(false);
  const [signUpWithFacebook, setSignUpWithFacebook] = useState(false);
  const formIsValid = !errorEmail || signUpWithGoggle || signUpWithFacebook;

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!errorEmail) {
      navigate('/new/chooseuname', { state: { email } });
    }
  };

  const facebookClicked = (data) => {
    console.log(data);
  };

  const responseFacebook = (response) => {
    console.log('response result: ', response);
    setSignUpWithFacebook(true);
  };

  const handleCallBackResponse = (response) => {
    /** Should be sent to API */
    console.log(response.credential);
    setSignUpWithGoggle(true);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '731962970730-93vd9ao2c9ckhmguioje6ar6jmjk3cic.apps.googleusercontent.com',
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signUpWithGoggle'),
      {
        theme: 'filled_blue',
        size: 'large',
        text: 'continue_with',
        shape: 'recatangular',
        width: '280px'
      }
    );
  }, []);
  const outLined = true;
  const len = 28;
  const lhlen = 3;
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
          <div id="signUpWithGoggle" />
          <div style={{ marginTop: '1.2rem' }}>
            <FacebookLogin
              appId="1156172054987935"
              size="small"
              fields="name,email,picture"
              onClick={facebookClicked}
              callback={responseFacebook}
              icon={
                <span style={{ marginRight: '1rem' }}>
                  <GrFacebook />
                </span>
              }
              textButton="CONTINUE WITH FACEBOOK"
            />
          </div>
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
            onBlur={onBlurEmailHandler}
            onFocus={onFocusEmailHandler}
            error={errorEmail}
            success={!errorEmail && touchedEmailInput}
            label="Email address"
          />
          {errorEmail && (
            <ErrorMessage>Please fix your email to continue</ErrorMessage>
          )}
        </DotDiv>

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
              to="/auth/login"
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
export default SignUp;
