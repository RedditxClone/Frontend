/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SmallScreenVoting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { votePost } from '../../../../services/requests/Post';
import { divideBigNumber } from '../../../../utilities/Helpers';

/**
 * @typedef PropType
 * @property {number} votesCount
 * @property {number} postId
 * @property {number} currentVotingState  // 0 : not voted, 1 -> up, -1 -> down
 */

/**
 * This Component is as same as the Voting Component but for the small screens ( for responsive )
 * It contains two methods for handling the up & down voting.
 *
 */

export default function SmallScreenVoting({
  votesCount,
  postId,
  currentVotingState
}) {
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
    <div className="small-voting-container">
      <div className="small-voting-content">
        <span className="up-vote-icon">
          <BiUpvote
            color={isUpVoted ? '#ff6830' : '#c0c2c4'}
            fontSize="24"
            onClick={handleUpVoting}
          />
        </span>
        <span
          className="votes-count"
          style={{ color: votesCountColor }}
        >
          {votes > 0 ? divideBigNumber(votes) : 'Vote'}
        </span>
        <span className="down-vote-icon">
          <BiDownvote
            color={isDownVoted ? '#0272c4' : '#c0c2c4'}
            fontSize="24"
            onClick={handleDownVoting}
          />
        </span>
      </div>
    </div>
  );
}
