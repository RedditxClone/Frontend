/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
const getPosts = async () => {
  const response = await api.get('/api/posts');
  return response.data;
};

export default getPosts;
