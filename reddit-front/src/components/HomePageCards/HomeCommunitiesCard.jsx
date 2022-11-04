/* eslint-disable react/no-array-index-key */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';
import { IoIosArrowUp } from 'react-icons/io';
import { RoundedButton, OverButton, Root } from './HomePageCards.style';
/**
 * @typedef {PropType} cardData
 * @property {object} pic the cover of the communities card that is in the home page
 * @property {Array} communities the communities that shall be shown in the card
 * @property {Array} buttons1 the buttons shown over the cover of the communities card cover
 * @property {Array} buttons2 the buttons shown under the cover of the communities card cover
 *
 */
/**
 * this function returns the communities card shown in the home screen
 * @param {PropType} cardData
 */
export default function HomeCommunitiesCard({
  pic, communities, buttons1, buttons2
}) {
  return (
    <Root>
      <Card sx={{ padding: '0', maxWidth: 345 }}>
        <CardMedia component="img" height="75" image={pic} alt="green iguana" />
        <CardContent
          sx={{
            padding: '0'
          }}
        >
          <Box sx={{ display: 'flex', marginTop: '-3.4rem' }}>
            {buttons1.map((button) => <OverButton key={button}>{button}</OverButton>)}
          </Box>

          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper'
            }}
          >
            {communities.map((community, index) => (
              <Box key={index}>
                <ListItem alignItems="flex-start">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ListItemText
                      sx={{
                        '& span': {
                          fontSize: '1.6rem',
                          paddingRight: '1rem',
                          marginTop: '1rem'
                        }
                      }}
                      primary={index + 1}
                    />
                    <Box sx={{ marginTop: '1rem' }}>
                      <IoIosArrowUp size={18} color="#46d15f" />
                    </Box>
                    <ListItemAvatar sx={{ paddingLeft: '0.5rem' }}>
                      <Avatar alt={community.name} src={community.picture} />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{
                        '& span': {
                          fontSize: '1.6rem'
                        }
                      }}
                      primary={community.name}
                    />
                    <RoundedButton
                      sx={{
                        marginLeft: '3rem',
                        fontSize: '1.3rem',
                        padding: '2px 7px',
                        ':hover': {
                          backgroundColor: '#1484D6'
                        }
                      }}
                      variant="contained"
                      disableElevation
                    >
                      join
                    </RoundedButton>
                  </Box>
                </ListItem>
                {index < communities.length - 1 ? (
                  <Divider variant="fullwidth" component="li" />
                ) : null}
              </Box>
            ))}
          </List>
          <RoundedButton
            sx={{
              margin: '0 0 1.5rem 1.5rem',
              alignSelf: 'center',
              width: '90%',
              fontSize: '1.3rem',
              padding: '4px 7px',
              ':hover': {
                backgroundColor: '#1484D6'
              }
            }}
            variant="contained"
            disableElevation
          >
            View All
          </RoundedButton>
          <Box sx={{ display: 'flex', marginTop: '-3.4rem', justifyContent: 'flex-start' }}>
            {buttons2.map((button) => (
              <RoundedButton
                sx={{
                  marginTop: '3rem',
                  marginRight: '0.5rem',
                  fontSize: '1.2rem',
                  padding: '4px px',
                  backgroundColor: '#EDEDED',
                  color: '#1484D6',
                  alignSelf: 'flex-start',
                  ':hover': {
                    backgroundColor: '#E3EDF6'
                  }
                }}
                variant="contained"
                disableElevation
                key={button}
              >
                {button}
              </RoundedButton>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Root>
  );
}
