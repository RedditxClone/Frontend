/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';
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
import {
  getFlairsList,
  getModeratorsList,
  fetchSubredditData,
  getRulesList,
  getAboutInfo
} from '../../services/requests/Subreddit';
/**
 * This Component for the Community Cards.
 *
 */

export default function Subreddit(subredditId) {
  const baseColor = '#0079D3';
  const highlightColor = '#0079D3';
  const color = '#ccc';
  const isModeratorMode = true;
  subredditId = 1; // for testing only
  const [moderatorsList, setModeratorsList] = useState([]);
  const [flairsList, setFlairsList] = useState([]);
  const [rulesList, setRulesList] = useState([]);
  const [aboutInfo, setAboutInfo] = useState([]);
  const [subredditInfo, setSubredditInfo] = useState([]);

  // useEffect(() => {
  //   // Fetching the data of the moderators
  //   const fetchSubredditInfo = async () => {
  //     const results = await fetchSubredditData({ id: subredditId });
  //     setSubredditInfo(results);
  //   };

  //   // Fetching the data of the moderators
  //   const fetchModerators = async () => {
  //     const results = await getModeratorsList({ id: subredditId });
  //     setModeratorsList(results[0]);
  //   };

  //   // Fetching the data of the flairs
  //   const fetchFlairs = async () => {
  //     const results = await getFlairsList({ id: subredditId });
  //     setFlairsList(results[0]);
  //   };

  //   // Fetching the data of the subreddit rules
  //   const fetchRules = async () => {
  //     const results = await getRulesList({ id: subredditId });
  //     setRulesList(results[0]);
  //   };

  //   // Fetching the about info of the subreddit
  //   const fetchInfo = async () => {
  //     const results = await getAboutInfo({ id: subredditId });
  //     setAboutInfo(results[0]);
  //   };

  //   fetchModerators();
  //   fetchFlairs();
  //   fetchRules();
  //   fetchInfo();
  //   fetchSubredditInfo();
  // }, []);

  return (
    <ThemeProvider theme={subredditTheme}>
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
        <SubredditBackground
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <SubredditInfo
          color="red"
          baseColor="#0079D3"
          isJoined={subredditInfo.joined}
          subredditId={subredditId}
          name={subredditInfo.name}
          username={subredditInfo.username}
          notificationsStyle={subredditInfo.notifications_style}
        />
        <CardsContainer style={{ backgroundColor: color }}>
          <PostsContainer>
            <CreatePostCard />
            <BestHotNewCard />
            <PostsList
              sortType="random"
              isCommunityPost={true}
              isModeratorMode={isModeratorMode}
              isHomePagePost={false}
            />
          </PostsContainer>
          <SubredditSideBar
            baseColor={baseColor}
            highlightColor={highlightColor}
            isModeratorMode={isModeratorMode}
            aboutInfo={aboutInfo}
            flairsList={flairsList}
            rulesList={rulesList}
            subredditId={subredditId}
          />
          <BackToTop id="subreddit" />
        </CardsContainer>
      </Box>
    </ThemeProvider>
  );
}
