import classes from './CreatePost.module.css';

function ChooseCommunityName() {
  return (
    <>
      <div>
        <span className={classes['community-icon']}>icon</span>
        <div>
          <input
            className={classes['choose-community_input']}
            placeholder="Choose Community"
          />
        </div>
        <span className={classes['select-button']}>button</span>
      </div>
      <div className={classes['communities-list']}> </div>
    </>
  );
}

export default ChooseCommunityName;
