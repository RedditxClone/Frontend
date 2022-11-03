/* eslint-disable block-spacing */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Box, Typography, Link } from '@mui/material';
import { BsInfoCircle, BsPencil } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import {
  StyledActionButton,
  SubTopic,
  StylesSpan,
  PopupInfo,
  SelectList,
  TopicDropdownList,
  SelectListOption,
  SubTopicsContainer,
  CancelSaveContainer,
  SuggestedSubTopicsContainer,
  SuggestedSubTopic,
  HeadingContainer
} from './CommunityTopics.Style';

/**
 * @typedef PropType
 * @property {string} baseColor
 * @property {string} highlightColor
 * @property {array} subTopicsList
 * @property {array} chosenSubTopicsList
 * @property {array} trackUserChosenSubTopic
 * @property {array} trackUserRemovedSubTopic
 */

/**
 * This Component for the Community Topics.
 * Moderator can change (add, remove) the topics in this component
 *
 */

export default function CommunityTopics({
  highlightColor,
  baseColor,
  subTopicsList,
  chosenSubTopicsList,
  trackUserChosenSubTopic,
  trackUserRemovedSubTopic
}) {
  // states
  const [infoIconColor, setInfoIconColor] = useState('#aaa');
  const [showInfo, setShowInfo] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showSubTopics, setShowSubTopics] = useState(false);
  const [subTopicsCounter, setSubTopicsCounter] = useState(
    chosenSubTopicsList.length
  );
  const [activeTopic, setActiveTopic] = useState(2); // this will depend on the data form api
  const [editSubTopics, setEditSubTopics] = useState(false);
  const maxTopics = 25;
  const maxNumOfShownSubTopics = 7;

  const topicsList = ['Activism', 'Anime', 'Art', 'Careers'];

  const [rerender, setRerender] = useState(false);

  // Event listeners

  const activateTopic = (e) => {
    const topicId = e.target.id;
    setActiveTopic(topicId);
  };
  /**
   * This Method returns the list of topics to be shown,
   * if there are more than 7 topics, it will return the only first 7
   *
   */
  const getSubTopicsToShow = (isEditingMode) => {
    if (isEditingMode) return chosenSubTopicsList;

    if (chosenSubTopicsList.length <= 7) return chosenSubTopicsList;

    return chosenSubTopicsList.slice(0, 7);
  };

  const choseSubTopic = (e) => {
    if (subTopicsCounter < maxTopics) {
      const value = e.target.innerHTML;
      const i = subTopicsList.indexOf(value);
      trackUserChosenSubTopic.push(value);
      chosenSubTopicsList.push(value);
      setSubTopicsCounter(subTopicsCounter + 1);
      subTopicsList.splice(i, 1);
      setRerender(!rerender);
    } else {
      // TODO: sweet alert here
      console.log('Max numbers allowed is ', maxTopics);
    }
  };

  /**
   * This Method executes the actions that made by the user (moderator)
   *
   */
  const saveNewTopic = () => {
    // // Saving Modifications for the chosen sub topics
    // trackUserChosenSubTopic.forEach((item) => {
    //   // Store the item in the chosen list
    //   chosenSubTopicsList.push(item);
    //   // remove it from the original list
    //   subTopicsList.splice(subTopicsList.indexOf(item), 1);
    // });
    // trackUserChosenSubTopic.splice(0, trackUserChosenSubTopic.length);

    // // Saving Modifications for the removed sub topics
    // trackUserRemovedSubTopic.forEach((item) => {
    //   // return the item to the original list
    //   subTopicsList.push(item);
    //   // Remove the item from the chosen list
    //   ChosenSubTopicsList.splice(ChosenSubTopicsList.indexOf(item), 1);
    // });
    // trackUserRemovedSubTopic.splice(0, trackUserRemovedSubTopic.length);

    // Update the counter value
    setSubTopicsCounter(chosenSubTopicsList.length);

    // closing the edit mode
    setEditSubTopics(false);
    setShowSubTopics(false);
  };

  /**
   * This Method cancels the unsaved actions that made by the user (moderator)
   *
   */
  const cancelModification = () => {
    // Canceling Modifications for the chosen sub topics
    trackUserChosenSubTopic.forEach((item) => {
      // return the item to the original list
      subTopicsList.push(item);
      // remove it from the chosen list
      chosenSubTopicsList.splice(chosenSubTopicsList.indexOf(item), 1);
    });
    trackUserChosenSubTopic.splice(0, trackUserChosenSubTopic.length);

    // Canceling Modifications for the removed sub topics
    trackUserRemovedSubTopic.forEach((item) => {
      // return the item to the original list
      chosenSubTopicsList.push(item);
      // remove it from the chosen list
      subTopicsList.splice(chosenSubTopicsList.indexOf(item), 1);
    });
    trackUserRemovedSubTopic.splice(0, trackUserRemovedSubTopic.length);

    // Resetting the counter to the old value before editing
    setSubTopicsCounter(chosenSubTopicsList.length);

    // closing the edit mode
    setEditSubTopics(false);
    setShowSubTopics(false);
  };

  const handleClickOnChosenSubTopic = (e) => {
    if (editSubTopics) {
      let value = e.target.innerHTML.trim();
      const i = chosenSubTopicsList.indexOf(value);

      if (value === 'x') {
        value = e.target.previousSibling.innerHTML.trim();
      }

      trackUserRemovedSubTopic.push(value);
      subTopicsList.push(value);
      chosenSubTopicsList.splice(i, 1);
      setSubTopicsCounter(subTopicsCounter - 1);
      setRerender(!rerender);
    }
  };

  return (
    <Box
      sx={{
        marginTop: '16px',
        paddingTop: '16px'
      }}
    >
      {/* Title */}
      <HeadingContainer>
        <Typography
          variant="h5"
          sx={{
            fontWeight: '500',
            marginBottom: '4px'
          }}
        >
          Community topics
        </Typography>

        {/* Info about community topics */}
        <Box
          style={{
            position: 'relative'
          }}
        >
          <BsInfoCircle
            style={{
              color: infoIconColor,
              fontSize: '22px',
              marginLeft: '5px',
              paddingBottom: '5px'
            }}
            onMouseOver={() => {
              setInfoIconColor('54b4ff');
              setShowInfo(true);
            }}
            onMouseOut={() => {
              setInfoIconColor('#aaa');
              setShowInfo(false);
            }}
          />
          {showInfo ? (
            <PopupInfo
              variant="paragraph"
              onMouseOver={() => {
                setInfoIconColor('54b4ff');
                setShowInfo(true);
              }}
              onMouseOut={() => {
                setInfoIconColor('#aaa');
                setShowInfo(false);
              }}
            >
              Adding community topics allow people to find your community. Add a
              primary topic and sub topics to be discovered more easily.
            </PopupInfo>
          ) : null}
        </Box>
      </HeadingContainer>

      {/* List of the topics */}
      <SelectList
        sx={{ border: showTopics ? '1px solid black' : 'none' }}
        onClick={() => {
          setShowTopics(!showTopics);
          if (showSubTopics) {
            setShowSubTopics(false);
            setEditSubTopics(false);
          }
        }}
      >
        <Link
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            marginRight: '10px',
            fontSize: '14px',
            color: highlightColor,
            fontWeight: '600'
          }}
        >
          {topicsList[activeTopic]}
        </Link>

        <AiOutlineDown
          fontSize="18px"
          style={{
            fontWeight: '600',
            color: highlightColor
          }}
        />

        {/* All topics dropdown list */}
        {showTopics ? (
          <TopicDropdownList>
            {topicsList.map((topic, index) => {
              return activeTopic === index ? (
                <SelectListOption
                  key={`topic-${index}`}
                  id={index}
                  variant="paragraph"
                  sx={{
                    color: highlightColor,
                    '&:hover': {
                      backgroundColor: highlightColor,
                      color: 'white'
                    }
                  }}
                >
                  {topic}
                  <MdDone style={{ marginLeft: '190px' }} />
                </SelectListOption>
              ) : (
                <SelectListOption
                  onClick={activateTopic}
                  key={`topic-${index}`}
                  id={index}
                  variant="paragraph"
                  sx={{
                    color: 'black',
                    '&:hover': {
                      backgroundColor: highlightColor,
                      color: 'white'
                    }
                  }}
                >
                  {topic}
                </SelectListOption>
              );
            })}
          </TopicDropdownList>
        ) : null}
      </SelectList>

      {/* List of the sub topics */}
      <SubTopicsContainer
        className="community-sub-topics"
        sx={{
          '&:hover': {
            border: `1px solid ${highlightColor}`
          }
        }}
        onClick={() => {
          if (!editSubTopics) {
            setEditSubTopics(true);
            setShowSubTopics(true);
            if (showTopics) setShowTopics(false);
          }
        }}
      >
        {/* List of the old sub topics */}
        {getSubTopicsToShow(editSubTopics).map((subTopic, index) => {
          return (
            <SubTopic
              id={`sub-topic-item-${index}`}
              key={index}
              sx={{
                color: highlightColor,
                '&:hover': {
                  backgroundColor: editSubTopics ? baseColor : '#ccc',
                  color: editSubTopics ? 'white' : highlightColor
                }
              }}
              onClick={handleClickOnChosenSubTopic}
            >
              <StylesSpan>{`${subTopic} `}</StylesSpan>
              {editSubTopics ? (
                <span
                  style={{
                    color: '#aaa',
                    width: '5%',
                    padding: '1px 2px 1px 1px'
                  }}
                >
                  {' '}
                  x
                </span>
              ) : (
                ''
              )}
            </SubTopic>
          );
        })}

        {!editSubTopics &&
        chosenSubTopicsList.length - maxNumOfShownSubTopics > 0 ? (
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              display: 'inline-block',
              marginTop: '8px',
              marginLeft: '4px',
              padding: '2px',
              color: highlightColor
            }}
          >
            {`+ ${chosenSubTopicsList.length - maxNumOfShownSubTopics}`}
          </div>
        ) : null}

        {!editSubTopics && chosenSubTopicsList.length > 0 ? (
          <div
            style={{
              fontSize: '14px',
              fontWeight: '400',
              display: 'inline-block',
              marginTop: '8px',
              marginLeft: '4px',
              padding: '2px'
            }}
          >
            <BsPencil fontSize="18px" />
          </div>
        ) : null}
        <Box />

        {!editSubTopics && chosenSubTopicsList.length === 0 ? (
          <SubTopic
            sx={{
              color: highlightColor,
              padding: '5px 5px 8px 5px',
              fontWeight: '500',
              '&:hover': {
                backgroundColor: editSubTopics ? baseColor : '#ccc',
                color: editSubTopics ? 'white' : highlightColor
              }
            }}
            onClick={handleClickOnChosenSubTopic}
          >
            <StylesSpan>
              <span style={{ fontSize: '18px' }}> + </span> Add Subtopics
            </StylesSpan>
          </SubTopic>
        ) : null}

        {/* Controls (cancel, save) */}
        {editSubTopics ? (
          <CancelSaveContainer>
            <Box
              color="#7c7c7c"
              id="topics-counter"
            >
              {`${subTopicsCounter}/${maxTopics}`}
            </Box>
            <Box sx={{ float: 'right' }}>
              <StyledActionButton
                onClick={cancelModification}
                sx={{ color: highlightColor }}
              >
                Cancel
              </StyledActionButton>
              <StyledActionButton
                onClick={saveNewTopic}
                sx={{ color: highlightColor }}
              >
                Save
              </StyledActionButton>
            </Box>
          </CancelSaveContainer>
        ) : null}

        {/* List of the suggested sub topics */}
        {showSubTopics ? (
          <SuggestedSubTopicsContainer>
            {subTopicsList.map((topic, index) => {
              return (
                <SuggestedSubTopic
                  key={`topic-${index}`}
                  id={index}
                  variant="paragraph"
                  sx={{
                    '&:hover': {
                      backgroundColor: baseColor,
                      color: 'white'
                    }
                  }}
                  onClick={choseSubTopic}
                >
                  {topic}
                </SuggestedSubTopic>
              );
            })}
          </SuggestedSubTopicsContainer>
        ) : null}
      </SubTopicsContainer>
    </Box>
  );
}
