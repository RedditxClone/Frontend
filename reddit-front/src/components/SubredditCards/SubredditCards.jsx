/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { ThemeProvider, Box } from '@mui/material';
import SubredditBackground from './SubredditBackground/SubredditBackground';
import SubredditInfo from './SubredditInfo/SubredditInfo';
import SubredditSideBar from './SubredditSideBar/SubredditSideBar';
import BestHotNewCard from '../HomePageCards/BestHotNewCard';
import CreatePostCard from '../HomePageCards/CreatePostCard';
import BackToTop from '../BackToTop/BackToTop';
import AppBar from '../Layout/AppBar/AppBar';
import {
  CardsContainer,
  PostsContainer,
  subredditTheme
} from './SubredditCards.Style';
import PostsList from '../PostsList/PostsList';

/**
 * This Component for the Community Cards.
 *
 */

export default function SubredditCards() {
  let baseColor = 'lime';
  let color = '#ccc';
  let isModeratorMode = true;
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
          baseColor="green"
          highlightColor="red"
        />
        <SubredditInfo
          color="red"
          baseColor="lime"
        />
        <CardsContainer style={{ backgroundColor: color }}>
          <PostsContainer>
            <CreatePostCard />
            <BestHotNewCard />
            <PostsList
              isCommunityPost={true}
              isModeratorMode={isModeratorMode}
            />
          </PostsContainer>
          <SubredditSideBar
            baseColor={baseColor}
            highlightColor="red"
            isModeratorMode={isModeratorMode}
          />
          <BackToTop id="subreddit" />
        </CardsContainer>
      </Box>
    </ThemeProvider>
  );
}
