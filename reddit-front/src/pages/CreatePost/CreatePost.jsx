import { TiDocumentText } from 'react-icons/ti';
import { BsImage } from 'react-icons/bs';
import { TfiLink } from 'react-icons/tfi';
import { BiPoll } from 'react-icons/bi';
import { HiOutlineMicrophone } from 'react-icons/hi';
// import { IoPricetagOutline } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { useState } from 'react';
import classes from './CreatePost.module.css';
import AppBar from '../../components/Layout/AppBar/AppBar';
import AboutCard from '../../components/SubredditCards/AboutCard/AboutCard';
import PostingRules from './PostingRules';
import ChooseCommunityName from './ChooseCommunityName';
import CreatePostEditor from './CreatePostEditor';
import { RoundedButton } from '../../components/HomePageCards/HomePageCards.style';
import PostTag from './PostTag';
import ImagesAndVideos from './Dropzone';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [currentInputIndex, setCurrentInputIndex] = useState(0);
  // const CURRENT_INPUT = [
  //   <CreatePostEditor setPostContent={setPostContent} />,
  //   <Dropzone />
  // ];
  const onChangePostTitle = (event) => {
    setPostTitle(event.target.value);
  };

  const onPostHandler = () => {
    console.log(postContent);
  };
  const baseColor = '#0079D3';
  const OPTIONS_BUTTONS = [
    {
      icon: <TiDocumentText />,
      text: 'Post',
      disabled: false,
      idx: 0
    },
    {
      icon: <BsImage />,
      text: 'Images & videos',
      disabled: false,
      idx: 1
    },
    {
      icon: <TfiLink />,
      text: 'Link',
      disabled: false,
      idx: 2
    },
    {
      icon: <BiPoll />,
      text: 'Poll',
      disabled: true,
      idx: 0
    },
    {
      icon: <HiOutlineMicrophone />,
      text: 'Talk',
      disabled: true,
      idx: 0
    }
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
                  onClick={() => setCurrentInputIndex(option.idx)}
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
                <div>
                  {(currentInputIndex === 0 || currentInputIndex > 2) && (
                    <CreatePostEditor setPostContent={setPostContent} />
                  )}
                  {currentInputIndex === 1 && <ImagesAndVideos />}
                  {/* {CURRENT_INPUT[currentInputIndex]} */}
                </div>
              </div>
            </div>
            <div>
              <PostTag
                icon2={<AiOutlinePlus />}
                icon1={<MdOutlineDone />}
                text="Spoiler"
                bgColor1="#fff"
                bgColor2="#000"
              />
              <PostTag
                icon2={<AiOutlinePlus />}
                icon1={<MdOutlineDone />}
                text="NFSW"
                bgColor1="#fff"
                bgColor2="rgb(255, 88, 91)"
              />
              <PostTag
                icon1=""
                icon2=""
                text="Flair"
                bgColor1="#fff"
                bgColor2="rgb(255, 88, 91)"
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <RoundedButton
                variant="contained"
                color="primary"
                disableElevation
                sx={{ fontSize: '1.2rem', fontWeight: '700' }}
                onClick={onPostHandler}
              >
                Post
              </RoundedButton>
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
