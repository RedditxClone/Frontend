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
import { Link } from '@mui/material';
import { FiExternalLink } from 'react-icons/fi';
import Logo3 from '../../../../assets/Images/test.png';
import Logo from '../../../../assets/Images/test_3.jpg';
import PostInteractions from '../PostInteractions/PostInteractions';
import PostInfo from '../PostInfo/PostInfo';
import './PostContent.css';
import { divideBigNumber } from '../../../../utilities/Helpers';
import {
  approvePost,
  unApprovePost,
  removePost,
  unRemovePost,
  spamPost,
  unSpamPost,
  flagPostAsVisited
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
  let postContent = null;
  let slideIndex = 0;
  const [modAction, setModAction] = useState(0);
  const [locked, setLocked] = useState(postContentData.is_locked);
  const [approved, setApproved] = useState(isPostApproved);
  const [removed, setRemoved] = useState(postContentData.is_removed);
  const [spammed, setSpammed] = useState(postContentData.is_spammed);
  const [distinguishAsMod, setDistinguishAsMod] = useState(
    postContentData.is_distinguishedAsMode
  );
  const [nsfw, setNsfw] = useState(postContentData.is_NSFW);
  const [isVisited, setIsVisited] = useState(postContentData.visited);
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    postContentData.post_type === 'img'
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
            <p style={{ color: isVisited ? '#949494' : 'black' }}>
              {postContentData.content}
            </p>
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

  const handleClickOnPost = () => {
    flagPostAsVisited({ id: postContentData.id });
  };

  const handleApproveButton = (id) => {
    const info = { id };
    setApproved(true);
    approvePost(info);

    setRemoved(false);
    unRemovePost(info);

    setSpammed(false);
    unSpamPost(info);
  };

  const handleRemoveButton = (id) => {
    let info = { id, request: 'any msg' };
    setRemoved(true);
    removePost(info);

    info = { id };
    setApproved(false);
    unApprovePost(info);

    setSpammed(false);
    unSpamPost(info);
  };

  const handleSpamButton = (id) => {
    const info = { id };
    setSpammed(true);
    spamPost(info);

    setRemoved(false);
    unRemovePost(info);

    setApproved(false);
    unApprovePost(info);
  };

  // Returning the result
  return (
    <div
      className="post-content"
      data-testid="test-post-content"
      onClick={handleClickOnPost}
    >
      {/* Post info -> community, username, time */}
      <PostInfo
        communityName={postContentData.community_name}
        communityId={postContentData.community_id}
        userId={postContentData.user_id}
        postedBy={postContentData.posted_by}
        postedAt={postContentData.posted_at}
        postId={postContentData.id}
        isCommunityPost={isCommunityPost}
        isPostFullDetailsMode={isPostFullDetailsMode}
        modAction={modAction}
        isNSFW={nsfw}
        isLocked={locked}
        isDistinguishedAsMode={distinguishAsMod}
        isFollowed={postContentData.follow}
        showComments={showComments}
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
              style={{ color: isVisited ? '#949494' : 'black' }}
            >
              {postContentData.title}
            </h3>
          </Link>
        </div>
        {!showComments && postContentData.flairs.length > 0
          ? postContentData.flairs.map((item) => (
              <div className="flair">
                <a
                  href="#"
                  className="flair-link"
                >
                  {item}
                </a>
              </div>
            ))
          : null}
      </div>

      {/* post content  */}
      {!showComments ? (
        <div className="post-main-content">
          <div className="post-content-core">
            {getPostContent()}
            {showSlides()}
            <div style={{ margin: '10px 0', color: '#949494' }}>
              <span style={{ fontSize: '13px' }}>
                {`${divideBigNumber(postContentData.comments_count)} comments`}
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
      )}

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
            <p>removed by 1 day ago</p>
          </div>
        </div>
      ) : null}

      {/* post interactions -> comment, save, hide, ..  */}
      <PostInteractions
        setHidePost={setHidePost}
        commentsCount={divideBigNumber(postContentData.comments_count)}
        postId={postContentData.id}
        isCommunityPost={true}
        changeModAction={setModAction}
        setModAction={setModAction}
        setDistinguishPostAsMod={setDistinguishAsMod}
        setNsfw={setNsfw}
        setLocked={setLocked}
        isModeratorMode={true}
        isSaved={isSaved}
        isLocked={isLocked}
        isPostApproved={approved}
        isPostRemoved={postContentData.is_removed}
        isPostSpammed={postContentData.is_spammed}
        isPostSticky={isPostSticky}
        isDistinguishedAsMode={isDistinguishedAsMode}
        isNSFW={isNSFW}
        isSpoiled={isSpoiled}
        replyNotifications={replyNotifications}
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
