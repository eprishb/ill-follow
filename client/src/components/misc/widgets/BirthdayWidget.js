import React from 'react'

function BirthdayWidget() {
	return (
		<div className="card is-birthday-card has-background-image" data-background="assets/img/illustrations/cards/birthday-bg.svg">
    <div className="card-heading">
        <i data-feather="gift"></i>
        <div className="dropdown is-spaced is-right dropdown-trigger is-light">
            <div>
                <div className="button">
                    <i data-feather="more-vertical"></i>
                </div>
            </div>
            <div className="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item">
                        <div className="media">
                            <i data-feather="clock"></i>
                            <div className="media-content">
                                <h3>Remind me</h3>
                                <small>Remind me of this later today.</small>
                            </div>
                        </div>
                    </a>
                    <a className="dropdown-item">
                        <div className="media">
                            <i data-feather="message-circle"></i>
                            <div className="media-content">
                                <h3>Message</h3>
                                <small>Send an automatic greeting message.</small>
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
    <div className="card-body">
        <div>
            <div className="birthday-avatar">
                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                <div className="birthday-indicator">
                    31
                </div>
            </div>
            <div className="birthday-content">
                <h4>Dan turns 31 today!</h4>
                <p>Send him your best wishes by leaving something on his wall.</p>
                <button type="button" className="button light-button">Write Message</button>
            </div>
        </div>
    </div>
</div>
	)
}

export default BirthdayWidget