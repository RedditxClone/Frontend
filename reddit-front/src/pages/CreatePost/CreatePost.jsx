import { TiDocumentText } from 'react-icons/ti';
import { BsImage } from 'react-icons/bs';
import { TfiLink } from 'react-icons/tfi';
import { BiPoll } from 'react-icons/bi';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { useState } from 'react';
import classes from './CreatePost.module.css';
import AppBar from '../../components/Layout/AppBar/AppBar';
import AboutCard from '../../components/SubredditCards/AboutCard/AboutCard';
import PostingRules from './PostingRules';
import ChooseCommunityName from './ChooseCommunityName';
import CreatePostEditor from './CreatePostEditor';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function CreatePost() {
  const [postTitle, setPostTitle] = useState('');

  const onChangePostTitle = (event) => {
    setPostTitle(event.target.value);
  };
  const baseColor = '#0079D3';
  const OPTIONS_BUTTONS = [
    { icon: <TiDocumentText />, text: 'Post', disabled: false },
    { icon: <BsImage />, text: 'Images & videos', disabled: false },
    { icon: <TfiLink />, text: 'Link', disabled: false },
    { icon: <BiPoll />, text: 'Poll', disabled: true },
    { icon: <HiOutlineMicrophone />, text: 'Talk', disabled: true }
  ];
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main className={classes['create-post_container']}>
        <div className={classes['left-part']}>
          <header className={classes['left-part_header']}>Create a post</header>
          <div>
            <ChooseCommunityName />
          </div>
          <div className={classes['create-post']}>
            <nav className={classes['buttons-list']}>
              {OPTIONS_BUTTONS.map((option) => (
                <button
                  type="button"
                  key={option.text}
                  disabled={option.disabled}
                  className={classes['icon-button']}
                >
                  <span style={{ marginRight: '0.5rem' }}>{option.icon}</span>
                  <span>{option.text}</span>
                </button>
              ))}
            </nav>
            <div className={classes['post-content']}>
              <div className={classes['post-title']}>
                <textarea
                  className={classes['post-title_textarea']}
                  maxLength={300}
                  required
                  placeholder="Title"
                  onChange={onChangePostTitle}
                />
                <span className={classes['post-title-length']}>
                  {`${postTitle.length}/300`}
                </span>
                <CreatePostEditor />
              </div>
            </div>
            <div>Flairs</div>
            <div className={classes['create-post_buttons']}>
              <button type="button">Post</button>
            </div>
          </div>
        </div>
        <div className={classes['right-part']}>
          <div>
            <AboutCard
              baseColor={baseColor}
              isModeratorMode={false}
              inCreatePost
            />
            <PostingRules />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreatePost;
