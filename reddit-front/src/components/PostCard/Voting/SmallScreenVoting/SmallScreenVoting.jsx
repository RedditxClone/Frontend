/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SmallScreenVoting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { upVote, unVote, downVote } from '../../../../services/requests/Post';
import { divideBigNumber } from '../../../../utilities/Helpers';

/**
 * @typedef PropType
 * @property {number} votesCount
 * @property {string} postId
 * @property {string} currentVotingState
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
  // States
  const [votesCountColor, setVotesCountColor] = useState(
    currentVotingState === 'upvote'
      ? '#ff6830'
      : currentVotingState === 'downvote'
      ? '#0272c4'
      : 'black'
  );
  const [isUpVoted, setIsUpVoted] = useState(currentVotingState === 'upvote');
  const [isDownVoted, setIsDownVoted] = useState(
    currentVotingState === 'downvote'
  );
  const [votes, setVotes] = useState(votesCount);

  // Handlers
  const handleUpVoting = () => {
    votesCount = votes;
    if (isUpVoted) {
      setVotes(votesCount - 1);
      votesCount -= 1;
      setIsUpVoted(false);
      setIsDownVoted(false);
      currentVotingState = 0;
      setVotesCountColor('black');
      unVote({ id: postId });
    } else if (isDownVoted) {
      setVotes(votesCount + 2);
      votesCount += 2;
      setIsDownVoted(false);
      setIsUpVoted(true);
      currentVotingState = 1;
      setVotesCountColor('#ff6830');
      upVote({ id: postId });
    } else {
      setVotes(votesCount + 1);
      votesCount += 1;
      setIsUpVoted(true);
      setIsDownVoted(false);
      currentVotingState = 1;
      setVotesCountColor('#ff6830');
      downVote({ id: postId });
    }
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
      downVote({ id: postId });
    } else if (isDownVoted) {
      setVotes(votesCount + 1);
      votesCount += 1;
      setIsDownVoted(false);
      setIsUpVoted(false);
      currentVotingState = 0;
      setVotesCountColor('black');
      unVote({ id: postId });
    } else {
      setVotes(votesCount - 1);
      votesCount -= 1;
      setIsUpVoted(false);
      setIsDownVoted(true);
      currentVotingState = -1;
      setVotesCountColor('#0272c4');
      downVote({ id: postId });
    }
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
