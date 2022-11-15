/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {
  RootContainer,
  ResultsContainer,
  SingleResultContainer,
  NameLogoContainer,
  FollowButton,
  StyledLogoContainer,
  StyledLogo,
  StyledDescription,
  StyledHeading
} from '../PeopleResults/PeopleResults.Style';
import { StyledCommunityName, MembersCount } from './CommunitiesResults.Style';
import { divideBigNumber } from '../../../utilities/Helpers';
import retrieveResults from '../../../services/requests/Search';
import {
  joinSubreddit,
  leaveSubreddit
} from '../../../services/requests/Subreddit';

/**
 * @typedef PropType
 * @property {bool} isSideBarCard // To show the results in a side bar cards
 */

/**
 * This Component for the showing the communities related to the key of the searching.
 *
 */

function CommunitiesResults({ isSideBarCard }) {
  // states
  const searchKey = 'test'; // for testing
  const [result, setResult] = useState([]);
  const slicingSize = isSideBarCard ? 5 : result.length;
  const [isFinished, setIsFinished] = useState(false);

  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchResults = async () => {
      const results = await retrieveResults({
        key: searchKey,
        searchingCategory: 'communities'
      });
      setResult(results);
      setIsFinished(true);
    };
    fetchResults();
  }, []);

  // Handlers
  /**
   * This function divides handles the join button
   * @param {int} subredditId - The number to be divided.
   * @param {bool} currentState - true : joined, false: not joined
   */
  const handleJoinButton = (e, subredditId, currentState) => {
    if (currentState) {
      leaveSubreddit({ id: subredditId });
    } else {
      joinSubreddit({ id: subredditId });
    }
  };

  const handleHoveringOnJoinButton = (e) => {
    if (e.target.dataset.isjoined) {
      e.target.innerHTML = 'Leave';
    }
  };

  const handleHoveringOutJoinButton = (e) => {
    if (e.target.dataset.isjoined) {
      e.target.innerHTML = 'Joined';
    } else {
      e.target.innerHTML = 'Join';
    }
  };

  return (
    <RootContainer
      data-testid="community-results"
      sx={{
        marginTop: isSideBarCard ? '0' : '2rem'
      }}
    >
      <ResultsContainer>
        {isSideBarCard ? <StyledHeading>Communities</StyledHeading> : null}
        {/* result container  */}
        {result.length === 0 && isFinished ? (
          <h3> No data found.</h3>
        ) : (
          result.slice(0, slicingSize).map((item, index) => (
            <SingleResultContainer key={`people-result-${index}`}>
              {/* Name and logo  */}
              <NameLogoContainer>
                <StyledLogoContainer>
                  <StyledLogo
                    data-testid="community-logo-search"
                    src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
                    alt="user_image"
                  />
                </StyledLogoContainer>
                <div>
                  <StyledCommunityName data-testid="community-search">
                    {`r/${item.name}`}
                  </StyledCommunityName>
                  {!isSideBarCard ? (
                    <MembersCount className="subreddit_members_count">
                      {`${divideBigNumber(item.members_count)} Members`}
                    </MembersCount>
                  ) : null}

                  <StyledDescription>
                    {!isSideBarCard
                      ? item.description
                      : `${divideBigNumber(item.members_count)}  Members`}
                  </StyledDescription>
                </div>
              </NameLogoContainer>

              {/* follow button  */}
              <FollowButton
                data-testid="join-button"
                data-isJoined={item.joined}
                onClick={() =>
                  handleJoinButton(this, item.community_id, item.joined)
                }
                onMouseOver={handleHoveringOnJoinButton}
                onMouseOut={handleHoveringOutJoinButton}
              >
                {item.joined ? 'Joined' : 'Join'}
              </FollowButton>
            </SingleResultContainer>
          ))
        )}
        {isSideBarCard && result.length > 0 ? (
          <StyledHeading
            onClick={() => {
              window.location.href = '/search/communities';
            }}
            sx={{
              color: '#0079D3',
              fontSize: '14px',
              paddingBottom: '1.6rem',
              cursor: 'pointer'
            }}
          >
            See more communities
          </StyledHeading>
        ) : (
          <h3> No data found</h3>
        )}
      </ResultsContainer>
    </RootContainer>
  );
}

export default CommunitiesResults;