import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Icon from "../../../misc/icon/Icon";

function Publish({ files, content, publishButton }) {
  const { user } = useContext(AuthContext);

  const disabled = publishButton || files ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      content: content,
    };
    if (files) {
      const data = new FormData();
      const images = [];
      Object.values(files).forEach((file) => {
        data.append("uploadImages", file);
        data.append("name", file.name);
        images.push(file.name);
      });

      newPost.img = images;

      try {
        await axios.post("/api/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
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
