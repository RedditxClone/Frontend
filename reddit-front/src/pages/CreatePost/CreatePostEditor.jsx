// /* eslint-disable object-curly-newline */
// import { useRef, useState } from 'react';
// // import Draft from 'dr aft-js';
// import './CreatePost.module.css';
// import BlockStyleControls from './BlockStyleControls';
// import InlineStyleControls from './InlineStyleControls';
// import './CreatePostEditor.css';

// // const { Editor, EditorState, RichUtils, getDefaultKeyBinding } = Draft;

// // Custom overrides for "code" style.
// const styleMap = {
//   CODE: {
//     backgroundColor: 'rgba(0, 0, 0, 0.05)',
//     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//     fontSize: 16,
//     padding: 2
//   }
// };

// function CreatePostEditor() {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   const editorRef = useRef();

//   const getBlockStyle = (block) => {
//     switch (block.getType()) {
//       case 'blockquote':
//         return 'RichEditor-blockquote';
//       default:
//         return null;
//     }
//   };
//   const focus = () => {
//     editorRef.focus();
//   };
//   const onChangeHandler = (_editorState) => {
//     setEditorState(_editorState);
//   };

//   const handleKeyCommand = (command, _editorState) => {
//     const newState = RichUtils.handleKeyCommand(_editorState, command);
//     if (newState) {
//       onChangeHandler(newState);
//       return true;
//     }
//     return false;
//   };

//   const mapKeyToEditorCommand = (e) => {
//     if (e.keyCode === 9 /* TAB */) {
//       const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
//       if (newEditorState !== editorState) {
//         onChangeHandler(newEditorState);
//       }
//     }
//     return getDefaultKeyBinding(e);
//   };

//   const toggleBlockType = (blockType) => {
//     onChangeHandler(RichUtils.toggleBlockType(editorState, blockType));
//   };
//   const toggleInlineStyle = (inlineStyle) => {
//     onChangeHandler(RichUtils.toggleInlineStyle(editorState, inlineStyle));
//   };

//   let className = 'RichEditor-editor';
//   const contentState = editorState.getCurrentContent();
//   if (!contentState.hasText()) {
//     if (contentState.getBlockMap().first().getType() !== 'unstyled') {
//       className += ' RichEditor-hidePlaceholder';
//     }
//   }

//   return (
//     <div className="RichEditor-root">
//       <div className="RichEditor-controls">
//         <InlineStyleControls
//           editorState={editorState}
//           onToggle={toggleInlineStyle}
//         />
//         <BlockStyleControls
//           editorState={editorState}
//           onToggle={toggleBlockType}
//         />
//       </div>
//       <div
//         className={className}
//         onClick={focus}
//       >
//         <Editor
//           blockStyleFn={getBlockStyle}
//           customStyleMap={styleMap}
//           editorState={editorState}
//           handleKeyCommand={handleKeyCommand}
//           keyBindingFn={mapKeyToEditorCommand}
//           onChange={onChangeHandler}
//           placeholder="Text(optional)"
//           ref={editorRef}
//           spellCheck
//         />
//       </div>
//     </div>
//   );
// }

// export default CreatePostEditor;
