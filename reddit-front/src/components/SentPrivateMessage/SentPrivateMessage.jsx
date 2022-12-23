/* eslint-disable operator-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../utilities/CustomStyling/CustomStyling';
import classes from './SentPrivateMessage.style.module.css';
import sendPrivateMessage from '../../services/requests/sendPrivateMessage';
import AlertMessage from '../../utilities/AlertMessage/AlertMessage';
import removeSlashFromUserName from '../../services/logic/removeSlashFromUserName';

function SentPrivateMessage() {
  const { user } = useSelector((state) => state.auth);
  const [toUserName, setToUserName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorToUserName, setErrorToUserName] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [sendResponse, setSendResponse] = useState('');

  const disabledButton =
    toUserName.length === 0 || subject.length === 0 || message.length === 0;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setSendResponse('');
    if (toUserName.length === 0) {
      setErrorToUserName(true);
    }
    if (subject.length === 0) {
      setErrorSubject(true);
      return;
    }

    if (message.length === 0) {
      setErrorMessage(true);
      return;
    }
    const response = await sendPrivateMessage(
      removeSlashFromUserName(toUserName),
      subject,
      message
    );
    setSendResponse(response);
  };

  let alertResponse;
  if (sendResponse.includes('Error')) {
    alertResponse = (
      <AlertMessage
        opnAlertMessage
        type="error"
        message={sendResponse}
      />
    );
  } else if (sendResponse === '') {
    alertResponse = '';
  } else {
    alertResponse = (
      <AlertMessage
        opnAlertMessage
        type="success"
        message={sendResponse}
      />
    );
  }

  return (
    <div className={classes.container}>
      <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        Send a private Message
      </div>
      <form onSubmit={onSubmitHandler}>
        <label
          className={classes['form-label']}
          htmlFor="from"
        >
          From
        </label>
        <input
          readOnly
          id="from"
          value={`/u/${user.username}`}
          className={classes['form-input']}
        />
        <label
          className={classes['form-label']}
          htmlFor="to"
        >
          to
        </label>
        <input
          id="to"
          className={classes['form-input']}
          onChange={(e) => setToUserName(e.target.value)}
        />
        {errorToUserName && <ErrorMessage>Invalid username</ErrorMessage>}
        <label
          className={classes['form-label']}
          htmlFor="subj"
        >
          Subject
        </label>
        <input
          className={classes['form-input']}
          onChange={(e) => setSubject(e.target.value)}
          id="subj"
        />
        {errorSubject && <ErrorMessage>Invalid Subject</ErrorMessage>}
        <label
          className={classes['form-label']}
          htmlFor="mess"
        >
          Message
        </label>
        <textarea
          style={{ width: '50%', height: '10rem' }}
          onChange={(e) => setMessage(e.target.value)}
          id="mess"
        />
        {errorMessage && <ErrorMessage>Invalid Message</ErrorMessage>}
        <button
          type="submit"
          className={classes['form-btn']}
          disabled={disabledButton}
        >
          Send
        </button>
        {alertResponse}
      </form>
    </div>
  );
}

export default SentPrivateMessage;
