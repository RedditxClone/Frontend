/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import { SideBarContainer } from './SubredditSideBar.Style';
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

export default function SubredditSideBar({
  baseColor,
  highlightColor,
  isModeratorMode
}) {
  return (
    <Box
      sx={{
        marginLeft: '2.4rem',
        marginTop: 0,
        flex: '0 0 31.2rem',
        width: '31.2rem',
        display: { xs: 'none', sm: 'block' }
      }}
    >
      <SideBarContainer>
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
      </SideBarContainer>
    </Box>
  );
}
