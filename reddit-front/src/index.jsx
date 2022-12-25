/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-curly-brace-presence */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Store } from './store/Store';
import './index.css';
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
// import DeletePostFlair from './components/PostFlair/DeletePostFlairCard';
// import CancelCard from './components/PostFlair/CancelCard';
// import PostFlairSettingsCard from './components/PostFlair/PostFlairSettingsCard';
// import PostFlair from './components/PostFlair/PostFlair';
// Routes

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
    // element: (
    // <ActionMessage
    //   show="true"
    //   message="issaved"
    // />
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
    path: '/u/:userName/posts/:postId',
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
    path: '/:subredditName/submit',
    element: <CreatePost />
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
    // here
  },
  {
    path: '/:subredditName/about/:activeItem',
    // path: '/aha',
    element: <ModToolsPage />
    // element: <PostFlair />
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
    path: '/r/:subredditName/posts/:postId',
    element: <PostFullPage />
  },
  {
    path: '/user/',
    element: <MyProfilePage />,
    children: [
      // {
      //   path: 'submitted',
      //   element: <HiddenList />
      // },
      // {
      //   path: 'comments',
      //   element: (
      //     <CommentTap comments={comments} />
      //   )
      // },
      // {
      //   path: 'history',
      //   element: <ProfileList />
      // },
      // {
      //   path: 'saved',
      //   element: <ProfileList />
      // },
      {
        path: 'hidden',
        element: (
          // <UpvotePostList
          //   postData={Data}
          //   isCommunityPost={false}
          //   isPostFullDetailsMode={false}
          //   isModeratorMode={false}
          //   post_type="img"
          //   title="this is sport topic"
          //   flair_name="Question"
          // />
          <HiddenList />
        )
      }
      // {
      //   path: 'upvoted',
      //   element: <ProfileList />
      // },
      // {
      //   path: 'downvoted',
      //   element: <DownVoteList />
      // }
    ]
  }
  // {
  //   path: 'profile_user',
  //   element: <OtherProfilePage />,
  //   children: [
  //     {
  //       path: 'submitted',
  //       element: (
  //         <ProfileUpvotePosts
  //           postData={Data}
  //           isCommunityPost={false}
  //           isPostFullDetailsMode={false}
  //           isModeratorMode={false}
  //           post_type="img"
  //           title="this is sport topic"
  //           flair_name="Question"
  //         />
  //       )
  //     } //]
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={routes} />
  </Provider>
);
