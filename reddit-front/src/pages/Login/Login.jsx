/* eslint-disable operator-linebreak */
// import { Link, useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/AuthSlice';
import InfoButton from '../../components/InfoButton/InfoButton';
import {
  DividerDiv,
  ContainerDiv,
  ButtonImageDiv,
  ImgDiv
} from './Login.style';
import {
  ContentDiv,
  UserAggrementDiv,
  DotDiv,
  StyledFooter,
  LinkWithMargin,
  AllDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import useInput from '../../hooks/use-input';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import SideImage from '../../components/SideImage/SideImage';

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

  const formIsValid = !errorPassword && !errorUserName && recaptcha;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    navigate('/home');
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(login({ username: userName, password }));
  };

  const resetInputs = () => {
    resetPasswordInput();
    resetUserNameInput();
  };

  const outLined = true;
  const len = 28;
  const lhlen = 3;
  const ahlen = 5;
  return (
    <AllDiv>
      <SideImage />
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
              label="username"
              error={errorUserName}
              onChange={onChangeUserNameInputHandler}
              onBlur={onBlurUserNameInput}
              onFocus={onFocusUserNameInput}
              value={userName}
            />
            <span className="Dot"> </span>
            {errorUserName && (
              <ErrorMessage>
                Username must be between 3 and 20 characters
              </ErrorMessage>
            )}
            {error && (
              <ErrorMessage>Incorrect username or password</ErrorMessage>
            )}
          </DotDiv>
          <DotDiv>
            <LoginInputField
              label="password"
              error={errorPassword}
              onChange={onChangePasswordInputHandler}
              onBlur={onBlurPasswordInput}
              onFocus={onFocusPasswordInput}
              value={password}
              type="password"
              disabled={!formIsValid}
            />
            <span className="Dot"> </span>
            {errorPassword && <ErrorMessage> Invalid Password</ErrorMessage>}
          </DotDiv>
          {!errorUserName &&
            !errorPassword &&
            touchedPasswordInput &&
            touchedUserNameInput && <Recaptcha setRecaptcha={setRecaptcha} />}
          <InfoButton
            outlined={!outLined}
            len={len}
            align="center"
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
    </AllDiv>
  );
}
