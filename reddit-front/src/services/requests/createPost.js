/* eslint-disable no-underscore-dangle */
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
      return { fulfilled: true, data: response.data };
    }
    return false;
  } catch (err) {
    console.log(err);
    return { fulfilled: true, data: err };
  }
};

export const createPostWithMedia = async (
  communityId,
  postTitle,
  postMedia,
  isNsfw,
  isSpoiler,
  postFlair
) => {
  const token = getCookie('Authorization');
  // console.log(
  //   communityId,
  //   postTitle,
  //   postMedia,
  //   isNsfw,
  //   isSpoiler,
  //   postFlair
  // );
  const emptyPostResponse = await createPost(communityId, postTitle, 'media', isNsfw, isSpoiler, postFlair);
  const { fulfilled } = emptyPostResponse;
  const postId = emptyPostResponse.data._id;
  console.log(postId);

  if (fulfilled) {
    try {
      // const media = [...postMedia];
      console.log(postMedia);
      const postWithMedia = await api.post(`/api/post/${postId}/upload-media`, postMedia, { headers: { Authorization: token } });
      return { fulfilled: postWithMedia.status === 201, data: postWithMedia.data };
    } catch (err) {
      return { fulfilled: false, data: err };
    }
  } else {
    return { fulfilled: false, data: 'Error, Cannot upload the images' };
  }
};
export default createPost;
