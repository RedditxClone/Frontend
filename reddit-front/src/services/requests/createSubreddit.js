import api from './api';
import getCookie from './getCookie';

const createSubreddit = async (communityName, communityType, isOver18) => {
  const token = getCookie('Authorization');
  try {
    const token = getCookie('Authorization');
    const response = await api.post('/api/subreddit/', {
      name: communityName,
      type: communityType,
      over18: isOver18
    }, { headers: { Authorization: token } });
    if (response.status >= 200 && response.status < 300) {
      // console.log(response.data);
      return true;
    }
    return false;
  } catch (err) {
    // console.log(err);
    return false;
  }
};

export default createSubreddit;
