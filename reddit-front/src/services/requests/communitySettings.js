import api from './api';
import getCookie from './getCookie';

export const getCommunitySettings = async (subredditName) => {
  const token = getCookie('Authorization');
  try {
    console.log(`/api/subreddit/r/${subredditName}`);
    const response = await api.get(`/api/subreddit/r/${subredditName}`, {
      headers: { Authorization: token }
    });
    if (response.status >= 200 && response.status < 300) {
      const { data } = response;
      console.log('salma');
      return data;
    }
    console.log(response);
    return null;
  } catch (e) {
    console.log('salma ragab hassan');
    console.log(e);
    // return null;
    return data;
  }
};

export const updateCommunitySettings = async (data) => {
  const token = getCookie('Authorization');
  try {
    const { subredditName, request } = data;
    const response = await api.patch(`/api/subreddit/r/${subredditName}`, request, {
      headers: { Authorization: token }
    });
    return response.data;
  } catch (e) {
    console.log('ssss');
    console.log(e.message);
    // return null;
    return data;
  }
};
