/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import { SideBarContainer, SideBarContent } from './SubredditSideBar.Style';
import AboutCard from '../AboutCard/AboutCard';
import RulesCard from '../RulesCard/RulesCard';
import FlairsCard from '../FlairsCard/FlairsCard';
import ModeratorsCard from '../ModeratorsCard/ModeratorsCard';

/**
 * @typedef PropType
 * @property {boolean} isModeratorMode
 * @property {Array} aboutInfo
 * @property {Array} flairsList
 * @property {Array} rulesList
 * @property {Integer} subredditId
 */

/**
 * This Component for the Community sidebar.
 *
 */

function SubredditSideBar({
  isModeratorMode,
  subredditId,
  subredditName,
  isJoined,
  aboutInfo,
  flairsList,
  rulesList,
  moderatorsList
}) {
  return (
    <SideBarContainer>
      <SideBarContent>
        {aboutInfo && (
          <AboutCard
            isModeratorMode={isModeratorMode}
            isJoined={isJoined}
            subredditId={subredditId}
            subredditName={subredditName}
            aboutInfo={aboutInfo}
          />
        )}

        {!isModeratorMode
          ? flairsList && <FlairsCard flairsList={flairsList} />
          : null}

        {rulesList && <RulesCard rulesList={rulesList} />}

        {moderatorsList && isModeratorMode && (
          <ModeratorsCard
            moderatorsList={moderatorsList}
            subredditName={subredditName}
          />
        )}
      </SideBarContent>
    </SideBarContainer>
  );
}

export default memo(SubredditSideBar);
