import React from "react";
import classNames from "classnames";
import Icon from "../../../../misc/icon/Icon";

import CustomToggle from "../../../../dropdowns";

// Bootstrap
import { Dropdown } from "react-bootstrap";
// End Bootstrap

import user1 from "../../../../../assets/images/user/1.jpg";

function HiddenOptions() {
  return (
    <div className="other-option">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="user-img me-3">
            <img
              src={user1}
              alt="user1"
              className="avatar-60 rounded-circle img-fluid"
            />
          </div>
          <h6>Your Story</h6>
        </div>
        <div className="card-post-toolbar">
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} role="button">
              <span className="btn btn-primary">Friend</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className=" m-0 p-0">
              <Dropdown.Item className=" p-3" to="#">
                <div className="d-flex align-items-top">
                  <i className="ri-save-line h4"></i>
                  <div className="data ms-2">
                    <h6>Public</h6>
                    <p className="mb-0">Anyone on or off Facebook</p>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="p-3" to="#">
                <div className="d-flex align-items-top">
                  <i className="ri-close-circle-line h4"></i>
                  <div className="data ms-2">
                    <h6>Friends</h6>
                    <p className="mb-0">Your Friend on facebook</p>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className=" p-3" to="#">
                <div className="d-flex align-items-top">
                  <i className="ri-user-unfollow-line h4"></i>
                  <div className="data ms-2">
                    <h6>Friends except</h6>
                    <p className="mb-0">Don't show to some friends</p>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className=" p-3" to="#">
                <div className="d-flex align-items-top">
                  <i className="ri-notification-line h4"></i>
                  <div className="data ms-2">
                    <h6>Only Me</h6>
                    <p className="mb-0">Only me</p>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default HiddenOptions;
