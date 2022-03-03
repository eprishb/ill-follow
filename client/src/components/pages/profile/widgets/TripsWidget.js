import React from 'react'

function TripsWidget() {
	return (
		<div><div className="box-heading">
    <h4>Trips</h4>
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
                        <i data-feather="globe"></i>
                        <div className="media-content">
                            <h3>View my Trips</h3>
                            <small>View all your trips</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="compass"></i>
                        <div className="media-content">
                            <h3>Suggestions</h3>
                            <small>View trendy suggestions.</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="trip-cards-list">
    <div className="card is-trip-card">

        <div className="trip-item">
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/1.jpg" alt="" />
            <div className="text-content">
                <a>New York, NY, USA</a>
                <span>4 months ago</span>
            </div>
        </div>
        <div className="trip-item">
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/2.jpg" alt="" />
            <div className="text-content">
                <a>Paris, France</a>
                <span>8 months ago</span>
            </div>
        </div>
        <div className="trip-item">
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/3.jpg" alt="" />
            <div className="text-content">
                <a>Madrid, Spain</a>
                <span>a year ago</span>
            </div>
        </div>
        <div className="trip-item">
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/4.jpg" alt="" />
            <div className="text-content">
                <a>Marrakech, Morocco</a>
                <span>a year ago</span>
            </div>
        </div>

    </div>
</div></div>
	)
}

export default TripsWidget