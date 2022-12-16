import api from './api';

const createPost = async ({
  communityId, postTitle, postText, isNsfw, isSpoiler,
  postFlair,
  publishDate
}) => {
  try {
    const response = await api.post('api/post/submit', {
      subredditId: communityId,
      title: postTitle,
      text: postText,
      nsfw: isNsfw,
      spoiler: isSpoiler,
      flair: postFlair,
      publishedDate: publishDate
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

export default createPost;
