import React from 'react'

function SuggestedFriendsWidget() {
	return (
		<div className="card">
    <div className="card-heading is-bordered">
        <h4>Suggested Friends</h4>
        <div className="dropdown is-spaced is-right dropdown-trigger">
            <div>
                <div className="button">
                    <i data-feather="more-vertical"></i>
                </div>
            </div>
            <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <i data-feather="users"></i>
                            <div className="media-content">
                                <h3>All Suggestions</h3>
                                <small>View all friend suggestions.</small>
                            </div>
                        </div>
                    </a>
                    <a className="dropdown-item">
                        <div className="media">
                            <i data-feather="settings"></i>
                            <div className="media-content">
                                <h3>Settings</h3>
                                <small>Access widget settings.</small>
                            </div>
                        </div>
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <i data-feather="trash-2"></i>
                            <div className="media-content">
                                <h3>Remove</h3>
                                <small>Removes this widget from your feed.</small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="card-body no-padding">
        <div className="add-friend-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" data-user-popover="9" alt="" />
            <div className="page-meta">
                <span>Nelly Schwartz</span>
                <span>Melbourne</span>
            </div>
            <div className="add-friend add-transition">
                <i data-feather="user-plus"></i>
            </div>
        </div>
        <div className="add-friend-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/lana.jpeg" data-user-popover="10" alt="" />
            <div className="page-meta">
                <span>Lana Henrikssen</span>
                <span>Helsinki</span>
            </div>
            <div className="add-friend add-transition">
                <i data-feather="user-plus"></i>
            </div>
        </div>
        <div className="add-friend-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/gaelle.jpeg" data-user-popover="11" alt="" />
            <div className="page-meta">
                <span>Gaelle Morris</span>
                <span>Lyon</span>
            </div>
            <div className="add-friend add-transition">
                <i data-feather="user-plus"></i>
            </div>
        </div>
        <div className="add-friend-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/mike.jpg" data-user-popover="12" alt="" />
            <div className="page-meta">
                <span>Mike Lasalle</span>
                <span>Toronto</span>
            </div>
            <div className="add-friend add-transition">
                <i data-feather="user-plus"></i>
            </div>
        </div>
        <div className="add-friend-block transition-block">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" data-user-popover="13" alt="" />
            <div className="page-meta">
                <span>Rolf Krupp</span>
                <span>Berlin</span>
            </div>
            <div className="add-friend add-transition">
                <i data-feather="user-plus"></i>
            </div>
        </div>
    </div>
</div>
	)
}

export default SuggestedFriendsWidget