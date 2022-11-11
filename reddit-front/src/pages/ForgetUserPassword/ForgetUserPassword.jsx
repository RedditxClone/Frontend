/* eslint-disable operator-linebreak */
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import ErrorMessage, {
  ErrorResponse,
  FulfilledMessage
} from '../../utilities/CustomStyling/CustomStyling';
import useInput from '../../hooks/use-input';
import { checkEmail } from '../../utilities/Helpers';
import { forgetPassword, AuthActions } from '../../store/slices/AuthSlice';

export default function ForgetUserPassword() {
  const {
    value: userName,
    valueChangeHandler: onChangeUserNameInputHandler,
    inputBlurHandler: onBlurUserNameInput,
    inputFocusHandler: onFocusUserNameInput,
    isTouched: touchedUserNameInput,
    reset: resetUserNameInput,
    hasError: errorUserName
  } = useInput((value) => value.length >= 3 && value.length <= 20);

  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEmailHandler,
    inputFocusHandler: onFocusEmailHandler,
    isTouched: touchedEmailInput,
    reset: resetEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));
  const [recaptcha, setRecaptcha] = useState(false);
  const formIsValid = recaptcha && !errorEmail && !errorUserName;
  const dispatch = useDispatch();
  const { error, fulfilled, isLoading } = useSelector((state) => state.auth);
  const resetRequest = () => {
    dispatch(AuthActions.resetRequest());
    resetEmailInput();
    resetUserNameInput();
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(forgetPassword({ username: userName, email }));
  };

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
      <form onSubmit={onSubmitHandler}>
        <DotDiv>
          <LoginInputField
            label="username"
            error={errorUserName}
            success={!errorUserName && touchedUserNameInput}
            onChange={onChangeUserNameInputHandler}
            onBlur={onBlurUserNameInput}
            onFocus={onFocusUserNameInput}
            value={userName}
          />
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
        {!errorUserName &&
          !errorEmail &&
          touchedEmailInput &&
          touchedUserNameInput && <Recaptcha setRecaptcha={setRecaptcha} />}
        <InfoButton
          len={blen}
          hlen={lhlen}
          type="submit"
          disabled={!formIsValid}
          loading={isLoading}
        >
          RESET PASSWORD
        </InfoButton>
        {fulfilled && (
          <FulfilledMessage msg="Thanks! If your Reddit username and email address match, you will get an email with a link to reset your password shortly." />
        )}
        {error && (
          <ErrorResponse
            msg="
Looks like you've been doing that a lot. Take a break for 8 minutes before trying again. "
          />
        )}
        <ForgetFooterDiv>
          <p>
            <Link
              className="BottomLink"
              to="/forgetuname"
              onClick={resetRequest}
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
              onClick={resetRequest}
              className="BottomLink"
              to="/login"
            >
              LOG IN .
            </Link>
            <Link
              onClick={resetRequest}
              className="BottomLink"
              to="/signup"
            >
              SIGN UP
            </Link>
          </p>
        </ForgetFooterDiv>
      </form>
    </ContentDiv>
  );
}
