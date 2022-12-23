/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import { TextField, Button, Box, MenuItem } from '@mui/material';
import './SafetyStyle.css';
import { useState } from 'react';

/**
 * This component is in Safety & Privacy Settings Page
 * it contains features : people you have blocked
 */

function Safety() {
  const [state, setState] = useState('OFF');
  const handleChangeState = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="safety">
      <h3 className="main-h3">Safety</h3>
      <h3 className="h3">People You’ve Blocked</h3>
      <p className="p1">
        Blocked people can’t send you chat requests or private messages.
      </p>
      <div className="text-btn">
        <TextField
          data-testid="block-inp"
          id="filled-basic"
          label="Block New User"
          variant="filled"
          fullWidth
          sx={{ '& label': { color: '#797b7c', fontSize: 13 } }}
        />
        <Button
          variant="text"
          style={{
            marginLeft: '-63px',
            color: '#0079d3',
            opacity: 0.5
          }}
        >
          ADD
        </Button>
      </div>
      <div
        className="parent-div"
        style={{ paddingTop: '44px' }}
      >
        <div className="child-div">
          <h3 className="h3">Collapse potentially disruptive comments</h3>
          <p
            className="p"
            style={{ marginBottom: '-4px' }}
          >
            Automatically collapse comments that are potentially rude or
            disrespectful by selecting the sensitivity level you're most
            comfortable with—selecting Low will collapse the least, High will
            collapse the most.
          </p>
        </div>
        {/* <Box className="child-b">
          <Switch />
        </Box> */}
        <Box className="child-b">
          <TextField
            variant="standard"
            select
            fullwidth
            value={state}
            onChange={handleChangeState}
          >
            <MenuItem value="OFF">OFF</MenuItem>
            <MenuItem value="LOW">LOW</MenuItem>
            <MenuItem value="MEDIUM">MEDIUM</MenuItem>
            <MenuItem value="HIGH">HIGH</MenuItem>
          </TextField>
        </Box>
      </div>
    </div>
  );
}
export default Safety;
