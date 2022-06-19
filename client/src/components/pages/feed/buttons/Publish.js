import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Icon from "../../../misc/icon/Icon";

function Publish({ file, desc }) {
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    console.log(desc);
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
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
    <form onClick={submitHandler}>
      <button type="submit" className="btn btn-primary d-block w-100 mt-3">
        Post
      </button>
    </form>
  );
}

export default Publish;
