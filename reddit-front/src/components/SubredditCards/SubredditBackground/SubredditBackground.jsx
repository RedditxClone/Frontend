/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import { useState } from 'react';
import { BackgroundImage } from './SubredditBackground.Style';

/**
 * This Component for the Community background.
 *
 */

function SubredditBackground() {
  const [defaultBackground, setDefaultBackground] = useState(false);
  return (
    <Box
      data-testid="subreddit-background"
      component="div"
      sx={{
        width: '100%',
        height: defaultBackground ? 70 : 190,
        backgroundColor: '#0079D3',
        position: 'relative'
      }}
    >
      <BackgroundImage
        style={{
          backgroundImage:
            'url("https://styles.redditmedia.com/t5_2rr0e/styles/bannerBackgroundImage_6w3kgybwtu671.png?width=4000&s=0a651973a17efa7c35d7e4988e48bd31e0cdfa4d")'
        }}
      />
    </Box>
  );
}
export default SubredditBackground;
