/* eslint-disable */
import { useSelector } from 'react-redux';
import pic from '../../assets/Images/1166721.jpg';
import './HomePage.style.css';
// import { useNavigate } from 'react-router-dom';
// import { AuthActions } from '../../store/slices/AuthSlice';
import AppBar from '../../components/Layout/AppBar/AppBar';
import BestHotNewCard from '../../components/HomePageCards/BestHotNewCard';
import CreatePostCard from '../../components/HomePageCards/CreatePostCard';
import PostsList from '../../components/PostsList/PostsList';
import HomeCommunitiesCard from '../../components/HomePageCards/HomeCommunitiesCard';
import HomeLanguagesCard from '../../components/HomePageCards/HomeLanguagesCard';
import HomeCreatePostCard from '../../components/HomePageCards/HomeCreatePostCard';
import { useState } from 'react';

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
    },
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
      goingDown: false,
      rank: 1,
      joined: false,
      userCommunity: false,
      noMembers: '1.6m',
      noOnlineMembers: '825',
      description: 'For Your Health'
    }
];

const buttons1 = ['Top', 'Food', 'Near You'];
const buttonText = 'Near You';
export default function HomePage() {
  // const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.auth);
  const [ sortButton, setSortButton ] = useState({sort:null,time:null});
  // const navigate = useNavigate();
  console.log(user);
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className="home-page_container">
        <div className="post-section">
          <CreatePostCard />
          <BestHotNewCard clickedObject={sortButton}/>
          <PostsList />
        </div>
        <div className="cards-section">
          <HomeCommunitiesCard
            buttons1={buttons1}
            buttons2={buttons1}
            pic={pic}
            communities={communities}
            homePageCard={true}
            buttonText={buttonText}
          />
          {/* {isAuth && ( */}
            <div className="card-wrapper">
              <HomeCreatePostCard />
            </div>
          {/* // )} */}
          <div className="card-wrapper">
            <HomeLanguagesCard />
          </div>
        </div>
      </main>
    </>
  );
}
