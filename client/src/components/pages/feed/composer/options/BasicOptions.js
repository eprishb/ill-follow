
import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../../../../misc/icon/Icon";

function BasicOptions({ setFile, openPublishMode, setComposeOptions, composeOptions }) {

  return (
    <form
      id="basic-options"
      className={ classNames(
				"compose-options", {
					"is-hidden": composeOptions
				})}
    >
      <label htmlFor="feed-upload-input-2" className="compose-option">
        <Icon icon="camera" />
        <span>Media</span>
        <input
          id="feed-upload-input-2"
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
      <div id="show-activities" className="compose-option">
        <img
          src="https://friendkit.cssninja.io/assets/img/icons/emoji/emoji-1.svg"
          alt=""
        />
        <span>Activity</span>
      </div>
      <div id="open-extended-options" className="compose-option" onClick={() => { openPublishMode(); setComposeOptions(true); }}>
        <Icon icon="more-horizontal" />
      </div>
    </form>
  );
}

export default BasicOptions;
