import api from './api';

/**
 * This function is responsible to send a request with the username
 * and response if that username exists or not
 * @param {string} userName
 * @returns {response} response
 */

const isAvailableUserName = async (userName) => {
  const res = await api.post(
    '/api/user/check-available-username',
    {
      username: userName
    }
  );
  return res;
};

export default isAvailableUserName;
