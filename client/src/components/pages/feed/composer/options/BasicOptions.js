import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../misc/icon/Icon";

// Bootstrap
import { Dropdown, Modal, ModalBody } from "react-bootstrap";
// End Bootstrap

import img1 from "../../../../../assets/images/small/07.png";
import img2 from "../../../../../assets/images/small/08.png";
import img3 from "../../../../../assets/images/small/09.png";

function BasicOptions({ setFile, showModal }) {
  return (
    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
      <li className="me-3 mb-md-0 mb-2">
        <div to="#" className="btn btn-soft-primary position-relative">
          <img src={img1} alt="icon" className="img-fluid me-2" />
          <label
            htmlFor="feed-upload-input-2"
            id="fileModal"
            className="compose-option"
          >
            &nbsp;Photo/Video
          </label>
          <input
            id="feed-upload-input-2"
            className="position-absolute top-0 end-0 bottom-0 start-0 w-100 h-100 opacity-0"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </li>
      <li className="me-3 mb-md-0 mb-2">
        <div to="#" className="btn btn-soft-primary" onClick={showModal}>
          <img src={img2} alt="icon" className="img-fluid me-2" /> Tag Friend
        </div>
      </li>
      <li className="me-3">
        <div to="#" className="btn btn-soft-primary" onClick={showModal}>
          <img src={img3} alt="icon" className="img-fluid me-2" />{" "}
          Feeling/Activity
        </div>
      </li>
      <li>
        <div className=" btn btn-soft-primary d-flex" onClick={showModal}>
          <span className="material-symbols-outlined">more_horiz</span>
        </div>
      </li>
    </ul>
  );
}

export default BasicOptions;
