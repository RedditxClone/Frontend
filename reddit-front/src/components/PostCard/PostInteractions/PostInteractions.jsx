/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './PostInteractions.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { GoComment } from 'react-icons/go';
import { ImCheckboxChecked } from 'react-icons/im';
import { VscEdit } from 'react-icons/vsc';
import { AiOutlineDelete } from 'react-icons/ai';
import { RiSpamLine } from 'react-icons/ri';
import { TiTickOutline } from 'react-icons/ti';
import { CiNoWaitingSign } from 'react-icons/ci';
import { GrCheckbox } from 'react-icons/gr';
import { FiShield } from 'react-icons/fi';
import { BsThreeDots, BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { BiHide, BiAddToQueue } from 'react-icons/bi';
import { TbArrowsCross } from 'react-icons/tb';
import SmallScreenVoting from '../Voting/SmallScreenVoting/SmallScreenVoting';
import {
  approvePost,
  unApprovePost,
  deletePost,
  removePost,
  unRemovePost,
  hidePost,
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
} from '../../../services/requests/Post';

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
  setHidePost,
  commentsCount,
  votesCount,
  postId,
  communityName,
  isCommunityPost,
  setModAction,
  setNsfw,
  setLocked,
  isModeratorMode,
  isSaved,
  isLocked,
  isPostApproved,
  isNSFW,
  isSpoiled,
  approved,
  removed,
  spammed,
  replyNotifications,
  canBeSpoiled,
  currentVotingState
}) {
  const [saveState, setSaveState] = useState(isSaved);
  const [isApproved, setIsApproved] = useState(approved);
  const [replyNotificationsState, setReplyNotificationsState] =
    useState(replyNotifications);

  const [lockComments, setLockComments] = useState(isLocked);
  const [markedAsNSFW, setMarkedAsNSFW] = useState(isNSFW);
  const [markedAsSpoiler, setMarkedAsSpoiler] = useState(isSpoiled);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [isRemoved, setIsRemoved] = useState(removed);
  const [isSpammed, setIsSpammed] = useState(spammed);

  // Handler Methods
  const handleSavePost = () => {
    if (!saveState) {
      setSaveState(true);
      const info = { id: postId };
      savePost(info);
    } else {
      setSaveState(false);
      const info = { id: postId };
      unSavePost(info);
    }
  };

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
    setHidePost(true);
    hidePost({ id: postId });
  };

  const handleApproveButton = (id) => {
    let info = {};
    // cancelling spamming
    setIsSpammed(false);
    document.getElementById(`post-spam-${id}`).style.color = '#949494';
    document.getElementById(`post-spam-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unSpamPost(info);

    // cancelling removing
    setIsRemoved(false);
    document.getElementById(`post-remove-${id}`).style.color = '#949494';
    document.getElementById(`post-remove-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unRemovePost(info);

    // approving post
    setIsApproved(true);
    document.getElementById(`post-approve-${id}`).style.color = '#94E044';
    document.getElementById(`post-approve-2-${id}`).style.color = '#94E044';
    setModAction(1);
    info = { id: postId };
    approvePost(info);
  };

  const handleSpamButton = (id) => {
    let info = {};
    // cancelling approving
    setIsApproved(false);
    document.getElementById(`post-approve-${id}`).style.color = '#949494';
    document.getElementById(`post-approve-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unApprovePost(info);

    // cancelling removing
    setIsRemoved(false);
    document.getElementById(`post-remove-${id}`).style.color = '#949494';
    document.getElementById(`post-remove-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unRemovePost(info);

    // spamming post
    setIsSpammed(true);
    document.getElementById(`post-spam-${id}`).style.color = 'red';
    document.getElementById(`post-spam-2-${id}`).style.color = 'red';
    setModAction(2);
    info = { id: postId };
    spamPost(info);
  };

  const handleRemoveButton = (id) => {
    let info = {};
    // cancelling spamming
    setIsSpammed(false);
    document.getElementById(`post-spam-${id}`).style.color = '#949494';
    document.getElementById(`post-spam-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unSpamPost(info);

    // cancelling approving
    setIsApproved(false);
    document.getElementById(`post-approve-${id}`).style.color = '#949494';
    document.getElementById(`post-approve-2-${id}`).style.color = '#949494';
    info = { id: postId };
    // unApprovePost(info);

    // removing post
    setIsRemoved(true);
    document.getElementById(`post-remove-${id}`).style.color = 'red';
    document.getElementById(`post-remove-2-${id}`).style.color = 'red';
    setModAction(3);
    info = { id: postId };
    removePost(info);
  };

  const handleDeletePost = () => {
    setOpenConfirmationDialog(false);
    const request = { id: postId };
    deletePost(request);

    // remove post from ui
    const postCard = document.getElementById(`post-${postId}`);
    if (postCard) postCard.style.display = 'none';
  };

  const handleLockComments = () => {
    if (!lockComments) {
      setLockComments(true);
      setLocked(true);
      const info = { id: postId };
      lockPost(info);
    } else {
      setLockComments(false);
      setLocked(false);
      const info = { id: postId };
      unLockPost(info);
    }
  };

  const handleMarkAsNSFW = () => {
    const nsfwFlair = document.getElementById(`post-nsfw-${postId}`);
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

  const getCommentsCount = () => {
    if (!isCommunityPost) {
      return commentsCount
        ? commentsCount.toString().concat(' Comments')
        : 'No Comments';
    }
    return commentsCount;
  };

  const handleOpenConfirmDialog = () => {
    handleClickMoreInteractions(); // to close the dropdown menu
    setOpenConfirmationDialog(true);
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirmationDialog(false);
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

  // Returning the result
  return (
    <div
      className="post-interactions"
      data-testid="test-post-interactions"
    >
      <div className="post-interaction-content">
        {/* voting for small screen  */}
        <SmallScreenVoting
          votesCount={votesCount}
          postId={postId}
          currentVotingState={currentVotingState}
        />
        {/* comments  */}
        <a
          className="interaction-item"
          href={`/r/${communityName}/posts/${postId}`}
        >
          <GoComment fontSize="18px" />
          <span
            className="interaction-text"
            style={{ marginLeft: '3px', marginBottom: '3px' }}
          >
            {getCommentsCount()}
          </span>
        </a>
        {/* share  */}
        <a
          className="interaction-item"
          data-testid="test-share-post"
        >
          <TbArrowsCross fontSize="25px" />
          <span className="interaction-text"> share</span>
        </a>
        {/* save / unsave  */}
        {!saveState ? (
          <a
            onClick={handleSavePost}
            className="interaction-item"
          >
            <BsBookmark fontSize="18px" />
            <span className="interaction-text"> save</span>
          </a>
        ) : (
          <a
            className="interaction-item"
            onClick={handleSavePost}
          >
            <BsFillBookmarkFill fontSize="18px" />
            <span className="interaction-text"> unsave</span>
          </a>
        )}
        {isCommunityPost && isModeratorMode ? (
          <>
            {/* // approve */}
            <a
              className="interaction-item"
              id={`post-approve-${postId}`}
              onClick={() => handleApproveButton(postId)}
            >
              <TiTickOutline fontSize="25px" />
              <span className="interaction-text">
                {' '}
                {isApproved ? 'Approved' : 'Approve'}
              </span>
            </a>
            {/* // remove */}
            <a
              className="interaction-item"
              id={`post-remove-${postId}`}
              onClick={() => handleRemoveButton(postId)}
            >
              <CiNoWaitingSign fontSize="25px" />
              <span className="interaction-text">
                {' '}
                {isRemoved ? 'Removed' : 'Remove'}
              </span>
            </a>
            {/* // spam */}
            <a
              className="interaction-item"
              id={`post-spam-${postId}`}
              onClick={() => handleSpamButton(postId)}
            >
              <RiSpamLine fontSize="25px" />
              <span className="interaction-text">
                {' '}
                {isSpammed ? 'Spammed' : 'Spam'}
              </span>
            </a>
          </>
        ) : null}

        {/* post options  */}
        {isCommunityPost && isModeratorMode ? (
          <div
            className="post-options post-more-interactions"
            data-testid="test-post-more-interactions"
          >
            <button
              type="button"
              onClick={handleClickOnPostOptions}
            >
              <FiShield
                fontSize="20px"
                color="#949494"
              />
              <div
                className="interactions-dropdown"
                id={`post-options-${postId}`}
                data-testid="test-2-interactions-dropdown"
              >
                {/* lock comment  */}
                <div
                  className="drop-down-item"
                  onClick={handleLockComments}
                >
                  <a>
                    {lockComments ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span> Lock Comments</span>
                  </a>
                </div>

                {/* mark as nsfw  */}
                <div
                  className="drop-down-item"
                  onClick={handleMarkAsNSFW}
                >
                  <a>
                    {markedAsNSFW ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span> Mark As NSFW </span>
                  </a>
                </div>

                {/* mark as spoiler  */}
                {canBeSpoiled ? (
                  <div
                    className="drop-down-item"
                    onClick={handleMarkAsSpoiler}
                  >
                    <a>
                      {markedAsSpoiler ? (
                        <ImCheckboxChecked fontSize="16px" />
                      ) : (
                        <GrCheckbox fontSize="16px" />
                      )}
                      <span> Mark As Spoiler</span>
                    </a>
                  </div>
                ) : null}

                {/*  Send Replies */}
                <div className="drop-down-item">
                  <a onClick={handleSendReplies}>
                    {replyNotificationsState ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span>Send Reply Notifications</span>
                  </a>
                </div>
              </div>
            </button>
          </div>
        ) : null}

        {/* other interactions  */}
        <div
          className="post-more-interactions interaction-item"
          data-testid="test-post-more-interactions"
        >
          <a
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
              {/* hide  */}
              <div
                className="drop-down-item"
                onClick={handleHideButton}
              >
                <a>
                  <BiHide fontSize="25px" />
                  <span> hide</span>
                </a>
              </div>

              {isCommunityPost && isModeratorMode ? (
                <>
                  {/* // edit */}
                  <div className="drop-down-item">
                    <a>
                      <VscEdit fontSize="25px" />
                      <span> Edit</span>
                    </a>
                  </div>
                  {/*  Delete */}
                  <div
                    className="drop-down-item"
                    onClick={handleOpenConfirmDialog}
                  >
                    <a>
                      <AiOutlineDelete fontSize="25px" />
                      <span> Delete</span>
                    </a>
                  </div>
                  <Dialog
                    open={openConfirmationDialog}
                    onClose={handleCloseConfirmDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle
                      id="alert-dialog-title"
                      sx={{ fontSize: '18px' }}
                    >
                      Delete post?
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        id="alert-dialog-description"
                        sx={{ fontSize: '15px' }}
                      >
                        Are you sure you want to delete your post? You can not
                        undo this.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseConfirmDialog}
                        sx={{
                          fontSize: '15px',
                          border: '1px solid #0079d3',
                          color: '#0079d3',
                          fontFamily: 'Noto Sans, Arial, sans serif',
                          fontWeight: '700',
                          lineHeight: '1.6rem',
                          letterSpacing: '1.5',
                          minHeight: '2.4rem',
                          minWidth: '4rem',
                          padding: '1rem 2rem',
                          marginLeft: '1rem',
                          alignItems: 'center',
                          borderRadius: '999.9rem',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          textTransform: 'Capitalize',
                          '&:hover': {
                            borderColor: '#7c7c7c',
                            color: '#7c7c7c'
                          }
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleDeletePost}
                        autoFocus
                        sx={{
                          fontSize: '15px',
                          border: 'none',
                          backgroundColor: '#0079d3',
                          color: 'white',
                          fontFamily: 'Noto Sans, Arial, sansserif',
                          fontWeight: '700',
                          lineHeight: '1.6rem',
                          letterSpacing: '1.5',
                          minHeight: '2.4rem',
                          minWidth: '4rem',
                          padding: '1rem 2rem',
                          marginLeft: '1rem',
                          alignItems: 'center',
                          borderRadius: '999.9rem',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                          textTransform: 'Capitalize',
                          '&:hover': {
                            backgroundColor: '#f75b5b'
                          }
                        }}
                      >
                        Delete Post
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              ) : null}
              {isCommunityPost && isModeratorMode ? (
                <>
                  {/* save/unsave for responsive design  */}
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
                  {/* share  */}
                  <a
                    className="post-share-2"
                    data-testid="test-share-post"
                  >
                    <TbArrowsCross fontSize="25px" />
                    <span> cross post</span>
                  </a>
                  {/* Remove  */}
                  <a
                    className="post-remove-2"
                    id={`post-remove-2-${postId}`}
                    onClick={() => handleRemoveButton(postId)}
                    data-testid="test-remove-post"
                  >
                    <CiNoWaitingSign fontSize="25px" />
                    <span> remove</span>
                  </a>
                  {/* approve  */}
                  <a
                    className="post-approve-2"
                    id={`post-approve-2-${postId}`}
                    onClick={() => handleApproveButton(postId)}
                    data-testid="test-remove-post"
                  >
                    <TiTickOutline fontSize="25px" />
                    <span> {isApproved ? 'Approved' : 'Approve'}</span>
                  </a>
                  {/* Spam  */}
                  <a
                    className="post-spam-2"
                    id={`post-spam-2-${postId}`}
                    onClick={() => handleSpamButton(postId)}
                    data-testid="test-spam-post"
                  >
                    <RiSpamLine fontSize="25px" />
                    <span> spam</span>
                  </a>
                </>
              ) : null}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(PostInteractions);
