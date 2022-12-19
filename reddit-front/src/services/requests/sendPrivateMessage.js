import api from './api';
import getCookie from './getCookie';

const sendPrivateMessage = async (toUserName, messageSubject, messageBody) => {
  const token = getCookie('Authorization');
  try {
    const response = await api.post(`/api/message/${toUserName}`, {
      subject: messageSubject,
      message: messageBody
    }, { headers: { Authorization: token } });
    if (response.status >= 200 && response.status < 300) {
      return 'Message sent successfully';
    }
    return `Error, ${response.statusText}`;
  } catch (err) {
    return `Error, ${err.message}`;
  }
};

export default sendPrivateMessage;
