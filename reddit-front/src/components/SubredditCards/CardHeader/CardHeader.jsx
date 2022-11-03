/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Link } from '@mui/material';
import { BsShield } from 'react-icons/bs';
import Typography from '@mui/material/Typography';
import {
  CardsHeaderContainer,
  DropDownMenuContainer,
  DropDownMenuItem
} from './CardHeader.Style';

/**
 * @typedef PropType
 * @property {string} title
 * @property {string} baseColor
 * @property {boolean} hasDropDownMenu
 * @property {boolean} isModeratorMode
 */

/**
 * This Component for the Cards Header.
 *
 */

export default function CardHeader({
  title,
  baseColor,
  hasDropDownMenu,
  isModeratorMode
}) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <CardsHeaderContainer
      data-testid="card-header-container"
      sx={{ backgroundColor: baseColor, border: `1px solid ${baseColor}` }}
    >
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

      {isModeratorMode ? (
        <Link
          sx={{
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            right: '-6.5rem',
            textDecoration: 'none',
            color: 'black',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: '600',
            '&:hover': {
              backgroundColor: '#1a1a1b1a'
            }
          }}
        >
          <BsShield
            fontSize="2rem"
            style={{
              marginRight: '5px'
            }}
          />
          <span>Mod Tools</span>
        </Link>
      ) : null}

      {hasDropDownMenu ? (
        <Box
          sx={{
            margin: 'auto 0 auto auto',
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
                    borderTopRightRadius: '6px'
                  }}
                >
                  add to custom feed
                </DropDownMenuItem>
                <DropDownMenuItem
                  variant="h5"
                  sx={{
                    borderBottomLeftRadius: '6px',
                    borderBottomRightRadius: '6px'
                  }}
                >
                  add to custom feed
                </DropDownMenuItem>
              </DropDownMenuContainer>
            ) : null}
          </button>
        </Box>
      ) : null}
    </CardsHeaderContainer>
  );
}
