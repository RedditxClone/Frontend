/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GrFacebook } from 'react-icons/gr';
import { login } from '../../store/slices/AuthSlice';
import InfoButton from '../../components/InfoButton/InfoButton';

import {
  DividerDiv
  // ContainerDiv
  // ButtonImageDiv,
  // ImgDiv
} from './Login.style';
import {
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter,
  LinkWithMargin
} from '../../components/GlobalStyles/GlobalStyles.style';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import useInput from '../../hooks/use-input';
import Recaptcha from '../../components/Recaptcha/Recaptcha';

export default function Login() {
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
    value: password,
    valueChangeHandler: onChangePasswordInputHandler,
    inputBlurHandler: onBlurPasswordInput,
    inputFocusHandler: onFocusPasswordInput,
    isTouched: touchedPasswordInput,
    reset: resetPasswordInput,
    hasError: errorPassword
  } = useInput((value) => value.length >= 8);

  const [recaptcha, setRecaptcha] = useState(false);
  const [loginWithFacebook, setLoginWithFacebook] = useState(false);
  const [loginWithGoogle, setLoginWithGoogle] = useState(false);
  const formIsValid =
    (!errorPassword && !errorUserName && recaptcha) ||
    loginWithGoogle ||
    loginWithFacebook;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(login({ username: userName, password }));
  };

  const resetInputs = () => {
    resetPasswordInput();
    resetUserNameInput();
  };

  const facebookClicked = (data) => {
    console.log(data);
  };

  const responseFacebook = (response) => {
    console.log('response result: ', response);
    setLoginWithFacebook(true);
  };

  const handleCallBackResponse = (response) => {
    const userObject = jwt_decode(response.credential);

    /** Should be sent to API */
    console.log(userObject);
    setLoginWithGoogle(true);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        '543234829301-2pgqtk6133g5k2l6nbhbfn1dq21ffvi0.apps.googleusercontent.com',
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInWithGoggle'),
      {
        theme: 'filled_blue',
        size: 'large',
        text: 'continue_with',
        shape: 'recatangular',
        width: '280px'
      }
    );
  }, []);

  const len = 28;
  const lhlen = 3;
  return (
    <ContentDiv>
      <Typography variant="h3">Log in</Typography>
      <UserAggrementDiv>
        <p>
          By continuing, you agree to our
          <LinkWithMargin href="https://www.redditinc.com/policies/user-agreement">
            User Agreement
          </LinkWithMargin>
          and
          <LinkWithMargin href="https://www.reddit.com/policies/privacy-policy">
            Privacy Policy
          </LinkWithMargin>
        </p>
      </UserAggrementDiv>
      <form onSubmit={onSubmitHandler}>
        <div className="AnotherWayToLogin">
          <div id="signInWithGoggle" />
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
            label="username"
            id="username"
            success={!errorUserName && touchedUserNameInput}
            error={errorUserName}
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
          {error && <ErrorMessage>Incorrect username or password</ErrorMessage>}
        </DotDiv>
        <DotDiv>
          <LoginInputField
            id="password"
            success={!errorPassword && touchedPasswordInput}
            label="password"
            error={errorPassword}
            onChange={onChangePasswordInputHandler}
            onBlur={onBlurPasswordInput}
            onFocus={onFocusPasswordInput}
            value={password}
            type="password"
            disabled={!formIsValid}
          />
          {errorPassword && <ErrorMessage> Invalid Password</ErrorMessage>}
        </DotDiv>
        {!errorUserName &&
          !errorPassword &&
          touchedPasswordInput &&
          touchedUserNameInput && <Recaptcha setRecaptcha={setRecaptcha} />}
        <InfoButton
          len={len}
          hlen={lhlen}
          loading={isLoading}
          type="submit"
          disabled={!formIsValid}
        >
          LOG IN
        </InfoButton>
        <StyledFooter>
          <p id="forget">
            Forgot your
            <Link
              to="/forgetuname"
              onClick={resetInputs}
            >
              {' '}
              username
            </Link>
            or
            <Link
              to="/forgetupassword"
              onClick={resetInputs}
            >
              {' '}
              password
            </Link>
          </p>
          <p id="Newto">
            New to Reddit?
            <Link
              to="/signup"
              id="BottomLink"
              onClick={resetInputs}
            >
              SIGN UP
            </Link>
          </p>
        </StyledFooter>
      </form>
    </ContentDiv>
  );
}
