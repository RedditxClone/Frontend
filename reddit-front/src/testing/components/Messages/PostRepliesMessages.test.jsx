/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Store } from '../../../store/Store';
import PostRepliesMessages from '../../../components/PostRepliesMessages/PostRepliesMessages';
import PostReply from '../../../components/PostRepliesMessages/PostReply';

describe('Test for Account settings component', () => {
  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <PostRepliesMessages />
      </Provider>
    );
    const card = screen.getByTestId(/message-postreply-container/i);
    expect(card).toBeInTheDocument();
  });

  const postReply = {
    messages: [
      {
        firstMessageId: 'string',
        parentId: 'string',
        type: 'private_msg',
        postCommentId: 'string',
        _id: 1212,
        commentCount: 0,
        authorName: 'string',
        destName: 'string',
        subject: 'string',
        body: 'string',
        createdAt: '2022-12-23T19:51:19.381Z',
        isRead: true,
        subreddit: 'string'
      }
    ]
  };

  it('Test rendring of the component', () => {
    render(
      <Provider store={Store}>
        <PostReply postReply={postReply} />
      </Provider>
    );
    const card = screen.getByTestId(/message-reply-container/i);
    expect(card).toBeInTheDocument();

    const btn = screen.getByTestId(/reply-post-message/i);
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);

    const textBox = screen.getByTestId(/textreply-post-message/i);
    expect(textBox).toBeInTheDocument();

    const btn2 = screen.getByTestId(/spam-post-message/i);
    expect(btn2).toBeInTheDocument();

    fireEvent.click(btn2);

    const btn3 = screen.getByTestId(/yes-post-message/i);
    expect(btn3).toBeInTheDocument();

    fireEvent.click(btn3);
    const btn4 = screen.getByTestId(/spammed-post-message/i);
    expect(btn4).toBeInTheDocument();

    const btn5 = screen.getByTestId(/report-post-message/i);
    expect(btn5).toBeInTheDocument();

    fireEvent.click(btn5);
    const box = screen.getByTestId(/dialog-post-message/i);
    expect(box).toBeInTheDocument();
  });
});
