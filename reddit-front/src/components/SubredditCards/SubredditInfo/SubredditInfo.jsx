/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { useState, memo, useEffect } from 'react';
import SubredditName from '../SubredditName/SubredditName';
import {
  LogoNameContainer,
  LogoNameContent,
  LogoImg
} from './SubredditInfo.Style';

/**
 * @typedef PropType
 * @property {bool} isJoined
 * @property {string} subredditId
 * @property {string} name
 * @property {string} title
 * @property {string} username
 * @property {int} notificationsStyle
 */

/**
 * This Component for the Container of the community Title and Logo
 *
 */

function SubredditInfo({
  isJoined,
  subredditId,
  subredditName,
  subredditTitle,
  name,
  title,
  notificationsStyle,
  logo
}) {
  const [hasLogo, setHasLogo] = useState(logo !== null);
  const SubredditLogo = (
    <LogoImg src="https://styles.redditmedia.com/t5_2rr0e/styles/communityIcon_ylhgbe8ngx481.jpg?width=256&format=pjpg&s=fb6c14e5b6e326a13bdff84d7e0aac38511df59c" />
  );
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: 'white',
        width: '100%',
        display: 'block'
      }}
    >
      <LogoNameContainer>
        <LogoNameContent>
          {hasLogo ? (
            SubredditLogo
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              style={{
                borderRadius: '100%',
                border: '4px solid white',
                width: '7.2rem',
                height: '7.2rem',
                backgroundColor: 'white',
                boxSizing: 'border-box',
                fill: '#0079D3',
                zIndex: 10
              }}
            >
              <path d="M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z" />
            </svg>
          )}
          <SubredditName
            subredditId={subredditId}
            srName={subredditName}
            subredditTitle={subredditTitle}
            isJoined={isJoined}
            name={name}
            title={title}
            notificationsStyle={notificationsStyle}
          />
        </LogoNameContent>
      </LogoNameContainer>
    </Box>
  );
}

export default memo(SubredditInfo);
