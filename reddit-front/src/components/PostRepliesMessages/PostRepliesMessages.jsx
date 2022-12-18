/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import PostReply from './PostReply';

export default function PostRepliesMessages() {
  const show = false;
  return (
    <div>
      {show ? (
        <div>
          <p
            style={{
              fontSize: '18px',
              color: '#373c3f',
              marginRight: 'auto',
              padding: '20px'
            }}
          >
            there doesn&apos;t seem to be anything here
          </p>
        </div>
      ) : (
        <>
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
          <PostReply />
        </>
      )}
    </div>
  );
}
