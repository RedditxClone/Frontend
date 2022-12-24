import { FaBold, FaItalic } from 'react-icons/fa';
import { RiStrikethrough } from 'react-icons/ri';
import { BsTypeUnderline } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import { ImSuperscript2 } from 'react-icons/im';
import StyledButton from './StyledButton';

const INLINE_STYLES = [
  { id: 'inline1', label: <FaBold />, style: 'BOLD' },
  { id: 'inline2', label: <FaItalic />, style: 'ITALIC' },
  { id: 'inline3', label: <FiLink />, style: 'LINK' },
  { id: 'inline4', label: <RiStrikethrough />, style: 'STRIKETHROUGH' },
  { id: 'inline5', label: <BiCodeAlt />, style: 'CODE' },
  { id: 'inline6', label: <ImSuperscript2 />, style: 'SUPERSCRIPT' },
  { id: 'inline7', label: <BsTypeUnderline />, style: 'UNDERLINE' }
];
/**
 * This component return a list of Inline styles for rich editor, these styles are:
 *  Bold,
 *  Italic,
 *  Strikethrough,
 *  code,
 *  Superscript,
 *  Underline
 * @param {EditorState} editorState - The state of the rich editor
 * @param {Function} onToggle - This is a function that toggles the inline style
 * @returns {React.component}
 */
function InlineStyleControls({ onToggle, editorState }) {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyledButton
          key={type.id}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
}

export default InlineStyleControls;
