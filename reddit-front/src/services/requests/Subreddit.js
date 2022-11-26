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
  const response = await api.post(`/api/subreddit/${id}/join`);
  return response.data;
};

/**
 * This service for leaving a subreddit
 * @param {object} data - The request data
 */
export const leaveSubreddit = async (data) => {
  const { id } = data;
  const response = await api.post(`/api/subreddit/${id}/leave`);
  return response.data;
};
