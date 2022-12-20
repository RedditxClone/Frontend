/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import './Voting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { divideBigNumber } from '../../../../utilities/Helpers';
import { votePost } from '../../../../services/requests/Post';

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

function Voting({ votesCount, postId, currentVotingState, isHomePagePost }) {
  const [votesCountColor, setVotesCountColor] = useState('black');
  const [isUpVoted, setIsUpVoted] = useState(currentVotingState === 1);
  const [isDownVoted, setIsDownVoted] = useState(currentVotingState === -1);
  const [votes, setVotes] = useState(votesCount);

  const handleUpVoting = () => {
    votesCount = votes;
    if (isUpVoted) {
      setVotes(votesCount - 1);
      votesCount -= 1;
      setIsUpVoted(false);
      setIsDownVoted(false);
      currentVotingState = 0;
      setVotesCountColor('black');
    } else if (isDownVoted) {
      setVotes(votesCount + 2);
      votesCount += 2;
      setIsDownVoted(false);
      setIsUpVoted(true);
      currentVotingState = 1;
      setVotesCountColor('#ff6830');
    } else {
      setVotes(votesCount + 1);
      votesCount += 1;
      setIsUpVoted(true);
      setIsDownVoted(false);
      currentVotingState = 1;
      setVotesCountColor('#ff6830');
    }
    const info = { request: { votes: votesCount }, id: postId };
    votePost(info);
  };

  const handleDownVoting = () => {
    votesCount = votes;
    if (isUpVoted) {
      setVotes(votesCount - 2);
      votesCount -= 2;
      setIsUpVoted(false);
      setIsDownVoted(true);
      currentVotingState = -1;
      setVotesCountColor('#0272c4');
    } else if (isDownVoted) {
      setVotes(votesCount + 1);
      votesCount += 1;
      setIsDownVoted(false);
      setIsUpVoted(false);
      currentVotingState = 0;
      setVotesCountColor('black');
    } else {
      setVotes(votesCount - 1);
      votesCount -= 1;
      setIsUpVoted(false);
      setIsDownVoted(true);
      currentVotingState = -1;
      setVotesCountColor('#0272c4');
    }

    const info = { request: { votes: votesCount }, id: postId };
    votePost(info);
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
          {isHomePagePost
            ? votes > 0
              ? divideBigNumber(votes)
              : 'Vote'
            : null}
          {divideBigNumber(votes)}
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
