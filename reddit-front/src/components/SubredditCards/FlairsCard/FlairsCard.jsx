/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { useState, useEffect, memo } from 'react';
import {
  FlairsContainer,
  FlairItemContainer,
  FlairItem
} from './FlairsCard.Style';
import CardHeader from '../CardHeader/CardHeader';
import { getFlairsList } from '../../../services/requests/Subreddit';
/**
 * @typedef PropType
 * @property {string, color} baseColor
 * @property {Integer} subredditId
 */

/**
 * This Component for the flairs Card.
 *
 */
function FlairsCard({ baseColor, subredditId }) {
  const [flairsList, setFlairsList] = useState([]);

  useEffect(() => {
    // Fetching the data of the flairs
    const fetchFlairs = async () => {
      const results = await getFlairsList({ id: subredditId });
      setFlairsList(results[0].list);
    };

    fetchFlairs();
  }, []);

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
              {flairsList.length > 0
                ? flairsList.map((item) => (
                    <FlairItemContainer>
                      <FlairItem>first</FlairItem>
                    </FlairItemContainer>
                  ))
                : null}
            </ul>
          </Box>
        </Box>
      </Box>
    </FlairsContainer>
  );
}

export default memo(FlairsCard);
