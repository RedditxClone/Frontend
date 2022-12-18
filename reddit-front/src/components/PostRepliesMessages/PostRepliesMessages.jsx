/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import PostReply from './PostReply';

export default function PostRepliesMessages() {
  const show = false;
  return (
    <div
      style={{
        width: '70%',
        minHeight: '55px',
        backgroundColor: '#ffffff',
        margin: '20px auto',
        minWidth: '700px'
      }}
    >
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
