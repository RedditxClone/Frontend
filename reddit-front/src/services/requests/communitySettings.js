import api from './api';

export const getCommunitySettings = async (subredditName) => {
  try {
    console.log(`/api/subreddit/r/${subredditName}`);
    const response = await api.get(`/api/subreddit/r/${subredditName}`);
    if (response.status >= 200 && response.status < 300) {
      const { data } = response;
      console.log('salma');
      return data;
    }
    console.log('salma ragab');
    return null;
  } catch (e) {
    console.log('salma ragab hassan');
    console.log(e.message);
    // return null;
    return data;
  }
};

export const updateCommunitySettings = async (data) => {
  try {
    const { subredditName, request } = data;
    const response = await api.patch(`/api/subreddit/r/${subredditName}`, request);
    return response.data;
  } catch (e) {
    console.log('ssss');
    console.log(e.message);
    // return null;
    return data;
  }
};
