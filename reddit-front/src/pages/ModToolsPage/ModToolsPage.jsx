/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-plusplus */
import { BiAddToQueue } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineUser, AiOutlineSetting, AiOutlineLeft } from 'react-icons/ai';
import { CiShoppingTag } from 'react-icons/ci';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { ImStatsBars } from 'react-icons/im';
import { Box, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import AppBar from '../../components/Layout/AppBar/AppBar';
import {
  BreadCrumbContainer,
  SubredditIcon,
  SideBarCategory,
  SideBarCategoryTitle,
  SideBarItem
} from './ModToolsPage.Style';
import './ModToolsPage.css';
import Banned from '../../components/Banned/Banned';
import Muted from '../../components/Muted/Muted';
import Approved from '../../components/Approved/Approved';
import Moderators from '../../components/Moderators/Moderators';
import ModQueue from '../../components/ModQueue/ModQueue';
import FetchUserData from '../../utilities/FetchUserData/FetchUserData';
import { getSubreddit } from '../../services/requests/Subreddit';
import Loader from '../../utilities/Loader/Loader';

/**
 * This Component for the Moderator Tools Page
 *
 */

function ModToolsPage() {
  // Params
  const { subredditName, activeItem } = useParams();
  const [loading, setLoading] = useState(true);
  const [subredditInfo, setSubredditInfo] = useState([]);
  const [showSettingsSideBar, setShowSettingsSideBar] = useState(false);
  const { isAuth } = useSelector((state) => {
    console.log(state.auth);
    return state.auth;
  });
  const navigate = useNavigate();
  // Fetching the info of the subreddit
  const fetchSubredditInfo = async () => {
    const results = await getSubreddit(subredditName);
    setSubredditInfo(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchSubredditInfo();
    if (!isAuth) {
      navigate('/auth/login');
    }

    if (
      activeItem === 'communitysettings' ||
      activeItem === 'postsandcomments' ||
      activeItem === 'community'
    ) {
      setShowSettingsSideBar(true);
    }
  }, []);

  // Mapping for the components
  const componentsMap = {
    spam: (
      <ModQueue
        sortType="any"
        isCommunityPost={false}
        isModeratorMode={false}
        isHomePagePost={false}
        whichQueue="spam"
        subredditName={subredditName}
        subredditId={subredditInfo._id}
      />
    ),
    edited: (
      <ModQueue
        sortType="any"
        isCommunityPost={false}
        isModeratorMode={false}
        isHomePagePost={false}
        whichQueue="edited"
        subredditName={subredditName}
        subredditId={subredditInfo._id}
      />
    ),
    unmoderated: (
      <ModQueue
        sortType="any"
        isCommunityPost={false}
        isModeratorMode={false}
        isHomePagePost={false}
        whichQueue="unmoderated"
        subredditName={subredditName}
        subredditId={subredditInfo._id}
      />
    ),
    muted: <Box>muted</Box>,
    banned: <Box>banned</Box>,
    moderators: <Box>moderators</Box>,
    approved: <Box>approved</Box>,
    postflairs: <Box>postflairs</Box>,
    rules: <Box>rules</Box>,
    communitysettings: <Box>communitysettings</Box>,
    trafficstats: <Box>trafficstats</Box>,
    community: <Box>community</Box>,
    postsandcomments: <Box>postsandcomments</Box>
  };

  // States
  const [currentComponent, setCurrentComponent] = useState(<></>);

  const [currentItem, setCurrentItem] = useState(activeItem);

  // Handlers
  const handleClickOnSidebarItem = (itemName, component) => (e) => {
    const allItems = document.querySelectorAll('.subreddit-item');
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove('active-sidebar-item');
    }
    e.target.classList.add('active-sidebar-item');
    setCurrentComponent(component);
    setCurrentItem(itemName);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {currentComponent !== null ? (
            <>
              {/* Nav Bar Section  */}
              <AppBar />
              {/* Bread Crumb Section  */}
              <BreadCrumbContainer
                className="bread-crumb-container"
                data-testid="bread-crumb"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginLeft: '1.5rem'
                  }}
                >
                  {/* Subreddit Logo */}
                  <SubredditIcon>
                    <img
                      style={{ width: '100%', height: '100%' }}
                      src="https://styles.redditmedia.com/t5_2rr0e/styles/communityIcon_ylhgbe8ngx481.jpg?width=256&format=pjpg&s=fb6c14e5b6e326a13bdff84d7e0aac38511df59c"
                      alt="icon"
                    />
                  </SubredditIcon>

                  <div>
                    <Link
                      to={`/r/${subredditName}`}
                      style={{
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '12px',
                        letterSpacing: '.5px'
                      }}
                    >
                      {`r/${subredditName}`}
                    </Link>
                  </div>
                  <div>
                    <span
                      style={{
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '12px',
                        marginLeft: '5px',
                        letterSpacing: '.5px'
                      }}
                    >
                      {`/ ${currentItem}`}
                    </span>
                  </div>
                </div>
              </BreadCrumbContainer>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start'
                }}
              >
                {/* Side Bar  */}
                {!showSettingsSideBar ? (
                  <Box
                    data-testid="mod-tools-sidebar"
                    sx={{
                      bottom: '0',
                      boxSizing: 'border-box',
                      overflow: 'auto',
                      paddingTop: '16px',
                      paddingBottom: '32px',
                      position: 'fixed',
                      top: '11rem',
                      zIndex: '30',
                      width: '28rem',
                      backgroundColor: '#F6F7F8'
                    }}
                  >
                    {/* Mod Queue  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <BiAddToQueue
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>Queues</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/reports`}
                        className="subreddit-item"
                        onClick={handleClickOnSidebarItem(
                          'reports',
                          <Box>reports</Box>
                        )}
                      >
                        reports
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/spam`}
                        className={`subreddit-item ${
                          activeItem === 'spam' ? 'active-sidebar-item' : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'spam',
                          <ModQueue
                            sortType="any"
                            isCommunityPost={false}
                            isModeratorMode={false}
                            isHomePagePost={false}
                            whichQueue="spam"
                            subredditName={subredditName}
                            subredditId={subredditInfo._id}
                          />
                        )}
                      >
                        spam
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/edited`}
                        className={`subreddit-item ${
                          activeItem === 'edited' ? 'active-sidebar-item' : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'edited',
                          <ModQueue
                            sortType="any"
                            isCommunityPost={false}
                            isModeratorMode={false}
                            isHomePagePost={false}
                            whichQueue="edited"
                            subredditName={subredditName}
                            subredditId={subredditInfo._id}
                          />
                        )}
                      >
                        edited
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/unmoderated`}
                        className={`subreddit-item ${
                          activeItem === 'unmoderated'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'unmoderated',
                          <ModQueue
                            sortType="any"
                            isCommunityPost={false}
                            isModeratorMode={false}
                            isHomePagePost={false}
                            whichQueue="unmoderated"
                            subredditName={subredditName}
                            subredditId={subredditInfo._id}
                          />
                        )}
                      >
                        unmoderated
                      </SideBarItem>
                    </SideBarCategory>

                    {/* User Management  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <AiOutlineUser
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>User Management</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/banned`}
                        className={`subreddit-item ${
                          activeItem === 'banned' ? 'active-sidebar-item' : null
                        }`}
                        onClick={handleClickOnSidebarItem('banned', <Banned />)}
                      >
                        banned
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/muted`}
                        className={`subreddit-item ${
                          activeItem === 'muted' ? 'active-sidebar-item' : null
                        }`}
                        onClick={handleClickOnSidebarItem('muted', <Muted />)}
                      >
                        muted
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/approved`}
                        className={`subreddit-item ${
                          activeItem === 'approved'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'approved',
                          <Approved />
                        )}
                      >
                        approved
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/moderators`}
                        className={`subreddit-item ${
                          activeItem === 'moderators'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'moderators',
                          <Moderators />
                        )}
                      >
                        moderators
                      </SideBarItem>
                    </SideBarCategory>

                    {/* Flairs & Emojis  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <CiShoppingTag
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>Flairs & Emojis</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/postflairs`}
                        className={`subreddit-item ${
                          activeItem === 'postflairs'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'Post flairs',
                          <Box>Post flairs</Box>
                        )}
                      >
                        Post flairs
                      </SideBarItem>
                    </SideBarCategory>

                    {/* RULES AND REGULATIONS  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <HiOutlineNewspaper
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>RULES AND REGULATIONS</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/rules`}
                        className={`subreddit-item ${
                          activeItem === 'rules' ? 'active-sidebar-item' : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'rules',
                          <Box>rules</Box>
                        )}
                      >
                        rules
                      </SideBarItem>
                    </SideBarCategory>

                    {/* Other  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <AiOutlineSetting
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>Other</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/communitysettings`}
                        className={`subreddit-item ${
                          activeItem === 'communitysettings'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'community settings',
                          <Box>community settings</Box>
                        )}
                      >
                        <span
                          onClick={() => {
                            setShowSettingsSideBar(true);
                          }}
                        >
                          community settings
                        </span>
                      </SideBarItem>
                    </SideBarCategory>

                    {/* COMMUNITY ACTIVITY  */}
                    <SideBarCategory>
                      <SideBarCategoryTitle>
                        <ImStatsBars
                          className="queue-icon"
                          style={{
                            marginLeft: '-1rem',
                            marginRight: '5px',
                            color: '#878A8C',
                            fontSize: '2rem'
                          }}
                        />
                        <span>COMMUNITY ACTIVITY</span>
                      </SideBarCategoryTitle>
                      <SideBarItem
                        to={`/${subredditName}/about/trafficstats`}
                        className="subreddit-item"
                        onClick={handleClickOnSidebarItem(
                          'traffic stats',
                          <Box>traffic stats</Box>
                        )}
                      >
                        traffic stats
                      </SideBarItem>
                    </SideBarCategory>
                  </Box>
                ) : (
                  <Box
                    data-testid="mod-tools-sidebar"
                    sx={{
                      bottom: '0',
                      boxSizing: 'border-box',
                      overflow: 'auto',
                      paddingTop: '16px',
                      paddingBottom: '32px',
                      position: 'fixed',
                      top: '11rem',
                      zIndex: '30',
                      width: '28rem',
                      backgroundColor: '#F6F7F8'
                    }}
                  >
                    <SideBarCategory>
                      <SideBarItem
                        onClick={() => {
                          setShowSettingsSideBar(false);
                        }}
                        sx={{
                          padding: '5px 1rem',
                          borderBottom: '1px solid #e3e3e3',
                          ':hover': {
                            backgroundColor: '#F6F7F8'
                          }
                        }}
                      >
                        <AiOutlineLeft fontSize="1.7rem" />
                        <span
                          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          Back to mod tools
                        </span>
                      </SideBarItem>
                      <SideBarItem
                        to={`/${subredditName}/about/community`}
                        className={`subreddit-item ${
                          activeItem === 'communitysettings'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                        onClick={handleClickOnSidebarItem(
                          'community settings',
                          <Box>community</Box>
                        )}
                      >
                        community
                      </SideBarItem>

                      <SideBarItem
                        to={`/${subredditName}/about/postsandcomments`}
                        className={`subreddit-item ${
                          activeItem === 'postsandcomments'
                            ? 'active-sidebar-item'
                            : null
                        }`}
                      >
                        Posts and Comments
                      </SideBarItem>
                    </SideBarCategory>
                  </Box>
                )}

                <div
                  style={{
                    width: 'calc(100vw)',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#DAE0E6',
                    paddingLeft: '280px',
                    position: 'relative',
                    top: '45px'
                  }}
                  data-testid="mod-tool-item"
                >
                  {currentComponent}
                </div>
              </div>
            </>
          ) : (
            navigate('/error')
          )}
        </div>
      )}
    </>
  );
}

export default ModToolsPage;
