/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
import { TextField, Box, Switch, MenuItem } from '@mui/material';
import './ContentPreferencesStyle.css';
import { useState } from 'react';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MenuIcon from '@mui/icons-material/Menu';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignCenter';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

export default function ContentPreferences() {
  const [state, setState] = useState('HOT');
  const handleChangeState = (e) => {
    setState(e.target.value);
  };
  const [view, setView] = useState('CARD');
  const handleChangeView = (e) => {
    setView(e.target.value);
  };
  return (
    <div className="content-preferences">
      <h3 className="main-h3">Content Preferences</h3>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Adult content</h3>
          <p className="p">
            Enable to view adult and NSFW (not safe for work) content in your
            feed and search results.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div-disabled">
        <div className="child-div">
          <h3 className="h3">Safe browsing mode</h3>
          <p className="p">
            Blur thumbnails and media preview for anything labeled NSFW (not
            safe for work).
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Enable home feed recommendations</h3>
          <p className="p">
            Allow us to introduce recommended posts in your home feed.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Enable live recommendations</h3>
          <p className="p">
            Allow us to feature recommended live events at the top of your home
            feed.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Autoplay media</h3>
          <p className="p">
            Play videos and gifs automatically when in the viewport.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Reduce Animations</h3>
          <p className="p">Reduce animations on posts, comments, and feeds.</p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Community themes</h3>
          <p className="p">
            Use custom themes for all communities. You can also turn this off on
            a per community basis.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Community content sort</h3>
          <p className="p">
            Choose how you would like content organized in communities you
            visit. This will not affect global feeds such as Home, or Popular.
          </p>
        </div>
        <Box className="child-b">
          <TextField
            variant="standard"
            select
            fullwidth
            value={state}
            onChange={handleChangeState}
          >
            <MenuItem value="HOT">
              <LocalFireDepartmentIcon />
              HOT
            </MenuItem>
            <MenuItem value="NEW">
              <Brightness5Icon />
              NEW
            </MenuItem>
            <MenuItem value="TOP">
              <LeaderboardIcon />
              TOP
            </MenuItem>
            <MenuItem value="RISING">
              <ShowChartIcon />
              RISING
            </MenuItem>
          </TextField>
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div-shifted">
          <h3 className="h3">Remember per community</h3>
          <p className="p">
            Enable if you would like each community to remember and use the last
            content sort you selected for that community.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Global content view</h3>
          <p className="p">
            Choose how you would like content displayed in feeds. This control
            is also found above your feed.
          </p>
        </div>
        <Box className="child-b">
          <TextField
            variant="standard"
            select
            fullwidth
            value={view}
            onChange={handleChangeView}
          >
            <MenuItem value="CARD">
              <MenuIcon />
              CARD
            </MenuItem>
            <MenuItem value="CLASSIC">
              <DensitySmallIcon />
              CLASSIC
            </MenuItem>
            <MenuItem value="COMPACT">
              <FormatAlignJustifyIcon />
              COMPACT
            </MenuItem>
          </TextField>
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div-shifted">
          <h3 className="h3">Remember per community</h3>
          <p className="p">
            Enable if you would like each community to remember and use the last
            content view you selected for that community.
          </p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
      <div className="parent-div">
        <div className="child-div">
          <h3 className="h3">Open posts in new tab</h3>
          <p className="p">Enable to always open posts in a new tab.</p>
        </div>
        <Box className="child-b">
          <Switch />
        </Box>
      </div>
    </div>
  );
}
