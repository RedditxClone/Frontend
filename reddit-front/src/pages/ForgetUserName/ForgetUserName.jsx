import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import {
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv
} from './ForgetUserName.style';
import InfoButton from '../../components/InfoButton/InfoButton';
import useInput from '../../hooks/use-input';
import ErrorMessage, {
  ErrorResponse,
  FulfilledMessage
} from '../../utilities/CustomStyling/CustomStyling';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import { checkEmail } from '../../utilities/Helpers';
import { forgetUserName, AuthActions } from '../../store/slices/AuthSlice';

/**
 * This component returns a forget username page contains:
 * 1- one input for Email address
 * 2- Email me button
 * @returns {React.Component}
 */

function ForgetUserName() {
  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEmailHandler,
    inputFocusHandler: onFocusEmailHandler,
    isTouched: touchedEmailInput,
    reset: resetEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));

  const dispatch = useDispatch();
  const { error, fulfilled, isLoading } = useSelector((state) => state.auth);
  const resetRequest = () => {
    dispatch(AuthActions.resetRequest());
    resetEmailInput();
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(forgetUserName({ email }));
    resetEmailInput();
  };
  const [recaptcha, setRecaptcha] = useState(false);
  const formIsValid = recaptcha && !errorEmail;
  const blen = 15;
  const dlen = 10;
  const lhlen = 3;
  return (
    <ContentDiv>
      <RedditImageDiv />
      <Typography
        id="ForgetUserNameTitle"
        variant="h4"
      >
        Recover your username
      </Typography>
      <DescriptionDiv>
        <p>
          Tell us the email address associated with your Reddit
          <br />
          account, and we&#8217;ll send you an email with your username.
        </p>
      </DescriptionDiv>
      <form onSubmit={onSubmitHandler}>
        <DotDiv len={dlen}>
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
        {!errorEmail && touchedEmailInput && (
          <Recaptcha setRecaptcha={setRecaptcha} />
        )}
        <InfoButton
          loading={isLoading}
          len={blen}
          hlen={lhlen}
          disabled={!formIsValid}
          type="submit"
        >
          EMAIL ME
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
              to="/auth/login"
            >
              LOG IN
              <div> .</div>
            </Link>
            <Link
              onClick={resetRequest}
              className="BottomLink"
              to="/auth/signup"
            >
              {' '}
              SIGN UP
            </Link>
          </p>
        </ForgetFooterDiv>
      </form>
    </ContentDiv>
  );
}
export default ForgetUserName;
