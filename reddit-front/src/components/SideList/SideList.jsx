// import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SideList({ arr, buttonTitle, click }) {
  const listArray = arr;

  return (
    <div>
      <List
        sx={{
          backgroundColor: '#FFFFFF',
          width: '200px',
          padding: '0',
          margin: '0',
          marginRight: '24px',
          border: '2px solid #EDEFF1',
          borderRadius: '4px'
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

        {listArray.map((text) => (
          <ListItem
            key={text}
            disablePadding
          >
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#F6F7F8'
                },
                '&:focus': {
                  backgroundColor: '#F6F7F8',
                  borderLeft: '6px solid var(--newCommunityTheme-button)',
                  fontSize: '50px',
                  color: '#F6F7F8',
                  fontWeight: '900'
                }
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '12px',
                  fontWeight: '500',
                  lineHeight: '16px',
                  color: '#1c1c1c',
                  fontFamily: "'IBM Plex Sans',sans-serif"
                }}
              />
            </ListItemButton>
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
    </div>
  );
}
