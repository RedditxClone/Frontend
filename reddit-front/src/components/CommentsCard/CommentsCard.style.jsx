/* eslint-disable */

import { styled } from "@mui/material";
import { NavLink as NavLinkBase } from 'react-router-dom';
/**
 * Global style for Home Page Cards
 */

/**
 * Responsively showing cards or not
 */

export const CommentCard = styled("div")({
  width: "70rem",
  backgroundColor: "#FFFFFF",

});

/**
 * @description this function styles the default NavLinkBase
 * @param {NavLinkBase} NavLinkBase - the default NavLinkBase
 * @return {NavLinkBase} - The styled NavLinkBase
 */

 export const NavLink = styled(NavLinkBase)({
    // textDecoration: 'none'
  });
