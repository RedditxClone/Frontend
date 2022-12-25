/* eslint-disable import/prefer-default-export */
import api from './api';

export const getBannedUsers = async () => {
  const response = await api.get('/banned-users');
  return response.data;
};

export const postBannedUsers = async (object) => {
  try {
    const response = await api.post('/banned-users', object);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const patchBannedUsers = async (object) => {
  const response = await api.patch('/banned-users', object);
  return response.data;
};

export const getMutedUsers = async () => {
  const response = await api.get('/muted-users');
  return response.data;
};

export const postMutedUsers = async (object) => {
  try {
    const response = await api.post('/muted-users', object);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getApprovedUsers = async () => {
  const response = await api.get('/approved-users');
  return response.data;
};

export const postApprovedUsers = async (object) => {
  try {
    const response = await api.post('/approved-users', object);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getModerators = async () => {
  const response = await api.get('/moderators');
  return response.data;
};

export const postModerators = async (object) => {
  try {
    const response = await api.post('/moderators', object);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
