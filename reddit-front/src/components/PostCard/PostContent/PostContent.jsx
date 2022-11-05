/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import { useEffect, memo, useState } from 'react';
import PostInteractions from '../PostInteractions/PostInteractions';
import './PostContent.css';
import Logo from './test.png';
/**
 * @typedef PropType
 * @property {number} comments_count
 * @property {object} postContentData
 * @property {string} post_type
 * @property {string} title
 * @property {string} flair_name
 * @property {mixed} content
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

  const showSlides = () => {
    const slides = document.getElementsByClassName('my-slides');
    const slidesLength = slides.length;
    if (slideIndex === slidesLength) {
      slideIndex = 0;
    }
    if (slideIndex < 0) {
      slideIndex = slidesLength - 1;
    }

    let i;
    for (i = 0; i < slidesLength; i += 1) {
      slides[i].style.display = 'none';
    }
    if (slides[slideIndex] != null) {
      slides[slideIndex].style.display = 'block';
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
          showSlides(1);
        } else {
          postContent = (
            <div className="post-image">
              <img
                src={Img2}
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

  // Returning the result
  return (
    <div
      className="post-content"
      data-testid="test-post-content"
    >
      {props.children}
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
      <div className="post-main-content">
        <div className="post-content-core">{getPostContent()}</div>
      </div>
      <PostInteractions
        setHidePost={props.setHidePost}
        commentsCount={props.divideBigNumber(
          props.postContentData.comments_count
        )}
        votesCount={props.postContentData.votes}
        divideBigNumber={props.divideBigNumber}
        postId={props.postContentData.id}
      />
    </div>
  );
}

export default memo(PostContent);
