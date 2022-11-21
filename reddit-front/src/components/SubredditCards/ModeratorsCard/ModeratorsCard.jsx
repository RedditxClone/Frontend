/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/material/Box';
import { useState, useEffect, memo } from 'react';
import Link from '@mui/material/Link';
import { AiOutlineMail } from 'react-icons/ai';
import {
  ModeratorsContainer,
  MessageModsButton,
  ModeratorUsername
} from './ModeratorsCard.Style';
import CardHeader from '../CardHeader/CardHeader';
import { getModeratorsList } from '../../../services/requests/Subreddit';

/**
 * @typedef PropType
 * @property {string, color} baseColor
 * @property {string, color} highlightColor
 * @property {Array} moderatorsList
 */

/**
 * This Component for showing the moderators of a Community.
 *
 */

function ModeratorsCard({ highlightColor, baseColor, subredditId }) {
  const [moderatorsList, setModeratorsList] = useState([]);

  useEffect(() => {
    // Fetching the data of the moderators
    const fetchModerators = async () => {
      const results = await getModeratorsList({ id: subredditId });

      setModeratorsList(results[0].list);
    };

    fetchModerators();
  }, []);

  // console.log('moderatorsList inside', moderatorsList);

  return (
    <ModeratorsContainer
      className="moderators"
      data-testid="moderators-card"
    >
      {/* Card Header  */}
      <CardHeader
        title="Moderators"
        baseColor={baseColor}
        hasDropDownMenu={false}
      />

      {/* Card Body  */}
      <Box sx={{ padding: '12px' }}>
        <MessageModsButton
          data-testid="msg-mods-button"
          sx={{
            border: `1px solid ${highlightColor}`,
            color: highlightColor,
            fill: highlightColor
          }}
        >
          <AiOutlineMail
            fontSize="2rem"
            style={{ marginRight: '5px' }}
          />
          Message the mods
        </MessageModsButton>

        {/* List of the moderators  */}
        {moderatorsList.length > 0
          ? moderatorsList.map((item) => (
              <Box className="moderator-name">
                <ModeratorUsername style={{ color: highlightColor }}>
                  {item}
                </ModeratorUsername>
              </Box>
            ))
          : null}

        {/* The view all button  */}
        <Box
          className="view-all-moderators"
          sx={{
            display: 'flex',
            overflow: 'hidden',
            padding: '0 12px 12px'
          }}
        >
          <Link
            data-testid="view-all-moderators"
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: highlightColor,
              lineHeight: '16px',
              marginLeft: 'auto',
              cursor: 'pointer'
            }}
          >
            view all moderators
          </Link>
        </Box>
      </Box>
    </ModeratorsContainer>
  );
}

export default memo(ModeratorsCard);
