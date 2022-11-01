/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SmallScreenVoting.css';
import { BiUpvote, BiDownvote } from 'react-icons/bi';

/**
 * @typedef PropType
 * @property {number} votesCount
 * @property {function} divideBigNumber
 */

export default function SmallScreenVoting({ votesCount, divideBigNumber }) {
  const [votingCounter, setVotingCounter] = useState(votesCount);
  // voting status : 0 -> no voted, 1 -> up, -1 -> down
  const [votingCurrentState, setVotingCurrentState] = useState(0);
  const [votingCurrentColors, setVotingCurrentColors] = useState({
    up: '#c0c2c4',
    down: '#c0c2c4'
  });

  const handleUpVoting = () => {
    switch (votingCurrentState) {
      case 0:
        setVotingCounter(votingCounter + 1);
        setVotingCurrentState(1);
        setVotingCurrentColors({
          up: '#ff6830',
          down: votingCurrentColors.down
        });
        break;
      case 1:
        setVotingCounter(votingCounter - 1);
        setVotingCurrentState(0);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#c0c2c4'
        });
        break;
      case -1:
        setVotingCounter(votingCounter + 2);
        setVotingCurrentState(1);
        setVotingCurrentColors({
          up: '#ff6830',
          down: '#c0c2c4'
        });
        break;
      default:
        break;
    }
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
        break;
      case 1:
        setVotingCounter(votingCounter - 2);
        setVotingCurrentState(-1);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#0272c4'
        });
        break;
      case -1:
        setVotingCounter(votingCounter + 1);
        setVotingCurrentState(0);
        setVotingCurrentColors({
          up: '#c0c2c4',
          down: '#c0c2c4'
        });
        break;
      default:
        break;
    }
  };

  // Returning the result
  return (
    <div className="small-voting-container">
      <div className="small-voting-content">
        <span className="up-vote-icon">
          <BiUpvote
            color={votingCurrentColors.up}
            fontSize="24"
            onClick={handleUpVoting}
          />
        </span>
        <div className="votes-count">
          {votingCounter > 0 ? divideBigNumber(votingCounter) : 'Vote'}
        </div>
        <span className="down-vote-icon">
          <BiDownvote
            color={votingCurrentColors.down}
            fontSize="24"
            onClick={handleDownVoting}
          />
        </span>
      </div>
    </div>
  );
}
