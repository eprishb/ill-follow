import axios from "axios";
import React, { useContext } from "react";
import classNames from "classnames";
import { AuthContext } from "../../../../../context/AuthContext";
import Icon from "../../../../misc/icon/Icon";

function MoreOptions({ publishButton, setComposeFriends, file, desc, composeFriends }) {
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
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
    <form className="more-wrap" onSubmit={submitHandler}>
      <button
        id="show-compose-friends"
        type="button"
        className={ classNames(
					"button", "is-more", {
						"is-hidden" : composeFriends 
					})}
        aria-haspopup="true"
				onClick={() => setComposeFriends((active) => !active)}
      >
        <Icon icon="more-vertical" />
        <span>View More</span>
      </button>
      <button
        id="publish-button"
        type="submit"
        className={classNames (
					"button", "is-solid", "accent-button", "is-fullwidth", {
          "is-disabled" : !publishButton && !file
        })}
      >
        Publish
      </button>
    </form>
  );
}

export default MoreOptions;
