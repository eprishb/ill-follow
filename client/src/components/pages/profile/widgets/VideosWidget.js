import React from 'react'

function VideosWidget() {
	return (
		<div><div className="box-heading">
    <h4>Videos</h4>
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
                        <i data-feather="video"></i>
                        <div className="media-content">
                            <h3>View Videos</h3>
                            <small>View all your videos</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="tag"></i>
                        <div className="media-content">
                            <h3>Tagged</h3>
                            <small>View videos you are tagged in.</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="is-videos-widget">

    <div className="video-container">
        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/1.jpg" alt="" />
        <div className="video-button">
            <img src="assets/img/icons/video/play.svg" alt="" />
        </div>
        <div className="video-overlay"></div>
    </div>

    <div className="video-container">
        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/2.jpg" alt="" />
        <div className="video-button">
            <img src="assets/img/icons/video/play.svg" alt="" />
        </div>
        <div className="video-overlay"></div>
    </div>

    <div className="video-container">
        <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/3.jpg" alt="" />
        <div className="video-button">
            <img src="assets/img/icons/video/play.svg" alt="" />
        </div>
        <div className="video-overlay"></div>
    </div>

</div></div>
	)
}

export default VideosWidget