/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './PostInfo.css';

import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoIosNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import { FcApproval, FcLock } from 'react-icons/fc';
import { BsFillShieldFill } from 'react-icons/bs';
import { RiSpamLine } from 'react-icons/ri';
import { CiNoWaitingSign } from 'react-icons/ci';
import { followPost } from '../../../../services/requests/Post';
import Logo from '../../../../assets/Images/test.png';
import RemovalReasonDialog from './RemovalReasonDialog';
import { divideBigNumber } from '../../../../utilities/Helpers';

/**
 * @typedef PropType
 * @property {number} postId
 * @property {number} userId
 * @property {number} communityId
 * @property {string} communityName
 * @property {string} postedBy
 * @property {timestamp} postedAt
 * @property {boolean} isCommunityPost
 * @property {boolean} isPostFullDetailsMode
 * @property {integer} modAction  // 0: none, 1: approved, 2: spammed, 3: removed
 * @property {boolean} isNSFW
 * @property {boolean} isLocked
 * @property {boolean} isDistinguishedAsMode
 * @property {bool} isFollowed
 */

/**
 * This Component for the post Info ( post header ) which contains the username that posted the post
 * , the community of the post, flairs, and the join community button.
 * Using Redux here for fetching the data of the username and the community.
 *
 */

function PostInfo({
  communityName,
  communityId,
  description,
  userId,
  postedBy,
  postedAt,
  postId,
  membersCount,
  isCommunityPost,
  isPostFullDetailsMode,
  modAction,
  isNSFW,
  isLocked,
  isDistinguishedAsMode,
  isFollowed,
  showComments
}) {
  const [isCommunityNameHovered, setIsCommunityNameHovered] = useState(false);

  const [openRemovalDialog, setOpenRemovalDialog] = useState(false);

  // Dispatching the action to get the data of subreddit and user that related to the post
  useEffect(() => {
    setIsCommunityNameHovered(false);
  }, [isCommunityNameHovered]);

  /* This function shows the subreddit info while hovering on the subreddit name */
  const handleHoverOnSubreddit = () => {
    setIsCommunityNameHovered(true);
    const communityInformation = document.getElementById(
      'community-information-post-' + postId
    );

    communityInformation.style.display = 'block';
    communityInformation.style.visibility = 'visible';
  };

  /* This function hides the subreddit info while hovering out the subreddit name */
  const handleHoverOutSubreddit = () => {
    const communityInformation = document.getElementById(
      'community-information-post-' + postId
    );
    communityInformation.style.display = 'none';
    communityInformation.style.visibility = 'hidden';
  };

  /* This function shows the user info while hovering on the username */
  const handleHoverOnUsername = () => {
    const userInformation = document.getElementById(
      'user-information-post-' + postId
    );
    userInformation.style.display = 'block';
    userInformation.style.visibility = 'visible';
  };

  /* This function hides the user info while hovering out the username */
  const handleHoverOutUsername = () => {
    const userInformation = document.getElementById(
      'user-information-post-' + postId
    );
    userInformation.style.display = 'none';
    userInformation.style.visibility = 'hidden';
  };

  /* This function return the subreddit name concatenated with 'r/' */
  const getCommunityName = function () {
    return communityName ? 'r/ '.concat(communityName) : 'community_name';
  };

  /* This function return the username of the person that published the post 'u/' */
  const getPostedBy = function () {
    return postedBy ? 'u/ '.concat(postedBy) : 'user_name';
  };

  /* This function return date at which the post was published */
  const getPostedAt = function () {
    return postedAt ? postedAt.concat(' ago') : 'posted_time';
  };

  /* This function handles the follow button */
  const handleFollowPost = function () {
    if (!isPostFollowed) {
      setIsPostFollowed(true);
      const info = { request: { follow: true }, id: postId };
      followPost(info);
    } else {
      setIsPostFollowed(false);
      const info = { request: { follow: false }, id: postId };
      followPost(info);
    }
  };

  const handleOpenRemovalDialog = () => {
    setOpenRemovalDialog(true);
  };

  const handleCloseRemovalDialog = () => {
    setOpenRemovalDialog(false);
  };

  // Returning the result
  return (
    <div
      className="post-info"
      data-testid="test-post-info"
    >
      {/* Community logo on the post card  */}
      {!isCommunityPost ? (
        <div
          className="community-logo"
          data-testid="test-post-logo"
        >
          <a className="community-logo-link">
            <img
              src={Logo}
              alt="community Logo"
            />
          </a>
        </div>
      ) : null}

      {/* post info details -> username, time, community name */}
      <div className="post-info-details">
        {!isCommunityPost ? (
          <div
            className="community-name"
            onMouseOver={handleHoverOnSubreddit}
            onFocus={handleHoverOnSubreddit}
            onMouseOut={handleHoverOutSubreddit}
            onBlur={handleHoverOutSubreddit}
            data-testid="test-post-community-name"
          >
            <a href={`/r/${communityName}`}>{getCommunityName()}</a>
          </div>
        ) : null}

        <span className="posted-by">
          {!showComments ? 'Posted by' : 'Commented by'}
        </span>
        <div
          className="post-user-info"
          onMouseOver={handleHoverOnUsername}
          onMouseOut={handleHoverOutUsername}
          onFocus={handleHoverOnUsername}
          onBlur={handleHoverOutUsername}
        >
          <a href={`/r/${postedBy}`}>{getPostedBy()}</a>
        </div>
        <span className="post-time">{`${postedAt} ago`}</span>
      </div>
    </div>
  );
}

export default memo(PostInfo);
