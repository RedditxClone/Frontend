/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { ThemeProvider, Box } from '@mui/material';
import SubredditBackground from './SubredditBackground/SubredditBackground';
import SubredditInfo from './SubredditInfo/SubredditInfo';
import SubredditSideBar from './SubredditSideBar/SubredditSideBar';
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
      <Box
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
        </CardsContainer>
      </Box>
    </ThemeProvider>
  );
}
