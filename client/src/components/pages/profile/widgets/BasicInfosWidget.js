import React from 'react'

function BasicInfosWidget({ user }) {

	return (
    <div>
      <div className="box-heading">
        <h4>Basic Infos</h4>
        <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
          <div>
            <div className="button">
              <i data-feather="more-vertical"></i>
            </div>
          </div>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a href="profile-about.html" className="dropdown-item">
                <div className="media">
                  <i data-feather="eye"></i>
                  <div className="media-content">
                    <h3>View</h3>
                    <small>View user details.</small>
                  </div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <i data-feather="search"></i>
                  <div className="media-content">
                    <h3>Related</h3>
                    <small>Search for related users.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-infos-wrapper">
        <div className="card is-profile-info">
          <div className="info-row">
            <div>
              <span>Studied at</span>
              <a className="is-inverted">Georgetown University</a>
            </div>
            <i className="mdi mdi-school"></i>
          </div>
          <div className="info-row">
            <div>
              <span>{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married to" : "Relationship"}</span>
              <a className="is-inverted">Dan Walker</a>
            </div>
            <i className="mdi mdi-heart"></i>
          </div>
          <div className="info-row">
            <div>
              <span>From</span>
              <a className="is-inverted">Melbourne, AU</a>
            </div>
            <i className="mdi mdi-earth"></i>
          </div>
          <div className="info-row">
            <div>
              <span>Lives in</span>
              <a className="is-inverted">Los Angeles, CA</a>
            </div>
            <i className="mdi mdi-map-marker"></i>
          </div>
          <div className="info-row">
            <div>
              <span>Followers</span>
              <a className="is-muted"></a>
            </div>
            <i className="mdi mdi-bell-ring"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfosWidget