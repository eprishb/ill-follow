import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StarFriendsWidget({ user }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/api/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user._id]);

  return (
    <div>
      <div className="box-heading">
        <h4>Friends</h4>
        <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
          <div>
            <div className="button">
              <i data-feather="more-vertical"></i>
            </div>
          </div>
          <div className="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a className="dropdown-item">
                <div className="media">
                  <i data-feather="users"></i>
                  <div className="media-content">
                    <h3>All Friends</h3>
                    <small>View all friends.</small>
                  </div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <i data-feather="heart"></i>
                  <div className="media-content">
                    <h3>Family</h3>
                    <small>View family members.</small>
                  </div>
                </div>
              </a>
              <a href="#" className="dropdown-item">
                <div className="media">
                  <i data-feather="briefcase"></i>
                  <div className="media-content">
                    <h3>Work Relations</h3>
                    <small>View work related friends.</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="friend-cards-list">
        {/* {friends.map((friend) => (
          <Link to={"/profile/" + friend.username}>
            <div className="card is-friend-card">
              <div className="friend-item">
                <img
                  src={
                    friend.profilePicture
                      ? friend.profilePicture
                      : "https://via.placeholder.com/300x300"
                  }
                  data-demo-src="assets/img/avatars/dan.jpg"
                  alt=""
                  data-user-popover="1"
                />
                <div className="text-content">
                  <a>{friend.username}</a>
                  <span>4 mutual friend(s)</span>
                </div>
                <div className="star-friend">
                  <i data-feather="star"></i>
                </div>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
}

export default StarFriendsWidget;
