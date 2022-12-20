/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import api from './api';
import getCookie from './getCookie';

const token = getCookie('Authorization');
export const getBannedUsers = async (object) => {
  // const { id } = object;
  const response = await api.get(
    '/api/subreddit/639da7ae5037e305d283a479/user/ban',
    {
      headers: { Authorization: token }
    }
  );
  console.log('banned uu');
  console.log(response.data);
  return response.data;
};

export const postBannedUsers = async (object) => {
  console.log(object);
  try {
    console.log('firstPost');
    const response = await api.post(
      '/api/subreddit/639da7ae5037e305d283a479/user/ban',
      object,
      {
        headers: { Authorization: token }
      }
    );
    console.log('endPost');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const patchBannedUsers = async (obj) => {
  const { username, object } = obj;
  const response = await api.patch(
    `/api/subreddit/639da7ae5037e305d283a479/user/${username}/ban`,
    object,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const getMutedUsers = async () => {
  const response = await api.get(
    '/api/subreddit/639da7ae5037e305d283a479/user/mute',
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const postMutedUsers = async (object) => {
  try {
    const response = await api.post(
      '/api/subreddit/639da7ae5037e305d283a479/user/mute',
      object,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getApprovedUsers = async () => {
  const response = await api.get(
    '/api/subreddit/639da7ae5037e305d283a479/user/approve',
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const postApprovedUsers = async (object) => {
  try {
    const response = await api.post(
      '/api/subreddit/639da7ae5037e305d283a479/user/approve',
      object,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getModerators = async () => {
  const response = await api.get(
    '/api/subreddit/639da7ae5037e305d283a479/moderation/moderators',
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const postModerators = async (object) => {
  const { username } = object;
  try {
    const response = await api.post(
      `/api/subreddit/639da7ae5037e305d283a479/moderation/${username}`,
      object,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteBannedUser = async (object) => {
  const { username } = object;
  const response = await api.delete(
    `/api/subreddit/639da7ae5037e305d283a479/user/${username}/ban`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const deleteMutedUser = async (object) => {
  const { username } = object;
  const response = await api.delete(
    `/api/subreddit/639da7ae5037e305d283a479/user/${username}/mute`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const deleteApprovedUser = async (object) => {
  const { username } = object;
  const response = await api.delete(
    `/api/subreddit/639da7ae5037e305d283a479/user/${username}/approve`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const deleteModerator = async (object) => {
  const { username } = object;
  const response = await api.delete(
    `/api/subreddit/639da7ae5037e305d283a479/moderation/${username}/moderators`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};
