import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../store/slices/AuthSlice';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import { DotDiv } from '../../components/GlobalStyles/GlobalStyles.style';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import ErrorMessage, {
  BackLink
} from '../../utilities/CustomStyling/CustomStyling';
import InfoButton from '../../components/InfoButton/InfoButton';
import useInput from '../../hooks/use-input';

export default function ChooseUserName() {
  const {
    value: userName,
    valueChangeHandler: onChangeUserNameInputHandler,
    inputBlurHandler: onBlurUserNameInput,
    isTouched: touchedUserNameInput,
    reset: resetUserName,
    hasError: errorUserName
  } = useInput((value) => value.length > 3 && value.length < 20);

  const {
    value: password,
    valueChangeHandler: onChangePasswordInputHandler,
    inputBlurHandler: onBlurPasswordInput,
    reset: resetPassword,
    hasError: errorPassword
  } = useInput((value) => value.length > 8);
  const [recaptcha, setRecaptcha] = useState(false);
  // To check if the username available or not
  // useEffect(() => {
  //   const timeToReadName = setTimeout(async () => {
  //     try {
  //       const response = await fetch('', {
  //         method: 'post',
  //         body: JSON.stringify(userName)
  //       });
  //     } catch (err) {}
  //   }, 2500);

  //   return () => {
  //     clearTimeout(timeToReadName);
  //   };
  // }, userName);

  const formIsValid = !errorPassword && !errorUserName && recaptcha;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isAuth } = useSelector((st) => st.auth);
  const { email } = state;
  if (isAuth) navigate('/');
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(signUp({ email, username: userName, password }));
    resetUserName();
    resetPassword();
  };

  const outLined = true;
  const len = 15;
  const lhlen = 3;
  return (
    <div>
      <div
        style={{
          borderBottom: '1px solid hsla(195,2%,65%,.36)',
          padding: '0 24px 24px',
          fontSize: '14px'
        }}
      >
        <h3>Choose your username</h3>
        <span>
          {' '}
          Your username is how other community members will see you. This name
          will be used to credit you for things you share on Reddit. What should
          we call you?
        </span>
      </div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              height: '75vh',
              padding: '24px 24px 12px',
              borderBottom: '1px solid hsla(195,2%,65%,.36)'
            }}
          >
            <DotDiv>
              <LoginInputField
                label="CHOOSE A USERNAME"
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
                label="PASSWORD"
                error={errorPassword}
                onChange={onChangePasswordInputHandler}
                onBlur={onBlurPasswordInput}
                value={password}
                type="password"
              />
              <span className="Dot"> </span>
              {errorPassword && <ErrorMessage> Invalid Password</ErrorMessage>}
            </DotDiv>
            {!errorUserName && touchedUserNameInput && (
              <Recaptcha setRecaptcha={setRecaptcha} />
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 24px 0 24px',
              alignItems: 'center'
            }}
          >
            <BackLink to="/user/signup">Back</BackLink>
            <InfoButton
              outlined={!outLined}
              len={len}
              align="center"
              hlen={lhlen}
              type="submit"
              disabled={!formIsValid}
            >
              SIGN UP
            </InfoButton>
          </div>
        </form>
      </div>
    </div>
  );
}
