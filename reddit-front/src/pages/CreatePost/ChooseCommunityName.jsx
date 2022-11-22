import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import classes from './CreatePost.module.css';

const communities = [
  { logo: 'logo1', name: 'comm1', members: '12356' },
  { logo: 'logo2', name: 'comm2', members: '156' }
];

function ChooseCommunityName() {
  const inputRef = useRef();
  const [openList, setOpenList] = useState(false);
  const onBlurInputHandler = () => {
    setOpenList(false);
  };
  return (
    <>
      <div className={classes['choose-community_container']}>
        <span className={classes['choose-community_icon']} />
        <input
          ref={inputRef}
          onBlur={onBlurInputHandler}
          onFocus={() => setOpenList(true)}
          className={classes['choose-community_input']}
          placeholder="Choose Community"
        />
        <span
          onClick={() => setOpenList((prev) => !prev)}
          className={classes['select-button']}
        >
          <IoIosArrowDown />
        </span>
      </div>
      {openList ? (
        <div className={classes['communities-list']}>
          <div>
            <span className={classes['section-label']}>Your profile</span>
            <button
              type="button"
              className={classes.communities_item}
            >
              <span className={classes['community-logo']}>
                <img
                  src="#"
                  alt=""
                />
              </span>
              <div className={classes['community-info']}>
                <span>u/usernmae</span>
              </div>
            </button>
          </div>
          <div>
            <span className={classes['section-label']}>
              Your communities
              <button
                type="button"
                className={classes['create-community_btn']}
              >
                Create New
              </button>
            </span>
            {communities.map((comm) => (
              <button
                type="button"
                className={classes.communities_item}
              >
                <span className={classes['community-logo']}>
                  <img
                    src={comm.logo}
                    alt={comm.name}
                  />
                </span>
                <div className={classes['community-info']}>
                  <span>{comm.name}</span>
                  <span className={classes['community-members']}>
                    {`${comm.members} members`}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ChooseCommunityName;
