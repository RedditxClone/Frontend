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
import PostInteractions from '../PostInteractions/PostInteractions';
import PostInfo from '../PostInfo/PostInfo';
import './PostContent.css';
import { divideBigNumber } from '../../../utilities/Helpers';
import { flagPostAsVisited } from '../../../services/requests/Post';
import Logo from './test_2.jpeg';
import Logo2 from './test.png';
import Logo3 from './test_3.jpg';

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
  replyNotifications
}) {
  let postContent = null;
  let slideIndex = 0;
  const [modAction, setModAction] = useState(0);
  const [locked, setLocked] = useState(postContentData.is_locked);
  const [distinguishAsMod, setDistinguishAsMod] = useState(
    postContentData.is_distinguishedAsMode
  );
  const [nsfw, setNsfw] = useState(postContentData.is_NSFW);
  const [isVisited, setIsVisited] = useState(postContentData.visited);
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    postContentData.post_type === 'img'
  );

  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = function () {
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
                  src={Logo2}
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
        {postContentData.flairs.length > 0
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
      <div className="post-main-content">
        <div className="post-content-core">
          {getPostContent()}
          {showSlides()}
        </div>
      </div>

      {/* post interactions -> comment, save, hide, ..  */}
      <PostInteractions
        setHidePost={setHidePost}
        commentsCount={divideBigNumber(postContentData.comments_count)}
        votesCount={postContentData.votes}
        postId={postContentData.id}
        isCommunityPost={isCommunityPost}
        changeModAction={setModAction}
        setModAction={setModAction}
        setDistinguishPostAsMod={setDistinguishAsMod}
        setNsfw={setNsfw}
        setLocked={setLocked}
        isModeratorMode={isModeratorMode}
        isSaved={isSaved}
        isLocked={isLocked}
        isPostApproved={isPostApproved}
        isPostSticky={isPostSticky}
        isDistinguishedAsMode={isDistinguishedAsMode}
        isNSFW={isNSFW}
        isSpoiled={isSpoiled}
        replyNotifications={replyNotifications}
        canBeSpoiled={canBeSpoiled}
      />
    </div>
  );
}

export default memo(PostContent);
