/* eslint-disable no-console */
import api from './api';

const createSubreddit = async (communityName, communityType, isOver18) => {
  try {
    const response = await api.post('/api/subreddit/', {
      name: communityName,
      type: communityType,
      over18: isOver18
    });
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default createSubreddit;
