import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Root, LargeRoundedButton, StyledCard } from './HomePageCards.style';
import redditimage from '../../assets/snoo-small.png';
import redditCover from '../../assets/2y2pftyz87981.png';
import StyledHorizontalLine from '../../utilities/StyledHorizontalLine/StyledHorizontalLine';
import CreateCommunity from '../CreateCommunity/CreateCommunity';

/**
 * @description This component is resposinble to render the
 * Create Post Card ,the one that is displayed after the communities card
 */

function HomeCreatePostCard() {
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);
  const navigate = useNavigate();
  const clickCreatePostHandler = () => {
    navigate('/submit');
  };
  return (
    <Root>
      <CreateCommunity
        open={openCreateCommunity}
        setOpen={setOpenCreateCommunity}
      />
      <StyledCard elevation={0}>
        <CardMedia
          component="img"
          height="75"
          image={redditCover}
          alt="green iguana"
        />
        <CardContent
          sx={{
            padding: '0'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignSelf: 'flex-start',
                alignItems: 'center'
              }}
            >
              <img
                src={redditimage}
                style={{
                  width: '4rem',
                  height: '6.8rem',
                  marginTop: '-2rem',
                  alignSelf: 'flex-start',
                  marginLeft: '1rem'
                }}
                alt="Reddit "
              />
              <Typography
                variant="h4"
                sx={{
                  color: '#1c1c1c',
                  marginLeft: '1rem'
                }}
              >
                Home
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: '#1c1c1c',
                marginLeft: '1.5rem'
              }}
              data-testid="home_2nd_create_post_card_typography"
            >
              Your personal Reddit frontpage. Come here to check in with your
              favorite communities.
              <StyledHorizontalLine
                marginTop={1.6}
                marginBottom={1.6}
                marginLeft={0}
                marginRight={2}
              />
            </Typography>

            <LargeRoundedButton
              sx={{
                margin: '1.5rem',
                marginBottom: '0.5rem',
                marginTop: '0.5rem',
                '&:hover': {
                  backgroundColor: '#1484D6'
                }
              }}
              variant="contained"
              disableElevation
              onClick={clickCreatePostHandler}
            >
              Create Post
            </LargeRoundedButton>

            <LargeRoundedButton
              sx={{
                margin: '0.5rem 1.5rem'
              }}
              variant="outlined"
              disableElevation
              onClick={() => setOpenCreateCommunity(true)}
            >
              Create Community
            </LargeRoundedButton>
          </Box>
        </CardContent>
      </StyledCard>
    </Root>
  );
}
export default (HomeCreatePostCard);
