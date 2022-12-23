/* eslint-disable no-unneeded-ternary */
/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

// eslint-disable-next-line no-unused-vars
import { getHomePosts, getSubredditPosts } from '../../services/requests/Post';
import PostCard from '../PostCard/PostCard';
import Loader from '../../utilities/Loader/Loader';

/**
 * @typedef PropType
 * @property {string} sort
 * @property {string} time
 * @property {bool} isCommunityPost
 * @property {bool} isModeratorMode
 * @property {bool} isHomePagePost
 * @property {string} subredditName
 */

/**
 * This Component for the posts Listing. ( Infinite Scrolling listing )
 * It fetches the api data for the posts, then looping on each post data to display it.
 *
 */

function PostsList({
  sort,
  time,
  isCommunityPost,
  isModeratorMode,
  isHomePagePost,
  subredditName
}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState(sort);
  const limit = 4;

  // Fetching the results by calling the fetch service
  const fetchPosts = async () => {
    setLoading(true);
    let results;
    if (isHomePagePost) {
      results = await getHomePosts({
        limit,
        page,
        sort: sortType,
        time
      });
    } else if (isModeratorMode) {
      results = await getSubredditPosts({
        subredditName: subredditName,
        limit,
        page,
        sort: sortType,
        time
      });
    }

    const tempList = posts;
    const newPosts = tempList.concat(results);
    if (results.length <= 0) {
      setHasMore(false);
      setLoading(false);
    }
    setPage(page + 1);
    setPosts(newPosts);
    setLoading(false);
  };

  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (
          <PostCard
            key={post._id}
            postData={post}
            isCommunityPost={isCommunityPost}
            isHomePagePost={isHomePagePost}
            isModeratorMode={post.subredditInfo.isModerator}
          />
        ))
      : null;

  const [infiniteScroll, setInfiniteScroll] = useState(null);

  useEffect(() => {}, [sortType]);

  // Returning the result
  return (
    <>
      <InfiniteScroll
        loadMore={fetchPosts}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div>{postsData}</div>
      </InfiniteScroll>
    </>
  );
}

export default PostsList;
