/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PorfileUpvotePosts.css';
import PostContainer from './ProfileUpvoteContainer/ProfileUpvoteContainer';
import PostContent from './PorfileUpvotesContent/PorfileUpvotesContent';
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

function ProfileUpvotePosts({
  postData,
  isPostFullDetailsMode,
  isModeratorMode,
  isSaved,
  isLocked,
  isPostApproved,
  isPostSticky,
  isDistinguishedAsMode,
  isNSFW,
  isSpoiled,
  replyNotifications,
  isHidden,
  isUpvoted,
  isDownvoted,
  isDeleted,
  isModerator,
  isCrosspost,
  isCommunityPost,
  isPinned,
  isJoined
}) {
  // Returning the result
  return (
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
          isUpvotedd={isUpvoted}
          isDownvotedd={isDownvoted}
        />
        <PostContent
          postContentData={postData}
          isPostFullDetailsMode={isPostFullDetailsMode}
          isSaved={isSaved}
          isLocked={isLocked}
          isPostApproved={isPostApproved}
          isPostSticky={isPostSticky}
          isDistinguishedAsMode={isDistinguishedAsMode}
          isNSFW={isNSFW}
          isSpoiled={isSpoiled}
          replyNotifications={replyNotifications}
          isHidden={isHidden}
          isUpvoted={isUpvoted}
          isDownvoted={isDownvoted}
          isDeleted={isDeleted}
          isModerator={isModerator}
          isCrosspost={isCrosspost}
          isCommunityPost={isCommunityPost}
          isPinned={isPinned}
          isJoined={isJoined}
        />
      </PostContainer>
    </div>
  );
}

export default ProfileUpvotePosts;
