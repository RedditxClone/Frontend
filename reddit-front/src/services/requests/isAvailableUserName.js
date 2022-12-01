import axios from 'axios';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: SERVER_NAME
});
/**
 * This function is responsible to send a request with the username
 * and response if that username exists or not
 * @param {string} userName
 * @returns {response} response
 */
const isAvailableUserName = async (userName) => {
  try {
    const response = await api.post(
      '/api/user/check-available-username',
      {
        username: userName
      }
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response, userName);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export default isAvailableUserName;
