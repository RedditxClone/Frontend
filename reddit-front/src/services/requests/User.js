/* eslint-disable object-curly-newline */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import api from './api';
import getCookie from './getCookie';

/**
 * This service for following user
 * @param {object} userId
 */
export const followUser = async (userId) => {
  const token = getCookie('Authorization');
  const response = await api.post(
    `/api/user/${userId}/follow`,
    {},
    {
      headers: { Authorization: token }
    }
  );

  return response.data;
};

export const unFollowUser = async (userId) => {
  const token = getCookie('Authorization');

  const response = await api.post(
    `/api/user/${userId}/unfollow`,
    {},
    { headers: { Authorization: token } }
  );

  return response.data;
};
