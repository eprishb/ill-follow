import React from 'react'
import Icon from '../../../../misc/icon/Icon';

function HiddenOptions({ composeFriends }) {
	return (
    <div className={`hidden-options ${composeFriends ? "is-opened" : ""}`}>
      <div className="target-channels">
        <div className="channel">
          <div className="round-checkbox is-small">
            <div>
              <input type="checkbox" id="checkbox-1" defaultChecked />
              <label htmlFor="checkbox-1"></label>
            </div>
          </div>
          <div className="channel-icon">
            <Icon icon="bell" />
          </div>
          <div className="channel-name">Activity Feed</div>
          <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
            <div>
              <button className="button" aria-haspopup="true">
                <i className="main-icon" data-feather="smile" />
                <span>Friends</span>
                <i className="caret" data-feather="chevron-down" />
              </button>
            </div>
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <Icon icon="globe" />
                    <div className="media-content">
                      <h3>Public</h3>
                      <small>Anyone can see this publication.</small>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="media">
                    <Icon icon="users" />
                    <div className="media-content">
                      <h3>Friends</h3>
                      <small>only friends can see this publication.</small>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="media">
                    <Icon icon="user" />
                    <div className="media-content">
                      <h3>Specific friends</h3>
                      <small>Don't show it to some friends.</small>
                    </div>
                  </div>
                </a>
                <hr className="dropdown-divider" />
                <a className="dropdown-item">
                  <div className="media">
                    <Icon icon="lock" />
                    <div className="media-content">
                      <h3>Only me</h3>
                      <small>Only me can see this publication.</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="channel">
          <div className="round-checkbox is-small">
            <div>
              <input type="checkbox" id="checkbox-2" />
              <label htmlFor="checkbox-2"></label>
            </div>
          </div>
          <div className="story-icon">
            <div className="plus-icon">
              <Icon icon="plus" />
            </div>
          </div>

          <div className="channel-name">My Story</div>
          <div className="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
            <div>
              <button className="button" aria-haspopup="true">
                <i className="main-icon" data-feather="smile" />
                <span>Friends</span>
                <i className="caret" data-feather="chevron-down" />
              </button>
            </div>
            <div className="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <Icon icon="globe" />
                    <div className="media-content">
                      <h3>Public</h3>
                      <small>Anyone can see this publication.</small>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="media">
                    <Icon icon="users" />
                    <div className="media-content">
                      <h3>Friends</h3>
                      <small>only friends can see this publication.</small>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item">
                  <div className="media">
                    <Icon icon="users" />
                    <div className="media-content">
                      <h3>Friends and contacts</h3>
                      <small>Your friends and contacts.</small>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`friends-list ${composeFriends ? "" : "is-hidden"}`}>
        <div className="list-header">
          <span>Send in a message</span>
          <div className="actions">
            <a id="open-compose-search" className="search-trigger">
              <Icon icon="search" />
            </a>
            <div id="compose-search" className="control is-hidden">
              <input
                type="text"
                className="input"
                placeholder="Search People"
              />
              <span>
                <Icon icon="search" />
              </span>
            </div>
            <a
              className="is-inverted modal-trigger"
              data-modal="create-group-modal"
            >
              Create group
            </a>
          </div>
        </div>
        <div className="list-body">
          <div className="friend-block">
            <div className="round-checkbox is-small">
              <div>
                <input type="checkbox" id="checkbox-3" />
                <label htmlFor="checkbox-3"></label>
              </div>
            </div>
            <img
              className="friend-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/dan.jpg"
              alt=""
            />
            <div className="friend-name">Dan Walker</div>
          </div>
          <div className="friend-block">
            <div className="round-checkbox is-small">
              <div>
                <input type="checkbox" id="checkbox-4" />
                <label htmlFor="checkbox-4"></label>
              </div>
            </div>
            <img
              className="friend-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/daniel.jpg"
              alt=""
            />
            <div className="friend-name">Daniel Wellington</div>
          </div>
          <div className="friend-block">
            <div className="round-checkbox is-small">
              <div>
                <input type="checkbox" id="checkbox-5" />
                <label htmlFor="checkbox-5"></label>
              </div>
            </div>
            <img
              className="friend-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/stella.jpg"
              alt=""
            />
            <div className="friend-name">Stella Bergmann</div>
          </div>
          <div className="friend-block">
            <div className="round-checkbox is-small">
              <div>
                <input type="checkbox" id="checkbox-6" />
                <label htmlFor="checkbox-6"></label>
              </div>
            </div>
            <img
              className="friend-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/david.jpg"
              alt=""
            />
            <div className="friend-name">David Kim</div>
          </div>
          <div className="friend-block">
            <div className="round-checkbox is-small">
              <div>
                <input type="checkbox" id="checkbox-7" />
                <label htmlFor="checkbox-7"></label>
              </div>
            </div>
            <img
              className="friend-avatar"
              src="https://via.placeholder.com/300x300"
              data-demo-src="assets/img/avatars/nelly.png"
              alt=""
            />
            <div className="friend-name">Nelly Schwartz</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiddenOptions