/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  RootContainer,
  ResultsContainer,
  SingleResultContainer
} from '../PeopleResults/PeopleResults.Style';

import {
  PostInfo,
  StyledLogo,
  StyledSpan,
  Username,
  CommentContainer,
  PostStatistics,
  PostContent,
  CommentContent,
  Comment,
  GoToThread,
  UpVotes,
  Comments
} from './CommentsResults.Style';
import retrieveResults from '../../../services/requests/Search';

import { divideBigNumber } from '../../../utilities/Helpers';

/**
 * This Component for the showing the comments that contains the key of the searching.
 *
 */

function CommentsResults() {
  // states
  const searchKey = 'test'; // for testing
  const [result, setResult] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchResults = async () => {
      const results = await retrieveResults({
        key: searchKey,
        searchingCategory: 'comments'
      });
      setResult(results);
      setIsFinished(true);
    };
    fetchResults();
  }, []);

  return (
    <RootContainer data-testid="comments-results">
      <ResultsContainer>
        {result.length === 0 && isFinished ? (
          <h3>No data found.</h3>
        ) : (
          result.map((item, index) => (
            //  result container
            <SingleResultContainer
              key={`people-result-${index}`}
              sx={{
                flexDirection: 'column',
                ':hover': {
                  border: '.5px solid black',
                  borderRadius: '5px'
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
                <Username>{`r/${item.subreddit_name}`}</Username>
                <StyledSpan>
                  <span>
                    Posted by
                    <Username> {` u/${item.posted_by} `}</Username>
                    {`${item.posted_since} ago`}
                  </span>
                </StyledSpan>
              </PostInfo>

              {/* result  */}
              <CommentContainer>
                <PostContent>{`${item.post_text}`}</PostContent>
                <CommentContent>
                  {/* Reusing the Same styles of the post info */}
                  <PostInfo>
                    <StyledLogo sx={{ width: '26px', height: '26px' }}>
                      <img
                        style={{
                          width: '100%',
                          height: '100%'
                        }}
                        src="https://styles.redditmedia.com/t5_5o0s6e/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNjIyZDhmZWE0NjAzYmE5ZWRhZjEwODRiNDA3MDUyZDhiMGE5YmVkN182MTkwODI_rare_aa14d1a2-ce7a-4353-a124-2711a56af3e0-headshot.png?width=256&height=256&frame=1&crop=256:256,smart&s=cae5091026e76c645be8d4f94d23208bf538924a"
                        alt="community logo"
                      />
                    </StyledLogo>
                    <Username sx={{ fontWeight: '600', fontSize: '12px' }}>
                      {`u/${item.commented_by}`}
                    </Username>
                    <StyledSpan>{`${item.commented_since}`} ago</StyledSpan>
                  </PostInfo>

                  {/* Comment result  */}
                  <Comment>{`${item.comment_content}`}</Comment>

                  <PostStatistics>
                    <UpVotes sx={{ margin: '1rem 1rem .5rem 2rem' }}>
                      {`${divideBigNumber(item.comment_upvotes_count)}`} upvotes
                    </UpVotes>
                  </PostStatistics>
                </CommentContent>
                <GoToThread>Go to thread</GoToThread>
              </CommentContainer>

              {/* Number of comments and upvotes  */}
              <PostStatistics>
                <UpVotes>
                  {`${divideBigNumber(item.post_upvotes_count)}`} upvotes
                </UpVotes>
                <Comments>
                  {`${divideBigNumber(item.post_comments_count)}`} Comments
                </Comments>
              </PostStatistics>
            </SingleResultContainer>
          ))
        )}
      </ResultsContainer>
    </RootContainer>
  );
}

export default CommentsResults;
