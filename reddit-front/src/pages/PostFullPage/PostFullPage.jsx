/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-const */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider, Box } from '@mui/material';

import BackToTop from '../../components/BackToTop/BackToTop';
import AppBar from '../../components/Layout/AppBar/AppBar';
import RulesCard from '../../components/SubredditCards/RulesCard/RulesCard';
import AboutCard from './AboutCard/AboutCard';
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
import PostCard from './PostCard/PostCard';

import { getPost } from '../../services/requests/Post';
import { getSubreddit } from '../../services/requests/Subreddit';
import Loader from '../../utilities/Loader/Loader';

/**
 * This Component for the Community Cards.
 *
 */

function PostFullPage() {
  const { postId, subredditName } = useParams();

  const [postData, setPostData] = useState([]);
  const [subredditData, setSubredditData] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [loadingSubreddit, setLoadingSubreddit] = useState(true);
  const [goToErrorPage, setGoToErrorPage] = useState(false);

  const color = '#ccc';
  let subredditId = 1; // for testing only

  // Fetching the post info
  const fetchPostInfo = async () => {
    const results = await getPost(postId);
    if (results.statusCode === 400) setGoToErrorPage(true);
    if (results && results.subredditInfo.name !== subredditName) {
      setGoToErrorPage(true);
    }
    setPostData(results);
    setLoadingPost(false);
  };

  // Fetching the about info of the subreddit
  const fetchSubredditInfo = async () => {
    const subredditInfo = await getSubreddit(subredditName);
    if (subredditInfo.statusCode === 400) setGoToErrorPage(true);
    setSubredditData(subredditInfo);
    setLoadingSubreddit(false);
  };

  useEffect(() => {
    // calling fetching methods
    fetchPostInfo();
    fetchSubredditInfo();
  }, []);

  return (
    <ThemeProvider theme={subredditTheme}>
      {!goToErrorPage ? (
        loadingPost || loadingSubreddit ? (
          <Loader />
        ) : (
          <>
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
                  <div>
                    <PostCard
                      postData={postData}
                      isCommunityPost={true}
                      isPostFullDetailsMode={true}
                      isModeratorMode={postData.subredditInfo.isModerator}
                    />
                  </div>
                  <div>Write comment is here</div>
                  <div>comments are here</div>
                </PostsContainer>

                <SideBarContainer>
                  <SideBarContent>
                    <AboutCard
                      isJoined={postData.subredditInfo.isJoin}
                      subredditId={postData.subredditInfo.id}
                      subredditName={postData.subredditInfo.name}
                      aboutInfo={{
                        createdDate: subredditData.createdDate,
                        memberCount: subredditData.users,
                        onlineCount: 0,
                        description: subredditData.description,
                        logo: subredditData.logo
                      }}
                    />

                    {/* <RulesCard rulesList={subredditData.rules} /> */}
                    <ModeratorsCard moderatorsList={subredditData.moderators} />
                  </SideBarContent>
                </SideBarContainer>

                <BackToTop id="subreddit" />
              </CardsContainer>
            </Box>
          </>
        )
      ) : (
        window.location.replace('/error')
      )}
    </ThemeProvider>
  );
}

export default PostFullPage;
