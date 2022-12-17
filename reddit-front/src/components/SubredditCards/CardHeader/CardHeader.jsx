/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { useState, memo } from 'react';
import { Link } from '@mui/material';
import { BsShield } from 'react-icons/bs';
import Typography from '@mui/material/Typography';
import {
  CardsHeaderContainer,
  DropDownMenuContainer,
  DropDownMenuItem,
  ModToolsButton
} from './CardHeader.Style';

/**
 * @typedef PropType
 * @property {string} title
 * @property {boolean} hasDropDownMenu
 * @property {boolean} isModeratorMode
 */

/**
 * This Component for the Cards Header.
 *
 */

function CardHeader({
  title,
  hasDropDownMenu,
  isModeratorMode,
  subredditName
}) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <CardsHeaderContainer
      data-testid="card-header-container"
      sx={{ backgroundColor: '#0079D3', border: '1px solid #0079D3' }}
    >
      {/* The header title  */}
      <Typography
        variant="h2"
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: 'white'
        }}
      >
        {title}
      </Typography>

      {/* Mod tools button  */}
      {isModeratorMode ? (
        <ModToolsButton
          onClick={() => {
            window.location.replace(`/${subredditName}/about/spam`);
          }}
        >
          <BsShield
            fontSize="2rem"
            style={{
              marginRight: '5px'
            }}
          />
          <span>Mod Tools</span>
        </ModToolsButton>
      ) : null}

      {hasDropDownMenu ? (
        <Box
          sx={{
            margin: isModeratorMode ? 'auto 0 auto 2rem' : 'auto 0 auto 14rem',
            verticalAlign: 'middle',
            cursor: 'pointer',
            borderRadius: '1px',
            '&:hover': {
              backgroundColor: '#1a1a1b1a'
            }
          }}
        >
          <button
            type="button"
            style={{
              marginBottom: '1rem',
              display: 'inline-block',
              alignItems: 'center',
              verticalAlign: 'middle',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              border: 'none',
              fontWeight: 'bold',
              position: 'relative'
            }}
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpened(!isMenuOpened);
            }}
          >
            ...
            {isMenuOpened ? (
              <DropDownMenuContainer>
                <DropDownMenuItem
                  variant="h5"
                  sx={{
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '6px',
                    paddingLeft: '1rem',
                    textAlign: 'left'
                  }}
                >
                  add to custom feed
                </DropDownMenuItem>
                <DropDownMenuItem
                  variant="h5"
                  sx={{
                    borderBottomLeftRadius: '6px',
                    borderBottomRightRadius: '6px',
                    paddingLeft: '1rem',
                    textAlign: 'left'
                  }}
                >
                  add to favorites
                </DropDownMenuItem>
              </DropDownMenuContainer>
            ) : null}
          </button>
        </Box>
      ) : null}
    </CardsHeaderContainer>
  );
}

export default memo(CardHeader);
