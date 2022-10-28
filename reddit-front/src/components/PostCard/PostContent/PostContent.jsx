/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import { useEffect, memo } from 'react';
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
function PostContent(props) {
  let postContent = null;
  /* Gets the post type (img, video, ..), and returns the content as html component */
  const getPostContent = function () {
    const contentType = props.postContentData.post_type;
    switch (contentType) {
      case 'img':
        postContent = (
          <img
            src={Logo}
            alt="post image"
          />
        );
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
        <div className="post-content-core">
          <a href="#">
            <div className="post-final-content">{getPostContent()}</div>
          </a>
        </div>
      </div>
      <PostInteractions
        setHidePost={props.setHidePost}
        commentsCount={props.divideBigNumber(
          props.postContentData.comments_count
        )}
        votesCount={props.postContentData.votes}
        divideBigNumber={props.divideBigNumber}
      />
    </div>
  );
}

export default memo(PostContent);
