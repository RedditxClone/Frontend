/* eslint-disable no-unused-vars */
// import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NavLink from './ProfileNav.style';
/**
 * @description This component is resposinble for Categories List which is used to
 *  go to subreddits with same category
 * @param {Array} arr -contains names of items found in sidelist
 * @param {string} buttonTitle title of list endbutton which changed by state outside this component
 * @param {function} click to handle onClick of list endButton
 * @param {Array} links to set destinations we will go when clicking on list item
 * @returns {React.Component} styled sideList
 */
function ProfileNav({ arr, olinks }) {
  const listArray = arr;
  const links = olinks;

  return (
    <List
      sx={{
        backgroundColor: '#FFFFFF',
        height: '40px',
        padding: '1rem 3rem',
        margin: '0',
        marginRight: '2.4rem',
        border: '2px solid #EDEFF1',
        borderRadius: '4px',
        width: '100%'
        // height: '51rem'
        // flexGrow: '1'
      }}
    >
      {listArray.map((text, index) => (
        <NavLink to={`${links[index]}`}>
          <ListItem
            key={text}
            disablePadding
            sx={{
              height: '3.6rem',
              // width: '200px',
              display: 'inline',
              alignItems: 'center',
              padding: '1.6rem 1.6rem'
            }}
          >
            {text}
            <span id="SideBorder"> </span>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}
export default ProfileNav;
