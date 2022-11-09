/* eslint-disable react/no-array-index-key */
/* eslint-disable */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { autocompleteClasses, Box, styled } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import {
  RoundedButton,
  OverButton,
  Root,
  LargeRoundedButton,
  StyledCard
} from "./HomePageCards.style";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { NavLink as NavLinkBase } from "react-router-dom";
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
const NavLink = styled(NavLinkBase)({
  textDecoration: "none"
});
export default function HomeCommunitiesCard({
  pic,
  communities,
  buttons1,
  buttons2,
  homePageCard,
  buttonText,
  handleClick
}) {
  let activeStyle = {
    color: "black"
  };
  const [cardCommunities, setCardCommunities] = useState(communities);
  const joinButtonClickHandler = (clicked, index) => {
    const newCommunities = [...cardCommunities];
    newCommunities[index].joined = clicked;
    communities = [...newCommunities];
    setCardCommunities(communities);
  };
  const buttonTextToLinkMap = (text) => {
   const newText=text.toLowerCase();
   let link;
    if(text.includes('&'))
    {
     link=newText.replaceAll(' ','_') ;
     link=link.replaceAll('&','and') ;
     
    }
    else if(text.includes(' ')&& !text.includes('&'))
    {
      link=newText.replaceAll(' ','-') ;
    }
    else{
      link=newText;
    }
    return link;
  };

  return (
    <Root>
      <StyledCard sx={{ width: 310, marginBottom: '2rem'}} elevation={0}>
        <CardMedia component="img" height="70" image={pic} alt="green iguana" />
        <CardContent
          sx={{
            padding: "0",
            "&:last-child": {
              paddingBottom: "0.7rem"
            }
          }}
        >
          <Box sx={{ display: "flex", marginTop: "-3.4rem" }}>
            {buttons1.map((button) => (
              <OverButton key={button}>{button}</OverButton>
            ))}
          </Box>

          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              padding:'0'
            }}
          >
            {communities.map((community, index) => (
              <Box key={index}>
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : activeStyle)}
                  to="/food"
                  
                >
                  <ListItem alignItems="flex-start" sx={{padding:'4px 16px'}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ListItemText
                        sx={{
                          "& span": {
                            fontSize: "1.6rem",
                            paddingRight: "1rem",
                            marginTop: "1rem"
                          }
                        }}
                        primary={index + 1}
                      />
                      {community.growing == true ? (
                        <Box sx={{ marginTop: "1rem" }}>
                          <MdKeyboardArrowUp size={23} color="#46d15f" />
                        </Box>
                      ) : null}
                      {community.goingDown == true ? (
                        <Box sx={{ marginTop: "1rem" }}>
                          <MdKeyboardArrowDown size={23} color="#EA0027" />
                        </Box>
                      ) : null}
                      {community.goingDown == false &&
                      community.growing == false ? (
                        <div style={{ width: "2.2rem" }}></div>
                      ) : null}
                      <ListItemAvatar sx={{ paddingLeft: "0.5rem" }}>
                        <Avatar alt={community.name} src={community.picture} />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{
                          "& span": {
                            fontSize: "1.6rem",
                            marginTop:'1rem'
                          }
                        }}
                        primary={community.name}
                      />
                      {homePageCard == true &&
                      !community.userCommunity &&
                      community.joined == false ? (
                        <RoundedButton
                          sx={{
                            marginLeft: "3rem",
                            fontSize: "1.3rem",
                            padding: "2px 7px",
                            ":hover": {
                              backgroundColor: "#1484D6"
                            }
                          }}
                          variant="contained"
                          disableElevation
                          onClick={() => joinButtonClickHandler(true, index)}
                        >
                          join
                        </RoundedButton>
                      ) : homePageCard == true &&
                        !community.userCommunity &&
                        community.joined == true ? (
                        <RoundedButton
                          sx={{
                            marginLeft: "3rem",
                            fontSize: "1.3rem",
                            padding: "2px 7px",
                            "&:hover span": {
                              display: "none"
                            },
                            "&:hover:before": {
                              content: `'Leave'`
                            }
                          }}
                          variant="outlined"
                          disableElevation
                          onClick={() => joinButtonClickHandler(false, index)}
                        >
                          <span>joined</span>
                        </RoundedButton>
                      ) : null}
                    </Box>
                  </ListItem>
                </NavLink>
                {index < communities.length - 1 ? (
                  <Divider variant="fullwidth" component="li" />
                ) : null}
              </Box>
            ))}
          </List>
          {homePageCard == true ? (
            <LargeRoundedButton
              sx={{
                margin: "1rem 0 1.5rem 1.5rem",
                "&:hover": {
                  backgroundColor: "#1484D6"
                }
              }}
              variant="contained"
              disableElevation
            >
              View All
            </LargeRoundedButton>
          ) : (
            <NavLink to={`${buttonTextToLinkMap(buttonText)}`}>
              <LargeRoundedButton
                sx={{
                  margin: "1rem 0 1.5rem 1.5rem",
                  textDecoration: "none"
                }}
                variant="outlined"
                disableElevation
              >
                See All {buttonText}
              </LargeRoundedButton>
            </NavLink>
          )}
          {buttons2 != null && homePageCard == true ? (
            <Box
              sx={{
                display: "flex",
                marginTop: "-3.4rem",
                justifyContent: "flex-start",
                marginLeft: "0.8rem"
              }}
            >
              {buttons2.map((button) => (
                <RoundedButton
                  sx={{
                    marginTop: "3rem",
                    marginRight: "0.3rem",
                    fontSize: "1.2rem",
                    minWidth: "auto",
                    // padding: "4px auto",
                    backgroundColor: "#EDEDED",
                    color: "#1484D6",
                    alignSelf: "flex-start",
                    ":hover": {
                      backgroundColor: "#E3EDF6"
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
          ) : null}
        </CardContent>
      </StyledCard>
    </Root>
  );
}
