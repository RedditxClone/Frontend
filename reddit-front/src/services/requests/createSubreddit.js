import api from './api';

const createSubreddit = (communityName, communityType, isOver18, fulfilled = false) => {
  console.log(communityName, communityType, isOver18);
  api.patch('/api/subreddit/', {
    name: communityName,
    type: communityType,
    over18: isOver18
  }).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      fulfilled = true;
    } else {
      fulfilled = false;
    }
  }).catch((error) => {
    fulfilled = false;
    console.log(fulfilled, error.message);
  });
};

export default createSubreddit;
