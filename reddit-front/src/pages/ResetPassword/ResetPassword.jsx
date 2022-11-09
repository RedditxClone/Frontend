/* eslint-disable operator-linebreak */
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import {
  ContentDiv,
  DotDiv
} from '../../components/GlobalStyles/GlobalStyles.style';
import {
  RedditImageDiv,
  DescriptionDiv,
  ForgetFooterDiv,
  CheckDiv
} from './ResetPassword.style';
import InfoButton from '../../components/InfoButton/InfoButton';
import useInput from '../../hooks/use-input';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import { resetPassword } from '../../store/slices/AuthSlice';

export default function ForgetUserPassword() {
  const {
    value: newPassword,
    valueChangeHandler: onChangeNewPasswordInputHandler,
    inputBlurHandler: onBlurNewPasswordInput,
    isTouched: touchedNewPasswordInput,
    hasError: errorNewPassword
  } = useInput((value) => value.length > 8);

  // eslint-disable-next-line max-len
  const {
    value: verifyPassword,
    valueChangeHandler: onChangeVerifyPasswordInputHandler
  } = useInput((value) => value.length > 8);

  const [touchedVerifyPasswordInput, setTouchedVerifyPasswordInput] =
    useState(false);
  const [errorVerifyPassword, setErrorVerifyPassword] = useState(false);
  const [checkedBox, setCheckedBox] = useState(false);
  const [recaptcha, setRecaptcha] = useState(false);

  const onChangeCheckedBoxHandler = () => {
    setCheckedBox((prev) => !prev);
  };
  const onBlurVerifyPasswordInputHandler = () => {
    setTouchedVerifyPasswordInput(true);
    setErrorVerifyPassword(
      verifyPassword.length < 8 || verifyPassword !== newPassword
    );
  };

  const dispatch = useDispatch();
  const { error, msg } = useSelector((state) => state.auth);
  const formIsValid =
    !errorNewPassword && !errorVerifyPassword && recaptcha && checkedBox;

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(resetPassword({ password: newPassword }));
  };
  const outLined = true;
  const len = 38;
  const blen = 15;
  const dlen = 10.5;
  const ulen = 12;
  const lhlen = 3;
  return (
    <ContentDiv>
      <RedditImageDiv />
      <Typography variant="h3">Reset your password</Typography>
      <DescriptionDiv>
        <p>Choose a new password here, then log in to your account.</p>
      </DescriptionDiv>
      <form onSubmit={onSubmitHandler}>
        <DotDiv len={dlen}>
          <LoginInputField
            type="password"
            id="loginNewPassword"
            label="new password"
            value={newPassword}
            error={errorNewPassword}
            onBlur={onBlurNewPasswordInput}
            onChange={onChangeNewPasswordInputHandler}
            len={len}
          />
          <span className="Dot"> </span>
        </DotDiv>
        {errorNewPassword && (
          <ErrorMessage>Please Enter a valid Password</ErrorMessage>
        )}
        <DotDiv len={ulen}>
          <LoginInputField
            type="password"
            id="loginVerifyPassword"
            label="verify password"
            len={len}
            error={errorVerifyPassword}
            value={verifyPassword}
            onBlur={onBlurVerifyPasswordInputHandler}
            onChange={onChangeVerifyPasswordInputHandler}
          />
          <span className="Dot"> </span>
        </DotDiv>
        {errorVerifyPassword && (
          <ErrorMessage>No Matching with New password!</ErrorMessage>
        )}

        <CheckDiv>
          <input
            type="checkbox"
            checked={checkedBox}
            onChange={onChangeCheckedBoxHandler}
          />
          <div
            style={{ marginLeft: '0.5rem' }}
            id="Check"
          >
            Changing your password logs you out of all browsers on your
            <br />
            device(s). Checking this box also logs you out of all apps you have
            <br />
            authorized.
          </div>
        </CheckDiv>
        {!errorNewPassword &&
          touchedNewPasswordInput &&
          touchedVerifyPasswordInput &&
          !errorVerifyPassword &&
          checkedBox && <Recaptcha setRecaptcha={setRecaptcha} />}
        <InfoButton
          outlined={!outLined}
          len={blen}
          align="center"
          hlen={lhlen}
          disabled={!formIsValid}
          type="submit"
        >
          SET PASSWORD
        </InfoButton>
        {msg === '201' > 0 && (
          <p style={{ color: '#24a0ed' }}>
            Thanks! Your password updated successfully.
          </p>
        )}
        {error && <ErrorMessage>Error in reseting password</ErrorMessage>}
        <ForgetFooterDiv>
          <p>
            <Link
              className="BottomLink"
              to="/user/login"
            >
              LOG IN
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
