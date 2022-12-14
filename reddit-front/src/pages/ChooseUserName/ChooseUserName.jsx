/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { signUp } from '../../store/slices/AuthSlice';
import LoginInputField from '../../components/LoginInputField/LoginInputField';
import { DotDiv } from '../../components/GlobalStyles/GlobalStyles.style';
import Recaptcha from '../../components/Recaptcha/Recaptcha';
import ErrorMessage, {
  BackLink
} from '../../utilities/CustomStyling/CustomStyling';
import InfoButton from '../../components/InfoButton/InfoButton';
import useInput from '../../hooks/use-input';
import isAvailableUserName from '../../services/requests/isAvailableUserName';
import getRandomUserNames from '../../services/requests/getRandomUserNames';
/**
 * This component returns a page that appears after entering your email in signup
 * It has two input fields one for username
 * It also check if the chosen usrename is valid or not
 * Sign up button
 * @returns {React.Component}
 */
function ChooseUserName() {
  const {
    value: userName,
    valueChangeHandler: onChangeUserNameInputHandler,
    valueChangeOutside: onClickSuggestedUserName,
    inputBlurHandler: onBlurUserNameInput,
    inputFocusHandler: onFocusUserNameInput,
    isTouched: touchedUserNameInput,
    reset: resetUserName,
    hasError: errorUserName
  } = useInput((value) => value.length >= 3);

  const {
    value: password,
    valueChangeHandler: onChangePasswordInputHandler,
    isTouched: touchedPasswordInput,
    inputBlurHandler: onBlurPasswordInput,
    inputFocusHandler: onFocusPasswordInput,
    reset: resetPassword,
    hasError: errorPassword
  } = useInput((value) => value.length > 8);
  const [recaptcha, setRecaptcha] = useState(false);
  const [takenUserName, setTakenUserName] = useState(false);
  const [suggestedUserNames, setSuggestedUserNames] = useState([]);
  /** To check if the username available or not */
  useEffect(() => {
    const timeToReadName = setTimeout(async () => {
      const availableUserName = await isAvailableUserName(userName);
      if (availableUserName) {
        console.log('fulfilled = ', availableUserName);
        setTakenUserName(false);
      } else {
        console.log('fulfilled = ', availableUserName);

        setTakenUserName(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timeToReadName);
    };
  }, [userName, isAvailableUserName]);

  useEffect(() => {
    async function getUserNames() {
      try {
        const userNames = await getRandomUserNames();
        setSuggestedUserNames(userNames);
      } catch (e) {
        console.log(e.message);
      }
    }
    getUserNames();
  }, []);
  const formIsValid =
    !takenUserName && !errorPassword && !errorUserName && recaptcha;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isAuth, isLoading } = useSelector((st) => st.auth);
  const { email } = state;
  const resetInputs = () => {
    resetPassword();
    resetUserName();
  };
  if (isAuth) {
    navigate('/');
    resetInputs();
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    dispatch(signUp({ email, username: userName, password }));
    resetInputs();
  };

  const onGetRandomUserNames = async () => {
    try {
      const userNames = await getRandomUserNames();
      setSuggestedUserNames(userNames);
    } catch (e) {
      console.log(e.message);
    }
  };
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <div
            style={{
              height: '75vh',
              padding: '24px 24px 12px',
              borderBottom: '1px solid hsla(195,2%,65%,.36)',
              flex: '1 1'
            }}
          >
            <DotDiv>
              <LoginInputField
                label="CHOOSE A USERNAME"
                error={errorUserName || takenUserName}
                success={
                  !errorUserName && !takenUserName && touchedUserNameInput
                }
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
              {takenUserName && (
                <ErrorMessage>That username is already taken</ErrorMessage>
              )}
            </DotDiv>
            <DotDiv>
              <LoginInputField
                label="PASSWORD"
                error={errorPassword}
                success={!errorPassword && touchedPasswordInput}
                onChange={onChangePasswordInputHandler}
                onBlur={onBlurPasswordInput}
                value={password}
                onFocus={onFocusPasswordInput}
                type="password"
              />
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
            <BackLink
              onClick={resetInputs}
              to="/auth/signup"
            >
              Back
            </BackLink>
            <InfoButton
              len={len}
              hlen={lhlen}
              type="submit"
              loading={isLoading}
              disabled={!formIsValid}
            >
              SIGN UP
            </InfoButton>
          </div>
        </form>
        {suggestedUserNames.length > 0 && (
          <div style={{ margin: '3rem 5rem' }}>
            <h3>
              Here are some username suggestions
              <span
                style={{
                  color: '#0079d3',
                  cursor: 'pointer',
                  marginLeft: '1rem',
                  fontWeight: '700'
                }}
                onClick={onGetRandomUserNames}
              >
                <AiOutlineReload />
              </span>
            </h3>

            {suggestedUserNames.map((user, index) => (
              <button
                key={index}
                type="button"
                style={{
                  color: '#0079d3',
                  fontWeight: '600',
                  listStyle: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  display: 'block'
                }}
                onClick={() => onClickSuggestedUserName(user)}
              >
                {user}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChooseUserName;
