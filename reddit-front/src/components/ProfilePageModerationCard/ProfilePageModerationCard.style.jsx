/* eslint-disable */

import { styled } from "@mui/material";
import { NavLink as NavLinkBase } from 'react-router-dom';
/**
 * Global style for Home Page Cards
 */

/**
 * Responsively showing cards or not
 */

export const SmallCard = styled("div")({
  width: "31rem",
  backgroundColor: "#FFFFFF",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginTop: '1.5rem'
});

/**
 * @description this function styles the default NavLinkBase
 * @param {NavLinkBase} NavLinkBase - the default NavLinkBase
 * @return {NavLinkBase} - The styled NavLinkBase
 */

 export const NavLink = styled(NavLinkBase)({
    // textDecoration: 'none'
  });
