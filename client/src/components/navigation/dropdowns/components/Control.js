import React, { useContext, useState } from 'react'
import { AuthContext } from "../../../../context/AuthContext";
import Icon from '../../../misc/icon/Icon';
import NavDropHeader from './NavDropHeader';
import NavDropMedia from './NavDropMedia';

function Control({ data, dropTrigger, setDropTrigger }) {
	const { user } = useContext(AuthContext);

	const triggerDrop = (e) => {
		e.preventDefault();
		if (e.currentTarget.id === dropTrigger) {
			setDropTrigger("");
			return;
		}
		setDropTrigger(e.currentTarget.id);
	}	

	return (
    <div
      id={data.controlType}
      className={`navbar-item is-icon drop-trigger
				${
					data.controlType === "account-dropdown" ?
					"is-account" : ""
				}
				${
          data.controlType === "account-dropdown" &&
          dropTrigger === "account-dropdown"
            ? "has-caret is-opened"
            : ""
        }	
			`}
      onClick={triggerDrop}
    >
      <div
        className={`
				${
          data.controlType === "account-dropdown"
            ? "user-image"
            : `icon-link ${data?.iconClass}`
        }	`}
      >
        {data.controlType === "account-dropdown" ? 
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : "https://randomuser.me/api/portraits/women/91.jpg"
            }
            alt={user.username}
          />
        :
          <Icon icon={data.displayIcon} />
        }
        <span className="indicator"></span>
      </div>

      <div
        className={`nav-drop is-right ${
          dropTrigger === data.controlType ? "is-active" : ""
        }
				${
          data.controlType === "account-dropdown" &&
          dropTrigger === "account-dropdown"
            ? "is-account-dropdown"
            : ""
        }	`}
      >
        <div className="inner">
          <NavDropHeader data={data} user={user} />
          <div className="nav-drop-body is-friend-requests">
            <NavDropMedia data={data} user={user} />
          </div>
          <div className="nav-drop-footer">
            <div>{data?.footer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control

