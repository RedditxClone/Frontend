import axios from 'axios';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;

/**
 * This function is responsible to send a request with the username
 * and response if that username exists or not
 * @param {string} userName
 * @returns {response} response
 */
const isAvailableUserName = async (userName) => {
  const res = await axios.post(
    `${SERVER_NAME}/api/user/check-available-username`,
    {
      username: userName
    }
  );
  return res;
};

export default isAvailableUserName;
