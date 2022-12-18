/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import AppBar from '../../components/Layout/AppBar/AppBar';
import './Messages.style.css';

export default function Messages() {
  const [isSent, setIssent] = useState(false);
  const handleShowList = () => {
    setIssent(false);
  };

  const handleHideList = () => {
    setIssent(true);
  };
  const colorNav1 = {
    color: '#80bce9'
  };
  const colorNav2 = {
    color: '#edeff1'
  };
  const activeStyle1 = {
    paddingBottom: '3px ',
    color: '#ffffff',
    borderBottom: '3px solid #ffffff'
  };
  const activeStyle2 = {
    color: '#ffffff'
  };

  const links = !isSent ? (
    <div
      style={{
        margin: '0',
        padding: '0',
        borderBottom: 'none',
        backgroundColor: '#0079d3'
      }}
    >
      <div style={{ margin: '0 20px 0 100px' }}>
        <div style={{ paddingBottom: '5px', paddingLeft: '5px' }}>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle1 : activeStyle2)}
            className="message-link-first"
            to="/message/inbox"
            onClick={handleShowList}
          >
            All
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle1 : activeStyle2)}
            className="message-link"
            to="/message/unread"
            onClick={handleShowList}
          >
            Unread
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle1 : activeStyle2)}
            className="message-link"
            to="/message/messages"
            onClick={handleShowList}
          >
            Messages
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle1 : activeStyle2)}
            className="message-link"
            to="/message/selfreply"
            onClick={handleShowList}
          >
            Post Replies
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle1 : activeStyle2)}
            className="message-link"
            to="/message/mentions"
            onClick={handleShowList}
          >
            Username Mentions
          </NavLink>
        </div>
      </div>
    </div>
  ) : (
    ''
  );

  return (
    <div>
      <AppBar />
      <div
        style={{
          margin: '0',
          padding: '0',
          borderBottom: 'none',
          backgroundColor: '#0079d3'
        }}
      >
        <div style={{ margin: '0 20px 0 100px', padding: '20px 0 20px 0' }}>
          <div>
            <NavLink
              onClick={handleHideList}
              style={({ isActive }) => (isActive ? colorNav1 : colorNav2)}
              className="message-link-1"
              to="/message/compose"
            >
              Send A Private Message
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? colorNav1 : colorNav2)}
              className="message-link-1"
              to="/message/inbox"
              onClick={handleShowList}
            >
              Inbox
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? colorNav1 : colorNav2)}
              className="message-link-1"
              to="/message/sent"
              onClick={handleHideList}
            >
              Sent
            </NavLink>
          </div>
        </div>
      </div>
      {links}
      <div
        style={{
          minHeight: '80.9vh',
          backgroundColor: '#edeff1',
          paddingTop: '1px',
          paddingBottom: '1px'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
