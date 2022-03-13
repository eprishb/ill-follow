import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Control from "../dropdowns/components/Control";
import { controls } from "../dropdowns/components/controls";

function Toolbar({ toggleSidebar, sidebarOpen }) {
	const location = useLocation();
	const [pageTitle, setPageTitle] = useState("");
	const [dropTrigger, setDropTrigger] = useState("");

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
				{controls.map((data, key) => {
					return <Control data={data} key={key} dropTrigger={dropTrigger} setDropTrigger={setDropTrigger} />
				})}
			</div>
			{/* <FriendRequestsDropdownRight />
			<NotificationsDropdownRight />
			<MessagesDropdownRight />
			<AccountDropdown user={user} /> */}
    </div>
  );
}

export default Toolbar;
