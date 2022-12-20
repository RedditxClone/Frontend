/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import { useEffect, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@mui/material';
import { FiExternalLink } from 'react-icons/fi';
import Logo3 from '../../../../assets/Images/test.png';
import Logo from '../../../../assets/Images/test_3.jpg';
import PostInteractions from '../PostInteractions/PostInteractions';
import PostInfo from '../PostInfo/PostInfo';
import './PostContent.css';
import { divideBigNumber, getDateDiff } from '../../../../utilities/Helpers';
import {
  approvePost,
  unApprovePost,
  removePost,
  unRemovePost,
  spamPost,
  unSpamPost
} from '../../../../services/requests/Post';

/**
 * @typedef PropType
 * @property {bool} setHidePost
 * @property {object} postContentData
 * @property {bool} isCommunityPost
 * @property {bool} isPostFullDetailsMode
 * @property {bool} isModeratorMode
 * @property {bool} isSaved
 * @property {bool} isLocked
 * @property {bool} isPostApproved
 * @property {bool} isPostSticky
 * @property {bool} isDistinguishedAsMode
 * @property {bool} isNSFW
 * @property {bool} isSpoiled
 * @property {bool} replyNotifications
 * @property {bool} showComments
 */

/**
 * This Component for the post content (images, videos, text, etc.)
 * Calling the method 'getPostContent' to determine what is the type of the content.
 * Checking for the content type, and seeing if it is more than one image, so we call
 * the method 'showSlides' to render a slideshow for the images
 *
 */
function PostContent({
  setHidePost,
  postContentData,
  isCommunityPost,
  isPostFullDetailsMode,
  showComments,
  whichQueue
}) {
  let postContent = null;
  let slideIndex = 0;
  const { user } = useSelector((state) => state.auth);
  const [modAction, setModAction] = useState(0);
  const [locked, setLocked] = useState(postContentData.commentsLocked);
  const [isSpoiled, setIsSpoiled] = useState(postContentData.spoiler);
  const [approved, setApproved] = useState(
    postContentData.approvedAt ? true : false
  );
  const [removed, setRemoved] = useState(
    postContentData.removedAt ? true : false
  );
  const [spammed, setSpammed] = useState(
    postContentData.spammedAt ? true : false
  );

  const [nsfw, setNsfw] = useState(postContentData.nsfw);
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    postContentData.postType === 'img'
  );

  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = () => {
    const contentType = postContentData.post_type;
    const mediaCount = postContentData.media_count;
    switch (contentType) {
      case 'img':
        if (mediaCount > 1) {
          postContent = (
            <>
              <div className="my-slides fade">
                <img
                  src={Logo}
                  alt="post image"
                />
              </div>
              <div className="my-slides fade">
                <img
                  src={Logo}
                  alt="post image"
                  className={`post-image-${postContentData.id}`}
                />
              </div>
              <div className="my-slides fade">
                <img
                  src={Logo3}
                  alt="post image"
                />
              </div>
              <button
                type="button"
                className="prev"
                onClick={prevSlide}
              >
                ❮
              </button>
              <button
                type="button"
                className="next"
                onClick={nextSlide}
              >
                ❯
              </button>
            </>
          );
          // showSlides();
        } else {
          postContent = (
            <div className="post-image">
              <img
                className={`post-image-${postContentData.id}`}
                src={Logo}
                alt="post image"
                style={{
                  filter: postContentData.is_spoiled ? 'blur(60px)' : 'none'
                }}
              />
            </div>
          );
        }
        break;
      case 'video':
        postContent = (
          <video
            controls="true"
            muted="false"
            preload="auto"
            className="post-content-video"
          >
            <source
              src=""
              type="video/mp4"
            />
          </video>
        );
        break;
      case 'text':
        postContent = (
          <div className="post-content-text">
            <p style={{ color: 'black' }}>{postContentData.content}</p>
          </div>
        );
        break;
      case 'link':
        postContent = (
          <div className="post-content-link">
            <a>
              {postContentData.content}
              <FiExternalLink
                className="external-link-icon"
                style={{ marginLeft: '4px', color: '#3f9ade' }}
              />
            </a>
          </div>
        );
        break;
      default:
        break;
    }

    return postContent;
  };

  /* show the image slider if the post has multiple images */
  const showSlides = () => {
    let slides = document.querySelectorAll('.my-slides');

    const slidesLength = slides.length;
    if (slideIndex === slidesLength) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slidesLength - 1;
    }

    let i;
    for (i = 0; i < slidesLength; i += 1) {
      slides.item(i).style.display = 'none';
    }
    if (slides[slideIndex] != null) {
      slides.item(slideIndex).style.display = 'block';
    }
  };

  const nextSlide = () => {
    slideIndex += 1;
    showSlides();
  };

  const prevSlide = () => {
    slideIndex -= 1;
    showSlides();
  };

  const handleApproveButton = (
    id,
    setIsApproved,
    setIsRemoved,
    setIsSpammed
  ) => {
    const info = { id };
    setApproved(true);
    setIsApproved(true);
    approvePost(info);

    setRemoved(false);
    setIsRemoved(false);
    unRemovePost(info);

    setSpammed(false);
    setIsSpammed(false);
    unSpamPost(info);
  };

  const handleRemoveButton = (
    id,
    setIsApproved,
    setIsRemoved,
    setIsSpammed
  ) => {
    let info = { id, request: 'any msg' };
    setRemoved(true);
    setIsRemoved(true);
    removePost(info);

    info = { id };
    setApproved(false);
    setIsApproved(false);
    unApprovePost(info);

    setSpammed(false);
    setIsSpammed(false);
    unSpamPost(info);
  };

  const handleSpamButton = (id, setIsApproved, setIsRemoved, setIsSpammed) => {
    const info = { id };
    setSpammed(true);
    setIsSpammed(true);
    spamPost(info);

    setRemoved(false);
    setIsRemoved(false);
    unRemovePost(info);

    setApproved(false);
    setIsApproved(false);
    unApprovePost(info);
  };

  // Returning the result
  return (
    <div
      className="post-content"
      data-testid="test-post-content"
    >
      {/* Post info -> community, username, time */}
      <PostInfo
        communityName={postContentData.subredditInfo.name}
        communityId={postContentData.subredditInfo.id}
        description={postContentData.subredditInfo.description}
        userId={postContentData.user.id}
        postedBy={postContentData.user.username}
        postedAt={getDateDiff(postContentData.publishedDate)}
        postId={postContentData._id}
        isCommunityPost={isCommunityPost}
        isPostFullDetailsMode={isPostFullDetailsMode}
        modAction={modAction}
        isNSFW={postContentData.nsfw}
        isLocked={locked}
        showComments={showComments}
        membersCount={
          postContentData.subredditInfo.membersCount
            ? postContentData.subredditInfo.membersCount
            : 0
        }
      />

      {/* Post title & flairs  */}
      <div
        className="post-title-container"
        data-testid="test-post-title"
      >
        <div className="post-title">
          <Link
            className="post-link"
            sx={{ textDecoration: 'none' }}
          >
            <h3
              className="post-title-heading"
              style={{ color: 'black' }}
            >
              {postContentData.title}
            </h3>
          </Link>
        </div>
        {!showComments && postContentData.flair ? (
          <div className="flair">
            <a
              className="flair-link"
              style={{
                color: postContentData.flair.textColor,
                backgroundColor: postContentData.flair.backgroundColor
              }}
            >
              {postContentData.flair.text}
            </a>
          </div>
        ) : null}
      </div>

      {/* post content  */}
      {/* {!showComments ? (
        <div className="post-main-content">
          <div className="post-content-core">
            {getPostContent()}
            {showSlides()}
            <div style={{ margin: '10px 0', color: '#949494' }}>
              <span style={{ fontSize: '13px' }}>
                {`${divideBigNumber(postContentData.commentCount)} comments`}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ borderLeft: '1px dashed #7c7c7c', paddingLeft: '8px' }}>
          <div style={{ borderLeft: '1px dashed #7c7c7c', paddingLeft: '8px' }}>
            <p style={{ fontSize: '14px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ex quibusdam vel commodi! Accusantium nihil excepturi
              quos.
            </p>
          </div>
        </div>
      )} */}

      {/* removed as spam  */}
      {removed || spammed || approved ? (
        <div
          className="removed-as-spam"
          style={{
            backgroundColor: approved ? '#46d16033' : 'rgba(255, 69, 0, 0.2)'
          }}
        >
          <div className="user-avatar">
            <img
              src="https://styles.redditmedia.com/t5_757xhl/styles/profileIcon_snoo22ed2fc7-5f11-491e-9188-d99c9327cdf9-headshot.png?width=256&height=256&crop=256:256,smart&s=0c1745994b39de1fc9467997e904ac93bed610ce"
              alt="user-avatar"
            />
          </div>
          <div className="removed-spam-info">
            <p>
              {approved
                ? 'Approved'
                : spammed
                ? 'Removed as spam'
                : removed
                ? 'Removed'
                : null}
            </p>
            <p>
              {approved
                ? 'Approved'
                : spammed
                ? 'Removed as spam'
                : removed
                ? 'Removed'
                : null}
              {` by ${user.username} now`}
            </p>
          </div>
        </div>
      ) : null}

      {/* post interactions -> comment, save, hide, ..  */}
      <PostInteractions
        commentsCount={divideBigNumber(postContentData.commentCount)}
        postId={postContentData._id}
        isCommunityPost={true}
        changeModAction={setModAction}
        setModAction={setModAction}
        setNsfw={setNsfw}
        setLocked={setLocked}
        isModeratorMode={true}
        isLocked={locked}
        isPostApproved={approved}
        isPostRemoved={removed}
        isPostSpammed={spammed}
        isNSFW={postContentData.nsfw}
        isSpoiled={isSpoiled}
        replyNotifications={postContentData.replyNotifications}
        canBeSpoiled={canBeSpoiled}
        showComments={showComments}
        handleApproveButton={handleApproveButton}
        handleRemoveButton={handleRemoveButton}
        handleSpamButton={handleSpamButton}
        whichQueue={whichQueue}
      />
    </div>
  );
}

export default memo(PostContent);
