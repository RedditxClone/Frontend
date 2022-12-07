/* eslint-disable object-curly-newline */
import './CreatePost.module.css';

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
