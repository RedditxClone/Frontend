/* eslint-disable no-else-return */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import getCookie from './getCookie';

/**
 * This service for getting the subreddit info
 * @param {object} data - The request data
 */
export const getSubreddit = async (subredditName) => {
  const token = getCookie('Authorization');
  const response = await api.get(`/api/subreddit/r/${subredditName}`, {
    headers: { Authorization: token }
  });
  return response.data;
};

// /**
//  * This service for getting the subreddit info
//  * @param {object} data - The request data
//  */
// export const getSubreddit = async (subredditName) => {
//   try {
//     // fetching the results
//     const response = await api.get(`/api/subreddit/r/${subredditName}`);
//     return { data: response.data, statusCode: 200 };
//     // Work with the response...
//   } catch (err) {
//     if (err.response) {
//       // The client was given an error response (5xx, 4xx)
//       return { data: [], statusCode: 400 };
//     } else if (err.request) {
//       // The client never received a response, and the request was never left
//       return { data: [], statusCode: 400 };
//     } else {
//       // Anything else
//       console.log('Error', err.message);
//       return { data: [], statusCode: 400 };
//     }
//   }
// };

/**
 * This service for joining a subreddit
 * @param {object} data - The request data
 */
export const joinSubreddit = async (id) => {
  const response = await api.post(`/api/subreddit/${id}/join`, {
    joined: true
  });
  return response.data;
};

/**
 * This service for leaving a subreddit
 * @param {object} data - The request data
 */
export const leaveSubreddit = async (subredditName) => {
  const response = await api.post(`/api/subreddit/${id}/leave`);
  return response.data;
};

/**
 * This service for setting the subreddit notifications alarm to be frequent
 * @param {object} data - The request data
 */
export const updateNotificationType = async (data) => {
  const { subredditName, type } = data;

  const response = await api.patch(`/api/subreddit/r/${subredditName}`, {
    notificationType: type
  });
  return response.data;
};

/**
 * This service for getting the subreddit's data
 * @param {object} data - The request data
 */
export const fetchSubredditData = async (data) => {
  const { id } = data;
  const response = await api.get(`/api/subreddit/${id}`);
  return response.data;
};

/**
 * This service for getting the subreddit's moderator list
 * @param {object} data - The request data
 */
export const getModeratorsList = async (data) => {
  const { id } = data;
  const response = await api.get(`/api/subreddit/${id}/moderators`);
  return response.data;
};

/**
 * This service for getting the subreddit's rules list
 * @param {object} data - The request data
 */
export const getRulesList = async (data) => {
  const { id } = data;
  const response = await api.get(`/api/subreddit/${id}/rules`);
  return response.data;
};

/**
 * This service for getting the subreddit's flairs list
 * @param {object} data - The request data
 */
export const getFlairsList = async (data) => {
  const { id } = data;
  const response = await api.get(`/api/subreddit/${id}/flairs`);
  return response.data;
};

/**
 * This service for getting the subreddit about info
 * @param {object} data - The request data
 */
export const getAboutInfo = async (data) => {
  const { id } = data;
  const response = await api.get(`/api/subreddit/${id}/about`);
  return response.data;
};

/**
 * This service for updating the subreddit description
 * @param {object} data - The request data
 */
export const updateDescription = async (data) => {
  const { subredditName, request } = data;
  const response = await api.patch(
    `/api/subreddit/r/${subredditName}`,
    request
  );
  return response.data;
};

/**
 * This service for updating the subreddit topic
 * @param {object} data - The request data
 */
export const updateSubredditTopic = async (data) => {
  const { subredditName, request } = data;
  const response = await api.patch(
    `/api/subreddit/r/${subredditName}`,
    request
  );
  return response.data;
};

/**
 * This service for updating the subreddit subtopics list
 * @param {object} data - The request data
 */
export const updateSubredditSubtopics = async (data) => {
  const { subredditName, request } = data;
  const response = await api.patch(
    `/api/subreddit/r/${subredditName}`,
    request
  );
  return response.data;
};

/**
 * This service for updating the subreddit subtopics active list
 * @param {object} data - The request data
 */
export const updateSubredditActiveSubtopics = async (data) => {
  const { id, request } = data;
  const response = await api.patch(
    `/api/subreddit/${id}/update_active_subtopics`,
    request
  );
  return response.data;
};
