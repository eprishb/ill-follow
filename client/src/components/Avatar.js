import React, { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

function Avatar() {
	const { user } = useContext(AuthContext);

	return (
    <div className="image">
      <img
				className="avatar"
        src={user?.profilePicture || "https://via.placeholder.com/400x400"}
        alt={user.username}
      />
    </div>
  );
}

export default Avatar