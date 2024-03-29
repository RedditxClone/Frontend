/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable array-callback-return */
import { useState, useEffect } from 'react';
import {
  RootContainer,
  ResultsContainer,
  SingleResultContainer,
  NameLogoContainer,
  FollowButton,
  StyledLogoContainer,
  StyledLogo,
  StyledUsername,
  StyledDescription,
  StyledHeading
} from './PeopleResults.Style';
import { retrieveResults } from '../../../services/requests/Search';
import Loader from '../../../utilities/Loader/Loader';
import { followUser, unFollowUser } from '../../../services/requests/User';

/**
 * @typedef PropType
 * @property {bool} isSideBarCard // To show the results in a side bar cards
 * @property {string} searchKey
 */

/**
 * This Component for the showing the users related to the key of the searching.
 *
 */
function PeopleResults({ isSideBarCard, searchKey }) {
  // states
  const [result, setResult] = useState([]);
  const slicingSize = isSideBarCard ? 4 : result.length;
  const [statusCode, setStatusCode] = useState(0);

  // Fetching the results by calling the fetch service
  useEffect(() => {
    const fetchResults = async () => {
      const results = await retrieveResults({
        key: searchKey,
        searchingCategory: 'peoples'
      });
      setResult(results.data);
      setStatusCode(results.statusCode);
    };
    fetchResults();
  }, []);

  // Handlers
  /**
   * This function divides handles the follow button
   * @param {int} subredditId - The number to be divided.
   * @param {bool} currentState - true : followed, false: not followed
   */
  const handleFollowButton = (userId) => {
    const btn = document.getElementById(`follow-button-${userId}`);
    const currentState = btn.dataset.isfollowed;

    if (currentState === 'true' || currentState === true) {
      btn.dataset.isfollowed = false;
      btn.innerHTML = 'Unfollow';
      unFollowUser(userId);
    } else {
      btn.dataset.isfollowed = true;
      btn.innerHTML = 'Follow';
      followUser(userId);
    }
  };

  const handleHoveringOnFollowButton = (e) => {
    if (e.target.dataset.isfollowed === 'true') {
      e.target.innerHTML = 'Unfollow';
    } else {
      e.target.innerHTML = 'Follow';
    }
  };

  const handleHoveringOutFollowButton = (e) => {
    if (e.target.dataset.isfollowed === 'true') {
      e.target.innerHTML = 'Following';
    } else {
      e.target.innerHTML = 'Follow';
    }
  };

  return (
    <RootContainer data-testid="people-results">
      {/* /* Displaying loader while loading the data */}
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

          {isSideBarCard ? <StyledHeading>People</StyledHeading> : null}

          {/* result container  */}
          {result.length === 0 && (statusCode === 200 || statusCode === 400) ? (
            <h2
              style={{
                padding: '.76rem',
                margin: 0,
                paddingLeft: '1.8rem'
              }}
            >
              No results found.
            </h2>
          ) : (
            result.slice(0, slicingSize).map((item, index) => (
              <SingleResultContainer key={`people-result-${index}`}>
                {/* Name and logo  */}
                <NameLogoContainer>
                  <StyledLogoContainer>
                    <StyledLogo
                      data-testid="user-logo-search"
                      src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
                      alt="user_image"
                    />
                  </StyledLogoContainer>
                  <div>
                    <StyledUsername
                      data-testid="username-search"
                      onClick={() => {
                        navigate(`/user/${item.username}`);
                      }}
                    >
                      {`u/${item.username}`}
                    </StyledUsername>
                    <StyledDescription>
                      {!isSideBarCard ? item.about : null}
                    </StyledDescription>
                  </div>
                </NameLogoContainer>
                {/* follow button  */}
                <FollowButton
                  data-testid="community-follow-button"
                  data-isFollowed={item.followed}
                  id={`follow-button-${item._id}`}
                  onClick={() => handleFollowButton(item._id)}
                  onMouseOver={handleHoveringOnFollowButton}
                  onMouseOut={handleHoveringOutFollowButton}
                >
                  {item.followed ? 'Following' : 'Follow'}
                </FollowButton>
              </SingleResultContainer>
            ))
          )}
        </ResultsContainer>
      )}
    </RootContainer>
  );
}

export default PeopleResults;
