import { FaBold, FaItalic } from 'react-icons/fa';
import { RiStrikethrough } from 'react-icons/ri';
import { BsTypeUnderline } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import { ImSuperscript2 } from 'react-icons/im';
import StyledButton from './StyledButton';

const INLINE_STYLES = [
  { label: <FaBold />, style: 'BOLD' },
  { label: <FaItalic />, style: 'ITALIC' },
  { label: <FiLink />, style: 'LINK' },
  { label: <RiStrikethrough />, style: 'STRIKETHROUGH' },
  { label: <BiCodeAlt />, style: 'CODE' },
  { label: <ImSuperscript2 />, style: 'SUPERSCRIPT' },
  { label: <BsTypeUnderline />, style: 'UNDERLINE' }
];
function InlineStyleControls({ onToggle, editorState }) {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyledButton
          key={type.label}
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
