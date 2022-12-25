/* eslint-disable no-else-return */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';
import getCookie from './getCookie';

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getPost = async (id) => {
  const token = getCookie('Authorization');
  try {
    const response = await api.get(`/api/post/${id}`, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      return { data: [], statusCode: 400 };
    } else if (err.request) {
      // The client never received a response, and the request was never left
      return { data: [], statusCode: 400 };
    } else {
      // Anything else
      console.log('Error', err.message);
      return { data: [], statusCode: 400 };
    }
  }
};

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getPosts = async (data) => {
  const token = getCookie('Authorization');

  const { sortType } = data;
  const response = await api.get(`/api/posts/${sortType}`);
  return response.data;
};

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getHomePosts = async (data) => {
  const token = getCookie('Authorization');

  const { limit, page, sort, time } = data;
  // /post/timeline?limit=5&page=2&sort=top
  if (time) {
    const response = await api.get(
      `/api/post/timeline?limit=${limit}&page=${page}&sort=${sort}&time=${time}`,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  } else {
    const response = await api.get(
      `/api/post/timeline?limit=${limit}&page=${page}&sort=${sort}`,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  }
};

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getSubredditPosts = async (data) => {
  const token = getCookie('Authorization');

  const { limit, page, sort, time, subredditName } = data;
  // /post/timeline?limit=5&page=2&sort=top
  if (time) {
    const response = await api.get(
      `/api/subreddit/${subredditName}/posts?limit=${limit}&page=${page}&sort=${sort}&time=${time}`,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  } else {
    const response = await api.get(
      `/api/subreddit/${subredditName}/posts?limit=${limit}&page=${page}&sort=${sort}`,
      {
        headers: { Authorization: token }
      }
    );
    return response.data;
  }
};

/**
 * This service for fetching the spammed posts
 * @param {object} data - The request data
 */
export const getSpammedPosts = async (data) => {
  const token = getCookie('Authorization');

  const { subredditName, sortType, page } = data;
  const response = await api.get(
    `/api/subreddit/${subredditName}/spammed?limit=4&page=${page}`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for fetching the un-moderated posts
 * @param {object} data - The request data
 */
export const getUnModeratedPosts = async (data) => {
  const token = getCookie('Authorization');

  const { subredditName, sortType, page } = data;
  const response = await api.get(
    `/api/subreddit/${subredditName}/unmoderated?limit=4&page=${page}`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

/**
 * This service for fetching the edited posts
 * @param {object} data - The request data
 */
export const getEditedPosts = async (data) => {
  const token = getCookie('Authorization');

  const { sortType } = data;
  const response = await api.get('/api/posts/edited');
  return response.data;
};

/**
 * This service for getting the insights for a post
 * @param {object} data - The request data
 */
export const getPostInsights = async (data) => {
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.get(`api/post/${id}/insights_count`);
  return response.data;
};

/**
 * This service for deleting a post
 * @param {object} data - The request data
 */
export const deletePost = async (data) => {
  const token = getCookie('Authorization');

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
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.delete(`api/post/${id}`, {
    headers: { Authorization: token }
  });
  return response.data;
};

/**
 * This service for un-removing a post
 * @param {object} data - The request data
 */
export const unRemovePost = async (data) => {
  const token = getCookie('Authorization');

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
  const token = getCookie('Authorization');

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
  const token = getCookie('Authorization');

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
  const token = getCookie('Authorization');
  const { id } = data;
  console.log('id', id);

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
  const token = getCookie('Authorization');

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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.post(
    `api/user/post/${id}/save`,
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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.post(
    `api/user/post/${id}/unsave`,
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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { commentsLocked: true },
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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { commentsLocked: false },
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
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.post(
    `api/thing/${id}/spam`,
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
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.post(
    `api/thing/${id}/unspam`,
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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { nsfw: true },
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
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { nsfw: false },
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
  const token = getCookie('Authorization');

  const { id, request } = data;
  const response = await api.patch(`api/post/${id}`, request, {
    headers: { Authorization: token }
  });
  return response.data;
};

/**
 * This service for not spoiling a post
 * @param {object} data - The request data
 */
export const spoilPost = async (data) => {
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { spoiler: true },
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
  const token = getCookie('Authorization');

  const { id } = data;
  const response = await api.patch(
    `api/post/${id}`,
    { spoiler: false },
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
  const token = getCookie('Authorization');

  const { id } = data;

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
  const token = getCookie('Authorization');

  const { id } = data;
  console.log('id', id);

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
  const token = getCookie('Authorization');
  const { id } = data;
  console.log('id', id);

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
  const token = getCookie('Authorization');

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
 * This service for updating a post's flair
 * @param {object} data - The request data
 */
export const updatePostFlair = async (data) => {
  const token = getCookie('Authorization');

  const { postId, flairId } = data;
  const response = await api.patch(
    `api/post/${postId}/visited`,
    {
      flair: flairId
    },
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};
