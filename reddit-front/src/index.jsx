/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-brace-presence */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import CategoriesCard from './components/CategoriesCard/CategoriesCard';
import pic from './assets/Images/1166721.jpg';
// import CommunityHoverCard from './components/Categories/CommunityHoverCard';
import { Store } from './store/Store';
// import App from './App';
import './index.css';
import AlphabeticCategoriesPage from './pages/AlphabeticCategoriesPage/AlphabeticCategoriesPage';
import LetterCategory from './pages/AlphabeticCategoriesPage/LetterCategory';
// Components
import DefaultUserPage from './pages/DefaultUserPage/DefaultUserPage';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ForgetUserName from './pages/ForgetUserName/ForgetUserName';
import ForgetUserPassword from './pages/ForgetUserPassword/ForgetUserPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ChooseUserName from './pages/ChooseUserName/ChooseUserName';
import Subreddit from './pages/Subreddit/Subreddit';
import AccountSettings from './components/AccountSettings/AccountSettings';
import UserSettings from './pages/UserSettings/UserSettings';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import SafetyPrivacySettings from './components/SafetyPrivacySettings/SafetyPrivacySettings';
import FeedSettings from './components/FeedSettings/FeedSettings';
import Notifications from './components/Notifications/Notifications';
import Emails from './components/Emails/Emails';
import Subscriptions from './components/Subscriptions/Subscriptions';
import ChatMessaging from './components/ChatMessaging/ChatMessaging';
import CreatePost from './pages/CreatePost/CreatePost';
import SearchResults from './pages/SearchResults/SearchResults';
import ModToolsPage from './pages/ModToolsPage/ModToolsPage';
import AllMessages from './components/AllMessages/AllMessages';
import UnreadMessages from './components/UnreadMessages/UnreadMessages';
import MessagesComponent from './components/MessagesComponent/MessagesComponent';
import PostRepliesMessages from './components/PostRepliesMessages/PostRepliesMessages';
import UsernameMentionsMessages from './components/UsernameMentionsMessages/UsernameMentionsMessages';
import SentPrivateMessage from './components/SentPrivateMessage/SentPrivateMessage';
import SentMessage from './components/SentMessage/SentMessage';
import Messages from './pages/Messages/Messages';
import PostFullPage from './pages/PostFullPage/PostFullPage';
import Error404 from './pages/Error404/Error404';

const links = [
  '/subreddit/a-1',
  '/subreddit/b-1',
  '/subreddit/c-1',
  '/subreddit/d-1'
];
const arr = [
  '/subreddit/a-1',
  '/subreddit/b-1',
  '/subreddit/c-1',
  '/subreddit/d-1'
];
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
const buttonText = 'Music';
const communitiesCardCommunities = communities.slice(0, 5);
const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/auth',
    element: <DefaultUserPage />,
    errorElement: <Error404 />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'forgetuname',
        element: <ForgetUserName />
      },
      {
        path: 'forgetupassword',
        element: <ForgetUserPassword />
      },
      {
        path: 'resetupassword',
        element: <ResetPassword />
      }
    ]
  },
  {
    path: '/new/chooseuname',
    element: <ChooseUserName />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/r/:subredditName',
    element: <Subreddit />
  },
  {
    path: '/r/:subredditName/posts/:postId',
    element: <PostFullPage />
  },
  {
    path: '/settings',
    element: <UserSettings />,
    children: [
      {
        path: 'account',
        element: <AccountSettings />
      },
      {
        path: 'profile',
        element: <ProfileSettings />
      },
      {
        path: 'privacy',
        element: <SafetyPrivacySettings />
      },
      {
        path: 'feed',
        element: <FeedSettings />
      },
      {
        path: 'notifications',
        element: <Notifications />
      },
      {
        path: 'emails',
        element: <Emails />
      },
      {
        path: 'premium',
        element: <Subscriptions />
      },
      {
        path: 'messaging',
        element: <ChatMessaging />
      }
    ]
  },
  {
    path: '/submit',
    element: <CreatePost />
  },
  {
    path: '/search',
    children: [
      {
        path: 'post/:searchKey',
        element: <SearchResults type={0} />
      },
      {
        path: 'comment/:searchKey',
        element: <SearchResults type={1} />
      },
      {
        path: 'sr/:searchKey',
        element: <SearchResults type={2} />
      },
      {
        path: 'user/:searchKey',
        element: <SearchResults type={3} />
      }
    ]
  },
  {
    path: '/:subredditName/about/:activeItem',
    element: <ModToolsPage />
  },
  {
    path: '/message/',
    element: <Messages />,
    children: [
      {
        path: '/message/inbox',
        element: <AllMessages />
      },
      {
        path: '/message/unread',
        element: <UnreadMessages />
      },
      {
        path: '/message/messages',
        element: <MessagesComponent />
      },
      {
        path: '/message/selfreply',
        element: <PostRepliesMessages />
      },
      {
        path: '/message/mentions',
        element: <UsernameMentionsMessages />
      },
      {
        path: '/message/compose',
        element: <SentPrivateMessage />
      },
      {
        path: '/message/sent',
        element: <SentMessage />
      }
    ]
  },
  { path: '/error', element: <Error404 /> },
  {
    path: '/subreddits/leaderboard',
    element: (
      <CategoriesPage
        communitiesCardCommunities={communitiesCardCommunities}
        buttonText={buttonText}
        buttons={buttons1}
        pic={pic}
      />
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          // <CommunityHoverCard community={communities[0]} />
          <CategoriesCard
            communities={communities}
            topText=" Communities"
          />
        )
      },
      {
        path: 'near-you',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Near You"
          />
        )
      },
      {
        path: 'moderating',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Moderating"
          />
        )
      },
      {
        path: 'sports',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Sports"
          />
        )
      },
      {
        path: 'gaming',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Gaming"
          />
        )
      },
      {
        path: 'news',
        element: (
          <CategoriesCard
            communities={communities}
            topText="News"
          />
        )
      },
      {
        path: 'tv',
        element: (
          <CategoriesCard
            communities={communities}
            topText="TV"
          />
        )
      },
      {
        path: 'aww',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Aww"
          />
        )
      },
      {
        path: 'memes',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Memes"
          />
        )
      },
      {
        path: 'pics_and_gifs',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Pics & Gifs"
          />
        )
      },
      {
        path: 'travel',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Travel"
          />
        )
      },
      {
        path: 'tech',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Tech"
          />
        )
      },
      {
        path: 'music',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Music"
          />
        )
      },
      {
        path: 'art_and_design',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Art & Design"
          />
        )
      },
      {
        path: 'beauty',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Beauty"
          />
        )
      },
      {
        path: 'books_and_writing',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Books & Writing"
          />
        )
      },
      {
        path: 'crypto',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Crypto"
          />
        )
      },
      {
        path: 'discussion',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Discussion"
          />
        )
      },
      {
        path: 'e3',
        element: (
          <CategoriesCard
            communities={communities}
            topText="E3"
          />
        )
      },
      {
        path: 'fashion',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Fashion"
          />
        )
      },
      {
        path: 'finance_and_business',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Finance & Business"
          />
        )
      },
      {
        path: 'food',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Food"
          />
        )
      },
      {
        path: 'health_and_fitness',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Health & Fitness"
          />
        )
      },
      {
        path: 'learning',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Learning"
          />
        )
      },
      {
        path: 'mindblowing',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Mindblowing"
          />
        )
      },
      {
        path: 'outdoors',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Outdoors"
          />
        )
      },
      {
        path: 'parenting',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Parenting"
          />
        )
      },
      {
        path: 'photography',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Photography"
          />
        )
      },
      {
        path: 'relationships',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Relationships"
          />
        )
      },
      {
        path: 'science',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Science"
          />
        )
      },
      {
        path: 'videos',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Videos"
          />
        )
      },
      {
        path: 'vroom',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Vroom"
          />
        )
      },
      {
        path: 'wholesome',
        element: (
          <CategoriesCard
            communities={communities}
            topText="Wholesome"
          />
        )
      }
    ]
  },
  {
    path: '/subreddit',
    element: <AlphabeticCategoriesPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'a-1',
        element: (
          <LetterCategory
            letter="A"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'b-1',
        element: (
          <LetterCategory
            letter="B"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'c-1',
        element: (
          <LetterCategory
            letter="C"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'd-1',
        element: (
          <LetterCategory
            letter="D"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'e-1',
        element: (
          <LetterCategory
            letter="E"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'f-1',
        element: (
          <LetterCategory
            letter="F"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'g-1',
        element: (
          <LetterCategory
            letter="G"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'h-1',
        element: (
          <LetterCategory
            letter="H"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'i-1',
        element: (
          <LetterCategory
            letter="I"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'j-1',
        element: (
          <LetterCategory
            letter="J"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'k-1',
        element: (
          <LetterCategory
            letter="K"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'l-1',
        element: (
          <LetterCategory
            letter="L"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'm-1',
        element: (
          <LetterCategory
            letter="M"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'n-1',
        element: (
          <LetterCategory
            letter="N"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'p-1',
        element: (
          <LetterCategory
            letter="P"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'q-1',
        element: (
          <LetterCategory
            letter="Q"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'r-1',
        element: (
          <LetterCategory
            letter="R"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 's-1',
        element: (
          <LetterCategory
            letter="S"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 't-1',
        element: (
          <LetterCategory
            letter="T"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'u-1',
        element: (
          <LetterCategory
            letter="U"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'v-1',
        element: (
          <LetterCategory
            letter="V"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'w-1',
        element: (
          <LetterCategory
            letter="W"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'x-1',
        element: (
          <LetterCategory
            letter="X"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'y-1',
        element: (
          <LetterCategory
            letter="Y"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: 'z-1',
        element: (
          <LetterCategory
            letter="Z"
            links={links}
            arr={arr}
          />
        )
      },
      {
        path: '0-1',
        element: (
          <LetterCategory
            letter="#"
            links={links}
            arr={arr}
          />
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={routes} />
  </Provider>
);
