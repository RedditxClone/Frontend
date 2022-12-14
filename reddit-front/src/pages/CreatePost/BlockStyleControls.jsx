import { FaHeading } from 'react-icons/fa';
import { TfiQuoteRight } from 'react-icons/tfi';
import { MdFormatListNumbered } from 'react-icons/md';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsJournalCode } from 'react-icons/bs';
import StyledButton from './StyledButton';

const BLOCK_TYPES = [
  { label: <FaHeading />, style: 'header-one' },
  { label: <TfiQuoteRight />, style: 'blockquote' },
  { label: <AiOutlineUnorderedList />, style: 'unordered-list-item' },
  { label: <MdFormatListNumbered />, style: 'ordered-list-item' },
  { label: <BsJournalCode />, style: 'code-block' }
];
function BlockStyleControls({ editorState, onToggle }) {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyledButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
}

export default BlockStyleControls;
