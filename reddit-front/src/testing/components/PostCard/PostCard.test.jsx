/* eslint-disable react/jsx-boolean-value */
/* eslint-disable object-curly-newline */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import PostCard from '../../../components/PostCard/PostCard';
import { Store } from '../../../store/Store';

describe('Test for the Post Card', () => {
  const postData = {
    _id: '63a229fe80ac7641986108c5',
    votesCount: 5,
    userId: '638f37de31186b7fd21ba6aa',
    spammedBy: null,
    spammedAt: null,
    removedBy: null,
    removedAt: null,
    commentsLocked: false,
    title: 'test images',
    approvedBy: null,
    approvedAt: null,
    user: {
      id: '638f37de31186b7fd21ba6aa',
      photo: '',
      username: 'ahmed222',
      name: '',
      isFollowed: false,
      cakeDay: true
    },
    voteType: 0,
    isSaved: false,
    subredditInfo: {
      id: '639cba2409c63d044c49ba8e',
      name: 'Ahmed123456',
      isJoin: false,
      joinDate: null,
      isModerator: false
    }
  };
  // Posts Card
  it('renders post card component', () => {
    render(
      <Provider store={Store}>
        <PostCard
          postData={postData}
          isCommunityPost={true}
          isModeratorMode={true}
        />
      </Provider>
    );
    const linkElement = screen.getByTestId(/test-post-card/i);
    expect(linkElement).toBeInTheDocument();
  });

  // upvoting
  it('Testing the up-voting of the post', () => {
    render(
      <Provider store={Store}>
        <PostCard postData={postData} />
      </Provider>
    );
    const element = screen.getByTestId(/test-up-vote/i);
    expect(element).toBeInTheDocument();

    const upVoteButton = screen.getByTestId(/test-up-voting-button/i);
    expect(upVoteButton).toBeInTheDocument();

    const votesCounter = screen.getByTestId(/test-votes-count/i);
    expect(votesCounter).toBeInTheDocument();

    // Firing the action of up vote button
    fireEvent.click(upVoteButton);
    expect(votesCounter.innerHTML).toEqual('6');
  });

  // downvoting
  it('Testing the down-voting of the post', () => {
    render(
      <Provider store={Store}>
        <PostCard postData={postData} />
      </Provider>
    );
    const element = screen.getByTestId(/test-down-vote/i);
    expect(element).toBeInTheDocument();

    const downVoteButton = screen.getByTestId(/test-down-voting-button/i);
    expect(downVoteButton).toBeInTheDocument();

    const votesCounter = screen.getByTestId(/test-votes-count/i);
    expect(votesCounter).toBeInTheDocument();

    // Firing the action of up vote button
    fireEvent.click(downVoteButton);
    expect(votesCounter.innerHTML).toEqual('4');
  });

  // post interactions
  it('Testing rendering of the post interactions', () => {
    render(
      <Provider store={Store}>
        <PostCard postData={postData} />
      </Provider>
    );
    const elements = screen.getAllByRole(/interaction-item/i);

    waitFor(() => expect(elements).toBeInTheDocument());
  });
});
