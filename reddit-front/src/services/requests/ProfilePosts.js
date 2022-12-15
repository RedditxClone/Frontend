/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getPosts = async () => {
  const response = await api.get('/api/posts');
  return response.data;
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
