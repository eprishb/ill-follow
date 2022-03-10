import React from "react";

function Sidebar() {
  return (
    <div className="sidebar-v1">
      <div className="top-section">
        <button id="sidebar-v1-close" className="close-button">
          <i data-feather="arrow-left"></i>
        </button>
        <div className="field is-grouped">
          <div className="control">
            <input
              id="tipue_drop_input"
              className="input"
              placeholder="Search..."
            />
            <div className="form-icon">
              <i data-feather="search"></i>
            </div>
            <div id="tipue_drop_content" className="tipue-drop-content"></div>
          </div>
        </div>

        <div className="user-block">
          <img
            className="avatar"
            src="https://via.placeholder.com/150x150"
            data-demo-src="assets/img/avatars/jenna.png"
            alt=""
          />
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
              <i data-feather="clock"></i>
              <span>Timeline</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-profile-friends.html">
              <i data-feather="user"></i>
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-groups.html">
              <i data-feather="users"></i>
              <span>Groups</span>
            </a>
          </li>
          <li>
            <a href="sidebar-v1-profile-photos.html">
              <i data-feather="image"></i>
              <span>Photos</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="sidebar-v1-settings.html">
              <i data-feather="settings"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a>
              <i data-feather="log-out"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
