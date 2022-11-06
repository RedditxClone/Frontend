/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/slices/PostSlice';
import PostCard from '../PostCard/PostCard';

/**
 * This Component for the posts List.
 * It fetches the api data for the posts, then looping on each post data to display it.
 *
 */

export default function PostsList() {
  const dispatch = useDispatch();

  // Dispatching the action to get the posts data from the server
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts, isLoading, requestIsRejected } = useSelector(
    (state) => state.post
  );

  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (
          <PostCard
            key={post.id}
            postData={post}
          />
        ))
      : null;

  // Returning the result
  return (
    <div>
      {isLoading && !requestIsRejected ? 'Loading...' : postsData}
      {requestIsRejected
        ? 'Failed to fetch the data from the server, Please try again later.'
        : null}
    </div>
  );
}
