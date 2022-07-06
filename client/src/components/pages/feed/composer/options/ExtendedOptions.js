import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../misc/icon/Icon";

import img1 from "../../../../../assets/images/small/07.png";
import img2 from "../../../../../assets/images/small/08.png";
import img3 from "../../../../../assets/images/small/09.png";
import img4 from "../../../../../assets/images/small/10.png";
import img5 from "../../../../../assets/images/small/11.png";
import img6 from "../../../../../assets/images/small/12.png";
import img7 from "../../../../../assets/images/small/13.png";
import img8 from "../../../../../assets/images/small/14.png";

function ExtendedOptions({ setFile, setInput }) {
  const showInput = (input) => setInput(input);

  return (
    <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
      <li className="col-md-6 mb-3">
        <div className="bg-soft-primary rounded p-2 pointer me-3 position-relative">
          <img src={img1} alt="icon" className="img-fluid" />
          <label htmlFor="feed-upload-input-1">&nbsp;Photo/Video</label>
          <input
            id="feed-upload-input-1"
            className="position-absolute top-0 end-0 bottom-0 start-0 w-100 h-100 opacity-0"
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </li>
      <li className="col-md-6 mb-3">
        <div
          className="bg-soft-primary rounded p-2 pointer me-3"
          onClick={() => showInput("Who are you with?...")}
        >
          <img src={img2} alt="icon" className="img-fluid" /> Tag Friend
        </div>
      </li>
      <li className="col-md-6 mb-3">
        <div
          className="bg-soft-primary rounded p-2 pointer me-3"
          onClick={() => showInput("What are you doing?...")}
        >
          <img src={img3} alt="icon" className="img-fluid" /> Feeling/Activity
        </div>
      </li>
      <li className="col-md-6 mb-3">
        <div
          className="bg-soft-primary rounded p-2 pointer me-3"
          onClick={() => showInput("Where are you checking in from?...")}
        >
          <img src={img4} alt="icon" className="img-fluid" /> Check in
        </div>
      </li>
      <li className="col-md-6 mb-3">
        <div
          className="bg-soft-primary rounded p-2 pointer me-3"
          onClick={() => showInput("Search GIFs")}
        >
          <img src={img6} alt="icon" className="img-fluid" /> Gif
        </div>
      </li>
    </ul>
  );
}

export default ExtendedOptions;
