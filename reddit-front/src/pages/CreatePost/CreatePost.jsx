import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineDone } from 'react-icons/md';
import { useState } from 'react';
import classes from './CreatePost.module.css';
import AppBar from '../../components/Layout/AppBar/AppBar';
import AboutCard from '../../components/SubredditCards/AboutCard/AboutCard';
import PostingRules from './PostingRules';
import ChooseCommunityName from './ChooseCommunityName';
import { RoundedButton } from '../../components/HomePageCards/HomePageCards.style';
import PostTag from './PostTag';
import CreatePostTabs from './CreatePostTabs';

function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postUrl, setPostUrl] = useState('');
  const [communityName, setCommunityName] = useState('');
  const [postMedia, setPostMedia] = useState([]);
  const [spoiler, setSpoiler] = useState(false);
  const [nsfw, setNsfw] = useState(false);
  const [validUrl, setValidUrl] = useState(true);
  const [validTitle, setValidTitle] = useState(true);

  const onPostHandler = () => {
    console.log(postContent, postMedia);
  };
  const baseColor = '#0079D3';

  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main className={classes['create-post_container']}>
        <div className={classes['left-part']}>
          <header className={classes['left-part_header']}>Create a post</header>
          <div>
            <ChooseCommunityName
              communityName={communityName}
              setCommunityName={setCommunityName}
            />
          </div>
          <div className={classes['create-post']}>
            <CreatePostTabs
              setPostContent={setPostContent}
              postMedia={postMedia}
              setPostMedia={setPostMedia}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              setPostUrl={setPostUrl}
              postUrl={postUrl}
              validUrl={validUrl}
              setValidUrl={setValidUrl}
              validTitle={validTitle}
              setValidTitle={setValidTitle}
            />

            <div>
              <PostTag
                icon2={<AiOutlinePlus />}
                icon1={<MdOutlineDone />}
                active={spoiler}
                setActive={setSpoiler}
                text="Spoiler"
                bgColor1="#fff"
                bgColor2="#000"
              />
              <PostTag
                icon2={<AiOutlinePlus />}
                icon1={<MdOutlineDone />}
                active={nsfw}
                setActive={setNsfw}
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
