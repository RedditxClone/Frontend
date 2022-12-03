/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import { SideBarContainer, SideBarContent } from './SubredditSideBar.Style';
import AboutCard from '../AboutCard/AboutCard';
import RulesCard from '../RulesCard/RulesCard';
import FlairsCard from '../FlairsCard/FlairsCard';
import ModeratorsCard from '../ModeratorsCard/ModeratorsCard';

/**
 * @typedef PropType
 * @property {string, color} baseColor
 * @property {string, color} highlightColor
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
  baseColor,
  highlightColor,
  isModeratorMode,
  subredditId
}) {
  return (
    <SideBarContainer>
      <SideBarContent>
        <AboutCard
          baseColor={baseColor}
          highlightColor={highlightColor}
          isModeratorMode={isModeratorMode}
          subredditId={subredditId}
        />
        {!isModeratorMode ? (
          <FlairsCard
            baseColor={baseColor}
            subredditId={subredditId}
          />
        ) : null}

        <RulesCard
          baseColor={baseColor}
          subredditId={subredditId}
        />
        <ModeratorsCard
          baseColor={baseColor}
          highlightColor={highlightColor}
          subredditId={subredditId}
        />
      </SideBarContent>
    </SideBarContainer>
  );
}

export default memo(SubredditSideBar);
