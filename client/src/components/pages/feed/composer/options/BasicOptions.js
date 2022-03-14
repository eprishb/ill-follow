import axios from "axios";
import React, { useContext, useRef } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import Icon from "../../../../misc/icon/Icon";

function BasicOptions() {

	const { user } = useContext(AuthContext);
	const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await axios.post("/api/posts", newPost);
    } catch (err) {}
  };

  return (
    <form
      id="basic-options"
      className="compose-options"
      onSubmit={submitHandler}
    >
      <label htmlFor="feed-upload-input-2" className="compose-option">
        <Icon icon="camera" />
        <span>Media</span>
        <input
          id="feed-upload-input-2"
          type="file"
          accept=".png, .jpg, .jpeg"
          // onChange="readUrl(this)"
        />
      </label>
      <div id="show-activities" className="compose-option">
        <img
          src="https://friendkit.cssninja.io/assets/img/icons/emoji/emoji-1.svg"
          alt=""
        />
        <span>Activity</span>
      </div>
      <div id="open-extended-options" className="compose-option">
        <Icon icon="more-horizontal" />
      </div>
    </form>
  );
}

export default BasicOptions;
