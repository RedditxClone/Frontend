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
  isPostApproved,
  isNSFW,
  isSpoiled,
  voteType,
  subredditInfo,
  userPostedByInfo,
  postImages
  // isPostFullDetailsMode,
  // isModeratorMode,
  // isSaved,
  // isLocked,
  // isPostSticky,
  // isDistinguishedAsMode,
  // replyNotifications,
  // isHidden,
  // isUpvoted,
  // isDownvoted,
  // isDeleted,
  // isModerator,
  // isCrosspost,
  // isCommunityPost,
  // isPinned,
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
          votesCount={postData.votesCount}
          postId={postData.id}
          currentVotingState={0}
          // isUpvotedd={isUpvoted}
          // isDownvotedd={isDownvoted}
          voteType={voteType}
        />
        <PostContent
          postContentData={postData}
          isJoined={subredditInfo.isJoin}
          isSaved={postData.isSaved}
          isPostApproved={isPostApproved}
          isNSFW={isNSFW}
          isSpoiled={isSpoiled}
          replyNotifications={postData.replyNotifications}
          voteType={voteType}
          isModerator={subredditInfo.isModerator}
          userPostedByInfo={userPostedByInfo}
          postImages={postImages}
          // isPostFullDetailsMode={isPostFullDetailsMode}
          // isLocked={isLocked}
          // isPostSticky={isPostSticky}
          // isDistinguishedAsMode={isDistinguishedAsMode}
          // isHidden={isHidden}
          // isUpvoted={isUpvoted}
          // isDownvoted={isDownvoted}
          // isDeleted={isDeleted}
          // isCrosspost={isCrosspost}
          // isCommunityPost={isCommunityPost}
          // isPinned={isPinned}
        />
      </PostContainer>
    </div>
  );
}

export default ProfileUpvotePosts;
