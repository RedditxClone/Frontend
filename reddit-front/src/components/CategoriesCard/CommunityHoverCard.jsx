/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { LargeRoundedButton } from "../HomePageCards/HomePageCards.style";
export default function CommunityHoverCard({ community }) {
  return (
    <Card sx={{ width: 350, padding: "0.7rem", lineHeight: "17px" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={community.name} src={community.picture} />
          <Typography sx={{ paddingLeft: "1rem" }} variant="h5">
            {community.name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.5rem"
          }}
        >
          <Box>
            <Typography sx={{ paddingBottom: "1px" }} variant="h6">
              {community.noMembers}
            </Typography>
            <Typography
              sx={{ paddingTop: "1px", color: "#7c7c7c" }}
              variant="h6"
            >
              Members
            </Typography>
          </Box>

          <Box
            sx={{
              borderLeft: "2px solid #1a1a1b12",
              marginRight: "10rem",
              paddingLeft: "0.9rem"
            }}
          >
            <Typography variant="h6">{community.noOnlineMembers}</Typography>
            <Typography sx={{ color: "#7c7c7c" }} variant="h6">
              Online
            </Typography>
          </Box>
        </Box>
        {community.description != null ? (
          <Typography sx={{ paddingTop: "1.2rem" }} variant="h6">
            {community.description}
          </Typography>
        ) : null}
        <LargeRoundedButton
          variant="contained"
          disableElevation
          sx={{
            alignSelf: "center",
            margin: "1rem 0",
            width: "100%",
            '&:hover':{
              backgroundColor:'#1484D6'
            }
          }}
        >
          View Community
        </LargeRoundedButton>
      </CardContent>
    </Card>
  );
}
