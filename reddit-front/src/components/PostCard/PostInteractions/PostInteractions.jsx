/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './PostInteractions.css';

import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import { FiCopy } from 'react-icons/fi';
import { TbArrowsCross } from 'react-icons/tb';
import { ImEmbed2 } from 'react-icons/im';
import SmallScreenVoting from '../Voting/SmallScreenVoting/SmallScreenVoting';

/**
 * @typedef PropType
 * @property {function} setHidePost
 * @property {number} commentsCount
 * @property {function} divideBigNumber
 * @property {number} votesCount
 */

function PostInteractions({
  setHidePost,
  commentsCount,
  votesCount,
  divideBigNumber
}) {
  // states: false -> normal(unsaved), true  -> saved
  const [saveState, setSaveState] = useState(false);
  const handleSavePost = () => {
    setSaveState((prevSaveState) => !prevSaveState);
  };

  /* This function shows the dropdown for more interactions on the post */
  const handleClickMoreInteractions = () => {
    // if the share drop down is opened, close it.
    const shareDropDown = document.querySelector(
      '.post-share .interactions-dropdown'
    );
    if (shareDropDown.classList.contains('is-visible')) {
      shareDropDown.classList.remove('is-visible');
    }

    // showing the dropdown
    document
      .querySelector('.post-more-interactions .interactions-dropdown')
      .classList.toggle('is-visible');
  };

  /* This function shows the dropdown for share options */
  const handleShareClick = () => {
    // if the the another drop down is opened, close it.
    const moreInteractionsDropDown = document.querySelector(
      '.post-more-interactions .interactions-dropdown'
    );
    if (moreInteractionsDropDown.classList.contains('is-visible')) {
      moreInteractionsDropDown.classList.remove('is-visible');
    }
    // showing the dropdown
    const shareDropDown = document.querySelector(
      '.post-share .interactions-dropdown'
    );
    shareDropDown.classList.toggle('is-visible');
    shareDropDown.scrollIntoView();
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
        <div
          className="post-share"
          data-testid="test-share-post"
        >
          <button
            type="button"
            onClick={handleShareClick}
          >
            <RiShareForwardLine fontSize="18px" />
            <span> share</span>
            <div
              className="interactions-dropdown"
              data-testid="test-interactions-dropdown"
            >
              <div className="post-copy-link">
                <a>
                  <FiCopy fontSize="25px" />
                  <span> copy link</span>
                </a>
              </div>
              <div className="post-cross">
                <a>
                  <TbArrowsCross fontSize="25px" />
                  <span> cross post</span>
                </a>
              </div>
              <div className="post-embed">
                <a>
                  <ImEmbed2 fontSize="25px" />
                  <span> embed</span>
                </a>
              </div>
            </div>
          </button>
        </div>
        {!saveState ? (
          <div className="post-save">
            <button
              type="button"
              onClick={handleSavePost}
            >
              <BsBookmark fontSize="18px" />
              <span> save</span>
            </button>
          </div>
        ) : (
          <div className="post-unsave">
            <button
              type="button"
              onClick={handleSavePost}
            >
              <BsFillBookmarkFill fontSize="18px" />
              <span> unsave</span>
            </button>
          </div>
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
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PostInteractions);
