import React from "react";

function AccountDropdown() {
  return (
    <div
      id="account-dropdown"
      className="navbar-item is-account drop-trigger has-caret"
    >
      <div className="user-image">
        <img
          src="https://via.placeholder.com/400x400"
          data-demo-src="assets/img/avatars/jenna.png"
          alt=""
        />
        <span className="indicator"></span>
      </div>

      <div className="nav-drop is-account-dropdown">
        <div className="inner">
          <div className="nav-drop-header">
            <span className="username">Jenna Davis</span>
            <label className="theme-toggle">
              <input type="checkbox" />
              <span className="toggler">
                <span className="dark">
                  <i data-feather="moon"></i>
                </span>
                <span className="light">
                  <i data-feather="sun"></i>
                </span>
              </span>
            </label>
          </div>
          <div className="nav-drop-body account-items">
            <a
              id="profile-link"
              href="/profile-main.html"
              className="account-item"
            >
              <div className="media">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/400x400"
                      data-demo-src="assets/img/avatars/jenna.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <h3>Jenna Davis</h3>
                  <small>Main account</small>
                </div>
                <div className="media-right">
                  <i data-feather="check"></i>
                </div>
              </div>
            </a>
            <hr className="account-divider" />
            <a href="/pages-main.html" className="account-item">
              <div className="media">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/hanzo.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <h3>Css Ninja</h3>
                  <small>Company page</small>
                </div>
                <div className="media-right is-hidden">
                  <i data-feather="check"></i>
                </div>
              </div>
            </a>
            <a href="/pages-main.html" className="account-item">
              <div className="media">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/icons/logos/fastpizza.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <h3>Fast Pizza</h3>
                  <small>Company page</small>
                </div>
                <div className="media-right is-hidden">
                  <i data-feather="check"></i>
                </div>
              </div>
            </a>
            <a href="/pages-main.html" className="account-item">
              <div className="media">
                <div className="media-left">
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/icons/logos/slicer.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="media-content">
                  <h3>Slicer</h3>
                  <small>Company page</small>
                </div>
                <div className="media-right is-hidden">
                  <i data-feather="check"></i>
                </div>
              </div>
            </a>
            <hr className="account-divider" />
            <a href="/options-settings.html" className="account-item">
              <div className="media">
                <div className="icon-wrap">
                  <i data-feather="settings"></i>
                </div>
                <div className="media-content">
                  <h3>Settings</h3>
                  <small>Access widget settings.</small>
                </div>
              </div>
            </a>
            <a className="account-item">
              <div className="media">
                <div className="icon-wrap">
                  <i data-feather="life-buoy"></i>
                </div>
                <div className="media-content">
                  <h3>Help</h3>
                  <small>Contact our support.</small>
                </div>
              </div>
            </a>
            <a className="account-item">
              <div className="media">
                <div className="icon-wrap">
                  <i data-feather="power"></i>
                </div>
                <div className="media-content">
                  <h3>Log out</h3>
                  <small>Log out from your account.</small>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDropdown;
