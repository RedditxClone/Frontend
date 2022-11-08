/* eslint-disable operator-linebreak */
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv
} from './ForgetUserPassword.style';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import useInput from '../../hooks/use-input';
import { checkEmail } from '../../utilities/Helpers';

export default function ForgetUserPassword() {
  const {
    value: userName,
    valueChangeHandler: onChangeUserNameInputHandler,
    inputBlurHandler: onBlurUserNameInput,
    isTouched: touchedUserNameInput,
    hasError: errorUserName
  } = useInput((value) => value.length > 3 && value.length < 20);

  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEailHandler,
    isTouched: touchedEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));
  const [recaptcha, setRecaptcha] = useState(false);
  const formIsValid = recaptcha && !errorEmail && !errorUserName;

  const outLined = true;
  const blen = 15;
  const lhlen = 3;
  return (
    <ContentDiv>
      <RedditImageDiv />
      <Typography variant="h4">Reset your password</Typography>
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
        <DotDiv>
          <LoginInputField
            label="username"
            error={errorUserName}
            onChange={onChangeUserNameInputHandler}
            onBlur={onBlurUserNameInput}
            value={userName}
          />
          <span className="Dot"> </span>
          {errorUserName && (
            <ErrorMessage>
              Username must be between 3 and 20 characters
            </ErrorMessage>
          )}
        </DotDiv>
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
        {!errorUserName &&
          !errorEmail &&
          touchedEmailInput &&
          touchedUserNameInput && <Recaptcha setRecaptcha={setRecaptcha} />}
        <InfoButton
          outlined={!outLined}
          len={blen}
          align="center"
          hlen={lhlen}
          disabled={!formIsValid}
        >
          RESET PASSWORD
        </InfoButton>
        <ForgetFooterDiv>
          <p>
            <Link
              className="BottomLink"
              to="/user/forgetuname"
            >
              FORGOT USERNAME?
            </Link>
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
            <Link
              className="BottomLink"
              to="/user/login"
            >
              LOG IN .
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
