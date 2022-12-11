/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';

/**
 * This service for fetching the post data
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
  const response = await api.delete(`api/post/${id}`);
  return response.data;
};

/**
 * This service for removing a post
 * @param {object} data - The request data
 */
export const removePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/remove`, request);
  return response.data;
};

/**
 * This service for un-removing a post
 * @param {object} data - The request data
 */
export const unRemovePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/unremove`);
  return response.data;
};

/**
 * This service for hiding a post
 * @param {object} data - The request data
 */
export const hidePost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/hide`);
  return response.data;
};

/**
 * This service for un-hiding a post
 * @param {object} data - The request data
 */
export const unHidePost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unhide`);
  return response.data;
};

/**
 * This service for approving a post
 * @param {object} data - The request data
 */
export const approvePost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/approve`, {
    is_postApproved: true
  });
  return response.data;
};

/**
 * This service for un-approving a post
 * @param {object} data - The request data
 */
export const unApprovePost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unapprove`, {
    is_postApproved: false
  });
  return response.data;
};

/**
 * This service for saving a post
 * @param {object} data - The request data
 */
export const savePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/save`, request);
  return response.data;
};

/**
 * This service for un-saving a post
 * @param {object} data - The request data
 */
export const unSavePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/unsave`, request);
  return response.data;
};

/**
 * This service for locking a post
 * @param {object} data - The request data
 */
export const lockPost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/lock`, request);
  return response.data;
};

/**
 * This service for un-locking a post
 * @param {object} data - The request data
 */
export const unLockPost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/unlock`, request);
  return response.data;
};

/**
 * This service for spamming a post
 * @param {object} data - The request data
 */
export const spamPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/spam`, { is_spammed: true });
  return response.data;
};

/**
 * This service for un-spamming a post
 * @param {object} data - The request data
 */
export const unSpamPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unspam`, {
    is_spammed: false
  });
  return response.data;
};

/**
 * This service for pinning a post
 * @param {object} data - The request data
 */
export const stickyPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/sticky`, {
    is_postSticky: true
  });
  return response.data;
};

/**
 * This service for un-pinning a post
 * @param {object} data - The request data
 */
export const unStickyPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unsticky`, {
    is_postSticky: false
  });
  return response.data;
};

/**
 * This service for distinguishing a post as mod
 * @param {object} data - The request data
 */
export const distinguishAsMod = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/distinguish_as_mod`, {
    is_distinguishedAsMode: true
  });
  return response.data;
};

/**
 * This service for distinguishing a post as mod
 * @param {object} data - The request data
 */
export const unDistinguishAsMod = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/undistinguish_as_mod`, {
    is_distinguishedAsMode: false
  });
  return response.data;
};

/**
 * This service for marking a post as NSFW
 * @param {object} data - The request data
 */
export const markPostAsNSFW = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/mark_nsfw`, {
    is_NSFW: true
  });
  return response.data;
};

/**
 * This service for un-marking a post as NSFW
 * @param {object} data - The request data
 */
export const unMarkPostAsNSFW = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unmark_nsfw`, {
    is_NSFW: false
  });
  return response.data;
};

/**
 * This service for sending a post replies notifications
 * @param {object} data - The request data
 */
export const sendReplyNotifications = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/send_replies`, request);
  return response.data;
};

/**
 * This service for not sending a post replies notifications
 * @param {object} data - The request data
 */
export const unSendReplyNotifications = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unsend_replies`);
  return response.data;
};

/**
 * This service for not spoiling a post
 * @param {object} data - The request data
 */
export const spoilPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/spoiler`, {
    is_spoiled: true
  });
  return response.data;
};

/**
 * This service for not un-spoiling a post
 * @param {object} data - The request data
 */
export const unSpoilPost = async (data) => {
  const { id } = data;
  const response = await api.patch(`api/post/${id}/unspoiler`, {
    is_spoiled: false
  });
  return response.data;
};

/**
 * This service for not voting a post
 * @param {object} data - The request data
 */
export const votePost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/vote`, request);
  return response.data;
};

/**
 * This service for following a post
 * @param {object} data - The request data
 */
export const followPost = async (data) => {
  const { id, request } = data;
  const response = await api.patch(`api/post/${id}/follow`, request);
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

// for testing only
// eslint-disable-next-line arrow-body-style
export const getPostRelatedCommunityInfo = async (data) => {
  return [];
};

// eslint-disable-next-line arrow-body-style
export const getPostRelatedUserInfo = async (data) => {
  return [];
};
