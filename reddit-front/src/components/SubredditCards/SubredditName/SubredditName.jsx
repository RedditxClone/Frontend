/* eslint-disable no-lonely-if */
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  SingleNotificationTypeContainer,
  TitleLogoContainer,
  SubTitle,
  JoinButton
} from './SubredditName.Style';
import ActionMessage from '../../ActionMessage/ActionMessage';
import {
  updateNotificationType,
  joinSubreddit,
  leaveSubreddit
} from '../../../services/requests/Subreddit';
/**
 * @typedef PropType
 * @property {int} subredditId
 * @property {bool} isJoined
 * @property {bool} name
 * @property {bool} title
 * @property {bool} notificationsStyle
 */

/**
 * This Component for the community Title and Logo
 *
 */

function SubredditName({
  subredditId,
  isJoined,
  name,
  title,
  notificationsStyle,
  srName
}) {
  const { isAuth } = useSelector((state) => state.auth);
  console.log('isAuth', isAuth);
  const [joined, setJoined] = useState(isJoined);

  const [activeNotificationType, setActiveNotificationType] =
    useState(notificationsStyle);
  const [showJoinedMsg, setShowJoinedMsg] = useState(false);
  const [showLeftMsg, setShowLeftMsg] = useState(false);
  const [showNotificationsTypeList, setShowNotificationsTypeList] =
    useState(false);

  useEffect(() => {
    setJoined(isJoined);
    setActiveNotificationType(notificationsStyle);
  }, [isJoined, notificationsStyle]);

  return (
    <TitleLogoContainer data-testid="subreddit-title-logo-container">
      {alert}
      {/* Subreddit Name  */}
      <StyledSubredditName>
        <SubredditTitle variant="h1">{title}</SubredditTitle>
        <SubTitle>{`r/${name}`}</SubTitle>
      </StyledSubredditName>

      {/* Buttons -> Join, Notifications  */}
      <ButtonsContainer>
        {/* Join Button  */}
        <Box sx={{ width: '9.6rem' }}>
          <JoinButton
            data-testid="join-community-button"
            id="join-community-button"
            size="medium"
            sx={{
              border: '1px solid #0079D3',
              color: joined ? '#0079D3' : 'white',
              fill: '#0079D3',
              backgroundColor: joined ? 'transparent' : '#0079D3',
              '&:hover': {
                opacity: joined ? '1' : '.9',
                backgroundColor: joined ? 'transparent' : '#0079D3'
              }
            }}
            onClick={(e) => {
              if (joined) {
                setJoined(!joined);
                e.target.innerHTML = 'Join';
                leaveSubreddit(subredditId);
                setShowLeftMsg(!showLeftMsg);
              } else {
                // checking if not authenticated
                if (!isAuth) {
                  window.location.replace('/auth/login');
                } else {
                  setJoined(!joined);
                  joinSubreddit(subredditId);
                  setShowJoinedMsg(!showJoinedMsg);
                }
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
          </JoinButton>
          {showJoinedMsg ? (
            <ActionMessage
              message="Successfully joined r/test_community2022"
              show={true}
            />
          ) : null}

          {showLeftMsg ? (
            <ActionMessage
              message="Successfully left r/test_community2022"
              show={true}
            />
          ) : null}
        </Box>
        {/* Notifications Button  */}
        {isJoined ? (
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
                border: '1px solid #0079D3',
                color: '#0079D3',
                fill: '#0079D3',
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
                        activeNotificationType === 0 ? '#0079D3' : '#878A8C',
                      '&:hover':
                        activeNotificationType !== 0
                          ? {
                              backgroundColor: '#ccc'
                            }
                          : {}
                    }}
                    onClick={() => {
                      setActiveNotificationType(0);
                      updateNotificationType({
                        subredditName: srName,
                        type: 0
                      });
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
                        activeNotificationType === 1 ? '#0079D3' : '#878A8C',
                      '&:hover':
                        activeNotificationType !== 1
                          ? {
                              backgroundColor: '#ccc'
                            }
                          : {}
                    }}
                    onClick={() => {
                      setActiveNotificationType(1);
                      updateNotificationType({
                        subredditName: srName,
                        type: 1
                      });
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
                        activeNotificationType === 2 ? '#0079D3' : '#878A8C',
                      '&:hover':
                        activeNotificationType !== 2
                          ? {
                              backgroundColor: '#ccc'
                            }
                          : {}
                    }}
                    onClick={() => {
                      setActiveNotificationType(2);
                      updateNotificationType({
                        subredditName: srName,
                        type: 2
                      });
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
        ) : null}
      </ButtonsContainer>
    </TitleLogoContainer>
  );
}

export default SubredditName;
