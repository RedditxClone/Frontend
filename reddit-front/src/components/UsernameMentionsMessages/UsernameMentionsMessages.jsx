/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from '../../utilities/Loader/Loader';
import PostReply from '../PostRepliesMessages/PostReply';
import { getPostRepliesMessages } from '../../services/requests/messages';

export default function UsernameMentionsMessages() {
  const limit = 5;
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [usernameMentionsMessages, setUsernameMentionsMessages] = useState([]);

  const fetchMessagesPostReplies = async () => {
    setLoading(true);
    const result = await getPostRepliesMessages({ limit, page });
    const tempList = usernameMentionsMessages;
    const newReplies = tempList.concat(result);
    if (result.length <= 0) {
      setHasMore(false);
      setLoading(false);
    }
    setPage(page + 1);
    setUsernameMentionsMessages(newReplies);
    setLoading(false);
  };

  const dataShow =
    usernameMentionsMessages.length > 0 ? (
      usernameMentionsMessages.map((postReply) => (
        <PostReply postReply={postReply} />
      ))
    ) : (
      <div>
        <p
          style={{
            fontSize: '14px',
            color: '#373c3f',
            marginRight: 'auto',
            padding: '20px'
          }}
        >
          there doesn&apos;t seem to be anything here
        </p>
      </div>
    );
  return (
    <div>
      <div
        style={{
          minHeight: '80.9vh',
          backgroundColor: '#edeff1',
          paddingTop: '1px',
          paddingBottom: '1px'
        }}
      >
        <div
          style={{
            width: '70%',
            minHeight: '55px',
            backgroundColor: '#ffffff',
            margin: '20px auto',
            minWidth: '700px'
          }}
        >
          <InfiniteScroll
            loadMore={fetchMessagesPostReplies}
            hasMore={hasMore}
            loader={<Loader />}
          >
            {dataShow}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
