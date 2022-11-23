// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProfileNav from '../../components/ProfileNav/ProfileNav';
import ProfileUserCard from '../../components/ProfileUserCard/ProfileUserCard';
import ProfilePageModerationCard from '../../components/ProfilePageModerationCard/ProfilePageModerationCard';
import pic from '../../assets/Images/1166721.jpg';

export default function MyProfilePage() {
  const arr = ['OVERVIEW', 'POSTS', 'COMMENTS'];
  const links = ['profile_user', 'submitted', 'comments', 'history', 'saved', 'hidden', 'upvoted', 'downvoted'];
  const communities = [
    {
      name: 'My Community',
      picture: pic,
      growing: true,
      goingDown: false,
      rank: 1,
      joined: false,
      userCommunity: false,
      noMembers: '1.6m',
      noOnlineMembers: '825',
      description: 'For Your Health'
    },
    {
      name: 'My Community',
      picture: pic,
      growing: false,
      goingDown: true,
      rank: 1,
      joined: false,
      userCommunity: true,
      noMembers: '1.6m',
      noOnlineMembers: '825',
      description: 'For Your Health'
    },
    {
      name: 'My Community',
      picture: pic,
      growing: false,
      goingDown: true,
      rank: 1,
      joined: false,
      userCommunity: true,
      noMembers: '1.6m',
      noOnlineMembers: '825',
      description: 'For Your Health'
    }
  ];
  //   const [optionButton, optionButtonState] = useState({
  //     title: 'More Options',
  //     showMore: false,
  //     listItems: []
  //   });
  //   const MoreOptionsHandler = () => {
  //     const showless = !optionButton.showMore;
  //     optionButtonState({
  //       title: 'More Options',
  //       showMore: showless,
  //       listItems: []
  //     });
  //   };
  //   const FewerOptionsHandler = () => {
  //     const showmore = !optionButton.showMore;
  //     optionButtonState({
  //       title: 'Fewer Options',
  //       showMore: showmore,
  //       listItems: [
  //         'Add Custom Feed',
  //         'Invite Someone to chat'
  //       ]
  //     });
  //   };
  //   const buttonHandler = () => {
  //     if (optionButton.showMore) {
  //       MoreOptionsHandler();
  //     } else {
  //       FewerOptionsHandler();
  //     }
  //   };
  return (
    <div>
      <ProfileNav
        arr={arr}
        olinks={links}
      />
      <div style={{ display: 'flex', padding: '2rem 2.4rem' }}>
        <Outlet />
        <div>
          <ProfileUserCard />
          <ProfilePageModerationCard
            communities={communities}
          />
        </div>
      </div>

    </div>
  );
}
