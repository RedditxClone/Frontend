/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './PostContainer.css';
/**
 * This Component is just a wrapper for the whole post content
 *
 */
export default function PostContainer(props) {
  return (
    <div
      className="post-container"
      data-testid="test-post-container"
    >
      {props.children}
    </div>
  );
}
