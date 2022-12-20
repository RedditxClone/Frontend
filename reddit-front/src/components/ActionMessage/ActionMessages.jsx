import { useEffect, useState } from 'react';
import ActionMessage from './ActionMessage';

function ActionMessages({ msg, show }) {
  const [messages, setMessage] = useState([]);
  useEffect(() => {
    // console.log('nada');
    // console.log(msg);
    // console.log(show);

    setMessage([...messages, { msg, show }]);

    console.log(messages);
  }, ActionMessage);

  const allMessages = messages.map((message) => (
    <ActionMessage
      message={message.msg}
      show={show}
    />
  ));
  return { allMessages };
}
export default ActionMessages;
