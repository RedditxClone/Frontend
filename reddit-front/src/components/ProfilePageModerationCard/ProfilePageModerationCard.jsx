/* eslint-disable eqeqeq */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { RoundedButton } from '../HomePageCards/HomePageCards.style';
import { SmallCard, NavLink } from './ProfilePageModerationCard.style';

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
export default function ProfilePageModerationCard({ communities }) {
  const activeStyle = {
    color: 'black',
    textDecoration: 'underline'
  };
  const notActiveStyle = {
    color: 'black',
    textDecoration: 'none'
  };
  const [cardCommunities, setCardCommunities] = useState(communities);
  /**
     * @description this function handles the click on the join button
     * @param {boolean} clicked represents whether the button is clicked or not
     * @param {int} index represents the index of the community that the user wants to join
     */
  const joinButtonClickHandler = (clicked, index) => {
    const newCommunities = [...cardCommunities];
    newCommunities[index].joined = clicked;
    communities = [...newCommunities];
    setCardCommunities(communities);
  };
  return (
    <SmallCard>
      <div
        style={{ fontSize: '1.6rem', fontWeight: '700', padding: '8px 16px' }}
      >
        You're a moderator of these
        <br />
        communities
      </div>
      <List
        sx={{
          width: '100%'
        }}
      >
        {communities.map((community, index) => (
          <div key={index}>
            <ListItem
              sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
            >
              <ListItemAvatar>
                <Avatar alt={community.name} src={community.picture} />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  '& span': {
                    fontSize: '1.2rem',
                    fontWeight: '500'
                  },
                  '& p': {
                    fontSize: '1rem',
                    color: 'black'
                  }
                }}
                primary={<NavLink style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)} to="/">{community.name}</NavLink>}
                secondary={`${community.noMembers} member`}
              />
              <div style={{ alignSelf: 'flex-end' }}>
                {community.joined == false ? (
                  <RoundedButton
                    sx={{
                      marginLeft: '3rem',
                      fontSize: '1.6rem',
                      padding: '2px 31px',
                      ':hover': {
                        backgroundColor: '#1484D6'
                      },
                      margin: '0 0.4rem 0.4rem 0'

                    }}
                    variant="contained"
                    disableElevation
                    onClick={() => joinButtonClickHandler(true, index)}
                  >
                    join
                  </RoundedButton>
                )
                  : (
                    <RoundedButton
                      sx={{
                        marginLeft: '3rem',
                        fontSize: '1.6rem',
                        padding: '2px 31px',
                        '&:hover span': {
                          display: 'none'
                        },
                        '&:hover:before': {
                          content: '\'Leave\''
                        },
                        margin: '0 0.4rem 0.4rem 0',
                        maxWidth: '95px'
                      }}
                      variant="outlined"
                      disableElevation
                      onClick={() => joinButtonClickHandler(false, index)}
                    >
                      <span>joined</span>
                    </RoundedButton>
                  )}
              </div>
            </ListItem>
          </div>
        ))}
      </List>
    </SmallCard>
  );
}
