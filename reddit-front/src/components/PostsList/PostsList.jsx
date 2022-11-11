/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { getPosts } from '../../redux/slices/PostSlice';
import PostCard from '../PostCard/PostCard';
/**
 * @typedef PropType
 * @property {bool} isCommunityPost
 * @property {bool} isModeratorMode
 */

/**
 * This Component for the posts List.
 * It fetches the api data for the posts, then looping on each post data to display it.
 *
 */

function PostsList({ isCommunityPost, isModeratorMode }) {
  const isPostFullDetailsMode = true;
  const dispatch = useDispatch();

  // Dispatching the action to get the posts data from the server
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, isPostsLoading, requestIsRejected } = useSelector(
    (state) => state.post
  );

  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (
          <PostCard
            key={post.id}
            postData={post}
            isCommunityPost={isCommunityPost}
            isPostFullDetailsMode={isPostFullDetailsMode}
            isModeratorMode={isModeratorMode}
          />
        ))
      : null;

  // Returning the result
  return (
    <div>
      {isPostsLoading && !requestIsRejected ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        postsData
      )}
      {requestIsRejected
        ? 'Failed to fetch the data from the server, Please try again later.'
        : null}
    </div>
  );
}
export default PostsList;
