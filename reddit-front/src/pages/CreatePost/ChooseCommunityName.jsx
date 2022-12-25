/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import classes from './CreatePost.module.css';

function ChooseCommunityName({
  setChoosedPageName,
  setChoosedPageId,
  communityName,
  setPostOnUserProfile
}) {
  const { user } = useSelector((state) => state.auth);
  const { moderatedCommunities, myCommunities } = useSelector(
    (state) => state.communities
  );
  const inputRef = useRef();
  const [openList, setOpenList] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);
  const onChooseCommunity = (community) => {
    setChoosedPageId(community._id);
    setChoosedPageName(community.name);
    setCurrentIcon(community.icon);
    setOpenList(false);
    setPostOnUserProfile(false);
  };
  const onChooseUserProfile = () => {
    setChoosedPageId(user._id);
    setChoosedPageName(user.username);
    setCurrentIcon(user.profilePhoto);
    setOpenList(false);
    setPostOnUserProfile(true);
  };

  return (
    <>
      <div className={classes['choose-community_container']}>
        <span className={classes['choose-community_icon']}>
          <img
            src={currentIcon}
            alt=""
          />
        </span>
        <input
          ref={inputRef}
          onFocus={() => setOpenList(true)}
          className={classes['choose-community_input']}
          placeholder="Choose Community"
          value={communityName}
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
              onClick={() => {
                onChooseUserProfile();
              }}
            >
              <span className={classes['community-logo']}>
                <img
                  src={user.profilePhoto}
                  alt=""
                />
              </span>
              <div className={classes['community-info']}>
                <span>{user.username}</span>
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
            {[...moderatedCommunities, ...myCommunities].map((comm, idx) => (
              <button
                key={comm._id + idx}
                type="button"
                className={classes.communities_item}
                onClick={() => {
                  onChooseCommunity(comm);
                }}
              >
                <span className={classes['community-logo']}>
                  <img
                    src={comm.logo}
                    alt=""
                  />
                </span>
                <div className={classes['community-info']}>
                  <span>{comm.name}</span>
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
