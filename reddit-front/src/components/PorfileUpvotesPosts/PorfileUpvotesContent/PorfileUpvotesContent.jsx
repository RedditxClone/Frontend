/* eslint-disable spaced-comment */
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
import { TiDocumentText } from 'react-icons/ti';
import PostInteractions from '../ProfileUpvotesInteractions/ProfileUpvotesInteractions';
import PostInfo from '../ProfileUpvotesInfo/ProfileUpvotesInfo';
import './PorfileUpvotesContent.css';
import { divideBigNumber } from '../../../utilities/Helpers';
import Logo from './test.png';

/**
 * @typedef PropType
 * @property {object} postContentData
 * @property {bool} isCommunityPost
 * @property {bool} isPostFullDetailsMode
 * @property {bool} isModeratorMode
 */

/**
 * This Component for the post content (images, videos, text, etc.)
 * Calling the method 'getPostContent' to determine what is the type of the content.
 * Checking for the content type, and seeing if it is more than one image, so we call
 * the method 'showSlides' to render a slideshow for the images
 *
 */
function PostContent({
  postContentData,
  isPostFullDetailsMode,
  isSaved,
  isLocked,
  isPostApproved,
  isPostSticky,
  isDistinguishedAsMode,
  isNSFW,
  isSpoiled,
  replyNotifications,
  isHidden,
  isUpvoted,
  isDownvoted,
  isDeleted,
  isModerator,
  isCrosspost,
  isCommunityPost,
  isPinned,
  isJoined
}) {
  let postContent = null;
  let slideIndex = 0;
  let expandPostContent = null;
  const [modAction, setModAction] = useState(0);
  const [content, setContent] = useState(false);
  const [locked, setLocked] = useState(postContentData.is_locked);
  const [distinguishAsMod, setDistinguishAsMod] = useState(
    postContentData.is_distinguishedAsMode
  );
  const [nsfw, setNsfw] = useState(postContentData.is_NSFW);
  const [isVisited, setIsVisited] = useState(postContentData.visited);
  const [canBeSpoiled, setCanBeSpoiled] = useState(
    postContentData.post_type === 'img'
  );

  const showContentt = () => {
    const temp = !content;
    setContent(temp);
  };
  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = function () {
    const contentType = postContentData.post_type;
    const mediaCount = postContentData.media_count;
    switch (contentType) {
      case 'img':
        postContent = (
          <a className="post-image">
            <img
              src={Logo}
              alt="post image"
            />
          </a>
        );
        expandPostContent = (
          <div style={{ width: '50%', height: '50%' }}>
            <img
              src={Logo}
              alt="post image"
            />
          </div>
        );
        // }
        break;
      case 'video': ///we deleted the video element until decide what we will do with its screenshot???
        postContent = (
          <div className="post-image">
            <img
              src={Logo}
              alt="post image"
            />
          </div>
        );
        expandPostContent = (
          <div style={{ width: '50%', height: '50%' }}>
            <img
              src={Logo}
              alt="post image"
            />
          </div>
        );
        break;
      case 'text':
        postContent = (
          <TiDocumentText
            style={{
              fontSize: '2.5rem',
              margin: content ? '3.5rem' : '2.5rem',
              color: '#949494'
            }}
          />
        );
        expandPostContent = (
          <p style={{ fontSize: '1.5rem' }}>{postContentData.content}</p>
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
    <div className="parent">
      <div
        className="post-content"
        data-testid="test-post-content"
      >
        {/* post content  */}
        <div className="post-main-content">
          <div
            className="post-content-core"
            style={{
              backgroundColor:
                postContentData.post_type === 'text' ? '#F8F8F8' : 'white',
              borderRadius: '0.2rem'
            }}
          >
            {getPostContent()}
            {showSlides()}
          </div>
        </div>

        <div>
          {/* Post title  */}
          <div
            className="post-title-container"
            data-testid="test-post-title"
          >
            <div className="post-title">
              <a
                className="post-link"
                href="#"
              >
                <h3 className="post-title-heading">{postContentData.title}</h3>
              </a>
            </div>
            <div className="flair">
              <a
                href="#"
                className="flair-link"
              >
                {/* {postContentData.flair_name} */}
                {postContentData.flairs[0]}
              </a>
            </div>
          </div>
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
            isCrosspost={isCrosspost}
            isJoined={isJoined}
          />

          {/* post interactions -> comment, save, hide, ..  */}
          <PostInteractions
            commentsCount={divideBigNumber(postContentData.comments_count)}
            votesCount={postContentData.votes}
            postId={postContentData.id}
            isCommunityPost={isCommunityPost}
            changeModAction={setModAction}
            setModAction={setModAction}
            setDistinguishPostAsMod={setDistinguishAsMod}
            setNsfw={setNsfw}
            setLocked={setLocked}
            isSaved={isSaved}
            isLocked={isLocked}
            isPostApproved={isPostApproved}
            isPostSticky={isPostSticky}
            isDistinguishedAsMode={isDistinguishedAsMode}
            isNSFW={isNSFW}
            isSpoiled={isSpoiled}
            replyNotifications={replyNotifications}
            canBeSpoiled={canBeSpoiled}
            isHidden={isHidden}
            isUpvoted={isUpvoted}
            isDownvoted={isDownvoted}
            isDeleted={isDeleted}
            isModerator={isModerator}
            isPinned={isPinned}
            showContent={content}
            showContentHandler={showContentt}
          />
        </div>
      </div>
      {content ? expandPostContent : null}
    </div>
  );
}

export default memo(PostContent);
