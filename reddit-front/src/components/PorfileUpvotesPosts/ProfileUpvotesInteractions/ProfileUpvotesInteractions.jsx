/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './ProfileUpvotesInteractions.css';
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
import { divideBigNumber } from '../../../utilities/Helpers';
import {
  removePost,
  hidePost,
  unHidePost,
  savePost,
  unSavePost,
  lockPost,
  unlockPost,
  unMarkPostAsNSFW,
  markPostAsNSFW,
  spamPost,
  sendPostReplies,
  votePost,
  setSuggestedSort,
  spoilPost,
  unSpoilPost
} from '../../../redux/slices/PostInteractionsSlice';

/**
 * @typedef PropType
 * @property {function} setHidePost
 * @property {number} commentsCount
 * @property {number} votesCount
 * @property {number} postId
 * @property {bool} isCommunityPost
 * @property {function} setModAction
 * @property {bool} isModeratorMode
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
  isCommunityPost,
  setModAction,
  isModeratorMode
}) {
  const dispatch = useDispatch();
  // states: false -> normal(unsaved), true  -> saved
  const [saveState, setSaveState] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isSpammed, setIsSpammed] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [distinguishAsMode, setDistinguishAsMode] = useState(false);
  const [lockComments, setLockComments] = useState(false);
  const [markedAsOC, setMarkedAsOC] = useState(false);
  const [markedAsNSFW, setMarkedAsNSFW] = useState(false);
  const [markedAsSpoiler, setMarkedAsSpoiler] = useState(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  // Handler Methods
  const handleSavePost = () => {
    if (!saveState) {
      setSaveState(true);
      dispatch(savePost(postId));
    } else {
      setSaveState(false);
      dispatch(unSavePost(postId));
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
    dispatch(hidePost(postId));
  };

  const handleApproveButton = (id) => {
    // cancelling spamming
    setIsSpammed(false);
    document.getElementById(`post-spam-${id}`).style.color = '#949494';
    document.getElementById(`post-spam-2-${id}`).style.color = '#949494';
    // dispatch(unspamPost(postId));

    // cancelling removing
    setIsRemoved(false);
    document.getElementById(`post-remove-${id}`).style.color = '#949494';
    document.getElementById(`post-remove-2-${id}`).style.color = '#949494';
    // dispatch(unremovePost(postId));

    // approving post
    setIsApproved(true);
    document.getElementById(`post-approve-${id}`).style.color = '#94E044';
    document.getElementById(`post-approve-2-${id}`).style.color = '#94E044';
    setModAction(1);
    // dispatch(approvePost(postId));

    // console.log('inside');
  };

  const handleSpamButton = (id) => {
    // cancelling approving
    setIsApproved(false);
    document.getElementById(`post-approve-${id}`).style.color = '#949494';
    document.getElementById(`post-approve-2-${id}`).style.color = '#949494';
    // dispatch(unapprovePost(id));

    // cancelling removing
    setIsRemoved(false);
    document.getElementById(`post-remove-${id}`).style.color = '#949494';
    document.getElementById(`post-remove-2-${id}`).style.color = '#949494';
    // dispatch(unremovePost(id));

    // spamming post
    setIsSpammed(true);
    document.getElementById(`post-spam-${id}`).style.color = 'red';
    document.getElementById(`post-spam-2-${id}`).style.color = 'red';
    setModAction(2);
    // dispatch(spamPost(id));
  };

  const handleRemoveButton = (id) => {
    // cancelling spamming
    setIsSpammed(false);
    document.getElementById(`post-spam-${id}`).style.color = '#949494';
    document.getElementById(`post-spam-2-${id}`).style.color = '#949494';
    // dispatch(unspamPost(id));

    // cancelling approving
    setIsApproved(false);
    document.getElementById(`post-approve-${id}`).style.color = '#949494';
    document.getElementById(`post-approve-2-${id}`).style.color = '#949494';
    // dispatch(unremovePost(id));

    // removing post
    setIsRemoved(true);
    document.getElementById(`post-remove-${id}`).style.color = 'red';
    document.getElementById(`post-remove-2-${id}`).style.color = 'red';
    setModAction(3);
    // dispatch(removePost(id));
  };

  const handleDeletePost = () => {
    setOpenConfirmationDialog(false);
    // dispatch(deletePost(postId));
  };

  const handleStickyButton = () => {
    if (!isSticky) {
      setIsSticky(true);
      // dispatch(stickyPost(id));
    } else {
      setIsSticky(false);
      // dispatch(unstickyPost(id));
    }
  };

  const handleDistinguishAsMod = () => {
    if (!distinguishAsMode) {
      setDistinguishAsMode(true);
      setDistinguishAsMode(!distinguishAsMode);
    } else {
      setDistinguishAsMode(false);
      // setDistinguishAsMode(!undistinguishAsMode);
    }
  };

  const handleLockComments = () => {
    if (!lockComments) {
      setLockComments(true);
      // dispatch(lockPost(postId));
    } else {
      setLockComments(false);
      // dispatch(unlockPost(postId));
    }
  };

  const handleMarkAsOCButton = () => {
    if (!markedAsOC) {
      setMarkedAsOC(true);
      // dispatch(markPostAsOC(postId));
    } else {
      setMarkedAsOC(false);
      // dispatch(unmarkPostAsOC(postId));
    }
  };

  const handleMarkAsNSFW = () => {
    if (!markedAsNSFW) {
      setMarkedAsNSFW(true);
      // dispatch(markPostAsNSFW(postId));
    } else {
      setMarkedAsNSFW(false);
      // dispatch(unmarkPostAsNSFW(postId));
    }
  };

  const handleMarkAsSpoiler = () => {
    if (!markedAsSpoiler) {
      setMarkedAsSpoiler(true);
      // dispatch(spoilPost(postId));
    } else {
      setMarkedAsSpoiler(false);
      // dispatch(unSpoilPost(postId));
    }
  };

  const getCommentsCount = function () {
    if (!isCommunityPost) {
      return commentsCount ? commentsCount.concat(' Comments') : 'No Comments';
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
          divideBigNumber={divideBigNumber}
          postId={postId}
        />
        {/* comments  */}
        <a className="post-comment">
          <GoComment fontSize="18px" />
          <span className="comments-count">{getCommentsCount()}</span>
        </a>
        {/* share  */}
        <a
          className="post-share"
          data-testid="test-share-post"
        >
          <TbArrowsCross fontSize="25px" />
          <span> cross post</span>
        </a>
        {/* save / unsave  */}
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
        {isCommunityPost && isModeratorMode ? (
          <>
            {/* // approve */}
            <a
              className="post-approve post-interaction-button"
              id={`post-approve-${postId}`}
              onClick={() => handleApproveButton(postId)}
            >
              <TiTickOutline fontSize="25px" />
              <span> {isApproved ? 'Approved' : 'Approve'}</span>
            </a>
            {/* // remove */}
            <a
              className="post-remove post-interaction-button"
              id={`post-remove-${postId}`}
              onClick={() => handleRemoveButton(postId)}
            >
              <CiNoWaitingSign fontSize="25px" />
              <span> {isRemoved ? 'Removed' : 'Remove'}</span>
            </a>
            {/* // spam */}
            <a
              className="post-spam post-interaction-button"
              id={`post-spam-${postId}`}
              onClick={() => handleSpamButton(postId)}
            >
              <RiSpamLine fontSize="25px" />
              <span> {isSpammed ? 'Spammed' : 'Spam'}</span>
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
                {/* sticky post  */}
                <div
                  className="drop-down-item"
                  onClick={handleStickyButton}
                >
                  <a>
                    {isSticky ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span> Sticky Post</span>
                  </a>
                </div>

                {/* distinguish as mod  */}
                <div
                  className="drop-down-item"
                  onClick={handleDistinguishAsMod}
                >
                  <a>
                    {distinguishAsMode ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span> Distinguish As Mod</span>
                  </a>
                </div>

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

                {/* mark as oc */}
                <div
                  className="drop-down-item"
                  onClick={handleMarkAsOCButton}
                >
                  <a>
                    {markedAsOC ? (
                      <ImCheckboxChecked fontSize="16px" />
                    ) : (
                      <GrCheckbox fontSize="16px" />
                    )}
                    <span> Mark As OC</span>
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
              </div>
            </button>
          </div>
        ) : null}

        {/* other interactions  */}
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
              {/* hide  */}
              <div
                className="post-hide"
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
                  {/*  Add To Collection */}
                  <div className="drop-down-item">
                    <a>
                      <BiAddToQueue fontSize="25px" />
                      <span> add to collection</span>
                    </a>
                  </div>
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PostInteractions);
