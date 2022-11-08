import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import { checkEmail } from '../../utilities/Helpers';

export default function ForgetUserName() {
  const {
    value: email,
    valueChangeHandler: onChangeEmailHandler,
    inputBlurHandler: onBlurEailHandler,
    isTouched: touchedEmailInput,
    hasError: errorEmail
  } = useInput((value) => checkEmail(value));

  const [recaptcha, setRecaptcha] = useState(false);
  const formIsValid = recaptcha && !errorEmail;
  const outLined = true;
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
      <form
        action="/forgetusername"
        method="post"
      >
        <DotDiv len={dlen}>
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
          len={blen}
          align="center"
          hlen={lhlen}
          disabled={!formIsValid}
        >
          EMAIL ME
        </InfoButton>
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
              className="BottomLink"
              to="/user/login"
            >
              LOG IN
              <div> .</div>
            </Link>
            <Link
              className="BottomLink"
              to="/user/signup"
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
