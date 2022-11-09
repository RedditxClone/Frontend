/* eslint-disable no-unused-vars */
// import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NavLink from './SideList.style';

export default function SideList({
  arr, buttonTitle, click, links
}) {
  const listArray = arr;

  return (
    <List
      sx={{
        backgroundColor: '#FFFFFF',
        width: '200px',
        padding: '0',
        margin: '0',
        marginRight: '24px',
        border: '2px solid #EDEFF1',
        borderRadius: '4px'
        // flexGrow: '1'
      }}
    >
      <ListItemText
        sx={{ my: 0 }}
        primary="Categories"
        primaryTypographyProps={{
          fontSize: 16,
          fontWeight: '500',
          letterSpacing: 0.5,
          color: '1c1c1c',
          paddingLeft: '16px',
          borderBottom: 'thin solid #EDEFF1',
          fontFamily: "'IBM Plex Sans',sans-serif",
          height: '40px',
          lineHeight: '35px',
          backgroundColor: '#F6F7F8'
        }}
      />

      {listArray.map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{
            height: '36px',
            // width: '200px',
            alignItems: 'center',
            padding: '16px 16px',
            '&:hover': {
              backgroundColor: '#F6F7F8'
            },
            '&:focus': {
              backgroundColor: '#F6F7F8',
              borderLeft: '6px solid var(--newCommunityTheme-button)',
              color: '#F6F7F8'
            }
          }}
        >
          {/* <ListItemButton
            sx={{
              '&:hover': {
                backgroundColor: '#F6F7F8'
              },
              '&:focus': {
                backgroundColor: '#F6F7F8',
                borderLeft: '6px solid var(--newCommunityTheme-button)',
                fontSize: '12px',
                color: '#F6F7F8',
                fontWeight: '500'
              }
            }}
          > */}
          <NavLink to={`${links[index]}`}>
            {text}
          </NavLink>
          {/* </ListItemButton> */}

        </ListItem>
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
              fontSize: '14px',
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
