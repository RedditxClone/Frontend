/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-underscore-dangle */
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
import { flagPostAsVisited } from '../../../../services/requests/Post';

/**
 * @typedef PropType
 * @property {bool} setHidePost
 * @property {object} postData
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
  postData,
  isCommunityPost,
  isModeratorMode
}) {
  let postContent = null;
  let slideIndex = 0;
  let contentType = null;
  const [modAction, setModAction] = useState(0);
  const [locked, setLocked] = useState(postData.commentsLocked);
  const [nsfw, setNsfw] = useState(postData.nsfw);
  const [isSpoiled, setIsSpoiled] = useState(postData.spoiler);
  const [isSaved, setIsSaved] = useState(postData.isSaved);
  const [isPostApproved, setIsPostApproved] = useState(
    postData.approved !== null ? postData.approved : false
  );

  const [replyNotifications, setReplyNotifications] = useState(
    postData.replyNotifications
  );
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    postData.images.length === 1 // this condition means that the post has only one image
  );

  const setContentType = () => {
    if (postData.images.text) {
      contentType = 'text';
    }

    if (postData.video) {
      contentType = 'video';
    }

    if (postData.images.length > 0) {
      contentType = 'img';
    }
  };

  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = () => {
    const mediaCount = postData.images.length;
    setContentType();
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
                  className={`post-image-${postData._id}`}
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
                className={`post-image-${postData._id}`}
                src={Logo}
                alt="post image"
                style={{
                  filter: postData.spoiler ? 'blur(60px)' : 'none'
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
            <p style={{ color: 'black' }}>{postData.text}</p>
          </div>
        );
        break;
      case 'link':
        postContent = (
          <div className="post-content-link">
            <a>
              {postData.link}
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

  // Returning the result
  return (
    <div
      className="post-content"
      data-testid="test-post-content"
    >
      {/* Post info -> community, username, time */}
      <PostInfo
        postId={postData._id}
        userInfo={postData.user}
        subredditInfo={postData.subredditInfo}
        postedAt={postData.publishedDate}
        approvedBy={postData.approvedBy}
        approvedAt={postData.approvedAt}
        spammedBy={postData.spammedBy}
        spammedAt={postData.spammedAt}
        removedBy={postData.removedBy}
        removedAt={postData.removedAt}
        modAction={modAction}
        isNSFW={nsfw}
        isLocked={locked}
        // isFollowed={postData.isFollowed}
        isFollowed={false}
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
              {postData.title}
            </h3>
          </Link>
        </div>
        {/* {postData.flair.length > 0 ? (
          <div className="flair">
            <a
              href="#"
              className="flair-link"
              style={{
                color: postData.flair.textColor,
                backgroundColor: postData.flair.backgroundColor
              }}
            >
              {postData.flair.text}
            </a>
          </div>
        ) : null} */}
      </div>

      {/* post content  */}
      <div className="post-main-content">
        <div className="post-content-core">
          {getPostContent()}
          {showSlides()}
        </div>
      </div>

      {/* post interactions -> comment, save, hide, ..  */}
      <PostInteractions
        setHidePost={setHidePost}
        commentsCount={divideBigNumber(postData.commentCount)}
        votesCount={postData.votesCount}
        postId={postData._id}
        isCommunityPost={isCommunityPost}
        changeModAction={setModAction}
        setModAction={setModAction}
        setDistinguishPostAsMod={false}
        setNsfw={setNsfw}
        setLocked={setLocked}
        isModeratorMode={true}
        isSaved={isSaved}
        isLocked={locked}
        isPostApproved={isPostApproved}
        isNSFW={nsfw}
        isSpoiled={isSpoiled}
        replyNotifications={replyNotifications}
        canBeSpoiled={canBeSpoiled}
      />
    </div>
  );
}

export default memo(PostContent);
