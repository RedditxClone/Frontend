/* eslint-disable prefer-destructuring */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './PostInfo.css';

import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { IoIosNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import { FcApproval, FcLock } from 'react-icons/fc';
import { RiSpamLine } from 'react-icons/ri';
import { CiNoWaitingSign } from 'react-icons/ci';
import { followPost } from '../../../../services/requests/Post';
import Logo from '../../../../assets/Images/test.png';
import { divideBigNumber } from '../../../../utilities/Helpers';

/**
 * @typedef PropType
 * @property {string} postId
 * @property {object} userInfo
 * @property {object} subredditInfo
 * @property {timestamp} postedAt
 * @property {string} approvedBy
 * @property {timestamp} approvedAt
 * @property {string} spammedBy
 * @property {timestamp} spammedAt
 * @property {string} removedBy
 * @property {timestamp} removedAt
 * @property {integer} modAction  // 0: none, 1: approved, 2: spammed, 3: removed
 * @property {boolean} isNSFW
 * @property {boolean} isLocked
 * @property {bool} isFollowed
 */

/**
 * This Component for the post Info ( post header ) which contains the username that posted the post
 * , the community of the post, flairs, and the join community button.
 * Using Redux here for fetching the data of the username and the community.
 *
 */

function PostInfo({
  postId,
  userInfo,
  subredditInfo,
  postedAt,
  approvedBy,
  approvedAt,
  spammedBy,
  spammedAt,
  removedBy,
  removedAt,
  modAction,
  isNSFW,
  isLocked,
  isFollowed
}) {
  // States
  const { user } = useSelector((state) => state.auth);
  const communityName = subredditInfo.name;
  const communityId = subredditInfo.id;
  const userId = userInfo.id;
  const postedBy = userInfo.username;
  const joinedDate = userInfo.joinedDate;
  const membersCount = subredditInfo.membersCount;
  const communityDescription = subredditInfo.description;
  const [isCommunityNameHovered, setIsCommunityNameHovered] = useState(false);
  const [isPostFollowed, setIsPostFollowed] = useState(isFollowed);
  const [isUserFollowed, setIsUserFollowed] = useState(userInfo.isFollowed);
  const [isJoined, setIsJoined] = useState(subredditInfo.isJoin);
  const subredditLogo =
    subredditInfo.logo === '' || subredditInfo.logo == null
      ? subredditInfo.logo
      : null;
  const userLogo =
    userInfo.logo === '' || userInfo.logo == null ? userInfo.photo : null;

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
    return subredditInfo.name
      ? 'r/ '.concat(subredditInfo.name)
      : 'community_name';
  };

  /* This function return the username of the person that published the post 'u/' */
  const getPostedBy = function () {
    return userInfo.username ? 'u/ '.concat(userInfo.username) : 'user_name';
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

  /* This function handles the follow button */
  const handleFollowUser = (e) => {
    if (!isUserFollowed) {
      setIsUserFollowed(true);
      followUser(userInfo.id);
      e.target.innerHTML = 'Following';
    } else {
      setIsUserFollowed(false);
      unFollowUser(userInfo.id);
      e.target.innerHTML = 'Follow';
    }
  };

  // Returning the result
  return (
    <div
      className="post-info"
      data-testid="test-post-info"
    >
      {/* post info details -> username, time, community name */}
      <div className="post-info-details">
        <div
          className="community-name"
          onMouseOver={handleHoverOnSubreddit}
          onFocus={handleHoverOnSubreddit}
          onMouseOut={handleHoverOutSubreddit}
          onBlur={handleHoverOutSubreddit}
          data-testid="test-post-community-name"
        >
          <a href={`/r/${subredditInfo.name}`}>{getCommunityName()}</a>
          <div
            className="community-information"
            id={'community-information-post-' + postId}
          >
            <div className="community-information-header">
              <div className="community-logo-2">
                <img
                  src={Logo}
                  alt="community logo"
                />
              </div>
              <h3 className="community-name-2">
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    window.location.replace(`/r/${subredditInfo.name}`);
                  }}
                >
                  {getCommunityName()}
                </a>
              </h3>
            </div>
            <div className="community-stats">
              <div className="community-stats-item">
                <span className="members-count">
                  {divideBigNumber(subredditInfo.membersCount)}
                </span>
                <span>members</span>
              </div>
              <div className="community-stats-item">
                <span className="online-members">0</span>
                <span>online</span>
              </div>
            </div>
            <div className="community-description-text">
              <p>{subredditInfo.description}</p>
            </div>
            <div className="community-view-button">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  window.location.replace(`/r/${subredditInfo.name}`);
                }}
                className="view-community"
              >
                view community
              </a>
            </div>
          </div>
        </div>

        <span className="posted-by">Posted by</span>
        <div
          className="post-user-info"
          onMouseOver={handleHoverOnUsername}
          onMouseOut={handleHoverOutUsername}
          onFocus={handleHoverOnUsername}
          onBlur={handleHoverOutUsername}
        >
          <a
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.location.replace(`/user/${userInfo.username}`);
            }}
          >
            {getPostedBy()}
          </a>
          <div
            className="user-information"
            id={'user-information-post-' + postId}
          >
            <div className="user-information-header">
              <div className="user-logo-2">
                <img
                  src={Logo}
                  alt="User logo"
                />
              </div>
              <p className="user-name-2">
                <a href={`/user/${userInfo.username}`}>{userInfo.username}</a>
                <p>
                  {getPostedBy()}
                  <span className="user-joined-from"> joined date</span>
                </p>
              </p>
            </div>
            <div className="user-stats">
              <div className="user-stats-item">
                <span className="karma-count">12</span>
                <span>post karma</span>
              </div>
              <div className="user-stats-item">
                <span className="karma-commented">123</span>
                <span>comment karma</span>
              </div>
            </div>
            <div className="user-stats">
              <div className="user-stats-item">
                <span className="awardee-karma">123</span>
                <span>awardee karma</span>
              </div>
              <div className="user-stats-item">
                <span className="awarder-karma">123</span>
                <span>awarder karma</span>
              </div>
            </div>

            {user.username !== userInfo.username ? (
              <div
                className="follow-user-button"
                style={{
                  backgroundColor: isUserFollowed ? 'white' : '#1976d2',
                  border: isUserFollowed ? '1px solid #1976d2' : null
                }}
              >
                <a
                  className="view-community"
                  onClick={handleFollowUser}
                  style={{
                    color: isUserFollowed ? '#1976d2' : 'white'
                  }}
                >
                  {isUserFollowed ? 'Following' : 'Follow'}
                </a>
              </div>
            ) : null}
          </div>
        </div>
        <span className="post-time">{getPostedAt()}</span>
        <div className="mod-action-icon">
          {isNSFW ? (
            <span
              className="nsfw-flair"
              id={`post-nsfw-${postId}`}
            >
              nfsw
            </span>
          ) : null}

          {isLocked ? (
            <FcLock
              id={`post-lock-comments-${postId}`}
              style={{
                fontSize: '13px',
                color: '#8bc34a',
                margin: '6px 0 0 7px'
              }}
            />
          ) : null}

          {modAction === 1 ? (
            <span className="approved-post-icon">
              <FcApproval style={{ fontSize: '13px', margin: '6px 0 0 7px' }} />
              <span className="post-approved-by">
                {`Approved by ${approvedBy} at ${approvedAt}`}
              </span>
            </span>
          ) : null}

          {modAction === 2 ? (
            <span className="spammed-post-icon">
              <RiSpamLine
                className="spammed-post-icon"
                style={{
                  fontSize: '13px',
                  color: 'red',
                  margin: '6px 0 0 7px'
                }}
              />
              <span
                className="post-spammed-by"
                style={{ width: '45rem' }}
              >
                {`Removed as spam by ${spammedBy} at ${spammedAt}`}
              </span>
            </span>
          ) : null}

          {modAction === 3 ? (
            <span className="removed-post-icon">
              <CiNoWaitingSign
                style={{
                  fontSize: '13px',
                  color: 'red',
                  margin: '6px 0 0 5px'
                }}
              />
              <span className="post-removed-by">
                {`Removed by ${removedBy} at ${removedAt}`}
              </span>
            </span>
          ) : null}
        </div>
      </div>

      {/* showing follow button in the full details mode of the post  */}
      <a onClick={handleFollowPost}>
        {isPostFollowed ? (
          <IoIosNotifications
            color="#787c7e"
            fontSize="2.4rem"
          />
        ) : (
          <IoMdNotificationsOutline
            color="#787c7e"
            fontSize="2.4rem"
          />
        )}
      </a>
    </div>
  );
}

export default memo(PostInfo);
