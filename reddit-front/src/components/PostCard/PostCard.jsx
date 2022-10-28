/* eslint-disable prefer-template */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './PostCard.css';
import PostContainer from './PostContainer/PostContainer';
import PostInfo from './PostInfo/PostInfo';
import PostContent from './PostContent/PostContent';
import Voting from './Voting/Voting';
/**
 * @typedef PropType
 * @property {number} id
 * @property {number} votes
 * @property {number} community_id
 * @property {number} user_id
 * @property {string} community_name
 * @property {string} posted_by
 * @property {timestamp} posted_at
 */

/**
 *
 * @param {PropType}  postData
 */
export default function PostCard({ postData }) {
  const [hidePost, setHidePost] = useState(false);

  /**
   * This function divides the number and gives it the right label.
   * Ex: 532834 = 532.8K, 999 = 999
   * @param {int} number - The number to be divided.
   */
  const divideBigNumber = function divideBigNumber(number) {
    if (number < 1000) return number;
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1).toString().concat(' M');
    }

    return (number / 1000).toFixed(1).toString().concat(' K');
  };

  // Returning the result
  return !hidePost ? (
    <div
      className="post-card"
      key={postData.id}
      id={'post-' + postData.id}
      data-testid="test-post-card"
    >
      <PostContainer>
        <Voting
          votesCount={postData.votes}
          divideBigNumber={divideBigNumber}
        />
        <PostContent
          setHidePost={setHidePost}
          postContentData={postData}
          divideBigNumber={divideBigNumber}
        >
          <PostInfo
            communityName={postData.community_name}
            communityId={postData.community_id}
            userId={postData.user_id}
            postedBy={postData.posted_by}
            postedAt={postData.posted_at}
            divideBigNumber={divideBigNumber}
            postId={postData.id}
          />
        </PostContent>
      </PostContainer>
    </div>
  ) : null;
}
