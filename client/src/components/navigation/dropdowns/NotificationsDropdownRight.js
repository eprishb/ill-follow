import React from "react";

function NotificationsDropdownRight() {
  return (
    <div className="navbar-item is-icon drop-trigger">
      <a className="icon-link" href="javascript:void(0);">
        <i data-feather="bell"></i>
        <span className="indicator"></span>
      </a>

      <div className="nav-drop is-right">
        <div className="inner">
          <div className="nav-drop-header">
            <span>Notifications</span>
            <a href="#">
              <i data-feather="bell"></i>
            </a>
          </div>
          <div className="nav-drop-body is-notifications">
            <div className="media">
              <figure className="media-left">
                <p className="image">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/david.jpg"
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <span>
                  <a href="#">David Kim</a> commented on{" "}
                  <a href="#">your post</a>.
                </span>
                <span className="time">30 minutes ago</span>
              </div>
              <div className="media-right">
                <div className="added-icon">
                  <i data-feather="message-square"></i>
                </div>
              </div>
            </div>
            <div className="media">
              <figure className="media-left">
                <p className="image">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/daniel.jpg"
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <span>
                  <a href="#">Daniel Wellington</a> liked your{" "}
                  <a href="#">profile.</a>
                </span>
                <span className="time">43 minutes ago</span>
              </div>
              <div className="media-right">
                <div className="added-icon">
                  <i data-feather="heart"></i>
                </div>
              </div>
            </div>
            <div className="media">
              <figure className="media-left">
                <p className="image">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/stella.jpg"
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <span>
                  <a href="#">Stella Bergmann</a> shared a{" "}
                  <a href="#">New video</a> on your wall.
                </span>
                <span className="time">Yesterday</span>
              </div>
              <div className="media-right">
                <div className="added-icon">
                  <i data-feather="youtube"></i>
                </div>
              </div>
            </div>
            <div className="media">
              <figure className="media-left">
                <p className="image">
                  <img
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/elise.jpg"
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <span>
                  <a href="#">Elise Walker</a> shared an <a href="#">Image</a>{" "}
                  with you an 2 other people.
                </span>
                <span className="time">2 days ago</span>
              </div>
              <div className="media-right">
                <div className="added-icon">
                  <i data-feather="image"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-drop-footer">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsDropdownRight;
