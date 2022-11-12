/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */

import { NavLink, Outlet } from 'react-router-dom';
import AppBarReddit from '../../components/Layout/AppBar/AppBar';
import './UserSettings.css';

function UserSettings() {
  const activeStyle = {
    borderBottom: '3px solid #0079d3',
    color: 'black'
  };

  return (
    <>
      <AppBarReddit />
      <div className="main-container">
        <div className="main-div">
          <h3 className="main">User settings</h3>
          <div className="nav-bar">
            <nav>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/account"
              >
                Account
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/profile"
              >
                Profile
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/privacy"
              >
                Safety &amp; Privacy
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/feed"
              >
                Feed Settings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/notifications"
              >
                Notifications
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/emails"
              >
                Emails
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/premium"
              >
                Subscriptions
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/settings/messaging"
              >
                Chat &amp; Messaging
              </NavLink>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSettings;
