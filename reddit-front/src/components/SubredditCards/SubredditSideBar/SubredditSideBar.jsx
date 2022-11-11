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
 */

/**
 * This Component for the Community sidebar.
 *
 */

function SubredditSideBar({ baseColor, highlightColor, isModeratorMode }) {
  return (
    <SideBarContainer>
      <SideBarContent>
        <AboutCard
          baseColor={baseColor}
          highlightColor={highlightColor}
          isModeratorMode={isModeratorMode}
        />
        {!isModeratorMode ? <FlairsCard baseColor={baseColor} /> : null}

        <RulesCard baseColor={baseColor} />
        <ModeratorsCard
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      </SideBarContent>
    </SideBarContainer>
  );
}

export default memo(SubredditSideBar);
