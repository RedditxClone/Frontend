/* eslint-disable object-curly-newline */
/* eslint-disable max-len */

import './CreatePost.module.css';
/**
 * This a special button that is called by the parent components {@link InlineStyleControls} or {@link BlockStyleControls}
 * @param {Function} onToggle - This function is responsible to toggle the style of the button
 * @param {Boolean} active - This is a boolean variable that determines if the current button is active or not, and set a specific style depending on that
 * @param {React-Icon} label - This is an icon for the button
 * @param {Objec} style
 * @returns {React.Compoent}
 */
function StyledButton({ onToggle, active, label, style }) {
  const onToggleHandler = (event) => {
    event.preventDefault();
    onToggle(style);
  };
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }
  return (
    <span
      className={className}
      onMouseDown={onToggleHandler}
    >
      {label}
    </span>
  );
}

export default StyledButton;
