/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './PostInfo.css';

import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import { FcApproval, FcLock } from 'react-icons/fc';
import { BsFillShieldFill } from 'react-icons/bs';
import { RiSpamLine } from 'react-icons/ri';
import { CiNoWaitingSign } from 'react-icons/ci';
import { followPost } from '../../../services/requests/Post';
import Logo from '../../../assets/Images/test.png';
import RemovalReasonDialog from './RemovalReasonDialog';
import { divideBigNumber } from '../../../utilities/Helpers';
import { unFollowUser, followUser } from '../../../services/requests/User';
import {
  joinSubreddit,
  leaveSubreddit
} from '../../../services/requests/Subreddit';

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
  userInfo,
  subredditInfo,
  postedAt,
  postId,
  isCommunityPost,
  modAction,
  isNSFW,
  isLocked,
  isFollowed,
  approvedBy,
  approvedAt,
  removedBy,
  removedAt,
  spammedBy,
  spammedAt
}) {
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

  /* This function handles the join button */
  const handleJoinSubreddit = () => {
    if (isJoined) {
      setIsJoined(false);
      leaveSubreddit(communityId);
    } else {
      setIsJoined(true);
      joinSubreddit(communityId);
    }
  };

  /* This function return the subreddit name concatenated with 'r/' */
  const getCommunityName = () => {
    return communityName ? 'r/ '.concat(communityName) : 'community_name';
  };

  /* This function return the username of the person that published the post 'u/' */
  const getPostedBy = () => {
    return postedBy ? 'u/ '.concat(postedBy) : 'user_name';
  };

  /* This function handles the follow button */
  const handleFollowPost = () => {
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

  /* This function handles the join button */
  const handleHoverOnJoinButton = (e) => {
    if (isJoined) {
      e.target.innerHTML = 'Leave';
    } else {
      e.target.innerHTML = 'Join';
    }
  };

  /* This function handles the join button */
  const handleHoverOutJoinButton = (e) => {
    if (isJoined) {
      e.target.innerHTML = 'Joined';
    } else {
      e.target.innerHTML = 'Join';
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
      {/* Community logo on the post card  */}
      {!isCommunityPost ? (
        <div
          className="community-logo"
          data-testid="test-post-logo"
        >
          {subredditLogo ? (
            <a
              href={`/r/${communityName}`}
              className="community-logo-link"
            >
              <img
                src={subredditLogo}
                alt="community Logo"
              />
            </a>
          ) : (
            <svg
              onClick={() => {
                window.location.href = `/r/${communityName}`;
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={{
                borderRadius: '50%',
                border: '4px solid white',
                width: '2.5rem',
                height: '2.5rem',
                backgroundColor: 'white',
                boxSizing: 'border-box',
                fill: '#0079D3',
                transform: 'translateY(-2px)',
                zIndex: 10
              }}
            >
              <path d="M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z" />
            </svg>
          )}
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
                  <a href={`/r/${communityName}`}>{getCommunityName()}</a>
                </h3>
              </div>
              <div className="community-stats">
                <div className="community-stats-item">
                  <span className="members-count">
                    {divideBigNumber(membersCount)}
                  </span>
                  <span>members</span>
                </div>
                <div className="community-stats-item">
                  <span className="online-members">0</span>
                  <span>online</span>
                </div>
              </div>
              <div className="community-description-text">
                <p>{communityDescription}</p>
              </div>
              <div className="community-view-button">
                <a
                  href={`/r/${communityName}`}
                  className="view-community"
                >
                  view community
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <span className="posted-by">Posted by</span>
        <div
          className="post-user-info"
          onMouseOver={handleHoverOnUsername}
          onMouseOut={handleHoverOutUsername}
          onFocus={handleHoverOnUsername}
          onBlur={handleHoverOutUsername}
        >
          <a href={`/user/${postedBy}`}>{getPostedBy()}</a>
          <div
            className="user-information"
            id={'user-information-post-' + postId}
          >
            <div className="user-information-header">
              <div className="user-logo-2">
                {userLogo ? (
                  <img
                    src={Logo}
                    alt="User logo"
                  />
                ) : (
                  <img
                    src="https://i.redd.it/snoovatar/avatars/22ed2fc7-5f11-491e-9188-d99c9327cdf9.png"
                    alt="User Avatar"
                  />
                )}
              </div>
              <p className="user-name-2">
                <a
                  onClick={() => {
                    window.location.replace(`/user/${postedBy}`);
                  }}
                >
                  {getPostedBy()}
                </a>
                <p>
                  {getPostedBy()}
                  <span className="user-joined-from">{joinedDate}</span>
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
        <span className="post-time">{`${postedAt} ago`}</span>
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

      {/* showing join button if the user is not showing the subreddit page  */}
      {!isCommunityPost && !subredditInfo.isJoin ? (
        <a
          type="button"
          className="join-community"
          onClick={handleJoinSubreddit}
          onMouseOver={handleHoverOnJoinButton}
          onFocus={handleHoverOnJoinButton}
          onMouseOut={handleHoverOutJoinButton}
          onBlur={handleHoverOutJoinButton}
        >
          {isJoined ? 'Joined' : 'Join'}
        </a>
      ) : null}
    </div>
  );
}

export default memo(PostInfo);
