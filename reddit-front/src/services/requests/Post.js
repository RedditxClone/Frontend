/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';
import getCookie from './getCookie';

const token = getCookie('Authorization');

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getPost = async (id) => {
  const response = await api.get(`/api/post/${id}`);
  return response.data;
};

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getPosts = async (data) => {
  const { sortType } = data;
  const response = await api.get(`/api/posts/${sortType}`);
  return response.data;
};

/**
 * This service for fetching the spammed posts
 * @param {object} data - The request data
 */
export const getSpammedPosts = async (data) => {
  const { sortType } = data;
  const response = await api.get('/api/posts/spammed');
  return response.data;
};

/**
 * This service for fetching the un-moderated posts
 * @param {object} data - The request data
 */
export const getUnModeratedPosts = async (data) => {
  const { sortType } = data;
  const response = await api.get('/api/posts/unmoderated');
  return response.data;
};

/**
 * This service for fetching the edited posts
 * @param {object} data - The request data
 */
export const getEditedPosts = async (data) => {
  const { sortType } = data;
  const response = await api.get('/api/posts/edited');
  return response.data;
};

/**
 * This service for getting the insights for a post
 * @param {object} data - The request data
 */
export const getPostInsights = async (data) => {
  const { id } = data;
  const response = await api.get(`api/post/${id}/insights_count`);
  return response.data;
};

/**
 * This service for deleting a post
 * @param {object} data - The request data
 */
export const deletePost = async (data) => {
  const { id } = data;
  const response = await api.delete(`api/post/${id}`, {
    headers: { Authorization: token }
  });
  return response.data;
};

/**
 * This service for removing a post
 * @param {object} data - The request data
 */
export const removePost = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/thing/${id}/remove`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-removing a post
 * @param {object} data - The request data
 */
export const unRemovePost = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/post/${id}/unremove`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for hiding a post
 * @param {object} data - The request data
 */
export const hidePost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/hide`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-hiding a post
 * @param {object} data - The request data
 */
export const unHidePost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/unhide`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for approving a post
 * @param {object} data - The request data
 */
export const approvePost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/approve`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-approving a post
 * @param {object} data - The request data
 */
export const unApprovePost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/unapprove`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for saving a post
 * @param {object} data - The request data
 */
export const savePost = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/post/${id}/save`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-saving a post
 * @param {object} data - The request data
 */
export const unSavePost = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/post/${id}/unsave`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for locking a post
 * @param {object} data - The request data
 */
export const lockPost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(
    `api/post/${id}/lock`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-locking a post
 * @param {object} data - The request data
 */
export const unLockPost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(
    `api/post/${id}/unlock`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for spamming a post
 * @param {object} data - The request data
 */
export const spamPost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/spam`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-spamming a post
 * @param {object} data - The request data
 */
export const unSpamPost = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/unspam`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for marking a post as NSFW
 * @param {object} data - The request data
 */
export const markPostAsNSFW = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/mark-nsfw`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for un-marking a post as NSFW
 * @param {object} data - The request data
 */
export const unMarkPostAsNSFW = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/post/${id}/unmark-nsfw`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for sending a post replies notifications
 * @param {object} data - The request data
 */
export const sendReplyNotifications = async (data) => {
  const { id, request } = data;
  const response = await api.post(`api/post/${id}/send-replies`, request, {
    headers: { Authorization: token }
  });
  return response.data;
};

/**
 * This service for not spoiling a post
 * @param {object} data - The request data
 */
export const spoilPost = async (data) => {
  const { id } = data;
  const response = await api.patch(
    `api/post/${id}/spoiler`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for not un-spoiling a post
 * @param {object} data - The request data
 */
export const unSpoilPost = async (data) => {
  const { id } = data;
  const response = await api.patch(
    `api/post/${id}/unspoiler`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for not voting a post
 * @param {object} data - The request data
 */
export const upVote = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/thing/${id}/upvote`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for not voting a post
 * @param {object} data - The request data
 */
export const downVote = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/thing/${id}/downvote`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for not voting a post
 * @param {object} data - The request data
 */
export const unVote = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/thing/${id}/unvote`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for following a post
 * @param {object} data - The request data
 */
export const followPost = async (data) => {
  const { id, request } = data;
  const response = await api.post(
    `api/post/${id}/follow`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for visiting a post
 * @param {object} data - The request data
 */
export const flagPostAsVisited = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/visited`, { visited: true });
  return response.data;
};
