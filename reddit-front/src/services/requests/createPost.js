import api from './api';
import getCookie from './getCookie';

const createPost = async (
  communityId,
  postTitle,
  postText,
  isNsfw,
  isSpoiler,
  postFlair
) => {
  const token = getCookie('Authorization');
  try {
    const response = await api.post('api/post/submit', {
      subredditId: communityId,
      title: postTitle,
      text: postText,
      nsfw: isNsfw,
      spoiler: isSpoiler,
      flair: postFlair === '' ? null : postFlair
    }, { headers: { Authorization: token } });
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

export default createPost;
