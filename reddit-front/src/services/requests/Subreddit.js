/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: SERVER_NAME
});

/**
 * This service for joining a subreddit
 * @param {object} data - The request data
 */
export const joinSubreddit = async (data) => {
  const { id } = data;
  const response = await api.patch(`/api/subreddit/${id}/join`, {
    joined: true
  });
  return response.data;
};

/**
 * This service for leaving a subreddit
 * @param {object} data - The request data
 */
export const leaveSubreddit = async (data) => {
  const { id } = data;
  const response = await api.patch(`/api/subreddit/${id}/leave`, {
    joined: false
  });
  return response.data;
};

/**
 * This service for setting the subreddit notifications alarm to be frequent
 * @param {object} data - The request data
 */
export const frequentNotify = async (data) => {
  const { id } = data;
  const response = await api.patch(
    `/api/subreddit/${id}/frequent_notifications`,
    { notifications_style: 0 }
  );
  return response.data;
};

/**
 * This service for setting the subreddit notifications alarm to be low
 * @param {object} data - The request data
 */
export const lowNotify = async (data) => {
  const { id } = data;
  const response = await api.patch(`/api/subreddit/${id}/low_notifications`, {
    notifications_style: 1
  });
  return response.data;
};

/**
 * This service for setting the subreddit notifications alarm to be turned off
 * @param {object} data - The request data
 */
export const offNotify = async (data) => {
  const { id } = data;
  const response = await api.patch(`/api/subreddit/${id}/off_notifications`, {
    notifications_style: 2
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
  const { id, request } = data;
  const response = await api.patch(
    `/api/subreddit/${id}/update_description`,
    request
  );
  return response.data;
};

/**
 * This service for updating the subreddit topic
 * @param {object} data - The request data
 */
export const updateSubredditTopic = async (data) => {
  const { id, request } = data;
  const response = await api.patch(
    `/api/subreddit/${id}/update_topic`,
    request
  );
  return response.data;
};

/**
 * This service for updating the subreddit subtopics list
 * @param {object} data - The request data
 */
export const updateSubredditSubtopics = async (data) => {
  const { id, request } = data;
  const response = await api.patch(
    `/api/subreddit/${id}/update_subtopics`,
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
