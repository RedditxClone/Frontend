/* eslint-disable*/
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Store } from './store/Store';
import './index.css';
// Components
// import DefaultUserPage from './pages/DefaultUserPage/DefaultUserPage';
// import HomePage from './pages/HomePage/HomePage';
// import Login from './pages/Login/Login';
// import SignUp from './pages/SignUp/SignUp';
// import ForgetUserName from './pages/ForgetUserName/ForgetUserName';
// import ForgetUserPassword from './pages/ForgetUserPassword/ForgetUserPassword';
// import ResetPassword from './pages/ResetPassword/ResetPassword';
// import ChooseUserName from './pages/ChooseUserName/ChooseUserName';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
// import SubredditCards from './components/SubredditCards/SubredditCards';
// import AccountSettings from './components/AccountSettings/AccountSettings';
// import UserSettings from './pages/UserSettings/UserSettings';
// import ProfileSettings from './components/ProfileSettings/ProfileSettings';
// import SafetyPrivacySettings from './components/SafetyPrivacySettings/SafetyPrivacySettings';
// import FeedSettings from './components/FeedSettings/FeedSettings';
// import Notifications from './components/Notifications/Notifications';
// import Emails from './components/Emails/Emails';
// import Subscriptions from './components/Subscriptions/Subscriptions';
// import ChatMessaging from './components/ChatMessaging/ChatMessaging';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import CommentsForSamePostCard from './components/CommentsCard/CommentsCard';
import CommentTap from './components/CommentTap/CommentTap';
import ProfilePost from './components/PorfileUpvotesPosts/ProfileUpvotePosts';
import OtherProfilePage from './pages/OtherProfilePage/OtherProfilePage';
// Routes
// const communities = [
//   {
//     name: 'My Community',
//     picture: pic,
//     growing: true,
//     goingDown: false,
//     rank: 1,
//     joined: false,
//     userCommunity: false,
//     noMembers: '1.6m',
//     noOnlineMembers: '825',
//     description: 'For Your Health'
//   },
//   {
//     name: 'My Community',
//     picture: pic,
//     growing: false,
//     goingDown: true,
//     rank: 1,
//     joined: false,
//     userCommunity: true,
//     noMembers: '1.6m',
//     noOnlineMembers: '825',
//     description: 'For Your Health'
//   },
//   {
//     name: 'My Community',
//     picture: pic,
//     growing: false,
//     goingDown: true,
//     rank: 1,
//     joined: false,
//     userCommunity: true,
//     noMembers: '1.6m',
//     noOnlineMembers: '825',
//     description: 'For Your Health'
//   }
// ];
const postCommentInfo = {
  userName: 'Aya_husein',
  postTitle: 'test',
  postLink: 'www.google.com',
  communityName: 'quotes',
  postOwner: 'Aya_husein',
  
  
};
const commentsForSamePost = [
  {
    userName: 'Aya_husein',
    noVotes: 3,
    time: '2 minutes ago',
    content: 'kkkkkkkk',
    reply: true,
    isModerator: true,
    spam:false,
    locked:false,
    approved:false,
    removed:false,
    saved:false,
    commentLink:'www.google.com',
    hasRemovalReason:false,
    removalReason:'',
    removalInfo:{
      removalTime:'',
      removerUser:""///??
    }
  },
  {
    userName: 'Aya_husein',
    noVotes: 3,
    time: '2 minutes ago',
    content: 'kkkkkkkk',
    reply: false,
    isModerator: false,
    spam:false,
    locked:false,
    approved:false,
    removed:false,
    saved:false,
    commentLink:'www.google.com',
    hasRemovalReason:false,
    removalReason:''
  },
  {
    userName: 'Aya_husein',
    noVotes: 3,
    time: '2 minutes ago',
    content: 'kkkkkkkk',
    reply: true,
    isModerator: true,
    spam:false,
    locked:false,
    approved:false,
    removed:false,
    saved:false,
    commentLink:'www.google.com',
    hasRemovalReason:false,
    removalReason:''
  }
];
const comments=[
  {
    postCommentInfo:postCommentInfo,
    commentsForSamePost:commentsForSamePost  
  },
  {
    postCommentInfo:postCommentInfo,
    commentsForSamePost:commentsForSamePost  
  },
  {
    postCommentInfo:postCommentInfo,
    commentsForSamePost:commentsForSamePost  
  }
];


// // import PostPorfileList from './components/PostListProfile/PostListProfile';
// // Routes

const Data = {
  id: 1,
  votes: 3,
  community_id: 4,
  user_id: 2,
  community_name: 'quran',
  posted_by: 'nada osman',
  posted_at: '1 minute ago',
  post_type: 'img',
  title: 'this is sport topic',
  flair_name: 'Question'
};
// const routes = createBrowserRouter([
//   {
//     path: '/',

//   },
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MyProfilePage />,
    children: [
      {
        path: 'submitted',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
      // {
      //   path: 'comments',
      //   element: (
      //     <CommentTap comments={comments} />
      //   )
      // },
      {
        path: 'history',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
      {
        path: 'saved',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
      {
        path: 'hidden',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
      {
        path: 'upvoted',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
      {
        path: 'downvoted',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      },
    ]
  },
  {
    path: 'profile_user',
    element: <OtherProfilePage />,
    children: [
      {
        path: 'submitted',
        element: (
          <ProfilePost
            postData={Data}
            isCommunityPost={false}
            isPostFullDetailsMode={false}
            isModeratorMode={false}
            post_type="img"
            title="this is sport topic"
            flair_name="Question"
          />
        )
      }
    ]

  }
  // <CommentTap comments={comments} />
  // ,
  // {
  //   path: '/auth',
  //   element: <DefaultUserPage />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: 'login',
  //       element: <Login />
  //     },
  //     {
  //       path: 'signup',
  //       element: <SignUp />
  //     },
  //     {
  //       path: 'forgetuname',
  //       element: <ForgetUserName />
  //     },
  //     {
  //       path: 'forgetupassword',
  //       element: <ForgetUserPassword />
  //     },
  //     {
  //       path: 'resetupassword',
  //       element: <ResetPassword />
  //     }
  //   ]
  // },
  // {
  //   path: '/new/chooseuname',
  //   element: <ChooseUserName />
  // },
  // {
  //   path: '/home',
  //   element: <HomePage />
  // },
  // {
  //   path: '/subreddit',
  //   element: <SubredditCards />
  // },
  // {
  //   path: '/settings',
  //   element: <UserSettings />,
  //   children: [
  //     {
  //       path: 'account',
  //       element: <AccountSettings />
  //     },
  //     {
  //       path: 'profile',
  //       element: <ProfileSettings />
  //     },
  //     {
  //       path: 'privacy',
  //       element: <SafetyPrivacySettings />
  //     },
  //     {
  //       path: 'feed',
  //       element: <FeedSettings />
  //     },
  //     {
  //       path: 'notifications',
  //       element: <Notifications />
  //     },
  //     {
  //       path: 'emails',
  //       element: <Emails />
  //     },
  //     {
  //       path: 'premium',
  //       element: <Subscriptions />
  //     },
  //     {
  //       path: 'messaging',
  //       element: <ChatMessaging />
  //     }
  //   ]
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <RouterProvider router={routes} />
  </Provider>
);
