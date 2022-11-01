/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './PostInfo.css';
import { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPostRelatedCommunityInfo,
  getPostRelatedUserInfo
} from '../../../store/slices/PostSlice';
import Logo from './test.png';

/**
 * @typedef PropType
 * @property {number} postId
 * @property {number} userId
 * @property {number} communityId
 * @property {string} communityName
 * @property {string} postedBy
 * @property {timestamp} postedAt
 * @property {function} divideBigNumber
 */

function PostInfo({
  communityName,
  communityId,
  userId,
  postedBy,
  postedAt,
  divideBigNumber,
  postId
}) {
  const [isCommunityNameHovered, setIsCommunityNameHovered] = useState(false);
  const { postRelatedCommunityData, postRelatedUserData } = useSelector(
    (state) => state.post
  );

  const dispatch = useDispatch();

  // Dispatching the action to get the data of subreddit and user that related to the post
  useEffect(() => {
    dispatch(getPostRelatedCommunityInfo(communityId));
    dispatch(getPostRelatedUserInfo(userId));
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

  // Returning the result
  return (
    <div
      className="post-info"
      data-testid="test-post-info"
    >
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
      <div className="post-info-details">
        <div
          className="community-name"
          onMouseOver={handleHoverOnSubreddit}
          onFocus={handleHoverOnSubreddit}
          onMouseOut={handleHoverOutSubreddit}
          onBlur={handleHoverOutSubreddit}
          data-testid="test-post-community-name"
        >
          <a href="#">{getCommunityName()}</a>
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
                <a href="#">{getCommunityName()}</a>
              </h3>
            </div>
            <div className="community-stats">
              <div className="community-stats-item">
                <span className="members-count">
                  {divideBigNumber(postRelatedCommunityData.members_count)}
                </span>
                <span>members</span>
              </div>
              <div className="community-stats-item">
                <span className="online-members">
                  {divideBigNumber(postRelatedCommunityData.online_members)}
                </span>
                <span>online</span>
              </div>
            </div>
            <div className="community-description-text">
              <p>{postRelatedCommunityData.description}</p>
            </div>
            <div className="community-view-button">
              <a
                href="#"
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
          <a href="#">{getPostedBy()}</a>
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
                <a href="#">{postRelatedUserData.name}</a>
                <p>
                  {getPostedBy()}
                  <span className="user-joined-from">
                    {postRelatedUserData.joined_at}
                  </span>
                </p>
              </p>
            </div>
            <div className="user-stats">
              <div className="user-stats-item">
                <span className="karma-count">
                  {divideBigNumber(postRelatedUserData.post_karma)}
                </span>
                <span>post karma</span>
              </div>
              <div className="user-stats-item">
                <span className="karma-commented">
                  {divideBigNumber(postRelatedUserData.comment_karam)}
                </span>
                <span>comment karma</span>
              </div>
            </div>
            <div className="user-stats">
              <div className="user-stats-item">
                <span className="awardee-karma">
                  {divideBigNumber(postRelatedUserData.awardee_karam)}
                </span>
                <span>awardee karma</span>
              </div>
              <div className="user-stats-item">
                <span className="awarder-karma">
                  {divideBigNumber(postRelatedUserData.awarded_karma)}
                </span>
                <span>awarder karma</span>
              </div>
            </div>

            <div className="follow-user-button">
              <a
                href="#"
                className="view-community"
              >
                follow
              </a>
            </div>
          </div>
        </div>
        <span className="post-time">{getPostedAt()}</span>
      </div>
      <button
        type="button"
        className="join-community"
      >
        Join
      </button>
    </div>
  );
}

export default memo(PostInfo);
