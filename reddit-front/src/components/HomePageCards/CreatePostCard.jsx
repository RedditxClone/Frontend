import Box from '@mui/material/Box';
import { BsFillImageFill, BsLink45Deg } from 'react-icons/bs';
import { SiReddit } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import {
  StyledTextField,
  CreatePostCardRoot,
  StyledBox
} from './HomePageCards.style';

/**
 * this function returns Create Post Card , the one that is displayed in the home screen
 */
export default function CreatePostCard() {
  const navigate = useNavigate();
  const onFocusHandler = () => {
    navigate('/submit');
  };
  return (
    <CreatePostCardRoot>
      <StyledBox>
        <Box
          sx={{
            padding: '0 0.7rem',
            marginTop: '6px'
          }}
        >
          <SiReddit
            size={32}
            color="#9DA0A1"
          />
        </Box>
        <StyledTextField
          placeholder="Create Post"
          variant="outlined"
          fullWidth
          onFocus={onFocusHandler}
        />
        <Box
          sx={{
            padding: '0.7rem 0.7rem',
            marginTop: '5px',
            ':hover': {
              backgroundColor: '#EDEDED'
            }
          }}
        >
          <BsFillImageFill
            size={22}
            color="#9DA0A1"
          />
        </Box>
        <Box
          sx={{
            padding: '0.7rem 0.7rem',
            marginTop: '5px',
            ':hover': {
              backgroundColor: '#EDEDED'
            }
          }}
        >
          <BsLink45Deg
            size={22}
            color="#9DA0A1"
          />
        </Box>
      </StyledBox>
    </CreatePostCardRoot>
  );
}
