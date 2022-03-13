import React from "react";
import Avatar from '../../Avatar';
import Icon from "../../misc/icon/Icon";

function Sidebar({ toggleSidebar, sidebarOpen}) {
  return (
    <div className={`sidebar-v1 ${sidebarOpen ? "" : "is-fold"}`}>
      <div className="top-section">
        <button
          id="sidebar-v1-close"
          className="close-button"
          onClick={toggleSidebar}
        >
          <Icon icon="arrow-left" />
        </button>
        <div className="field is-grouped">
          <div className="control">
            <input
              id="tipue_drop_input"
              className="input"
              placeholder="Search..."
            />
            <div className="form-icon">
              <Icon icon="search" />
            </div>
            <div id="tipue_drop_content" className="tipue-drop-content"></div>
          </div>
        </div>

        <div className="user-block">
          <Avatar />
          <div className="meta">
            <span>Jenna Davis</span>
            <span>Influencer</span>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <ul>
          <li>
            <a href="sidebar-v1-feed.html" className="is-active">
              <Icon icon="clock" />
              <span>Timeline</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-profile-friends.html">
              <Icon icon="user" />
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-groups.html">
              <Icon icon="users" />
              <span>Groups</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-profile-photos.html">
              <Icon icon="image" />
              <span>Photos</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="sidebar-v1-settings.html">
              <Icon icon="settings" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a>
              <Icon icon="log-out" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
