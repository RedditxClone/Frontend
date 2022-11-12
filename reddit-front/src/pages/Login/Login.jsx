/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
// import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { GrFacebook } from 'react-icons/gr';
import { login } from '../../store/slices/AuthSlice';
import InfoButton from '../../components/InfoButton/InfoButton';
import { DividerDiv } from './Login.style';
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

/**
 * This component returns a login page contains:
 * 1- two inputs for username and password
 * 2- two buttons for continue with google or facebook
 * 3- submit button
 * @returns {React.Component}
 */

function Login() {
  /**
   * use the custom-hook useInput to handle username input
   */
  const {
    value: userName,
    valueChangeHandler: onChangeUserNameInputHandler,
    inputBlurHandler: onBlurUserNameInput,
    inputFocusHandler: onFocusUserNameInput,
    isTouched: touchedUserNameInput,
    reset: resetUserNameInput,
    hasError: errorUserName
  } = useInput((value) => value.length >= 3 && value.length <= 20);

  /**
   * use the custom-hook useInput to handle password input
   */
  const {
    value: password,
    valueChangeHandler: onChangePasswordInputHandler,
    inputBlurHandler: onBlurPasswordInput,
    inputFocusHandler: onFocusPasswordInput,
    isTouched: touchedPasswordInput,
    reset: resetPasswordInput,
    hasError: errorPassword
  } = useInput((value) => value.length >= 8);

  const [loginWithFacebook, setLoginWithFacebook] = useState(false);
  const [loginWithGoogle, setLoginWithGoogle] = useState(false);
  /** To check if the form is valid or not */
  const formIsValid =
    (!errorPassword && !errorUserName) || loginWithGoogle || loginWithFacebook;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  /** If the authentication changes, run the useEffect to redirect to the home page  */
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(login({ username: userName, password }));
  };

  /**
   * Reset the inputs of the form
   */
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

  /**
   *
   * @param {Object} response - response from Google API for being registered with google email
   */
  const handleCallBackResponse = (response) => {
    const userObject = jwt_decode(response.credential);

    /** Should be sent to API */
    console.log(userObject);
    setLoginWithGoogle(true);
  };

  /** Render the Google button only once the page is first renedered */
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
      <h1>Log in</h1>
      <UserAggrementDiv>
        <p data-testid="LoginHeaderUserAggrement">
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
            data-testid="LoginInputs"
          />
          {errorUserName && (
            <ErrorMessage>
              Username must be between 3 and 20 characters
            </ErrorMessage>
          )}
          {error && <ErrorMessage data-testid="LoginInputsError">Incorrect username or password</ErrorMessage>}
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
            data-testid="LoginInputs"
          />
          {errorPassword && <ErrorMessage data-testid="LoginInputsError"> Invalid Password</ErrorMessage>}
        </DotDiv>

        <InfoButton
          len={len}
          hlen={lhlen}
          loading={isLoading}
          type="submit"
          disabled={!formIsValid}
          data-testid="LoginButton"
        >
          LOG IN
        </InfoButton>
        <StyledFooter>
          <p id="forget">
            Forgot your
            <Link
              to="/auth/forgetuname"
              onClick={resetInputs}
            >
              {' '}
              username
            </Link>
            or
            <Link
              to="/auth/forgetupassword"
              onClick={resetInputs}
            >
              {' '}
              password
            </Link>
          </p>
          <p id="Newto">
            New to Reddit?
            <Link
              to="/auth/signup"
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

export default Login;
