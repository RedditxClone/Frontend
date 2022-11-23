/* eslint-disable react/prop-types */
import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import './Voting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { divideBigNumber } from '../../../utilities/Helpers';
import { votePost } from '../../../redux/slices/PostInteractionsSlice';

/**
 * @typedef PropType
 * @property {number} votesCount
 * @property {function} divideBigNumber
 */

/**
 * This Component for the post's voting section.
 * It contains two methods for handling the up & down voting.
 *
 */

function Voting({ votesCount, postId }) {
  const [votingCounter, setVotingCounter] = useState(votesCount);
  const [votesCountColor, setVotesCountColor] = useState('black');
  // voting states : 0 -> not voted, 1 -> up, -1 -> down
  const [votingCurrentState, setVotingCurrentState] = useState(0);
  const [votingCurrentColors, setVotingCurrentColors] = useState({
    up: '#c0c2c4',
    down: '#c0c2c4'
  });
  const dispatch = useDispatch();

  const handleUpVoting = () => {
    switch (votingCurrentState) {
      case 0:
        setVotingCounter(votingCounter + 1);
        setVotingCurrentState(1);
        setVotingCurrentColors({
          up: '#ff6830',
          down: votingCurrentColors.down
        });
        setVotesCountColor('#ff6830');
        break;
      case 1:
        setVotingCounter(votingCounter - 1);
        setVotingCurrentState(0);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#c0c2c4'
        });
        setVotesCountColor('black');
        break;
      case -1:
        setVotingCounter(votingCounter + 2);
        setVotingCurrentState(1);
        setVotingCurrentColors({
          up: '#ff6830',
          down: '#c0c2c4'
        });
        setVotesCountColor('#ff6830');
        break;
      default:
        break;
    }

    // dispatching the action
    const info = { body: { dir: votingCounter }, id: postId };
    dispatch(votePost(info));
  };

  const handleDownVoting = () => {
    switch (votingCurrentState) {
      case 0:
        setVotingCounter(votingCounter - 1);
        setVotingCurrentState(-1);
        setVotingCurrentColors({
          up: votingCurrentColors.up,
          down: '#0272c4'
        });
        setVotesCountColor('#0272c4');
        break;
      case 1:
        setVotingCounter(votingCounter - 2);
        setVotingCurrentState(-1);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#0272c4'
        });
        setVotesCountColor('#0272c4');
        break;
      case -1:
        setVotingCounter(votingCounter + 1);
        setVotingCurrentState(0);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#c0c2c4'
        });
        setVotesCountColor('black');
        break;
      default:
        break;
    }

    // dispatching the action
    const info = { body: { dir: votingCounter }, id: postId };
    dispatch(votePost(info));
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
            color={votingCurrentColors.up}
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
          {votingCounter > 0 ? divideBigNumber(votingCounter) : 'Vote'}
        </div>
        <span
          className="down-vote-icon"
          data-testid="test-down-vote"
        >
          <BiDownvote
            color={votingCurrentColors.down}
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
