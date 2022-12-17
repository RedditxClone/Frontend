/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line camelcase
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContinueWithGoogle from '../../utilities/ContinueWithGoogle/ContinueWithGoogle';
import ContinueWithGithub from '../../utilities/ContinueWithGithub/ContinueWithGithub';
// import axios from 'axios';
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

// import continueInWithGoogle from '../../services/requests/continueWithGoogle';
import {
  getMyCommunities,
  getModeratedCommunities
} from '../../store/slices/UserCommunitiesSlice';

/**
 * This component returns a login page contains:
 * 1- two inputs for username and password
 * 2- two buttons for continue with google or facebook
 * 3- submit button
 * @returns {React.Component}
 */
// const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;
// const GOOGLE_SECRET = process.env.REACT_APP_GOOGLE_SECRET;
// const GITHUB_ID = process.env.REACT_APP_GITHUB_ID;
// const GITHUB_SECRET = process.env.REACT_APP_GITHUB_SECRET;

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

  // const [loginWithGithub, setLoginWithGithub] = useState(false);
  // const [loginWithGoogle, setLoginWithGoogle] = useState(false);
  /** To check if the form is valid or not */
  const formIsValid =
    (!errorPassword && !errorUserName) || loginWithGoogle || loginWithFacebook;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  /** If the authentication changes, run the useEffect to redirect to the home page  */
  useEffect(() => {
    if (isAuth) {
      dispatch(getMyCommunities());
      dispatch(getModeratedCommunities());
      navigate('/');
    }
  }, [isAuth]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('heare');
    dispatch(login({ username: userName, password }));
  };

  /**
   * Reset the inputs of the form
   */
  const resetInputs = () => {
    resetPasswordInput();
    resetUserNameInput();
  };

  /**
   *
   * @param {Object} response - response from Google API for being registered with google email
   */
  // const handleCallBackResponse = (response) => {
  //   /** Should be sent to API */
  //   console.log(response);

  //   // continueInWithGoogle(response);
  //   setLoginWithGoogle(true);
  // };

  /** Render the Google button only once the page is first renedered */
  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlparams = new URLSearchParams(queryString);
  //   const code = urlparams.get('code');
  //   const params = `?client_id=${GITHUB_ID}&client_secret=${GITHUB_SECRET}&code=${code}`;
  //   console.log(params);
  //   // const getAccessToken = async () => {
  //   //   try {
  //   //     const response = await axios.post(
  //   //       `https://github.com/login/oauth/access_token${params}`,

  //   //       {
  //   //         headers: {
  //   //           'Content-Type': 'application/json',
  //   //           'Access-Control-Allow-Origin': '*',
  //   //           'Access-Control-Allow-Credentials': 'true',
  //   //           'Access-Control-Max-Age': '1800',
  //   //           'Access-Control-Allow-Headers': 'content-type',
  //   //           'Access-Control-Allow-Methods':
  //   //             'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  //   //         }
  //   //       }
  //   //     );
  //   //     const accessToken = response.data;
  //   //     console.log(data);
  //   //     return accessToken;
  //   //   } catch (err) {
  //   //     console.log(err.message);
  //   //     return null;
  //   //   }
  //   // };
  //   // getAccessToken();

  //   google.accounts.id.initialize({
  //     client_id: GOOGLE_ID,
  //     client_secret: GOOGLE_SECRET,
  //     callback: handleCallBackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById('continueWithGoggle'),
  //     {
  //       type: 'icon',
  //       theme: 'standard',
  //       size: 'large',
  //       shape: 'recatangular',
  //       width: '40px'
  //     }
  //   );
  // }, []);

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
        <div style={{ width: '280px' }}>
          <ContinueWithGoogle />
          <ContinueWithGithub />
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
