/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { IoIosNotifications, IoMdNotificationsOutline } from 'react-icons/io';
import {
  MdOutlineNotificationsActive,
  MdOutlineNotificationsOff,
  MdNotificationsActive,
  MdNotificationsOff
} from 'react-icons/md';
import {
  StyledSubredditName,
  ButtonsContainer,
  SubredditTitle,
  NotificationTypesContainer,
  SingleNotificationTypeContainer
} from './SubredditName.Style';

/**
 * @typedef PropType
 * @property {string} highlightColor
 */

/**
 * This Component for the community Title and Logo
 *
 */

export default function SubredditName({ highlightColor }) {
  const [joined, setJoined] = useState(false);
  const [activeNotificationType, setActiveNotificationType] = useState(1);
  const [showNotificationsTypeList, setShowNotificationsTypeList] =
    useState(false);

  return (
    <Box
      data-testid="subreddit-title-logo-container"
      sx={{
        boxSizing: 'border-box',
        alignItems: 'flex-start',
        display: 'flex',
        flex: 1,
        paddingLeft: '1.6rem',
        marginTop: '2.6rem',
        justifyContent: 'space-between',
        position: 'relative',
        width: 'calc(100% - 8rem)'
      }}
    >
      <StyledSubredditName>
        <SubredditTitle variant="h1">AyahEveryDay</SubredditTitle>
        <h2
          style={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '1.8rem',
            color: '#7c7c7c',
            margin: 0,
            padding: 0
          }}
        >
          r/AyahEveryDay
        </h2>
      </StyledSubredditName>
      <ButtonsContainer>
        <Box sx={{ width: '9.6rem' }}>
          <Button
            data-testid="join-community-button"
            size="medium"
            sx={{
              width: '100%',
              border: `1px solid ${highlightColor}`,
              color: joined ? highlightColor : 'white',
              fill: highlightColor,
              fontFamily: 'Noto Sans,Arial,sans-serif',
              fontSize: '1.4rem',
              fontWeight: 700,
              letterSpacing: 'unset',
              minHeigh: '3.2rem',
              minWidth: '3.2rem',
              padding: '4px 16px',
              borderRadius: '9999px',
              boxSizing: 'border-box',
              backgroundColor: joined ? 'transparent' : highlightColor,
              '&:hover': {
                opacity: joined ? '1' : '.9',
                backgroundColor: joined ? 'transparent' : highlightColor
              }
            }}
            onClick={(e) => {
              if (joined) {
                setJoined(!joined);
                e.target.innerHTML = 'Join';
              } else {
                setJoined(!joined);
              }
            }}
            onMouseOver={(e) => {
              if (joined) e.target.innerHTML = 'Leave';
            }}
            onMouseOut={(e) => {
              if (joined) e.target.innerHTML = 'Joined';
            }}
          >
            {joined ? 'Joined' : 'Join'}
          </Button>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Button
            data-testid="notify-button"
            size="medium"
            sx={{
              maxWidth:
                '3.2rem' /** min & max ? to overwrite the style of mui */,
              minWidth: '3.2rem',
              maxHeight: '3.2rem',
              minHeight: '3.2rem',
              padding: '2px',
              border: `1px solid ${highlightColor}`,
              color: highlightColor,
              fill: highlightColor,
              borderRadius: '100%',
              backgroundColor: 'transparent',
              '&:hover': {
                // backgroundColor: 'transparent'
              }
            }}
            onClick={() => {
              setShowNotificationsTypeList(!showNotificationsTypeList);
            }}
          >
            {activeNotificationType === 1 ? (
              <IoIosNotifications fontSize="18px" />
            ) : null}

            {activeNotificationType === 0 ? (
              <MdNotificationsActive fontSize="18px" />
            ) : null}

            {activeNotificationType === 2 ? (
              <MdNotificationsOff fontSize="18px" />
            ) : null}

            {/* Notification Types  */}
            {showNotificationsTypeList ? (
              <NotificationTypesContainer>
                <SingleNotificationTypeContainer
                  sx={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                    color:
                      activeNotificationType === 0 ? highlightColor : '#878A8C',
                    '&:hover':
                      activeNotificationType !== 0
                        ? {
                            backgroundColor: '#ccc'
                          }
                        : {}
                  }}
                  onClick={() => {
                    setActiveNotificationType(0);
                  }}
                >
                  {activeNotificationType !== 0 ? (
                    <MdOutlineNotificationsActive
                      style={{ marginRight: '5px' }}
                      fontSize="28px"
                    />
                  ) : (
                    <MdNotificationsActive
                      style={{ marginRight: '5px' }}
                      fontSize="28px"
                    />
                  )}

                  <span style={{}}>Frequent</span>
                </SingleNotificationTypeContainer>

                <SingleNotificationTypeContainer
                  sx={{
                    color:
                      activeNotificationType === 1 ? highlightColor : '#878A8C',
                    '&:hover':
                      activeNotificationType !== 1
                        ? {
                            backgroundColor: '#ccc'
                          }
                        : {}
                  }}
                  onClick={() => {
                    setActiveNotificationType(1);
                  }}
                >
                  {activeNotificationType !== 1 ? (
                    <IoMdNotificationsOutline
                      style={{ marginRight: '5px' }}
                      fontSize="28px"
                    />
                  ) : (
                    <IoIosNotifications
                      fontSize="28px"
                      style={{ marginRight: '5px' }}
                    />
                  )}

                  <span>Low</span>
                </SingleNotificationTypeContainer>

                <SingleNotificationTypeContainer
                  sx={{
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px',
                    color:
                      activeNotificationType === 2 ? highlightColor : '#878A8C',
                    '&:hover':
                      activeNotificationType !== 2
                        ? {
                            backgroundColor: '#ccc'
                          }
                        : {}
                  }}
                  onClick={() => {
                    setActiveNotificationType(2);
                  }}
                >
                  {activeNotificationType !== 2 ? (
                    <MdOutlineNotificationsOff
                      fontSize="28px"
                      style={{ marginRight: '5px' }}
                    />
                  ) : (
                    <MdNotificationsOff
                      style={{ marginRight: '5px' }}
                      fontSize="28px"
                    />
                  )}

                  <span>Off</span>
                </SingleNotificationTypeContainer>
              </NotificationTypesContainer>
            ) : null}
          </Button>
        </Box>
      </ButtonsContainer>
    </Box>
  );
}
