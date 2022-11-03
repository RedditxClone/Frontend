/* eslint-disable import/prefer-default-export */
import { Box, styled } from '@mui/material';

/**
 * @param {Box} - the default Box
 * @return {BackgroundImage} - The styled Background Image Container
 */
export const BackgroundImage = styled(Box)({
  width: '100%',
  height: 200,
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 200px',
  position: 'absolute',
  top: '-5px',
  left: 0
});
