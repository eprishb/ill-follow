import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import FriendRequestsDropdownRight from "../dropdowns/FriendRequestsDropdownRight";
import NotificationsDropdownRight from "../dropdowns/NotificationsDropdownRight";
import MessagesDropdownRight from "../dropdowns/MessagesDropdownRight";
import AccountDropdown from "../dropdowns/AccountDropdown";

function Toolbar({ toggleSidebar, sidebarOpen }) {
	const {user} = useContext(AuthContext);
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState("");

	useEffect(() => {
    let pathname = location.pathname;
		pathname === "/" ? pathname = "Timeline" :
    pathname =
      pathname.slice(1).charAt(0).toUpperCase() +
      pathname.slice(2).split("/")[0];
    setPageTitle(pathname);
  }, [location]);

  return (
    <div className="toolbar-v1 is-narrow">
      <div
        className="friendkit-hamburger sidebar-v1-trigger "
        onClick={toggleSidebar}
      >
        <span className="menu-toggle has-chevron">
          <span className={`icon-box-toggle ${sidebarOpen ? "active" : ""}`}>
            <span className="rotate">
              <i className="icon-line-top"></i>
              <i className="icon-line-center"></i>
              <i className="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>
      <h1>{pageTitle}</h1>
      <div className="controls">
        <FriendRequestsDropdownRight />
        <NotificationsDropdownRight />
        <MessagesDropdownRight />
        <AccountDropdown user={user} />
      </div>
    </div>
  );
}

export default Toolbar;
