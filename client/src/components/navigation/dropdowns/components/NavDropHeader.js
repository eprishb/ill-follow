import React from 'react'
import Icon from '../../../misc/icon/Icon';

function NavDropHeader({ data, user }) {
	return (
    <div className="nav-drop-header">
      <span>{data?.title || user?.username}</span>
      {data.controlType === "account-dropdown" ?
        <label className="theme-toggle">
          <input type="checkbox" />
          <span className="toggler">
            <span className="dark">
              <Icon icon="moon" />
            </span>
            <span className="light">
              <Icon icon="sun" />
            </span>
          </span>
        </label>
      :
      <a href="#">
        <Icon icon={data?.headerIcon} />
        {data?.headerText}
      </a>
			}
    </div>
  );
}

export default NavDropHeader