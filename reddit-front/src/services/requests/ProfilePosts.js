/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';
import getCookie from './getCookie';
/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */

/////get all hidden posts
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
//////hidepost

/**
 * This service for removing a post
 * @param {object} data - The request data
 */
export const removePost = async (data) => {
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
 * This service for joining a subreddit
 * @param {object} data - The request data
 */
export const joinSubreddit = async (id) => {
  const token = getCookie('Authorization');
  const response = await api.post(
    `/api/subreddit/${id}/join`,
    {},
    {
      headers: { Authorization: token }
    }
  );
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

// export const getPosts = async () => {
//   const token = getCookie('Authorization');
//   try {
//     const response = await api.get('/api/post/hidden', {
//       headers: { Authorization: token }
//     });
//     if (response.status >= 200 && response.status < 300) {
//       console.log('salma');
//       return response.data;
//     }
//     return null;
//   } catch (e) {
//     console.log(e.message);
//     return null;
//   }
// };
