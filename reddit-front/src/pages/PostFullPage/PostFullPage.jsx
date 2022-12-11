/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';
import { ThemeProvider, Box } from '@mui/material';

import BackToTop from '../../components/BackToTop/BackToTop';
import AppBar from '../../components/Layout/AppBar/AppBar';
import RulesCard from '../../components/SubredditCards/RulesCard/RulesCard';
import AboutCard from '../../components/SubredditCards/AboutCard/AboutCard';
import ModeratorsCard from '../../components/SubredditCards/ModeratorsCard/ModeratorsCard';
import {
  CardsContainer,
  PostsContainer,
  subredditTheme
} from '../Subreddit/Subreddit.Style';

import {
  SideBarContainer,
  SideBarContent
} from '../../components/SubredditCards/SubredditSideBar/SubredditSideBar.Style';

/**
 * This Component for the Post Page.
 *
 */

function PostFullPage({ postId }) {
  const baseColor = '#0079D3';
  const highlightColor = '#0079D3';
  const color = '#ccc';
  let subredditId = 1; // for testing only

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
          justifyContent: 'flex-start',
          borderLeft: '8rem solid #2B2C2C',
          borderRight: '8rem solid #2B2C2C',
          [subredditTheme.breakpoints.down('md_2')]: {
            border: 'none'
          }
        }}
      >
        <CardsContainer style={{ backgroundColor: color }}>
          <PostsContainer>
            <div style={{ height: '750px', border: '1px solid black' }}>
              Post is here
            </div>
            <div style={{ height: '250px', border: '1px solid black' }}>
              Write comment is here
            </div>
            <div style={{ height: '250px', border: '1px solid black' }}>
              comments are here
            </div>
          </PostsContainer>

          <SideBarContainer>
            <SideBarContent>
              <AboutCard
                baseColor={baseColor}
                highlightColor={highlightColor}
                isModeratorMode={false}
                subredditId={subredditId}
              />

              <RulesCard
                baseColor={baseColor}
                subredditId={subredditId}
              />
              <ModeratorsCard
                baseColor={baseColor}
                highlightColor={highlightColor}
                subredditId={subredditId}
              />
            </SideBarContent>
          </SideBarContainer>

          <BackToTop id="subreddit" />
        </CardsContainer>
      </Box>
    </ThemeProvider>
  );
}

export default PostFullPage;
