/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';
import SubredditBackground from '../../components/SubredditCards/SubredditBackground/SubredditBackground';
import SubredditInfo from '../../components/SubredditCards/SubredditInfo/SubredditInfo';
import SubredditSideBar from '../../components/SubredditCards/SubredditSideBar/SubredditSideBar';
import BestHotNewCard from '../../components/HomePageCards/BestHotNewCard';
import CreatePostCard from '../../components/HomePageCards/CreatePostCard';
import BackToTop from '../../components/BackToTop/BackToTop';
import AppBar from '../../components/Layout/AppBar/AppBar';
import {
  CardsContainer,
  PostsContainer,
  subredditTheme
} from './Subreddit.Style';
import PostsList from '../../components/PostsList/PostsList';
import { getSubreddit } from '../../services/requests/Subreddit';
import Loader from '../../utilities/Loader/Loader';
import FetchUserData from '../../utilities/FetchUserData/FetchUserData';
import { AuthActions } from '../../store/slices/AuthSlice';
import getUser from '../../services/requests/getUser';
/**
 * This Component for the Community Cards.
 *
 */

export default function Subreddit() {
  const location = useLocation();
  const { subredditName } = useParams();
  const [subredditInfo, setSubredditInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDataIsFetched, setUserDataIsFetched] = useState(false);
  const [goToErrorPage, setGoToErrorPage] = useState(false);
  useEffect(() => {
    // Fetching the about info of the subreddit
    const fetchSubredditInfo = async () => {
      console.log(subredditName);
      const results = await getSubreddit(subredditName);
      setSubredditInfo(results);
      if (results.statusCode === 400) setGoToErrorPage(true);
      setLoading(false);
    };

    fetchSubredditInfo();
  }, [location]);

  return (
    <ThemeProvider theme={subredditTheme}>
      <FetchUserData />
      {!loading ? (
        <>
          <AppBar />
          <Box
            id="subreddit"
            data-testid="subreddit-cards"
            className="container"
            component="div"
            sx={{
              width: '100%',
              justifyContent: 'flex-start'
            }}
          >
            <SubredditBackground />
            <SubredditInfo
              isJoined={subredditInfo.joined}
              subredditId={subredditInfo._id}
              subredditName={subredditName}
              subredditTitle={subredditInfo.title}
              name={subredditInfo.name}
              title={subredditInfo.name}
              notificationsStyle={subredditInfo.notificationType}
              logo={subredditInfo.icon}
            />
            <CardsContainer style={{ backgroundColor: '#ccc', height: '100%' }}>
              <PostsContainer>
                <CreatePostCard />
                <BestHotNewCard />
                <PostsList
                  sortType="random"
                  isCommunityPost={true}
                  isModeratorMode={subredditInfo.moderator}
                  isHomePagePost={false}
                  subredditName={subredditInfo.name}
                  sort="top"
                />
              </PostsContainer>
              <SubredditSideBar
                isModeratorMode={subredditInfo.moderator}
                subredditId={subredditInfo._id}
                subredditName={subredditName}
                isJoined={subredditInfo.joined}
                aboutInfo={{
                  createdDate: subredditInfo.createdDate,
                  memberCount: subredditInfo.users,
                  onlineCount: 0,
                  activeTopic: subredditInfo.activeTopic,
                  subTopics: subredditInfo.subTopics,
                  description: subredditInfo.description
                }}
                flairsList={subredditInfo.flairList}
                rulesList={subredditInfo.rules}
                moderatorsList={subredditInfo.moderators}
              />
              <BackToTop id="subreddit" />
            </CardsContainer>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </ThemeProvider>
  );
}
