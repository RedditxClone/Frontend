import api from './api';
import getCookie from './getCookie';

const sendPrivateMessage = async (toUserName, messageSubject, messageBody) => {
  const token = getCookie('Authorization');
  console.log(token, toUserName, messageSubject, messageBody);
  try {
    const response = await api.post(`/api/message/${toUserName}`, {
      subject: messageSubject,
      body: messageBody
    }, { headers: { Authorization: token } });
    if (response.status >= 200 && response.status < 300) {
      return 'Message sent successfully';
    }
    return `Error, ${response.statusText}`;
  } catch (err) {
    console.log(err);
    return `Error, ${err.response.data.message}`;
  }
};

export default sendPrivateMessage;
