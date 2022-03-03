import React from 'react'

function PhotosWidget() {
	return (
		<div><div className="box-heading">
    <h4>Photos</h4>
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
                        <i data-feather="image"></i>
                        <div className="media-content">
                            <h3>View Photos</h3>
                            <small>View all your photos</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="tag"></i>
                        <div className="media-content">
                            <h3>Tagged</h3>
                            <small>View photos you are tagged in.</small>
                        </div>
                    </div>
                </a>
                <a href="#" className="dropdown-item">
                    <div className="media">
                        <i data-feather="folder"></i>
                        <div className="media-content">
                            <h3>Albums</h3>
                            <small>Open my albums.</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<div className="is-photos-widget">
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/1.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/2.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/3.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/4.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/5.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/6.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/7.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/8.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/9.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/10.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/11.jpg" alt="" />
    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/12.jpg" alt="" />
</div></div>
	)
}

export default PhotosWidget