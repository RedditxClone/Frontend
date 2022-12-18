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
import CardHeader from '../../../components/SubredditCards/CardHeader/CardHeader';
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
 * @property {boolean} isModeratorMode
 * @property {Integer} subredditId
 * @property {boolean} inCreatePost
 * @property {array} aboutInfo
 */

/**
 * This Component for the About Community Card.
 *
 */

function AboutCard({ isJoined, subredditId, subredditName, aboutInfo }) {
  let paragraphColor = '#7c7c7c';

  // States
  const [joined, setJoined] = useState(isJoined);
  const [subTopicsList, setSubTopicsList] = useState(aboutInfo.subTopics);
  const [chosenSubTopicsList, setChosenSubTopicsList] = useState(
    aboutInfo.subTopics
  );
  const [communityDescription, setCommunityDescription] = useState(
    aboutInfo.description ? aboutInfo.description : ''
  );

  // Event Listeners

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

  // Returning the result
  return (
    <AboutCardContainer data-testid="about-card-container">
      <CardHeader
        title="About Community"
        hasDropDownMenu={0}
        subredditName={subredditName}
      />

      <Box sx={{ padding: '1.2rem' }}>
        {/* Community Description  */}
        <CommunityDescription
          data-testid="about-description"
          className="community-description"
          variant="paragraph"
          sx={{
            display: 'none',
            visibility: 'hidden',
            cursor: 'auto',
            backgroundColor: 'white'
          }}
        >
          {communityDescription.length > 0 ? (
            communityDescription
          ) : (
            <span>{`Welcome to ${subredditName}`}</span>
          )}
        </CommunityDescription>

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

        <Box
          className="subreddit-create-post"
          data-testid="create-post-inside-community"
        >
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
        </Box>
      </Box>
    </AboutCardContainer>
  );
}

export default memo(AboutCard);
