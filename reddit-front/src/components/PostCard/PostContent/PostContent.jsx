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
import PostInteractions from '../PostInteractions/PostInteractions';
import PostInfo from '../PostInfo/PostInfo';
import './PostContent.css';
import { divideBigNumber } from '../../../utilities/Helpers';
import Logo from './test.png';
/**
 * @typedef PropType
 * @property {number} comments_count
 * @property {object} postContentData
 * @property {string} post_type
 * @property {string} title
 * @property {string} flair_name
 * @property {mixed} content
 * @property {bool} isCommunityPost
 * @property {bool} isModeratorMode
 */

/**
 *
 * @param {PropType}  props
 */

/**
 * This Component for the post content (images, videos, text, etc.)
 * Calling the method 'getPostContent' to determine what is the type of the content.
 * Checking for the content type, and seeing if it is more than one image, so we call
 * the method 'showSlides' to render a slideshow for the images
 *
 */
function PostContent(props) {
  let postContent = null;
  let slideIndex = 0;
  const [modAction, setModAction] = useState(0);

  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = function () {
    const contentType = props.postContentData.post_type;
    const mediaCount = props.postContentData.media_count;

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
                />
              </div>
              <div className="my-slides fade">
                <img
                  src={Logo}
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
                src={Logo}
                alt="post image"
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
        postContent = <p>{props.postContentData.content}</p>;
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
        communityName={props.postContentData.community_name}
        communityId={props.postContentData.community_id}
        userId={props.postContentData.user_id}
        postedBy={props.postContentData.posted_by}
        postedAt={props.postContentData.posted_at}
        postId={props.postContentData.id}
        isCommunityPost={props.isCommunityPost}
        isPostFullDetailsMode={props.isPostFullDetailsMode}
        modAction={modAction}
      />
      {props.children}

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
            <h3 className="post-title-heading">
              {props.postContentData.title}
            </h3>
          </a>
        </div>
        <div className="flair">
          <a
            href="#"
            className="flair-link"
          >
            {props.postContentData.flair_name}
          </a>
        </div>
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
        setHidePost={props.setHidePost}
        commentsCount={divideBigNumber(props.postContentData.comments_count)}
        votesCount={props.postContentData.votes}
        postId={props.postContentData.id}
        isCommunityPost={props.isCommunityPost}
        changeModAction={props.changeModAction}
        setModAction={setModAction}
        isModeratorMode={props.isModeratorMode}
      />
    </div>
  );
}

export default memo(PostContent);
