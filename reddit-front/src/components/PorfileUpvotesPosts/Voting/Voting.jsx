/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './Voting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { divideBigNumber } from '../../../utilities/Helpers';
import {
  unVoteGo,
  downVoteGo,
  upVoteGo
} from '../../../services/requests/ProfilePosts';

/**
 * @typedef PropType
 * @property {number} votesCount
 * @property {number} postId
 * @property {number} currentVotingState  // 0 : not voted, 1 -> up, -1 -> down
 * @property {bool} isHomePagePost
 */

/**
 * This Component for the post's voting section.
 * It contains two methods for handling the up & down voting.
 *
 */

function Voting({
  votesCount,
  postId,
  currentVotingState,
  // isUpvotedd,
  // isDownvotedd
  voteType
}) {
  const [votesCountColor, setVotesCountColor] = useState('black');
  const [isUpVoted, setIsUpVoted] = useState(voteType === 'upvote');
  const [isDownVoted, setIsDownVoted] = useState(voteType === 'downvote');
  const [votes, setVotes] = useState(votesCount);
  let upVote;
  let downVote;
  const handleUpVoting = () => {
    if (isUpVoted) {
      setVotes(votesCount - 1);
      const info = {
        id: postId
      };
      setVotesCountColor('black');
      unVoteGo(info);
      setIsUpVoted(false);
    } else {
      const info = {
        id: postId
      };
      upVoteGo(info);
      setIsUpVoted(true);
      setVotesCountColor('#ff6830');
      if (isDownVoted) {
        setIsDownVoted(false);
        setVotes(votesCount + 2);
      } else {
        setVotes(votesCount + 1);
      }
    }
  };
  const handleDownVoting = () => {
    if (isDownVoted) {
      setVotesCountColor('black');
      setVotes(votesCount + 1);
      const info = {
        id: postId
      };
      unVoteGo(info);
      setIsDownVoted(false);
    } else {
      const info = {
        id: postId
      };
      downVoteGo(info);
      setIsDownVoted(true);
      setVotesCountColor('#0272c4');
      if (isUpVoted) {
        setIsUpVoted(false);
        setVotes(votesCount - 2);
      } else {
        setVotes(votesCount - 1);
      }
    }
  };
  // Returning the result
  return (
    <div
      className="voting-container"
      data-testid="test-voting-container"
    >
      <div className="voting-content">
        <span
          className="up-vote-icon"
          data-testid="test-up-vote"
        >
          <BiUpvote
            color={isUpVoted ? '#ff6830' : '#c0c2c4'}
            fontSize="24"
            onClick={handleUpVoting}
            data-testid="test-up-voting-button"
          />
        </span>
        <div
          className="votes-count"
          data-testid="test-votes-count"
          style={{ color: votesCountColor }}
        >
          {votes > 0 ? divideBigNumber(votes) : 'Vote'}
          {/* {divideBigNumber(votes)} */}
        </div>
        <span
          className="down-vote-icon"
          data-testid="test-down-vote"
        >
          <BiDownvote
            color={isDownVoted ? '#0272c4' : '#c0c2c4'}
            fontSize="24"
            onClick={handleDownVoting}
            data-testid="test-down-voting-button"
          />
        </span>
      </div>
    </div>
  );
}

export default memo(Voting);
