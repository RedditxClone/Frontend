/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/self-closing-comp */

import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import AccountSettings from '../../components/AccountSettings/AccountSettings';
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings';
import SafetyPrivacySettings from '../../components/SafetyPrivacySettings/SafetyPrivacySettings';
import FeedSettings from '../../components/FeedSettings/FeedSettings';
import Notifications from '../../components/Notifications/Notifications';
import Emails from '../../components/Emails/Emails';
import Subscriptions from '../../components/Subscriptions/Subscriptions';
import ChatMessaging from '../../components/ChatMessaging/ChatMessaging';
import './UserSettings.css';

function UserSettings() {
  const activeStyle = {
    borderBottom: '3px solid #0079d3',
    color: 'black',
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <div className="main-div">
          <h3 className="main">User settings</h3>
          <div className="nav-bar">
            <nav>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/account"
              >
                Account
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/profile"
              >
                Profile
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/privacy"
              >
                Safety & Privacy
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/feed"
              >
                Feed Settings
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/notifications"
              >
                Notifications
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/emails"
              >
                Emails
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/premium"
              >
                Subscriptions
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/messaging"
              >
                Chat & Messaging
              </NavLink>
            </nav>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={<AccountSettings />}
          />
          <Route
            path="/account"
            element={<AccountSettings />}
          />
          <Route
            path="/profile"
            element={<ProfileSettings />}
          />
          <Route
            path="/privacy"
            element={<SafetyPrivacySettings />}
          />
          <Route
            path="/feed"
            element={<FeedSettings />}
          />
          <Route
            path="/notifications"
            element={<Notifications />}
          />
          <Route
            path="/emails"
            element={<Emails />}
          />
          <Route
            path="/premium"
            element={<Subscriptions />}
          />
          <Route
            path="/messaging"
            element={<ChatMessaging />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default UserSettings;
