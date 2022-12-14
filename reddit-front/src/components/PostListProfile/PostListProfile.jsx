/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Box, Divider } from '@mui/material';
import { getPosts } from '../../services/requests/ProfilePosts';
// eslint-disable-next-line import/named
import ProfileUpvotePosts from '../PorfileUpvotesPosts/ProfileUpvotePosts';
// import StyledHorizontalLine from '../../utilities/StyledHorizontalLine/StyledHorizontalLine';
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

// iscommunitypost,is moderator
function ProfileList() {
  const isPostFullDetailsMode = true;
  const [posts, setPosts] = useState([]);
  // Dispatching the action to get the posts data from the server
  useEffect(() => {
    const fetchPosts = async () => {
      const results = await getPosts();
      setPosts(results);
    };
    fetchPosts();
  }, []);
  // Preparing the data of the post to get displayed
  const postsData =
    posts.length > 0
      ? posts.map((post) => (post.is_upvoted && !post.is_deleted ? (
            <div style={{ width: '100%' }}>
              <ProfileUpvotePosts
                key={post.id}
                postData={post}
                isPostFullDetailsMode={isPostFullDetailsMode}
                isSaved={post.is_saved}
                isLocked={post.is_locked}
                isPostApproved={post.is_postApproved}
                isPostSticky={post.is_postSticky}
                isDistinguishedAsMode={post.is_distinguishedAsMode}
                isNSFW={post.is_NSFW}
                isSpoiled={post.is_spoiled}
                replyNotifications={post.reply_notifications}
                isHidden={post.is_hidden}
                isUpvoted={post.is_upvoted}
                isDownvoted={post.is_downvoted}
                isDeleted={post.is_deleted}
                isModerator={post.is_moderator}
                isCrosspost={post.is_crosspost}
                isCommunityPost={post.is_communitypost}
                isPinned={post.is_pinned}
              />
              {/* <StyledHorizontalLine
                marginBottom="0"
                marginLeft="4.2"
                marginTop="0.3"
                marginRight="0.6"
                height="1.5"
              /> */}
            </div>
          ) : null))
      : null;
  // Returning the result
  return <div>{postsData}</div>;
}
export default ProfileList;
