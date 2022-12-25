/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from '@mui/material';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { NavLink, CategoriesCardBar } from './CategoriesCard.style';
import {
  RoundedButton,
  StyledCard
} from '../HomePageCards/HomePageCards.style';
import CommunityHoverCard from './CommunityHoverCard';
import ActionMessage from '../ActionMessage/ActionMessage';

/**
 * @description This component is resposinble to render the Categories page Card,
 * the one that contains the communities of the category the user has choosen
 * @param {Array} communities this is an array of the top communities that shouild be displayed
 * depending on the category the user chooses from the side list
 * @param {string} topText that is the text displayed on the top bar of the card ,
 * it depends on the category the user reads from the side list
 * @returns the card with the communities displayed in it
 */

function CategoriesCard({ communities, topText }) {
  const [cardCommunities, setCardCommunities] = useState(communities);
  // const activeStyle = {
  //   color: 'black'
  // };
  /**
   * @description this function handles the click on the join button
   * @pr {boolean} clicked represents whether the button is clicked or not
   * @param {int} index represents the index of the community that the user wants to join
   */
  const joinButtonClickHandler = (clicked, index) => {
    const joinedORLeft = clicked ? 'joined' : 'left';
    const sh = true;
    const newCommunities = [...cardCommunities];
    newCommunities[index].joined = clicked;
    communities = [...newCommunities];
    setCardCommunities(communities);
      <ActionMessage
        message={`Successfully ${joinedORLeft} ${newCommunities[index]}`}
        show={sh}
      />;
  };
  return (
    <StyledCard sx={{ width: '50%' }} elevation={0}>
      <CardContent
        sx={{
          padding: '0',
          '&:last-child': {
            paddingBottom: '0.7rem'
          },
          position: 'absolute',
          width: '48.35%'
        }}
      >
        <CategoriesCardBar data-testid="categories_card_bar">
          <Typography variant="h5">
            Today's Top Growing in
            {' '}
            {topText}
          </Typography>
          <Typography variant="h5" sx={{ color: '#7C7C7c' }}>
            Rank Change
          </Typography>
        </CategoriesCardBar>

        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            paddingTop: '0'

          }}
        >
          {communities.map((community, index) => (
            <Box sx={{ width: '100%' }}>
              {/* <NavLink
                style={({ isActive }) => (isActive ? activeStyle : activeStyle)}
                to="/food"
              > */}
              <ListItem
                key={index}
                alignItems="flex-start"
                sx={{
                  paddingBottom: '4px',
                  paddingTop: '4px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
                data-testid="communities_items"
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <ListItemText
                      sx={{
                        '& span': {
                          fontSize: '1.6rem',
                          paddingRight: '1rem',
                          marginTop: '1rem',
                          lineHeight: '2rem',
                          width: '1rem'
                        }
                      }}
                      primary={index + 1}
                    />
                    {community.growing == true ? (
                      <Box sx={{ marginTop: '1rem', padding: '0.5rem' }}>
                        <MdKeyboardArrowUp size={23} color="#46d15f" />
                      </Box>
                    ) : null}
                    {community.goingDown == true ? (
                      <Box sx={{ marginTop: '1rem', padding: '0.5rem' }}>
                        <MdKeyboardArrowDown size={23} color="#EA0027" />
                      </Box>
                    ) : null}
                    {community.goingDown == false
                    && community.growing == false ? (
                      <div style={{ width: '3rem' }} />
                      ) : null}
                    <ListItemAvatar sx={{ paddingLeft: '0.5rem' }}>
                      <Avatar alt={community.name} src={community.picture} />
                    </ListItemAvatar>
                    <div style={{
                      '& :hover': {
                        '& .comm_card': {
                          display: 'inline'
                        }
                      }
                    }}
                    >
                      <ListItemText
                        sx={{
                          '& span': {
                            fontSize: '1.6rem',
                            marginTop: '1.7rem',
                            lineHeight: '2rem'
                          },
                          position: 'relative'
                        }}
                        primary={community.name}
                      >
                        <div
                          className="comm_card"
                          style={{

                            position: 'absolute',
                            width: '100px',
                            height: '100px',
                            display: 'none'
                          }}
                        >
                          <CommunityHoverCard community={communities[0]} />
                        </div>
                      </ListItemText>
                    </div>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!community.userCommunity && community.joined == false ? (
                      <RoundedButton
                        sx={{
                          marginLeft: '3rem',
                          fontSize: '1.3rem',
                          padding: '2px 7px',
                          zIndex: 1000,
                          ':hover': {
                            backgroundColor: '#1484D6'
                          }
                        }}
                        variant="contained"
                        disableElevation
                        onClick={() => joinButtonClickHandler(true, index)}
                      >
                        join
                      </RoundedButton>
                    ) : !community.userCommunity && community.joined == true ? (
                      <RoundedButton
                        sx={{
                          marginLeft: '3rem',
                          fontSize: '1.3rem',
                          padding: '2px 7px',
                          zIndex: 1000,
                          '&:hover span': {
                            display: 'none'
                          },
                          '&:hover:before': {
                            content: '\'Leave\''
                          }
                        }}
                        variant="outlined"
                        disableElevation
                        onClick={() => joinButtonClickHandler(false, index)}
                      >
                        <span>joined</span>
                      </RoundedButton>
                    ) : null}
                    <ListItemText
                      sx={{
                        '& span': {
                          fontSize: '1.6rem',
                          padding: '1rem 1rem',
                          marginTop: '1rem',
                          lineHeight: '2rem',
                          width: '3rem'
                        }
                      }}
                      primary={community.rank}
                    />
                  </Box>
                </Box>
              </ListItem>
              {/* </NavLink> */}
              {index < communities.length - 1 ? (
                <Divider variant="fullwidth" component="li" />
              ) : null}
            </Box>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
}
export default (CategoriesCard);
