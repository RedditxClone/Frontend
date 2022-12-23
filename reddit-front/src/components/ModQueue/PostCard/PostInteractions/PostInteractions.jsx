/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './PostInteractions.css';
import { RiSpam3Line } from 'react-icons/ri';
import { BsThreeDots, BsShareFill } from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import { CiCircleRemove } from 'react-icons/ci';
import {
  AiOutlineCheck,
  AiOutlineTag,
  AiFillUnlock,
  AiFillLock,
  AiFillWarning,
  AiOutlineWarning
} from 'react-icons/ai';
import {
  hidePost,
  unHidePost,
  lockPost,
  unLockPost,
  unMarkPostAsNSFW,
  markPostAsNSFW
} from '../../../../services/requests/Post';
import FlairDialog from './FlairDialog';

/**
 * @typedef PropType
 * @property {string} postId
 * @property {function} setNsfw
 * @property {function} setLocked
 * @property {bool} isLocked
 * @property {bool} isPostApproved
 * @property {bool} isPostRemoved
 * @property {bool} isPostSpammed
 * @property {bool} isNSFW
 * @property {bool} isSpoiled
 * @property {bool} replyNotifications
 * @property {bool} showComments
 * @property {function} handleApproveButton
 * @property {function} handleRemoveButton
 * @property {function} handleSpamButton
 * @property {string} whichQueue
 */

/**
 * This Component for the post's interaction (comment, share, hide, etc).
 * It just listens to the user interaction and handles it.
 *
 */
function PostInteractions({
  postId,
  setNsfw,
  setLocked,
  isLocked,
  isPostApproved,
  isPostRemoved,
  isPostSpammed,
  isNSFW,
  isSpoiled,
  replyNotifications,
  showComments,
  handleApproveButton,
  handleRemoveButton,
  handleSpamButton,
  whichQueue
}) {
  // states
  const [isApproved, setIsApproved] = useState(isPostApproved);
  const [replyNotificationsState, setReplyNotificationsState] =
    useState(replyNotifications);

  const [lockComments, setLockComments] = useState(isLocked);
  const [lockThread, setLockThread] = useState(isLocked);
  const [markedAsNSFW, setMarkedAsNSFW] = useState(isNSFW);
  const [markedAsSpoiler, setMarkedAsSpoiler] = useState(isSpoiled);
  const [isRemoved, setIsRemoved] = useState(isPostRemoved);
  const [isSpammed, setIsSpammed] = useState(isPostSpammed);
  const [openFlairDialog, setOpenFlairDialog] = useState(false);
  const [hidePostState, setHidePostState] = useState(false);

  /* This function shows the dropdown for more interactions on the post */
  const handleClickMoreInteractions = () => {
    // showing the dropdown
    document
      .getElementById(`interactions-dropdown-${postId}`)
      .classList.toggle('is-visible');

    // hiding the other dropdown
    document
      .getElementById(`post-options-${postId}`)
      .classList.remove('is-visible');
  };

  /* This function shows the dropdown for the post options */
  const handleClickOnPostOptions = () => {
    // showing the dropdown
    document
      .getElementById(`post-options-${postId}`)
      .classList.toggle('is-visible');
    // hiding the other dropdown
    document
      .getElementById(`interactions-dropdown-${postId}`)
      .classList.remove('is-visible');
  };

  const handleHideButton = () => {
    if (hidePostState) {
      setHidePostState(false);
      unHidePost({ id: postId });
    } else {
      setHidePostState(true);
      hidePost({ id: postId });
    }
  };

  const handleLockComments = () => {
    if (!lockComments) {
      setLockComments(true);
      setLocked(true);
      const info = { request: { is_locked: true }, id: postId };
      lockPost(info);
    } else {
      setLockComments(false);
      setLocked(false);
      const info = { request: { is_locked: false }, id: postId };
      unLockPost(info);
    }
  };

  const handleMarkAsNSFW = () => {
    if (!markedAsNSFW) {
      setMarkedAsNSFW(true);
      setNsfw(true);
      markPostAsNSFW({ id: postId });
    } else {
      setMarkedAsNSFW(false);
      setNsfw(false);
      unMarkPostAsNSFW({ id: postId });
    }
  };

  const handleOpenFlairDialog = () => {
    setOpenFlairDialog(true);
  };

  const handleCloseFlairDialog = () => {
    setOpenFlairDialog(false);
  };

  // Returning the result
  return (
    <div
      className="post-interactions"
      data-testid="test-post-interactions"
    >
      <div className="post-interaction-content">
        {/* Add removal reason card  */}
        <FlairDialog
          open={openFlairDialog}
          handleClose={handleCloseFlairDialog}
          postId={postId}
          subredditName="testing"
        />

        {whichQueue === 'unmoderated' ? (
          <>
            {/* approve  */}
            {!isApproved ? (
              <a
                className="post-approve"
                onClick={() =>
                  handleApproveButton(
                    postId,
                    setIsApproved,
                    setIsRemoved,
                    setIsSpammed
                  )
                }
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <AiOutlineCheck
                  fontSize="20px"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span> Approve</span>
              </a>
            ) : (
              <a
                className="post-approve"
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem',
                  color: '#19ff00',
                  cursor: 'now-allowed'
                }}
              >
                <AiOutlineCheck
                  fontSize="20px"
                  style={{
                    marginRight: '5px',
                    cursor: 'now-allowed'
                  }}
                />
                <span> Approved</span>
              </a>
            )}

            {/* remove  */}
            {!isRemoved && !isSpammed ? (
              <a
                className="post-approve"
                onClick={() =>
                  handleRemoveButton(
                    postId,
                    setIsApproved,
                    setIsRemoved,
                    setIsSpammed
                  )
                }
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <CiCircleRemove
                  fontSize="20px"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span> Remove</span>
              </a>
            ) : (
              <a
                className="post-approve"
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem',
                  color: 'red'
                }}
              >
                <CiCircleRemove
                  fontSize="20px"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span> Removed</span>
              </a>
            )}
          </>
        ) : null}

        {whichQueue === 'spam' ? (
          <>
            {/* approve  */}
            {isSpammed || isRemoved ? (
              <a
                className="post-approve"
                onClick={() =>
                  handleApproveButton(
                    postId,
                    setIsApproved,
                    setIsRemoved,
                    setIsSpammed
                  )
                }
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <AiOutlineCheck
                  fontSize="20px"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span> Approve</span>
              </a>
            ) : null}

            {/* remove  */}
            {isApproved ? (
              <a
                className="post-approve"
                onClick={() =>
                  handleRemoveButton(
                    postId,
                    setIsApproved,
                    setIsRemoved,
                    setIsSpammed
                  )
                }
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <CiCircleRemove
                  fontSize="20px"
                  style={{ marginRight: '5px' }}
                />
                <span> Remove</span>
              </a>
            ) : null}
          </>
        ) : null}

        {whichQueue === 'edited' ? (
          <>
            {/* approve  */}
            {isRemoved || isSpammed ? (
              <a
                className="post-approve"
                onClick={() => handleApproveButton(postId)}
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <AiOutlineCheck
                  fontSize="20px"
                  style={{
                    marginRight: '5px'
                  }}
                />
                <span> Approve</span>
              </a>
            ) : null}

            {/* remove  */}
            {isApproved ? (
              <a
                className="post-approve"
                onClick={() => handleRemoveButton(postId)}
                style={{
                  paddingTop: '.7rem',
                  paddingBottom: '.7rem'
                }}
              >
                <CiCircleRemove
                  fontSize="20px"
                  style={{ marginRight: '5px' }}
                />
                <span> Remove</span>
              </a>
            ) : null}
          </>
        ) : null}

        {/* flair  */}
        {!showComments ? (
          <a
            className="post-flair"
            onClick={handleOpenFlairDialog}
            style={{
              paddingTop: '.7rem',
              paddingBottom: '.7rem'
            }}
          >
            <AiOutlineTag
              fontSize="20px"
              style={{
                marginRight: '5px'
              }}
            />
            <span> Flair</span>
          </a>
        ) : null}

        {/* other interactions  */}
        <a
          className="post-more-interactions"
          data-testid="test-post-more-interactions"
        >
          <a onClick={handleClickMoreInteractions}>
            <BsThreeDots
              fontSize="18px"
              color="#949494"
            />
            <div
              className="interactions-dropdown"
              id={`interactions-dropdown-${postId}`}
              data-testid="test-2-interactions-dropdown"
            >
              {/* mark as spam  */}
              <div
                className="drop-down-item"
                onClick={handleSpamButton}
              >
                {isApproved ? (
                  <a onClick={() => handleSpamButton(postId)}>
                    <RiSpam3Line fontSize="20px" />
                    <span> Remove As spam </span>
                  </a>
                ) : null}
              </div>

              {/* lock thread  */}
              {showComments ? (
                <div
                  className="drop-down-item"
                  onClick={handleLockComments}
                >
                  <a>
                    {lockThread ? (
                      <>
                        <AiFillUnlock fontSize="20px" />
                        <span> Unlock Thread</span>
                      </>
                    ) : (
                      <>
                        <AiFillLock fontSize="20px" />
                        <span> Lock Thread</span>
                      </>
                    )}
                  </a>
                </div>
              ) : (
                /* lock comment  */
                <div
                  className="drop-down-item"
                  onClick={handleLockComments}
                >
                  <a>
                    {lockComments ? (
                      <>
                        <AiFillUnlock fontSize="20px" />
                        <span> Unlock Comments</span>
                      </>
                    ) : (
                      <>
                        <AiFillLock fontSize="20px" />
                        <span> Lock Comments</span>
                      </>
                    )}
                  </a>
                </div>
              )}

              {/* mark as nsfw  */}
              {!showComments ? (
                <div
                  className="drop-down-item"
                  onClick={handleMarkAsNSFW}
                >
                  <a>
                    {markedAsNSFW ? (
                      <>
                        <AiFillWarning fontSize="20px" />
                        <span> un-Mark As NSFW </span>
                      </>
                    ) : (
                      <>
                        <AiOutlineWarning fontSize="20px" />
                        <span> Mark As NSFW </span>
                      </>
                    )}
                  </a>
                </div>
              ) : null}

              {/* hide  */}
              {!showComments ? (
                <div
                  className="post-hide"
                  onClick={handleHideButton}
                >
                  {hidePostState ? (
                    <a>
                      <BiHide fontSize="25px" />
                      <span> un-Hide</span>
                    </a>
                  ) : (
                    <a>
                      <BiHide fontSize="25px" />
                      <span> hide</span>
                    </a>
                  )}
                </div>
              ) : null}

              {/* share  */}
              <div
                className="post-hide"
                onClick={handleHideButton}
              >
                <a>
                  <BsShareFill fontSize="20px" />
                  <span> share</span>
                </a>
              </div>
            </div>
          </a>
        </a>
      </div>
    </div>
  );
}

export default memo(PostInteractions);
