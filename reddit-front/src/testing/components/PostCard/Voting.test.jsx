import { render, screen } from '@testing-library/react';
import Voting from '../../../components/PostCard/Voting/Voting';

// Testing the rendering of the voting part
test('Voting component should be rendered', () => {
  render(<Voting />);
  const element = screen.getByTestId(/test-voting-container/i);
  expect(element).toBeInTheDocument();
});

// Testing the up vote button
test('Testing up vote', () => {
  render(<Voting />);
  const element = screen.getByTestId(/test-up-vote/i);
  expect(element).toBeInTheDocument();

  const upVoteButton = screen.getByTestId(/test-up-voting-button/i);
  expect(upVoteButton).toBeInTheDocument();

  //   const votesCounter = screen.getByTestId(/test-votes-count/i);
  //   expect(votesCounter).toBeInTheDocument();

  //   fireEvent.change(votesCounter, { target: { innerHTML: 7 } });

  //   // Firing the action of up vote button
  //   fireEvent.click(upVoteButton);
  //   expect(votesCounter.innerHTML).toEqual(8);
});

// Testing the down vote button
test('Testing down vote', () => {
  render(<Voting />);
  const element = screen.getByTestId(/test-down-vote/i);
  expect(element).toBeInTheDocument();

  const downVoteButton = screen.getByTestId(/test-down-voting-button/i);
  expect(downVoteButton).toBeInTheDocument();
});
