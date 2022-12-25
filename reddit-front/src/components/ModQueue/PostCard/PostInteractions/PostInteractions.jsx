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
import { GoComment } from 'react-icons/go';
import { RiSpamLine, RiSpam3Fill, RiSpam3Line } from 'react-icons/ri';
import { TiTickOutline } from 'react-icons/ti';
import { GrCheckbox } from 'react-icons/gr';
import { FiShield } from 'react-icons/fi';
import {
  BsThreeDots,
  BsBookmark,
  BsFillBookmarkFill,
  BsShareFill
} from 'react-icons/bs';
import { BiHide } from 'react-icons/bi';
import { CiCircleRemove, CiNoWaitingSign } from 'react-icons/ci';
import {
  AiOutlineCheck,
  AiOutlineTag,
  AiFillUnlock,
  AiFillLock,
  AiFillWarning,
  AiOutlineWarning
} from 'react-icons/ai';
import {
  approvePost,
  unApprovePost,
  removePost,
  unRemovePost,
  hidePost,
  unHidePost,
  savePost,
  unSavePost,
  lockPost,
  unLockPost,
  unMarkPostAsNSFW,
  markPostAsNSFW,
  spamPost,
  unSpamPost,
  sendReplyNotifications,
  spoilPost,
  unSpoilPost
} from '../../../../services/requests/Post';
import FlairDialog from './FlairDialog';

/**
 * @typedef PropType
 * @property {function} setHidePost
 * @property {number} commentsCount
 * @property {number} votesCount
 * @property {number} postId
 * @property {bool} isCommunityPost
 * @property {function} setModAction
 * @property {function} setDistinguishAsMod
 * @property {function} setNsfw
 * @property {function} setLocked
 * @property {bool} isModeratorMode
 * @property {bool} isSaved
 * @property {bool} isLocked
 * @property {bool} replyNotifications
 * @property {bool} canBeSpoiled
 */

/**
 * This Component for the post's interaction (comment, share, hide, etc).
 * It just listens to the user interaction and handles it.
 *
 */
function PostInteractions({
  commentsCount,
  postId,
  isCommunityPost,
  setModAction,
  changeModAction,
  setNsfw,
  setLocked,
  isModeratorMode,
  isLocked,
  isPostApproved,
  isPostRemoved,
  isPostSpammed,
  isNSFW,
  isSpoiled,
  replyNotifications,
  canBeSpoiled,
  showComments,
  handleApproveButton,
  handleRemoveButton,
  handleSpamButton,
  whichQueue,
  subredditName,
  subredditId
}) {
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

  const handleStickyButton = () => {
    if (!isSticky) {
      setIsSticky(true);
      const request = { id: postId };
      stickyPost(request);
    } else {
      setIsSticky(false);
      const request = { id: postId };
      unStickyPost(request);
    }
  };

  const handleDistinguishAsMod = () => {
    if (!distinguishAsMode) {
      setDistinguishAsMode(true);
      setDistinguishPostAsMod(true);
      distinguishAsMod({ id: postId });
    } else {
      setDistinguishAsMode(false);
      setDistinguishPostAsMod(false);
      unDistinguishAsMod({ id: postId });
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

  const handleMarkAsSpoiler = () => {
    const img = document.querySelector(
      `.post-card .post-content .post-image-${postId}`
    );
    if (!markedAsSpoiler) {
      setMarkedAsSpoiler(true);
      spoilPost({ id: postId });
      img.style.filter = 'blur(60px)';
    } else {
      setMarkedAsSpoiler(false);
      unSpoilPost({ id: postId });
      img.style.filter = 'none';
    }
  };

  const getCommentsCount = function () {
    if (!isCommunityPost) {
      return commentsCount ? commentsCount.concat(' Comments') : 'No Comments';
    }
    return commentsCount;
  };

  const handleSendReplies = () => {
    if (!replyNotificationsState) {
      setReplyNotificationsState(true);
      const info = { request: { state: true }, id: postId };
      sendReplyNotifications(info);
    } else {
      setReplyNotificationsState(false);
      const info = { request: { state: false }, id: postId };
      sendReplyNotifications(info);
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
          subredditName={subredditName}
          subredditId={subredditId}
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
