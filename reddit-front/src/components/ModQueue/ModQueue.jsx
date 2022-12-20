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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfiniteScroll from 'react-infinite-scroller';

import {
  getSpammedPosts,
  getUnModeratedPosts,
  getEditedPosts,
  getPosts
} from '../../services/requests/Post';
import PostCard from './PostCard/PostCard';
import Loader from '../../utilities/Loader/Loader';
/**
 * @typedef PropType
 * @property {string} sortType
 * @property {bool} isCommunityPost
 * @property {bool} isModeratorMode
 * @property {bool} isHomePagePost
 */

/**
 * This Component for the spammed posts List.
 * It fetches the api data for the posts, then looping on each post data to display it.
 *
 */

function ModQueue({
  sortType,
  isCommunityPost,
  isModeratorMode,
  isHomePagePost,
  whichQueue,
  subredditName,
  subredditId
}) {
  const isPostFullDetailsMode = false;
  const [posts, setPosts] = useState([]);
  const [sort, setSort] = useState(0);
  const [time, setTime] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  console.log('subredditId', subredditId);
  // Fetching the results by calling the fetch service
  const fetchPosts = async (timeState, sortState) => {
    setLoading(true);
    let results = [];
    switch (whichQueue) {
      case 'spam':
        results = await getSpammedPosts({ subredditName, sortType, page });
        break;

      case 'edited':
        results = await getEditedPosts({ subredditName, sortType, page });
        break;

      case 'unmoderated':
        results = await getUnModeratedPosts({ subredditName, sortType, page });
        break;

      default:
        break;
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

  const handleSorting = (event) => {
    setSort(event.target.value);
    fetchPosts(time, event.target.value);
  };
  const handleTiming = (event) => {
    setTime(event.target.value);
    fetchPosts(event.target.value, sort);
  };
  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (
          <PostCard
            key={post._id}
            postData={post}
            isCommunityPost={isCommunityPost}
            isPostFullDetailsMode={isPostFullDetailsMode}
            isHomePagePost={isHomePagePost}
            isModeratorMode={true}
            isSaved={post.is_saved}
            isLocked={post.is_locked}
            isPostApproved={post.is_postApproved}
            isPostSticky={post.is_postSticky}
            isDistinguishedAsMode={post.is_distinguishedAsMode}
            isNSFW={post.is_NSFW}
            isSpoiled={post.is_spoiled}
            replyNotifications={post.reply_notifications}
            showComments={showComments}
            whichQueue={whichQueue}
          />
        ))
      : null;

  // Returning the result
  return (
    <div
      style={{ width: '640px' }}
      id="spammed-container"
    >
      <h2 style={{ margin: '4rem 0', textTransform: 'capitalize' }}>
        {whichQueue}
      </h2>

      {/* Sorting the content */}
      <Box
        data-testid="search-posts-results"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        {/* Sorting the results */}
        <Box
          className="sort-relevance"
          sx={{
            width: '11rem',
            marginBottom: '2rem',
            '& > div label': {
              fontSize: '14px',
              color: 'black',
              fontWeight: '500',
              verticalAlign: 'top'
            }
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="select-time-label">Time</InputLabel>
            <Select
              labelId="select-time-label"
              id="select-time"
              value={time}
              label="Time"
              onChange={handleTiming}
              sx={{
                borderRadius: '50px',
                '& svg': {
                  width: '2rem',
                  height: '2rem'
                }
              }}
            >
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={0}
              >
                Newest First
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={1}
              >
                Oldest First
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={2}
              >
                Most Reported First
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Sorting the posts relative to the time */}
        <Box
          className="sort-time"
          sx={{
            width: '11rem',
            marginBottom: '2rem',
            marginLeft: '2rem',
            '& > div label': {
              fontSize: '14px',
              color: 'black',
              fontWeight: '500',
              verticalAlign: 'top'
            }
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="select-sort">Content</InputLabel>
            <Select
              labelId="select-sort"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={handleSorting}
              sx={{
                borderRadius: '50px',
                '& svg': {
                  width: '2rem',
                  height: '2rem'
                }
              }}
            >
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={0}
              >
                Posts
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={1}
              >
                Comments
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={2}
              >
                Posts and Comments
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <InfiniteScroll
        loadMore={fetchPosts}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div>{postsData}</div>
      </InfiniteScroll>
    </div>
  );
}

export default ModQueue;
