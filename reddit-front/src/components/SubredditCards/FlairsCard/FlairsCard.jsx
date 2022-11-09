import Box from '@mui/material/Box';
import { memo } from 'react';
import {
  FlairsContainer,
  FlairItemContainer,
  FlairItem
} from './FlairsCard.Style';
import CardHeader from '../CardHeader/CardHeader';

/**
 * @typedef PropType
 * @property {string, color} baseColor
 */

/**
 * This Component for the flairs Card.
 *
 */
function FlairsCard({ baseColor }) {
  return (
    <FlairsContainer
      className="filter-by-flair"
      data-testid="flairs-card"
    >
      <CardHeader
        title="Filter by flair"
        baseColor={baseColor}
        hasDropDownMenu={false}
      />
      <Box sx={{ padding: '12px' }}>
        <Box
          sx={{ paddingTop: '4px', width: '100%' }}
          className="flairs-container"
        >
          <Box
            sx={{
              maxHeight: '13rem',
              overflow: 'hidden',
              marginBottom: '5px',
              transition: 'max-height .3s ease-out'
            }}
            className="flairs-content"
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <FlairItemContainer>
                <FlairItem>first</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>second</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>third</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>fourth</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>fifth</FlairItem>
              </FlairItemContainer>
            </ul>
          </Box>
        </Box>
      </Box>
    </FlairsContainer>
  );
}

export default memo(FlairsCard);
