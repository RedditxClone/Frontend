import Box from '@mui/material/Box';
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
export default function FlairsCard({ baseColor }) {
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
                <FlairItem>tessdfsdft</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>tesdfsdfsdfsdfst</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>test</FlairItem>
              </FlairItemContainer>
              <FlairItemContainer>
                <FlairItem>teffffsdsdfsdfsdfsdfsdfsdfdsfsdfdst</FlairItem>
              </FlairItemContainer>
            </ul>
          </Box>
        </Box>
      </Box>
    </FlairsContainer>
  );
}
