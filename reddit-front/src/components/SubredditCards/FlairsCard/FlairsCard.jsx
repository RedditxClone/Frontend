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
 * @property {Integer} subredditId
 * @property {Integer} flairsList
 */

/**
 * This Component for the flairs Card.
 *
 */
function FlairsCard({ subredditId, flairsList }) {
  return (
    <FlairsContainer
      className="filter-by-flair"
      data-testid="flairs-card"
    >
      <CardHeader
        title="Filter by flair"
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
                      <FlairItem
                        sx={{
                          color: item.textColor,
                          backgroundColor: item.backgroundColor
                        }}
                      >
                        {item.text}
                      </FlairItem>
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
