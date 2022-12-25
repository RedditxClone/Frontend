/* eslint-disable no-plusplus */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-const */
import { useState, memo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { AiOutlineDown, AiOutlineEye, AiOutlineUp } from 'react-icons/ai';
import { RiCake3Line } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import CardHeader from '../CardHeader/CardHeader';
import CommunityTopics from '../CommunityTopics/CommunityTopics';
import StyledHorizontalLine from '../../../utilities/StyledHorizontalLine/StyledHorizontalLine';
import { divideBigNumber } from '../../../utilities/Helpers';
import {
  AboutCardContainer,
  CommunityDescription,
  CommunityCreatedDate,
  OnlineMembersBox,
  MembersTypography,
  CreatePostButton,
  ShowOptionsButton,
  CommunityThemeOption,
  StyledTextarea,
  StyledActionButton,
  EditCommunityActionsContainer
} from './AboutCard.Style';
import {
  getAboutInfo,
  updateDescription
} from '../../../services/requests/Subreddit';
import { topicsList } from '../CommunityTopics/TopicsList';

/**
 * @typedef PropType
 * @property {boolean} isModeratorMode
 * @property {Integer} subredditId
 * @property {boolean} inCreatePost
 * @property {array} aboutInfo
 */

/**
 * This Component for the About Community Card.
 *
 */

function AboutCard({
  isModeratorMode,
  isPostFullDetailsMode,
  isJoined,
  subredditId,
  subredditName,
  inCreatePost,
  aboutInfo
}) {
  let paragraphColor = '#7c7c7c';
  const maxDescriptionLength = 500;
  const trackUserChosenSubTopic = [];
  const trackUserRemovedSubTopic = [];
  // States
  const [joined, setJoined] = useState(isJoined);
  const [subTopicsList, setSubTopicsList] = useState(aboutInfo.subTopics);
  const [chosenSubTopicsList, setChosenSubTopicsList] = useState(
    aboutInfo.subTopics
  );
  const [editDescription, setEditDescription] = useState(false);
  const [communityDescription, setCommunityDescription] = useState(
    aboutInfo.description ? aboutInfo.description : ''
  );
  const [charCounter, setCharCounter] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // initialize counter
    if (aboutInfo.description) {
      setCharCounter(maxDescriptionLength - aboutInfo.description.length);
    } else {
      setCharCounter(0);
    }
    // preparing the subTopics list
    let subTopics = [...topicsList];

    // removing the activeTopic from the available subtopics list
    if (aboutInfo.activeTopic) {
      const index = subTopics.indexOf(aboutInfo.activeTopic);
      subTopics.splice(index, 1);
    }

    // removing the active sub topics from the available subtopics list
    if (subTopicsList.length > 0) {
      let index = -1;
      for (let i = 0; i < subTopicsList.length; i++) {
        index = subTopics.indexOf(subTopicsList[i]);
        subTopics.splice(index, 1);
      }
    }
    setSubTopicsList(subTopics);
  }, []);

  // Event Listeners
  /**
   * This Method handles the user maximum number allowed for the moderator
   * to write the community description
   *
   */
  const handleEditDescription = (e) => {
    let currentLength = e.target.value.length;

    if (currentLength <= maxDescriptionLength) {
      setCharCounter(maxDescriptionLength - currentLength);
    } else {
      e.target.maxLength = maxDescriptionLength;
    }
  };

  const handleHoverOnJoinButton = (e) => {
    if (joined) {
      e.target.innerHTML = 'Leave';
    }
  };

  const handleHoverOutJoinButton = (e) => {
    if (joined) {
      e.target.innerHTML = 'Joined';
    }
  };

  const handleClickJoinButton = (e) => {
    if (joined) {
      setJoin(false);
    } else {
      setJoin(true);
    }
  };

  /**
   * This Method executes the actions that made by the user (moderator)
   *
   */
  const saveNewDescription = () => {
    let newDescription = document.getElementById(
      'edit-description-text-area'
    ).value;
    setCommunityDescription(newDescription);
    setEditDescription(false);
    // update the database
    const request = {
      subredditName,
      request: {
        description: newDescription
      }
    };
    updateDescription(request);
  };

  /**
   * This Method cancels the unsaved actions that made by the user (moderator)
   *
   */
  const cancelModification = () => {
    document.getElementById('edit-description-text-area').value =
      communityDescription;
    setCharCounter(maxDescriptionLength - communityDescription.length);
    setEditDescription(false);
  };

  // Returning the result
  return (
    <AboutCardContainer data-testid="about-card-container">
      <CardHeader
        title={inCreatePost ? '' : 'About Community'}
        hasDropDownMenu={0}
        isModeratorMode={isModeratorMode}
        subredditName={subredditName}
      />

      <Box sx={{ padding: '1.2rem' }}>
        {/* Community Description  */}
        <CommunityDescription
          data-testid="about-description"
          className="community-description"
          variant="paragraph"
          sx={{
            display: !editDescription ? 'block' : 'none',
            visibility: !editDescription ? 'visible' : 'hidden',
            cursor: isModeratorMode ? 'pointer' : 'auto',
            backgroundColor:
              communityDescription.length === 0 && isModeratorMode
                ? '#F6F7F8'
                : 'white',
            border:
              communityDescription.length === 0 && isModeratorMode
                ? '1px solid #0079D3'
                : 'none',
            '&:hover': isModeratorMode
              ? {
                  border: '1px solid #0079D3',
                  borderRadius: '10px',
                  paddingBottom: '10px',
                  paddingLeft: '15px'
                }
              : {}
          }}
          onClick={() => {
            if (isModeratorMode) setEditDescription(!editDescription);
          }}
        >
          {communityDescription.length > 0 ? (
            communityDescription
          ) : !isModeratorMode ? (
            <span>{`Welcome to ${subredditName}`}</span>
          ) : (
            <span style={{ color: '#0079D3', fontWeight: 'bold' }}>
              Add description
            </span>
          )}

          {isModeratorMode ? (
            <BsPencil
              fontSize="18px"
              style={{
                color: '#0079D3',
                marginLeft: '5px'
              }}
            />
          ) : null}
        </CommunityDescription>

        {/* Edit Community Description  */}
        <Box
          className="edit-community-description"
          sx={{
            position: 'relative',
            border: '1px solid #0079D3',
            borderRadius: '4px',
            display: editDescription ? 'block' : 'none',
            visibility: editDescription ? 'visible' : 'hidden'
          }}
        >
          <StyledTextarea
            placeholder="Tell us about your community."
            id="edit-description-text-area"
            maxLength={500}
            rows={1}
            defaultValue={communityDescription}
            onKeyUp={handleEditDescription}
          />
          <EditCommunityActionsContainer className="edit-community-controls">
            <Box
              color="#7c7c7c"
              id="char-counter"
            >
              {`${charCounter} `}
              Characters remaining
            </Box>
            <Box sx={{ float: 'right' }}>
              <StyledActionButton
                onClick={cancelModification}
                sx={{ color: '#0079D3' }}
              >
                Cancel
              </StyledActionButton>
              <StyledActionButton
                onClick={saveNewDescription}
                sx={{ color: '#0079D3' }}
              >
                Save
              </StyledActionButton>
            </Box>
          </EditCommunityActionsContainer>
        </Box>

        {/* Community Info  */}
        <CommunityCreatedDate data-testid="community-info">
          <RiCake3Line fontSize="2rem" />
          <Typography
            variant="paragraph"
            style={{
              color: paragraphColor,
              marginLeft: '1rem'
            }}
          >
            {`Created ${aboutInfo.createdDate}`}
          </Typography>
        </CommunityCreatedDate>
        <StyledHorizontalLine
          marginTop="1.5"
          marginBottom="1.5"
          marginLeft="0"
          marginRight="0"
        />

        <Box
          className="members-count"
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box
            className="all-members-count"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <span
              style={{
                fontSize: '1.6rem',
                fontWeight: '500',
                lineHeight: '2rem'
              }}
            >
              {divideBigNumber(aboutInfo.memberCount)}
            </span>
            <MembersTypography
              variant="paragraph"
              style={{ color: paragraphColor }}
            >
              Members
            </MembersTypography>
          </Box>
          <OnlineMembersBox className="members-online">
            <Box
              style={{
                fontSize: '1.6rem',
                fontWeight: '500',
                lineHeight: '2rem',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              <span
                style={{
                  color: '#46d160',
                  marginRight: '4px',
                  position: 'absolute',
                  left: '-15px',
                  top: 0,
                  height: '2rem',
                  width: '2rem'
                }}
              >
                ●
              </span>
              {divideBigNumber(aboutInfo.onlineCount)}
            </Box>
            <MembersTypography
              variant="paragraph"
              sx={{ color: paragraphColor }}
            >
              Online
            </MembersTypography>
          </OnlineMembersBox>
        </Box>

        {/* Community Topics  */}
        {isModeratorMode && !inCreatePost && (
          <>
            <StyledHorizontalLine
              marginTop="1.5"
              marginBottom="1.5"
              marginLeft="0"
              marginRight="0"
            />
            <CommunityTopics
              subTopicsList={subTopicsList}
              setSubTopicsList={setSubTopicsList}
              chosenSubTopicsList={chosenSubTopicsList}
              setChosenSubTopicsList={setChosenSubTopicsList}
              trackUserChosenSubTopic={trackUserChosenSubTopic}
              trackUserRemovedSubTopic={trackUserRemovedSubTopic}
              subredditId={subredditId}
              subredditName={subredditName}
              activeSubredditTopic={aboutInfo.activeTopic}
            />
          </>
        )}
        <Box
          className="subreddit-create-post"
          data-testid="create-post-inside-community"
        >
          {isPostFullDetailsMode ? (
            <CreatePostButton
              onMouseOver={handleHoverOnJoinButton}
              onMouseOut={handleHoverOutJoinButton}
              onClick={handleClickJoinButton}
              sx={{
                backgroundColor: joined ? 'white' : '#0079D3',
                border: joined ? '1px solid #0079D3' : 'none',
                color: joined ? '#0079D3' : 'white'
              }}
            >
              {joined ? 'Joined' : 'Join'}
            </CreatePostButton>
          ) : isJoined ? (
            <>
              <StyledHorizontalLine
                marginTop="1.5"
                marginBottom="1.5"
                marginLeft="0"
                marginRight="0"
              />
              <CreatePostButton
                sx={{ backgroundColor: '#0079D3' }}
                onClick={() => {
                  navigate(`/${subredditName}/submit`);
                }}
              >
                Create post
              </CreatePostButton>
            </>
          ) : null}
        </Box>
      </Box>
    </AboutCardContainer>
  );
}

export default memo(AboutCard);
