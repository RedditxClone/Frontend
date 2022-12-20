import api from './api';
import getCookie from './getCookie';

export const getFlairs = async (subredditName) => {
  const token = getCookie('Authorization');
  //   console.log(`/api/subreddit/r/${subredditName}`);
  const response = await api.get(`/api/subreddit/${subredditName}/flair`, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const deleteFlair = async (data, subredditName) => {
  const { id } = data;
  const token = getCookie('Authorization');
  const response = await api.delete(
    `/api/subreddit/${subredditName}/flair/${id}`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};
export const createFlair = async (
  textcolor,
  textt,
  backgroundcolor,
  subredditName
) => {
  const token = getCookie('Authorization');
  try {
    const response = await api.post(
      `/api/subreddit/${subredditName}/flair`,
      {
        text: textt,
        backgroundColor: backgroundcolor,
        textColor: textcolor
      },
      { headers: { Authorization: token } }
    );
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
