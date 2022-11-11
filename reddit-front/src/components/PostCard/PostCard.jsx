/* eslint-disable prefer-template */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PostCard.css';
import PostContainer from './PostContainer/PostContainer';
import PostContent from './PostContent/PostContent';
import Voting from './Voting/Voting';
/**
 * @typedef PropType
 * @property {number} id
 * @property {number} votes
 * @property {number} community_id
 * @property {number} user_id
 * @property {string} community_name
 * @property {string} posted_by
 * @property {timestamp} posted_at
 */

/**
 *
 * @param {mixed}  postData
 * @param {bool}  isCommunityPost
 * @param {bool}  isPostFullDetailsMode
 * @param {bool}  isModeratorMode
 */

/**
 * This Component is the main post component
 * It wraps other small components that do the work.
 *
 */

export default function PostCard({
  postData,
  isCommunityPost,
  isPostFullDetailsMode,
  isModeratorMode
}) {
  const [hidePost, setHidePost] = useState(false);

  // Returning the result
  return !hidePost ? (
    <div
      className="post-card"
      key={postData.id}
      id={'post-' + postData.id}
      data-testid="test-post-card"
    >
      <PostContainer>
        <Voting
          votesCount={postData.votes}
          postId={postData.id}
        />
        <PostContent
          setHidePost={setHidePost}
          postContentData={postData}
          isCommunityPost={isCommunityPost}
          isPostFullDetailsMode={isPostFullDetailsMode}
          isModeratorMode={isModeratorMode}
        />
      </PostContainer>
    </div>
  ) : null;
}
