/* eslint-disable */
import CommentsForSamePostCard from "../CommentsCard/CommentsCard";

export default function CommentTap({ comments }) {
  return comments.map((comment, index) => (
    <div style={{margin:'4px'}}>
        <CommentsForSamePostCard
      postCommentInfo={comment.postCommentInfo}
      commentsForSamePost={comment.commentsForSamePost}
    />
    </div>
  ));
}
