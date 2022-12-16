import { useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSelector } from 'react-redux';
import classes from './CreatePost.module.css';

const communities = [
  {
    logo: '/src/assts/2y2pftyz87981.png',
    name: 'comm1',
    members: '12356'
  },
  {
    logo: '../../assts/snoo-small.png',
    name: 'comm2',
    members: '156'
  }
];

function ChooseCommunityName({ setChoosedCommunity }) {
  const { user } = useSelector((state) => state.auth);
  const inputRef = useRef();
  const [openList, setOpenList] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(null);
  const onChooseCommunity = (community) => {
    setChoosedCommunity(community);
    setCurrentIcon(community.icon);
    setOpenList(false);
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
                onChooseCommunity(user);
              }}
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
                onClick={() => {
                  onChooseCommunity(comm);
                }}
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
