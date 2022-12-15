/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './ProfileUpvoteContainer.css';
/**
 * This Component is just a wrapper for the whole post content
 *
 */
function PostContainer(props) {
  return (
    <div
      className="post-container"
      data-testid="test-post-container"
    >
      {props.children}
    </div>
  );
}

export default PostContainer;
