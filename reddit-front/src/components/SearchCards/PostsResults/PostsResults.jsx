/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  RootContainer,
  SingleResultContainer
} from '../PeopleResults/PeopleResults.Style';
import Loader from '../../../utilities/Loader/Loader';

import { searchTheme } from '../../../pages/SearchResults/SearchCards.Style';
import {
  PostInfo,
  PostStatistics,
  StyledLogo,
  Username,
  StyledSpan,
  UpVotes,
  Comments
} from '../CommentsResults/CommentsResults.Style';
import CommunitiesResults from '../CommunitiesResults/CommunitiesResults';
import PeopleResults from '../PeopleResults/PeopleResults';
import { divideBigNumber } from '../../../utilities/Helpers';
import {
  retrieveResults,
  retrievePostResults
} from '../../../services/requests/Search';
import CreateCommunity from '../../CreateCommunity/CreateCommunity';
import HomeCreatePostCard from '../../HomePageCards/HomeCreatePostCard';

import {
  ResultsContainer,
  SideCardsContainer,
  PostTitle,
  SearchResults,
  Flair,
  ImageContainer
} from './PostsResults.Style';
import '../../PostCard/PostInfo/PostInfo.css';
import Logo from '../../../assets/Images/test.png';

/**
 * @typedef PropType
 * @property {string} searchKey
 */

/**
 * This Component for the showing the search results related to the posts
 *
 */

function PostsResults({ searchKey }) {
  // states
  const [result, setResult] = useState([]);
  const [time, setTime] = useState('');
  const [sort, setSort] = useState('');
  const [statusCode, setStatusCode] = useState(0);

  // Fetching the results by calling the fetch service
  const fetchResults = async () => {
    const results = await retrievePostResults({
      key: searchKey,
      searchingCategory: 'posts',
      sort: sort === '' ? null : sort,
      time: time === '' ? null : time
    });
    setResult(results.data);
    setStatusCode(results.statusCode);
  };

  useEffect(() => {
    fetchResults();
  }, [time, sort]);

  const handleSorting = (event) => {
    fetchResults();
    setSort(event.target.value);
  };
  const handleTiming = (event) => {
    fetchResults();
    setTime(event.target.value);
  };

  return (
    <ThemeProvider theme={searchTheme}>
      {/* Sorting the posts */}
      <Box
        data-testid="search-posts-results"
        sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}
      >
        {/* Sorting the posts */}
        <Box
          className="sort-relevance"
          sx={{
            width: '11rem',
            marginTop: '2rem',
            '& > div label': {
              fontSize: '14px',
              color: 'black',
              fontWeight: '500',
              verticalAlign: 'top'
            }
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="select-sort">Sort</InputLabel>
            <Select
              labelId="select-sort"
              id="demo-simple-select"
              value={sort}
              label="Sort"
              onChange={handleSorting}
              sx={{
                borderRadius: '50px',
                '& svg': {
                  width: '2rem',
                  height: '2rem'
                }
              }}
            >
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={0}
              >
                Relevance
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={1}
              >
                Hot
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={2}
              >
                Top
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={3}
              >
                New
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={4}
              >
                Most Comments
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Sorting the posts relative to the time */}
        <Box
          className="sort-time"
          sx={{
            width: '11rem',
            marginTop: '2rem',
            marginLeft: '2rem',
            '& > div label': {
              fontSize: '14px',
              color: 'black',
              fontWeight: '500',
              verticalAlign: 'top'
            }
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="select-time-label">Time</InputLabel>
            <Select
              labelId="select-time-label"
              id="select-time"
              value={time}
              label="Time"
              onChange={handleTiming}
              sx={{
                borderRadius: '50px',
                '& svg': {
                  width: '2rem',
                  height: '2rem'
                }
              }}
            >
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={0}
              >
                All Time
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={1}
              >
                Past Year
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={2}
              >
                Past Month
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={3}
              >
                Past Week
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={4}
              >
                Past 24 Hours
              </MenuItem>
              <MenuItem
                sx={{ fontSize: '13px' }}
                value={5}
              >
                Past Hour
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Posts results  */}
      <RootContainer
        sx={{
          border: 'none',
          justifyContent: 'space-between'
        }}
      >
        {statusCode === 0 ? (
          <Loader />
        ) : (
          <ResultsContainer
            sx={{
              backgroundColor: 'white',
              marginRight: '1.5rem',
              flexDirection: 'column',
              borderRadius: '5px',
              border: '.5px solid #ccc'
            }}
          >
            {/* // check if failed to fetch the results from the server  */}
            {statusCode === 400 ? (
              <h1
                style={{
                  padding: '.76rem',
                  margin: 0,
                  paddingLeft: '1rem',
                  backgroundColor: '#dae0e6'
                }}
              >
                Failed to fetch the results.
              </h1>
            ) : null}

            {result.length === 0 && statusCode === 200 ? (
              <h3>No data found.</h3>
            ) : (
              result.map((item, index) => (
                //  result container
                <SingleResultContainer
                  key={`people-result-${index}`}
                  sx={{
                    flexDirection: 'column',
                    ':hover': {
                      border: '.5px solid black'
                      // borderRadius: '5px'
                    }
                  }}
                >
                  {/* Post info ( posted by, time, ..) */}
                  <PostInfo>
                    <StyledLogo>
                      <img
                        style={{
                          width: '100%',
                          height: '100%'
                        }}
                        src="https://styles.redditmedia.com/t5_2rr0e/styles/communityIcon_ylhgbe8ngx481.jpg?width=256&s=1bcbaeab5d6b9e79ad2b820ce7bf7b86b1cf3af5"
                        alt="community logo"
                      />
                    </StyledLogo>
                    <Username
                      onClick={() => {
                        window.location.replace(`/r/${item.subreddit.name}`);
                      }}
                    >
                      {`r/${item.subreddit.name}`}
                    </Username>

                    <StyledSpan>
                      <span>
                        Posted by
                        <Username
                          onClick={() => {
                            window.location.replace(
                              `/user/${item.user.username}`
                            );
                          }}
                        >
                          {` u/${item.user.username}`}
                        </Username>
                      </span>
                    </StyledSpan>
                  </PostInfo>

                  {/* Post search result */}
                  <SearchResults>
                    <div>
                      <PostTitle variant="h3">{`${item.title}`}</PostTitle>
                      {item.flair && (
                        <Flair
                          style={{
                            backgroundColor: item.flair.backgroundColor,
                            color: item.flair.textColor
                          }}
                        >
                          {item.flair.text}
                        </Flair>
                      )}
                    </div>
                    <ImageContainer>
                      <img
                        src="https://i.redd.it/5ldbdyaihku91.jpg"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </ImageContainer>

                    {/* {item.post_img && (
                      <ImageContainer>
                        <img
                          src="https://i.redd.it/5ldbdyaihku91.jpg"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </ImageContainer>
                    )} */}
                  </SearchResults>

                  {/* Number of comments and upvotes  */}
                  <PostStatistics>
                    <UpVotes>
                      {divideBigNumber(item.votesCount)} upvotes
                    </UpVotes>
                    <Comments>
                      {divideBigNumber(item.commentCount)} Comments
                    </Comments>
                  </PostStatistics>
                </SingleResultContainer>
              ))
            )}
          </ResultsContainer>
        )}

        <SideCardsContainer>
          <div
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
          >
            <CommunitiesResults
              isSideBarCard={true}
              searchKey={searchKey}
            />
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
          >
            <PeopleResults
              isSideBarCard={true}
              searchKey={searchKey}
            />
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: 'white',
              borderRadius: '5px',
              marginTop: '2rem'
            }}
          >
            <HomeCreatePostCard />
          </div>
        </SideCardsContainer>
      </RootContainer>
    </ThemeProvider>
  );
}

export default memo(PostsResults);
