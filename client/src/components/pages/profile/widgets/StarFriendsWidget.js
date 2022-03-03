import React from 'react'

function StarFriendsWidget() {
	return (
		<div><div className="box-heading">
    <h4>Friends</h4>
    <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
        <div>
            <div className="button">
                <i data-feather="more-vertical"></i>
            </div>
        </div>
        <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
                <a className="dropdown-item">
                    <div className="media">
                        <i data-feather="users"></i>
                        <div className="media-content">
                            <h3>All Friends</h3>
                            <small>View all friends.</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="heart"></i>
                        <div className="media-content">
                            <h3>Family</h3>
                            <small>View family members.</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="briefcase"></i>
                        <div className="media-content">
                            <h3>Work Relations</h3>
                            <small>View work related friends.</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="friend-cards-list">
    <div className="card is-friend-card">

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1" />
            <div className="text-content">
                <a>Dan Walker</a>
                <span>4 mutual friend(s)</span>
            </div>
            <div className="star-friend">
                <i data-feather="star"></i>
            </div>
        </div>

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt=""  data-user-popover="7" />
            <div className="text-content">
                <a>Milly Augustine</a>
                <span>3 mutual friend(s)</span>
            </div>
            <div className="star-friend is-active">
                <i data-feather="star"></i>
            </div>
        </div>

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt=""  data-user-popover="5" />
            <div className="text-content">
                <a>Edward Mayers</a>
                <span>35 mutual friend(s)</span>
            </div>
            <div className="star-friend is-active">
                <i data-feather="star"></i>
            </div>
        </div>

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt=""  data-user-popover="2" />
            <div className="text-content">
                <a>Stella Bergmann</a>
                <span>48 mutual friend(s)</span>
            </div>
            <div className="star-friend">
                <i data-feather="star"></i>
            </div>
        </div>

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt=""  data-user-popover="6" />
            <div className="text-content">
                <a>Elise Walker</a>
                <span>1 mutual friend(s)</span>
            </div>
            <div className="star-friend">
                <i data-feather="star"></i>
            </div>
        </div>

        <div className="friend-item">
            <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt=""  data-user-popover="9" />
            <div className="text-content">
                <a>Nelly Schwartz</a>
                <span>11 mutual friend(s)</span>
            </div>
            <div className="star-friend">
                <i data-feather="star"></i>
            </div>
        </div>

    </div>
</div></div>
	)
}

export default StarFriendsWidget