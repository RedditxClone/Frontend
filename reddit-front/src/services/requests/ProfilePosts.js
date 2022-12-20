/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';
import getCookie from './getCookie';
/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getHiddenPosts = async () => {
  const token = getCookie('Authorization');
  try {
    const response = await api.get('/api/post/hidden', {
      headers: { Authorization: token }
    });
    if (response.status >= 200 && response.status < 300) {
      console.log('salma');
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

export const deletePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/delete`, request);
  return response.data;
};

export const hidePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/hide`, request);
  return response.data;
};

/// ///new version post requests(interactions)
export const upVoteGo = async (data) => {
  try {
    const { id } = data;
    const response = await api.post(`/api/thing/${id}/upvote`);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const downVoteGo = async (data) => {
  try {
    const { id } = data;
    const response = await api.post(`/api/thing/${id}/downvote`);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const unVoteGo = async (data) => {
  try {
    const { id } = data;
    const response = await api.post(`/api/thing/${id}/unvote`);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
/// /////////////////////////////////////////////

export const getPosts = async () => {
  const token = getCookie('Authorization');
  try {
    const response = await api.get('/api/post/hidden', {
      headers: { Authorization: token }
    });
    if (response.status >= 200 && response.status < 300) {
      console.log('salma');
      return response.data;
    }
    return null;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};
