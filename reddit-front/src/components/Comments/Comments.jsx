/* eslint-disable no-unused-vars */
import './Comments.style.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { FaRegCommentAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '@mui/material';
import avatarImg from '../../assets/Images/avatar_default_5.png';
import CreatePostEditor from '../../pages/CreatePost/CreatePostEditor';

/**
 * this component represents comments
 */

export default function Comments() {
  const [replyContnet, setReplyContnet] = useState('');
  const [countVotes, setCountVotes] = useState();
  const [showReply, setShowReply] = useState(false);
  const handleClickReply = () => {
    setShowReply(!showReply);
  };
  const [save, setSave] = useState(false);
  const handleSave = () => {
    setSave(!save);
  };
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
    setFollow(!follow);
  };
  const [countUp, setCountUp] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const handleUpVote = () => {
    setCountUp(!countUp);
    if (countUp === true) {
      setCountVotes(countVotes + 1);
    } else {
      setCountVotes(countVotes - 1);
    }
  };
  const handleDownVote = () => {
    setCountDown(!countDown);
    if (countDown === true) {
      setCountVotes(countVotes - 1);
    } else {
      setCountVotes(countVotes + 1);
    }
  };
  const handleReply = () => {
    setShowReply(false);
  };
  const handleCloseReply = () => {
    setShowReply(false);
  };
  return (
    <div
      data-testid="comment-container"
      style={{
        backgroundColor: '#ffffff',
        paddingLeft: '12px',
        borderRadius: '5px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <img
            src={avatarImg}
            style={{ borderRadius: '4px' }}
            alt="avatar"
          />
        </div>
        <p style={{ marginLeft: '10px', fontSize: '13px' }}>karim</p>
        <p
          style={{
            marginLeft: '7px',
            fontSize: '13px',
            color: '#7c7c7c'
          }}
        >
          . 18 hr.ago
        </p>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <div>
          <p style={{ fontSize: '14px', marginLeft: '40px', marginTop: '3px' }}>
            Most people just naming clubs when I think the question was the best
            player of each position
          </p>
          <div
            style={{
              marginLeft: '38px',
              fontSize: '23px',
              color: '#7c7c7c',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {!countUp ? (
              <BiUpvote
                onClick={handleUpVote}
                className="span-hov"
                style={{ marginRight: '7px', cursor: 'pointer' }}
              />
            ) : (
              <BiUpvote
                onClick={handleUpVote}
                className="span-hov"
                style={{
                  marginRight: '7px',
                  cursor: 'pointer',
                  color: '#ff015b'
                }}
              />
            )}
            <span
              style={{
                fontSize: '14px',
                marginRight: '7px',
                color: 'black'
              }}
            >
              222
            </span>
            {!countDown ? (
              <BiDownvote
                onClick={handleDownVote}
                className="span-vot"
                style={{ marginRight: '8px', cursor: 'pointer' }}
              />
            ) : (
              <BiDownvote
                onClick={handleDownVote}
                className="span-vot"
                style={{
                  marginRight: '8px',
                  cursor: 'pointer',
                  color: '#02b7f2'
                }}
              />
            )}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px',
                marginRight: '7px'
              }}
            >
              <span
                className="span-vot"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px',
                  cursor: 'pointer'
                }}
                onClick={handleClickReply}
              >
                <FaRegCommentAlt
                  style={{ fontSize: '22px', marginRight: '6px' }}
                />
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '-3px'
                  }}
                >
                  Reply
                </span>
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '-5px'
              }}
            >
              {!save ? (
                <span
                  onClick={handleSave}
                  style={{
                    fontSize: '14px',
                    marginRight: '8px',
                    padding: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  className="span-hov"
                >
                  Save
                </span>
              ) : (
                <span
                  onClick={handleSave}
                  style={{
                    fontSize: '14px',
                    marginRight: '8px',
                    padding: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  className="span-hov"
                >
                  UnSave
                </span>
              )}
              {!follow ? (
                <span
                  onClick={handleFollow}
                  style={{
                    fontSize: '14px',
                    marginRight: '8px',
                    padding: '5px',
                    fontWeight: 'bold',
                    marginBottom: '-2px',
                    cursor: 'pointer'
                  }}
                  className="span-hov"
                >
                  Follow
                </span>
              ) : (
                <span
                  onClick={handleFollow}
                  style={{
                    fontSize: '14px',
                    marginRight: '8px',
                    padding: '5px',
                    fontWeight: 'bold',
                    marginBottom: '-2px',
                    cursor: 'pointer'
                  }}
                  className="span-hov"
                >
                  Followed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {showReply ? (
        <div
          style={{
            paddingBottom: '35px',
            paddingRight: '70px',
            marginLeft: '74px'
          }}
        >
          <CreatePostEditor
            setPostContent={setReplyContnet}
            postContent={replyContnet}
          />
          <Button
            style={{ marginLeft: '503px', marginTop: '-44px' }}
            variant="contained"
            onClick={handleReply}
          >
            Reply
          </Button>
          <Button
            style={{ marginLeft: '430px', marginTop: '-68px' }}
            variant="contained"
            onClick={handleCloseReply}
          >
            Cancle
          </Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
