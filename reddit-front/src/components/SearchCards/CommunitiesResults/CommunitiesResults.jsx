/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/aria-role */
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

import { useNavigate } from 'react-router-dom';
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
import { retrieveResults } from '../../../services/requests/Search';
import {
  joinSubreddit,
  leaveSubreddit
} from '../../../services/requests/Subreddit';
import Loader from '../../../utilities/Loader/Loader';

/**
 * @typedef PropType
 * @property {bool} isSideBarCard // To show the results in a side bar cards
 * @property {string} searchKey
 */

/**
 * This Component for the showing the communities related to the key of the searching.
 *
 */

function CommunitiesResults({ isSideBarCard, searchKey }) {
  // states
  const [result, setResult] = useState([]);
  const slicingSize = isSideBarCard ? 5 : result.length;
  const [statusCode, setStatusCode] = useState(0);
  const navigate = useNavigate();
  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchResults = async () => {
      const results = await retrieveResults({
        key: searchKey,
        searchingCategory: 'communities'
      });
      setResult(results.data);
      setStatusCode(results.statusCode);
    };
    fetchResults();
  }, [searchKey]);

  // Handlers
  /**
   * This function divides handles the join button
   * @param {int} subredditId - The number to be divided.
   * @param {bool} currentState - true : joined, false: not joined
   */
  const handleJoinButton = (subredditId) => {
    const btn = document.getElementById(`join-button-${subredditId}`);
    const currentState = btn.dataset.isjoined;

    if (currentState === 'true' || currentState === true) {
      btn.dataset.isjoined = false;
      btn.innerHTML = 'Leave';
      leaveSubreddit(subredditId);
    } else {
      btn.dataset.isjoined = true;
      btn.innerHTML = 'Join';
      joinSubreddit(subredditId);
    }
  };

  const handleHoveringOnJoinButton = (id) => {
    const btn = document.getElementById(`join-button-${id}`);
    const currentState = btn.dataset.isjoined;

    if (currentState === 'true' || currentState === true) {
      btn.innerHTML = 'Leave';
    } else {
      btn.innerHTML = 'Join';
    }
  };

  const handleHoveringOutJoinButton = (id) => {
    const btn = document.getElementById(`join-button-${id}`);
    const currentState = btn.dataset.isjoined;

    if (currentState === 'true' || currentState === true) {
      btn.innerHTML = 'Joined';
    } else {
      btn.innerHTML = 'Join';
    }
  };

  return (
    <RootContainer
      data-testid="community-results"
      sx={{
        marginTop: isSideBarCard ? '0' : '2rem'
      }}
    >
      {statusCode === 0 ? (
        <Loader />
      ) : (
        <ResultsContainer>
          {/* // check if failed to fetch the results from the server  */}
          {!isSideBarCard && statusCode === 400 ? (
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

          {isSideBarCard ? <StyledHeading>Communities</StyledHeading> : null}
          {/* result container  */}
          {result.length === 0 && statusCode === 200 && !isSideBarCard
            ? null
            : result.slice(0, slicingSize).map((item, index) => (
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
                      <StyledCommunityName
                        data-testid="community-search"
                        onClick={() => {
                          navigate(`/r/${item.name}`);
                        }}
                      >
                        {`r/${item.name}`}
                      </StyledCommunityName>
                      {!isSideBarCard ? (
                        <MembersCount className="subreddit_members_count">
                          {`${divideBigNumber(item.users)} Members`}
                        </MembersCount>
                      ) : null}

                      <StyledDescription>
                        {!isSideBarCard
                          ? item.description
                          : `${divideBigNumber(item.users)}  Members`}
                      </StyledDescription>
                    </div>
                  </NameLogoContainer>

                  {/* join button  */}
                  <FollowButton
                    role="community-join-button"
                    data-isJoined={item.joined}
                    id={`join-button-${item._id}`}
                    onClick={() => handleJoinButton(item._id)}
                    onMouseOver={() => handleHoveringOnJoinButton(item._id)}
                    onMouseOut={() => handleHoveringOutJoinButton(item._id)}
                  >
                    {item.joined ? 'Joined' : 'Join'}
                  </FollowButton>
                </SingleResultContainer>
              ))}
          {isSideBarCard && result.length > 0 ? (
            <StyledHeading
              onClick={() => {
                navigate(`/search/sr/${searchKey}`);
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
          ) : null}

          {(isSideBarCard && result.length === 0) || result.length === 0 ? (
            <h2
              style={{
                padding: '.76rem',
                margin: 0,
                paddingLeft: '1.8rem'
              }}
            >
              No results found.
            </h2>
          ) : null}
        </ResultsContainer>
      )}
    </RootContainer>
  );
}

export default CommunitiesResults;
