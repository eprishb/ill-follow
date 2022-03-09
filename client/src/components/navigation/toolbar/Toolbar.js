import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import FriendRequestsDropdownRight from "../dropdowns/FriendRequestsDropdownRight";
import NotificationsDropdownRight from "../dropdowns/NotificationsDropdownRight";
import MessagesDropdownRight from "../dropdowns/MessagesDropdownRight";
import AccountDropdown from "../dropdowns/AccountDropdown";

function Toolbar() {
	const {user} = useContext(AuthContext);

  return (
    <div className="toolbar-v1 is-narrow">
      <div className="friendkit-hamburger sidebar-v1-trigger">
        <span className="menu-toggle has-chevron">
          <span className="icon-box-toggle">
            <span className="rotate">
              <i className="icon-line-top"></i>
              <i className="icon-line-center"></i>
              <i className="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>
      <h1>Timeline</h1>
      <div className="controls">
        <FriendRequestsDropdownRight />
        <NotificationsDropdownRight />
        <MessagesDropdownRight />
        <AccountDropdown user={user}/>
      </div>
    </div>
  );
}

export default Toolbar;
