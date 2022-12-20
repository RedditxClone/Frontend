/* eslint-disable import/no-unresolved */
/* eslint-disable no-unneeded-ternary */
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
import ReactMarkdown from 'https://esm.sh/react-markdown@7';
import { Link } from '@mui/material';
import { FiExternalLink } from 'react-icons/fi';
import Logo3 from '../../../assets/Images/test.png';
import Logo from '../../../assets/Images/test_3.jpg';
import PostInteractions from '../PostInteractions/PostInteractions';
import PostInfo from '../PostInfo/PostInfo';
import './PostContent.css';
import { divideBigNumber, getDateDiff } from '../../../utilities/Helpers';

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
  isModeratorMode
}) {
  let postContent = null;
  let slideIndex = 0;
  const [modAction, setModAction] = useState(0);
  const [locked, setLocked] = useState(postContentData.commentsLocked);
  const [nsfw, setNsfw] = useState(postContentData.nsfw);
  const [isVisited, setIsVisited] = useState(postContentData.visited);
  const [isSaved, setIsSaved] = useState(postContentData.isSaved);
  const [isSpoiled, setIsSpoiled] = useState(postContentData.spoiler);
  const [isPostApproved, setIsPostApproved] = useState(
    postContentData.replyNotifications
  );
  const [replyNotifications, setReplyNotifications] = useState(
    postContentData.visited
  );
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    true
    // postContentData.images.length === 1
  );

  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = () => {
    let contentType = postContentData.postType;
    let mediaCount = postContentData.images ? postContentData.images.length : 0;

    switch (contentType) {
      case 'images':
        if (mediaCount > 1) {
          postContent = (
            <>
              {postContentData.images && postContentData.images.length > 0
                ? postContentData.images.map((image) => (
                    <div className="my-slides fade">
                      <img
                        src={image}
                        alt="post image"
                      />
                    </div>
                  ))
                : null}
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
                className={`post-image-${postContentData._id}`}
                src={postContentData.images[0]}
                alt="post image"
                style={{
                  filter: postContentData.spoiler ? 'blur(60px)' : 'none'
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
              src={postContentData.video}
              type="video/mp4"
            />
          </video>
        );
        break;
      case 'text':
        postContent = (
          <div className="post-content-text">
            <p style={{ color: isVisited ? '#949494' : 'black' }}>
              <ReactMarkdown>{postContentData.text}</ReactMarkdown>
            </p>
          </div>
        );
        break;
      case 'link':
        postContent = (
          <div className="post-content-link">
            <a>
              {postContentData.link}
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
    window.location.href = `/r/${postContentData.subredditInfo.name}/posts/${postContentData._id}`;
  };

  // Returning the result
  return (
    <div
      className="post-content"
      data-testid="test-post-content"
      // onClick={handleClickOnPost}
    >
      {/* Post info -> community, username, time */}
      <PostInfo
        userInfo={postContentData.user}
        subredditInfo={postContentData.subredditInfo}
        postedAt={getDateDiff(postContentData.publishedDate)}
        postId={postContentData._id}
        isCommunityPost={isCommunityPost}
        modAction={modAction}
        isNSFW={nsfw}
        isLocked={locked}
        isFollowed={postContentData.follow}
        approvedBy={postContentData.approvedBy}
        approvedAt={postContentData.approvedAt}
        removedBy={postContentData.removedBy}
        removedAt={postContentData.removedAt}
        spammedBy={postContentData.spammedBy}
        spammedAt={postContentData.spammedAt}
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

        {postContentData.flair ? (
          <a
            className="flair-link"
            style={{
              color: postContentData.flair.textColor,
              backgroundColor: postContentData.flair.backgroundColor,
              padding: '0.5rem',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '12px'
            }}
          >
            {postContentData.flair.text}
          </a>
        ) : null}
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
        commentsCount={divideBigNumber(postContentData.commentCount)}
        votesCount={postContentData.votesCount}
        postId={postContentData._id}
        communityName={postContentData.subredditInfo.name}
        isCommunityPost={isCommunityPost}
        changeModAction={setModAction}
        setModAction={setModAction}
        setNsfw={setNsfw}
        setLocked={setLocked}
        isModeratorMode={isModeratorMode}
        isSaved={isSaved}
        isLocked={locked}
        isPostApproved={isPostApproved}
        isNSFW={nsfw}
        isSpoiled={isSpoiled}
        replyNotifications={replyNotifications}
        canBeSpoiled={canBeSpoiled}
        approved={postContentData.approvedAt ? true : false}
        removed={postContentData.removedAt ? true : false}
        spammed={postContentData.spammedAt ? true : false}
        currentVotingState={
          postContentData.voteType === null ? 0 : postContentData.voteType
        }
      />
    </div>
  );
}

export default memo(PostContent);
