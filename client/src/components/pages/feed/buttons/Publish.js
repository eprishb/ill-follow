import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Icon from "../../../misc/icon/Icon";

function Publish({ file, content, publishButton }) {
  const { user } = useContext(AuthContext);

  const disabled = publishButton ? false : true;

  const handleSubmit = async (e) => {
    console.log(content);
    e.preventDefault();
    const newPost = {
      userId: user._id,
      content: content,
    };
    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("name", file.name);
      newPost.img = file.name;
      console.log(newPost);
      try {
        await axios.post("/api/single", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/api/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="btn btn-primary d-block w-100 mt-3"
      disabled={disabled}
    >
      Post
    </button>
  );
}

export default Publish;
