import classes from './CreatePost.module.css';
import AppBar from '../../components/Layout/AppBar/AppBar';
import AboutCard from '../../components/SubredditCards/AboutCard/AboutCard';
import PostingRules from './PostingRules';
import ChooseCommunityName from './ChooseCommunityName';

function CreatePost() {
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
            <ChooseCommunityName />
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
