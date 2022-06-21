import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../misc/icon/Icon";

// Bootstrap
import { Dropdown, Modal, ModalBody } from "react-bootstrap";
// End Bootstrap

import img1 from "../../../../../assets/images/small/07.png";
import img2 from "../../../../../assets/images/small/08.png";
import img3 from "../../../../../assets/images/small/09.png";

function BasicOptions({ setFile, showFile, showModal, closeModal }) {
  return (
    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
      <li className="me-3 mb-md-0 mb-2">
        <div to="#" className="btn btn-soft-primary">
          <label
            htmlFor="feed-upload-input-2"
            id="fileModal"
            className="compose-option"
            onClick={showModal}
          >
            <img src={img1} alt="icon" className="img-fluid me-2" /> Photo/Video
          </label>
        </div>
      </li>
      <li className="me-3 mb-md-0 mb-2">
        <Link to="#" className="btn btn-soft-primary">
          <img src={img2} alt="icon" className="img-fluid me-2" /> Tag Friend
        </Link>
      </li>
      <li className="me-3">
        <Link to="#" className="btn btn-soft-primary">
          <img src={img3} alt="icon" className="img-fluid me-2" />{" "}
          Feeling/Activity
        </Link>
      </li>
      <li>
        <button className=" btn btn-soft-primary">
          <div className="card-header-toolbar d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle as="div" className="lh-1">
                <span className="material-symbols-outlined">more_horiz</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={showModal} href="#">
                  Check in
                </Dropdown.Item>
                <Dropdown.Item onClick={showModal} href="#">
                  Live Video
                </Dropdown.Item>
                <Dropdown.Item onClick={showModal} href="#">
                  Gif
                </Dropdown.Item>
                <Dropdown.Item onClick={showModal} href="#">
                  Watch Party
                </Dropdown.Item>
                <Dropdown.Item onClick={showModal} href="#">
                  Play with Friend
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </button>
      </li>
    </ul>
  );
}

export default BasicOptions;
