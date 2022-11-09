/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function CommunityHoverCard({ community }) {
  return (
    <Card sx={{ maxWidth: 400, padding: "1rem" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={community.name} src={community.picture} />
          <Typography sx={{lineHeight:'17px',paddingLeft:'10px'}}variant="h5">{community.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
