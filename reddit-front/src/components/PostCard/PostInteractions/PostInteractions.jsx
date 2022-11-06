/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './PostInteractions.css';

import { GoComment } from 'react-icons/go';
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import { TbArrowsCross } from 'react-icons/tb';
import SmallScreenVoting from '../Voting/SmallScreenVoting/SmallScreenVoting';

/**
 * @typedef PropType
 * @property {function} setHidePost
 * @property {number} commentsCount
 * @property {function} divideBigNumber
 * @property {number} votesCount
 */

/**
 * This Component for the post's interaction (comment, share, hide, etc).
 * It just listens to the user interaction and handles it.
 *
 */

function PostInteractions({
  setHidePost,
  commentsCount,
  votesCount,
  divideBigNumber,
  postId
}) {
  // states: false -> normal(unsaved), true  -> saved
  const [saveState, setSaveState] = useState(false);
  const handleSavePost = () => {
    setSaveState((prevSaveState) => !prevSaveState);
  };

  /* This function shows the dropdown for more interactions on the post */
  const handleClickMoreInteractions = () => {
    // showing the dropdown
    document
      .getElementById(`interactions-dropdown-${postId}`)
      .classList.toggle('is-visible');
  };

  const handleHideButton = () => {
    setHidePost(true);
  };

  const getCommentsCount = function () {
    return commentsCount ? commentsCount.concat(' Comments') : 'No Comments';
  };

  // Returning the result
  return (
    <div
      className="post-interactions"
      data-testid="test-post-interactions"
    >
      <div className="post-interaction-content">
        <SmallScreenVoting
          votesCount={votesCount}
          divideBigNumber={divideBigNumber}
        />
        <a className="post-comment">
          <GoComment fontSize="18px" />
          <span className="comments-count">{getCommentsCount()}</span>
        </a>
        <a
          className="post-share"
          data-testid="test-share-post"
        >
          <TbArrowsCross fontSize="25px" />
          <span> cross post</span>
        </a>
        {!saveState ? (
          <a
            onClick={handleSavePost}
            className="post-save"
          >
            <BsBookmark fontSize="18px" />
            <span> save</span>
          </a>
        ) : (
          <a
            className="post-unsave"
            onClick={handleSavePost}
          >
            <BsFillBookmarkFill fontSize="18px" />
            <span> unsave</span>
          </a>
        )}

        <div
          className="post-more-interactions"
          data-testid="test-post-more-interactions"
        >
          <button
            type="button"
            onClick={handleClickMoreInteractions}
          >
            <BsThreeDots
              fontSize="18px"
              color="#949494"
            />
            <div
              className="interactions-dropdown"
              id={`interactions-dropdown-${postId}`}
              data-testid="test-2-interactions-dropdown"
            >
              <div
                className="post-hide"
                onClick={handleHideButton}
              >
                <a>
                  <BiHide fontSize="25px" />
                  <span> hide</span>
                </a>
              </div>
              {!saveState ? (
                <a
                  onClick={handleSavePost}
                  className="post-save-2"
                >
                  <BsBookmark fontSize="18px" />
                  <span> save</span>
                </a>
              ) : (
                <a
                  className="post-unsave-2"
                  onClick={handleSavePost}
                >
                  <BsFillBookmarkFill fontSize="18px" />
                  <span> unsave</span>
                </a>
              )}
              <a
                className="post-share-2"
                data-testid="test-share-post"
              >
                <TbArrowsCross fontSize="25px" />
                <span> cross post</span>
              </a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PostInteractions);
