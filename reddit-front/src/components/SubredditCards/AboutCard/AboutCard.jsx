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
/**
 * @typedef PropType
 * @property {string, color} baseColor
 * @property {string, color} highlightColor
 * @property {boolean} isModeratorMode
 * @property {Integer} subredditId
 */

/**
 * This Component for the About Community Card.
 *
 */

function AboutCard({
  baseColor,
  highlightColor,
  isModeratorMode,
  subredditId}) {
  let paragraphColor = '#7c7c7c';
  const maxDescriptionLength = 500;
  const trackUserChosenSubTopic = [];
  const trackUserRemovedSubTopic = [];

  // States
  const [subTopicsList, setSubTopicsList] = useState([]);
  const [chosenSubTopicsList, setChosenSubTopicsList] = useState([]);
  const [showThemeOption, setShowThemeOption] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [communityDescription, setCommunityDescription] = useState('');

  const [aboutInfo, setAboutInfo] = useState([]);

  useEffect(() => {
    // Fetching the about info of the subreddit
    const fetchInfo = async () => {
      const results = await getAboutInfo({ id: subredditId });
      setAboutInfo(results);
      setSubTopicsList(results.subtopics);
      setChosenSubTopicsList(results.active_subtopics);
      setCommunityDescription(results.description);
    };

    fetchInfo();
  }, []);

  const [charCounter, setCharCounter] = useState(
    // maxDescriptionLength - communityDescription.length
    0
  );

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
      id: subredditId,
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
        baseColor={baseColor}
        hasDropDownMenu={1}
        isModeratorMode={isModeratorMode}
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
              communityDescription.length === 0 ? '#F6F7F8' : 'white',
            border:
              communityDescription.length === 0
                ? `1px solid ${highlightColor}`
                : 'none',
            '&:hover': isModeratorMode
              ? {
                  border: `1px solid ${highlightColor}`,
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
          ) : (
            <span style={{ color: highlightColor, fontWeight: 'bold' }}>
              Add description
            </span>
          )}
          {isModeratorMode ? (
            <BsPencil
              fontSize="18px"
              style={{
                color: highlightColor,
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
            border: `1px solid ${highlightColor}`,
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
                sx={{ color: highlightColor }}
              >
                Cancel
              </StyledActionButton>
              <StyledActionButton
                onClick={saveNewDescription}
                sx={{ color: highlightColor }}
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
            {`Created ${aboutInfo.created_at}`}
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
              {divideBigNumber(aboutInfo.members_count)}
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
              {divideBigNumber(aboutInfo.members_online)}
            </Box>
            <MembersTypography
              variant="paragraph"
              sx={{ color: paragraphColor }}
            >
              Online
            </MembersTypography>
          </OnlineMembersBox>
        </Box>

        <StyledHorizontalLine
          marginTop="1.5"
          marginBottom="1.5"
          marginLeft="0"
          marginRight="0"
        />

        {/* Community Topics  */}
        {isModeratorMode && !inCreatePost && (
          <>
            <CommunityTopics
              highlightColor={highlightColor}
              baseColor={baseColor}
              subTopicsList={subTopicsList}
              setSubTopicsList={setSubTopicsList}
              chosenSubTopicsList={chosenSubTopicsList}
              setChosenSubTopicsList={setChosenSubTopicsList}
              trackUserChosenSubTopic={trackUserChosenSubTopic}
              trackUserRemovedSubTopic={trackUserRemovedSubTopic}
              subredditId={subredditId}
              activeSubredditTopic={aboutInfo.active_topic}
            />
            <StyledHorizontalLine
              marginTop="1.5"
              marginBottom="1.5"
              marginLeft="0"
              marginRight="0"
            />
          </>
        )}
        <Box
          className="subreddit-create-post"
          data-testid="create-post-inside-community"
        >
          <CreatePostButton sx={{ backgroundColor: highlightColor }}>
            Create post
          </CreatePostButton>
        </Box>
      </Box>
    </AboutCardContainer>
  );
}

export default memo(AboutCard);
