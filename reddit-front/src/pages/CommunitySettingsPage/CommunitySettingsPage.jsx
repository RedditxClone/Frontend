/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import { useState } from 'react';
import { Box, Link } from '@mui/material';
import { AiOutlineLeft } from 'react-icons/ai';
import AppBar from '../../components/Layout/AppBar/AppBar';
import Community from '../../components/CommunitySettings/Community';
import PostsAndComments from '../../components/CommunitySettings/PostsAndComments';
import {
  BreadCrumbContainer,
  SubredditIcon,
  SideBarItem,
  SideBarTitleItem,
  SideBarCategory,
  UpDiv
} from './CommunitySettingsPage.style';
import CommunityContainer from '../../components/Container/CommunityContainer';
//  import communitySettings from '../../services/requests/communitySettings';

export default function CommunitySettingsPage() {
  const [currentComponent, setCurrentComponent] = useState(null);
  // eslint-disable-next-line no-unused-vars
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
  const [communityName, setCommunityName] = useState({
    name: '',
    count: 100,
    valid: true
  });
  const [communityMessage, setCommunityMessage] = useState({
    message: '',
    count: 500,
    valid: true
  });
  const [welcomeMessageButton, setWelcomeMessageButton] = useState({
    clicked: false
  });
  const [plusButton, setPlusButton] = useState({
    clicked: false
  });
  const [acceptNewReqButton, setAcceptNewReqButton] = useState({
    clicked: false
  });
  const [acceptToJoinButton, setAcceptToJoinButton] = useState({
    clicked: false
  });
  const [communityType, setCommunityType] = useState({
    private: false,
    restricted: false,
    public: true
  });
  const [restrictedList, setRestrictedList] = useState({
    showList: false,
    buttonName: 'POST ONLY (DEFAULT)',
    paragraphBelow: 'Only approved users can post. Anyone can comment.'
  });
  const [suggestedSortList, setSuggestedSortList] = useState({
    showList: false,
    buttonName: ' '
  });
  const [spoilerButton, setSpoilerButton] = useState({
    clicked: false
  });
  const [imgCommentButton, setImgCommentButton] = useState({
    clicked: false
  });
  const HandleCommmunityName = (event) => {
    let num = 0;
    if (event.target.value.trim() === '') {
      setCommunityName({ count: 100, valid: false });
    } else if (event.target.value.length < 100) {
      num = 100 - event.target.value.length;
      setCommunityName({ count: num, valid: true });
    } else {
      setCommunityName({ count: num, valid: false });
    }
  };
  const HandleCommmunityMessage = (event) => {
    let num2 = 0;
    if (event.target.value.trim() === '') {
      setCommunityMessage({ count: 500, valid: false });
    } else if (event.target.value.length < 500) {
      num2 = 500 - event.target.value.length;
      setCommunityMessage({ count: num2, valid: true });
    } else {
      setCommunityMessage({ count: num2, valid: false });
    }
  };
  const CommunityTypeHandler = (event) => {
    const chosed = true;
    if (event.target.id === 'Private') {
      setCommunityType({
        private: chosed,
        restricted: !chosed,
        public: !chosed
      });
    } else if (event.target.id === 'Restricted') {
      setCommunityType({
        private: !chosed,
        restricted: chosed,
        public: !chosed
      });
    } else {
      setCommunityType({
        private: !chosed,
        restricted: !chosed,
        public: chosed
      });
    }
  };
  const RestrictedListHandle = (event) => {
    if (event.target.id === 'PostOnly') {
      setRestrictedList({
        showList: false,
        buttonName: 'POST ONLY (DEFAULT)',
        paragraphBelow: 'Only approved users can post. Anyone can comment.'
      });
    } else if (event.target.id === 'CommentOnly') {
      setRestrictedList({
        showList: false,
        buttonName: 'COMMENT ONLY',
        paragraphBelow: 'Only approved users can comment. Anyone can post.'
      });
    } else if (event.target.id === 'PostComment') {
      setRestrictedList({
        showList: false,
        buttonName: 'POST & COMMENT',
        paragraphBelow: 'Only approved users can post and comment.'
      });
    } else {
      setRestrictedList({
        showList: !restrictedList.showList,
        buttonName: restrictedList.buttonName,
        paragraphBelow: restrictedList.paragraphBelow
      });
    }
  };

  const SuggestedSortListHandle = (event) => {
    if (event.target.id === 'None') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'NONE (RECOMMENDED)'
      });
    } else if (event.target.id === 'Best') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'BEST'
      });
    } else if (event.target.id === 'Old') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'OLD'
      });
    } else if (event.target.id === 'Top') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'TOP'
      });
    } else if (event.target.id === 'QandA') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'Q&A'
      });
    } else if (event.target.id === 'Beta') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'LIVE (BETA)'
      });
    } else if (event.target.id === 'Controversial') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'CONTROVERSIAL'
      });
    } else if (event.target.id === 'New') {
      setSuggestedSortList({
        showList: false,
        buttonName: 'NEW'
      });
    } else {
      setSuggestedSortList({
        showList: !suggestedSortList.showList,
        buttonName: suggestedSortList.buttonName
      });
    }
  };

  //  buttons handle
  const WelcomeMessageButtonHandle = () => {
    setWelcomeMessageButton({ clicked: !welcomeMessageButton.clicked });
  };
  const PlusButtonHandle = () => {
    setPlusButton({ clicked: !plusButton.clicked });
  };
  const AcceptNewReqButtonHandle = () => {
    setAcceptNewReqButton({ clicked: !acceptNewReqButton.clicked });
  };
  const AcceptToJoinButtonHandle = () => {
    setAcceptToJoinButton({ clicked: !acceptToJoinButton.clicked });
  };

  const SpoilerButtonHandle = () => {
    setSpoilerButton({ clicked: !spoilerButton.clicked });
  };
  const ImgCommentButtonHandle = () => {
    setImgCommentButton({ clicked: !imgCommentButton.clicked });
  };

  const ButtonsHandle = (event) => {
    if (event.target.id === 'WelcomeMessageButton') {
      console.log(welcomeMessageButton.clicked);
      WelcomeMessageButtonHandle();
      console.log(welcomeMessageButton.clicked);
    } else if (event.target.id === 'PlusButton') {
      PlusButtonHandle();
    } else if (event.target.id === 'AcceptNewReqButton') {
      AcceptNewReqButtonHandle();
    } else if (event.target.id === 'AcceptToJoinButton') {
      AcceptToJoinButtonHandle();
    } else if (event.target.id === 'SpoilerButton') {
      SpoilerButtonHandle();
    } else {
      ImgCommentButtonHandle();
    }
  };
  const SaveHandle = () => {
    // communitySettings(communityName.name,
    //   communityMessage.message,
    //   WelcomeMessage,
    //   welcomeMessageButton.clicked,
    //   TypeOfCommunity,
    //   isOver18,
    //   ApprovedUserAbility,
    //   isAcceptNewPostReq,
    //   isAcceptReqToJoin)
  };
  return (
    <div>
      {/* Nav Bar Section  */}
      <AppBar style={{ position: 'fixed', zIndex: '30' }} />
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
      <UpDiv><button type="submit" onClick={SaveHandle}>Save Changes</button></UpDiv>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}
      >
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
            <SideBarTitleItem
              to="/subreddit/about/:item"
            >
              <AiOutlineLeft style={{ marginRight: '4px' }} />
              Back to mod tools
            </SideBarTitleItem>
            <SideBarItem
              to="/subreddit/about/communitysettings/community"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem(
                'communitycontainer',
                <CommunityContainer />
              )}
            >
              Community
            </SideBarItem>
            <SideBarItem
              to="/subreddit/about/communitysettings/posts"
              className="subreddit-item"
              onClick={handleClickOnSidebarItem(
                'postsAndComments',
                <PostsAndComments
                  SuggestedSortList={suggestedSortList}
                  SugListHandle={SuggestedSortListHandle}
                />
              )}
            >
              Posts and Comments
            </SideBarItem>
          </SideBarCategory>
        </Box>
        <div
          style={{
            width: 'calc(100vw)',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#DAE0E6',
            marginTop: '9rem'
          }}
          data-testid="mod-tool-item"
        >
          {currentComponent}
        </div>
      </div>
    </div>
  );
}
