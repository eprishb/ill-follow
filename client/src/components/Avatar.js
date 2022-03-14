import React, { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

function Avatar() {
	const { user } = useContext(AuthContext);

	return (
		<img
			className="avatar"
			src={user?.profilePicture || "https://via.placeholder.com/400x400"}
			alt={user.username}
		/>
  );
}

export default Avatar