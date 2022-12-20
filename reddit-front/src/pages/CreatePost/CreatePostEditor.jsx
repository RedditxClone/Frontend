/* eslint-disable object-curly-newline */
import { useState } from 'react';
import Draft /* convertToRaw */ from 'draft-js';
import './CreatePost.module.css';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { stateFromMarkdown } from 'draft-js-import-markdown';
import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';
import './CreatePostEditor.css';

const { Editor, EditorState, RichUtils, getDefaultKeyBinding } = Draft;

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 150, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
    maxWidth: '100%',
    wordWrap: 'break-word',
    wordBreak: 'break-word'
  }
};

function CreatePostEditor({ setPostContent, postContent }) {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(stateFromMarkdown(postContent))
  );
  // const editorRef = useRef();
  console.log('here1', stateFromMarkdown(postContent));
  console.log('here2', editorState);
  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case 'blockquote':
        return 'RichEditor-blockquote';
      default:
        return null;
    }
  };

  const onChangeHandler = (_editorState) => {
    setEditorState(_editorState);
  };

  const onBlurHandler = () => {
    setPostContent(stateToMarkdown(editorState.getCurrentContent()));
  };

  const handleKeyCommand = (command, _editorState) => {
    const newState = RichUtils.handleKeyCommand(_editorState, command);
    if (newState) {
      onChangeHandler(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChangeHandler(newEditorState);
      }
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType) => {
    onChangeHandler(RichUtils.toggleBlockType(editorState, blockType));
  };
  const toggleInlineStyle = (inlineStyle) => {
    onChangeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  let className = 'RichEditor-editor';
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className="RichEditor-root">
      <div className="RichEditor-controls">
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
      </div>
      <div className={className}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={onChangeHandler}
          placeholder="Text(optional)"
          spellCheck
          onBlur={onBlurHandler}
        />
      </div>
    </div>
  );
}

export default CreatePostEditor;
