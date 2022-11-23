/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-template */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './ProfileUpvotesInfo.css';

import { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import { FcApproval } from 'react-icons/fc';
import { RiSpamLine } from 'react-icons/ri';
import { CiNoWaitingSign } from 'react-icons/ci';
import { divideBigNumber } from '../../../utilities/Helpers';
import {
  getPostRelatedCommunityInfo,
  getPostRelatedUserInfo
} from '../../../redux/slices/PostSlice';
import Logo from './test.png';
import RemovalReasonDialog from './RemovalReasonDialog';

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
  userId,
  postedBy,
  postedAt,
  postId,
  isCommunityPost,
  isPostFullDetailsMode,
  modAction
}) {
  const [isCommunityNameHovered, setIsCommunityNameHovered] = useState(false);
  const [isPostFollowed, setIsPostFollowed] = useState(false);
  const { postRelatedCommunityData, postRelatedUserData } = useSelector(
    (state) => state.post
  );
  const [openRemovalDialog, setOpenRemovalDialog] = useState(false);

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

  /* This function handles the follow button */
  const handleFollowPost = function () {
    setIsPostFollowed(!isPostFollowed);
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
      {/* Community logo on the post card
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
      </div> */}
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
        <span className="post-time">
          {/* {getPostedAt()} */}
          39 minutes ago
        </span>
        <div className="mod-action-icon">
          {modAction === 1 ? (
            <>
              <FcApproval style={{ margin: '6px 0 0 5px' }} />
              <span className="post-approved-by">
                Approved by mustafa-hamzawy at Wed,Nov 09, 2022 4:18:33 PM UTC
              </span>
            </>
          ) : null}

          {modAction === 2 ? (
            <>
              <RiSpamLine style={{ color: 'red', margin: '6px 0 0 5px' }} />
              <span
                className="post-spammed-by"
                style={{ width: '45rem' }}
              >
                Removed as spam by mustafa-hamzawy at Wed,Nov 09, 2022 4:18:33
                PM UTC
              </span>
            </>
          ) : null}

          {modAction === 3 ? (
            <>
              <CiNoWaitingSign
                style={{ color: 'red', margin: '6px 0 0 5px' }}
              />
              <span className="post-removed-by">
                Removed by mustafa-hamzawy at Wed,Nov 09, 2022 4:18:33 PM UTC
              </span>
            </>
          ) : null}
        </div>
        {modAction === 3 ? (
          <span
            className="removal-reason"
            onClick={handleOpenRemovalDialog}
          >
            Add a removal reason
          </span>
        ) : null}
      </div>
      {/* Add removal reason card  */}
      <RemovalReasonDialog
        open={openRemovalDialog}
        handleClose={handleCloseRemovalDialog}
        postId={postId}
      />
      {/* showing join button if the user is not showing the subreddit page  */}
      {!isCommunityPost ? (
        <button
          type="button"
          className="join-community"
        >
          Join
        </button>
      ) : null}
      {/* showing follow button in the full details mode of the post  */}
      {/* {isPostFullDetailsMode ? (
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
      ) : null} */}
    </div>
  );
}

export default memo(PostInfo);
