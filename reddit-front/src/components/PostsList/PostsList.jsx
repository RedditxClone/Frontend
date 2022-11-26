/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Box } from '@mui/material';
import { getPosts } from '../../services/requests/Post';
import PostCard from '../PostCard/PostCard';
/**
 * @typedef PropType
 * @property {string} sortType
 * @property {bool} isCommunityPost
 * @property {bool} isModeratorMode
 * @property {bool} isHomePagePost
 */

/**
 * This Component for the posts List.
 * It fetches the api data for the posts, then looping on each post data to display it.
 *
 */

function PostsList({
  sortType,
  isCommunityPost,
  isModeratorMode,
  isHomePagePost
}) {
  const isPostFullDetailsMode = false;
  const [posts, setPosts] = useState([]);

  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchPosts = async () => {
      const results = await getPosts({ sortType });
      setPosts(results);
    };
    fetchPosts();
  }, []);

  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (
          <PostCard
            key={post.id}
            postData={post}
            isCommunityPost={isCommunityPost}
            isPostFullDetailsMode={isPostFullDetailsMode}
            isHomePagePost={isHomePagePost}
            isModeratorMode={isModeratorMode}
            isSaved={post.is_saved}
            isLocked={post.is_locked}
            isPostApproved={post.is_postApproved}
            isPostSticky={post.is_postSticky}
            isDistinguishedAsMode={post.is_distinguishedAsMode}
            isNSFW={post.is_NSFW}
            isSpoiled={post.is_spoiled}
            replyNotifications={post.reply_notifications}
          />
        ))
      : null;

  // Returning the result
  return <div>{postsData}</div>;
}

export default PostsList;
