/* eslint-disable no-unused-vars */
// import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NavLink from './SideList.style';
/**
 * @description This component is resposinble for Categories List which is used to
 *  go to subreddits with same category
 * @param {Array} arr -contains names of items found in sidelist
 * @param {string} buttonTitle title of list endbutton which changed by state outside this component
 * @param {function} click to handle onClick of list endButton
 * @param {Array} links to set destinations we will go when clicking on list item
 * @returns {React.Component} styled sideList
 */
function SideList({
  arr, buttonTitle, click, links
}) {
  const listArray = arr;

  return (
    <List
      sx={{
        backgroundColor: '#FFFFFF',
        width: '20rem',
        padding: '0',
        margin: '0',
        marginRight: '2.4rem',
        border: '2px solid #EDEFF1',
        borderRadius: '4px'
        // height: '51rem'
        // flexGrow: '1'
      }}
    >
      <ListItemText
        sx={{ my: 0 }}
        primary="Categories"
        primaryTypographyProps={{
          fontSize: '1.6rem',
          fontWeight: '500',
          letterSpacing: 0.5,
          color: '1c1c1c',
          paddingLeft: '1.6rem',
          borderBottom: 'thin solid #EDEFF1',
          fontFamily: "'IBM Plex Sans',sans-serif",
          height: '4rem',
          lineHeight: '3.5rem',
          backgroundColor: '#F6F7F8'
        }}
      />

      {listArray.map((text, index) => (
        <NavLink to={`${links[index]}`}>
          <span id="SideBorder"> </span>
          <ListItem
            key={text}
            disablePadding
            sx={{
              height: '3.6rem',
              // width: '200px',
              alignItems: 'center',
              padding: '1.6rem 1.6rem',
              '&:hover': {
                backgroundColor: '#F6F7F8'
              },
              '&:focus': {
                backgroundColor: '#F6F7F8',
                color: '#F6F7F8'
              }
            }}
          >
            {text}
          </ListItem>
        </NavLink>
      ))}
      <ListItem
        key={buttonTitle}
        disablePadding
        sx={{
          height: '30px'
        }}
      >
        <ListItemButton
          onClick={click}
          sx={{
            height: '30px',
            '&:hover': {
              backgroundColor: '#F6F7F8',
              borderRadius: '9999px'
            },
            '&:focus': {
              backgroundColor: '#F6F7F8',
              border: '1px solid transparent',
              fontSize: '50px'
            }
          }}
        >
          <ListItemText
            primary={buttonTitle}
            primaryTypographyProps={{
              fontFamily: "'Noto Sans',Arial,sans-serif",
              fontSize: '1.4rem',
              fontWeight: '700',
              color: 'var(--newCommunityTheme-button)',
              textAlign: 'center'
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
export default SideList;
