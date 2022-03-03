import React from "react";

function TimelineHeader() {
  return (
    <>
      <div className="cover-bg">
        <img
          className="cover-image"
          src="https://via.placeholder.com/1600x460"
          data-demo-src="assets/img/demo/bg/4.png"
          alt=""
        />
        <div className="avatar">
          <img
            id="user-avatar"
            className="avatar-image"
            src="https://via.placeholder.com/300x300"
            data-demo-src="assets/img/avatars/jenna.png"
            alt=""
          />
          <div className="avatar-button">
            <i data-feather="plus"></i>
          </div>
          <div
            className="pop-button is-far-left has-tooltip modal-trigger"
            data-modal="change-profile-pic-modal"
            data-placement="right"
            data-title="Change profile picture"
          >
            <a className="inner">
              <i data-feather="camera"></i>
            </a>
          </div>
          <div
            id="follow-pop"
            className="pop-button pop-shift is-left has-tooltip"
            data-placement="top"
            data-title="Subscription"
          >
            <a className="inner">
              <i className="inactive-icon" data-feather="bell"></i>
              <i className="active-icon" data-feather="bell-off"></i>
            </a>
          </div>
          <div
            id="invite-pop"
            className="pop-button pop-shift is-center has-tooltip"
            data-placement="top"
            data-title="Relationship"
          >
            <a href="#" className="inner">
              <i className="inactive-icon" data-feather="plus"></i>
              <i className="active-icon" data-feather="minus"></i>
            </a>
          </div>
          <div
            id="chat-pop"
            className="pop-button is-right has-tooltip"
            data-placement="top"
            data-title="Chat"
          >
            <a className="inner">
              <i data-feather="message-circle"></i>
            </a>
          </div>
          <div
            className="pop-button is-far-right has-tooltip"
            data-placement="right"
            data-title="Send message"
          >
            <a href="messages-inbox.html" className="inner">
              <i data-feather="mail"></i>
            </a>
          </div>
        </div>
        <div className="cover-overlay"></div>
        <div
          className="cover-edit modal-trigger"
          data-modal="change-cover-modal"
        >
          <i className="mdi mdi-camera"></i>
          <span>Edit cover image</span>
        </div>
        {/* {{> timeline-mobile-dropdown}} */}
      </div>

      <div className="profile-menu is-hidden-mobile">
        <div className="menu-start">
          <a href="profile-main.html" className="button has-min-width">
            Timeline
          </a>
          <a href="profile-about.html" className="button has-min-width">
            About
          </a>
        </div>
        <div className="menu-end">
          <a
            id="profile-friends-link"
            href="profile-friends.html"
            className="button has-min-width"
          >
            Friends
          </a>
          <a href="profile-photos.html" className="button has-min-width">
            Photos
          </a>
        </div>
      </div>

      <div className="profile-subheader">
        <div className="subheader-start is-hidden-mobile">
          <span>3.4K</span>
          <span>Friends</span>
        </div>
        <div className="subheader-middle">
          <h2>Jenna Davis</h2>
          <span>Media Influencer</span>
        </div>
        <div className="subheader-end is-hidden-mobile">
          <a className="button has-icon is-bold">
            <i data-feather="clock"></i>
            History
          </a>
        </div>
      </div>
    </>
  );
}

export default TimelineHeader;
