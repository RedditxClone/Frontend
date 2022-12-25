/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PostCard.css';
import PostContainer from './PostContainer/PostContainer';
import PostContent from './PostContent/PostContent';
import Voting from './Voting/Voting';

/**
 *
 * @param {mixed}  postData
 * @param {bool}  isCommunityPost
 * @param {bool}  isPostFullDetailsMode
 * @param {bool}  isHomePagePost
 * @param {bool}  isModeratorMode
 * @param {bool}  isSaved
 * @param {bool}  isLocked
 * @param {bool}  isPostApproved
 * @param {bool}  isPostSticky
 * @param {bool}  isDistinguishedAsMode
 * @param {bool}  isNSFW
 * @param {bool}  isSpoiled
 * @param {bool}  replyNotifications
 */

/**
 * This Component is the main post component
 * It wraps other small components that do the work.
 *
 */

function PostCard({
  postData,
  isCommunityPost,
  isPostFullDetailsMode,
  isHomePagePost,
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
          votesCount={postData.votesCount}
          postId={postData._id}
          currentVotingState={
            postData.voteType === null ? 0 : postData.voteType
          }
          isHomePagePost={isHomePagePost}
        />
        <PostContent
          setHidePost={setHidePost}
          postContentData={postData}
          isCommunityPost={isCommunityPost}
          isModeratorMode={isModeratorMode}
        />
      </PostContainer>
    </div>
  ) : null;
}

export default PostCard;
