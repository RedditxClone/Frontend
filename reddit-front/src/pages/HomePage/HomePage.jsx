/* eslint-disable */
import { useSelector } from 'react-redux';
import pic from '../../assets/Images/1166721.jpg';
import './HomePage.style.css';
import AppBar from '../../components/Layout/AppBar/AppBar';
import BestHotNewCard from '../../components/HomePageCards/BestHotNewCard';
import CreatePostCard from '../../components/HomePageCards/CreatePostCard';
import PostsList from '../../components/PostsList/PostsList';
import HomeCommunitiesCard from '../../components/HomePageCards/HomeCommunitiesCard';
import HomeLanguagesCard from '../../components/HomePageCards/HomeLanguagesCard';
import HomeCreatePostCard from '../../components/HomePageCards/HomeCreatePostCard';
import { useState } from 'react';
import getUser from '../../services/requests/getUser';
import FetchUserData from '../../utilities/FetchUserData/FetchUserData';

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

/**
 * This Page for the home page ( navbar, posts, communities recommendations)
 *
 */

function HomePage() {
  let { user, isAuth } = useSelector((state) => state.auth);
  const [sortButton, setSortButton] = useState({ sort: null, time: null });
  console.log('sortButton', sortButton);
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main className="home-page_container">
        <div className="post-section">
          {isAuth && <CreatePostCard />}
          <BestHotNewCard setSortButton={setSortButton} />
          {/* sort top  */}
          {sortButton.sort === 'Top' ? (
            <PostsList
              isHomePagePost={true}
              sort={'top'}
              time="alltime"
            />
          ) : null}
          {/* sort top , now */}
          {sortButton.sort === 'Top' && sortButton.time === 'Now' ? (
            <PostsList
              isHomePagePost={true}
              sort={'top'}
              time="now"
            />
          ) : null}
          {/* sort top , today */}
          {sortButton.sort === 'Top' && sortButton.time === 'Today' ? (
            <PostsList
              isHomePagePost={true}
              sort={'top'}
              time="today"
            />
          ) : null}
          {/* sort top , this week */}
          {sortButton.sort === 'Top' && sortButton.time === 'This Week' ? (
            <PostsList
              isHomePagePost={true}
              sort={'top'}
              time="thisweek"
            />
          ) : null}
          {/* sort best*/}
          {sortButton.sort === 'Best' || sortButton.sort === null ? (
            <PostsList
              isHomePagePost={true}
              sort={'best'}
            />
          ) : null}
          {/* sort hot*/}
          {sortButton.sort === 'Hot' || sortButton.sort === null ? (
            <PostsList
              isHomePagePost={true}
              sort={'hot'}
            />
          ) : null}
          {/* sort new*/}
          {sortButton.sort === 'New' || sortButton.sort === null ? (
            <PostsList
              isHomePagePost={true}
              sort={'new'}
            />
          ) : null}
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

          {isAuth && (
            <div>
              <div className="card-wrapper">
                <HomeCreatePostCard />
              </div>

              <div className="card-wrapper">
                <HomeLanguagesCard />
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
export default HomePage;
