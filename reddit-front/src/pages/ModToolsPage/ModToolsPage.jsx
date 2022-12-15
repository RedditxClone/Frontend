/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-plusplus */
import { BiAddToQueue } from 'react-icons/bi';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { CiShoppingTag } from 'react-icons/ci';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { ImStatsBars } from 'react-icons/im';
import { Box, Link } from '@mui/material';
import AppBar from '../../components/Layout/AppBar/AppBar';
import CommunitySettingsPage from '../CommunitySettingsPage/CommunitySettingsPage';
import {
  BreadCrumbContainer,
  SubredditIcon,
  SideBarCategory,
  SideBarCategoryTitle,
  SideBarItem
} from './ModToolsPage.Style';
import './ModToolsPage.css';

/**
 * This Component for the Moderator Tools Page
 *
 */

function ModToolsPage() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [currentItem, setCurrentItem] = useState('mod queue');

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
    <div>
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
              to="subreddit"
              style={{
                textTransform: 'uppercase',
                cursor: 'pointer',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '12px',
                letterSpacing: '.5px'
              }}
            >
              r/test_community
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
              to="/subreddit/about/reports"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('reports', <Box>reports</Box>)}
            >
              reports
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/spam"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('spam', <Box />)}
            >
              spam
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/edited"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('edited', <Box />)}
            >
              edited
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/unmoderated"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('unmoderated', <Box />)}
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
              to="/subreddit/about/banned"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('banned', <Box>banned</Box>)}
            >
              banned
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/muted"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('muted', <Box>muted</Box>)}
            >
              muted
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/approved"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem(
                'approved',
                <Box>approved</Box>
              )}
            >
              approved
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/moderators"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem(
                'moderators',
                <Box>moderators</Box>
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
              to="/subreddit/about/postflairs"
              className="subreddit-item"
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
              to="/subreddit/about/rules"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem('rules', <Box>rules</Box>)}
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
              to="/subreddit/about/communitysettings/:item"
              className="subreddit-item"
              // onClick={handleClickOnSidebarItem(
              //   'community settings',
              //   <CommunitySettingsPage />
              // )}
            >
              community settings
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
              to="/subreddit/about/trafficstats"
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
    </div>
  );
}

export default ModToolsPage;
