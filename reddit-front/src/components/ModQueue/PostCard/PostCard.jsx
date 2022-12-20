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
 * @param {bool}  showComments
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
  isModeratorMode,
  isSaved,
  isLocked,
  isPostApproved,
  isPostSticky,
  isDistinguishedAsMode,
  isNSFW,
  isSpoiled,
  replyNotifications,
  showComments,
  whichQueue
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
          currentVotingState={0}
          isHomePagePost={isHomePagePost}
        />
        <PostContent
          setHidePost={setHidePost}
          postContentData={postData}
          isCommunityPost={isCommunityPost}
          isPostFullDetailsMode={isPostFullDetailsMode}
          isModeratorMode={isModeratorMode}
          isSaved={isSaved}
          isLocked={isLocked}
          isPostApproved={isPostApproved}
          isPostSticky={isPostSticky}
          isDistinguishedAsMode={isDistinguishedAsMode}
          isNSFW={isNSFW}
          isSpoiled={isSpoiled}
          replyNotifications={replyNotifications}
          showComments={showComments}
          whichQueue={whichQueue}
        />
      </PostContainer>
    </div>
  ) : null;
}

export default PostCard;
