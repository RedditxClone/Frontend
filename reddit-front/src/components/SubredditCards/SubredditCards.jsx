/* eslint-disable prefer-const */
import { ThemeProvider, Box } from '@mui/material';
import SubredditBackground from './SubredditBackground/SubredditBackground';
import SubredditInfo from './SubredditInfo/SubredditInfo';
import SubredditSideBar from './SubredditSideBar/SubredditSideBar';
import { CardsContainer, subredditTheme } from './SubredditCards.Style';
/**
 * This Component for the Community Cards.
 *
 */

export default function SubredditCards() {
  let baseColor = 'lime';
  let color = '#ccc';
  let isModeratorMode = false;
  return (
    <ThemeProvider theme={subredditTheme}>
      <Box
        data-testid="subreddit-cards"
        className="container"
        component="div"
        sx={{
          width: '100%'
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
          <Box
            sx={{
              width: '64rem',
              margin: 0,
              padding: 0
            }}
          >
            posts
          </Box>
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
