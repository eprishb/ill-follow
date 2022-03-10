import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router";

import Toolbar from "../components/navigation/toolbar/Toolbar";
import TimelinePost from "../components/pages/profile/posts/TimelinePost";
import TimelineHeader from "../components/pages/profile/TimelineHeader";
import BasicInfosWidget from "../components/pages/profile/widgets/BasicInfosWidget";
import PhotosWidget from "../components/pages/profile/widgets/PhotosWidget";
import StarFriendsWidget from "../components/pages/profile/widgets/StarFriendsWidget";
import TripsWidget from "../components/pages/profile/widgets/TripsWidget";
import VideosWidget from "../components/pages/profile/widgets/VideosWidget";

function ProfileMain() {
  const [user, setUser] = useState({});
	const [posts, setPosts] = useState([]);
	const username = useParams().username;
	
  useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get(`/api/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
	
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("/api/posts/profile/" + username);
			setPosts(res.data);
		};
		fetchPosts();
	}, [username]);

  return (
    <div>
      <div
        id="profile-main"
        className="container sidebar-boxed"
        data-open-sidebar
        data-page-title="Profile"
      >
        <div className="view-wrap is-headless">
          <div className="columns is-multiline no-margin">
            <div className="column is-paddingless">
              <TimelineHeader user={user} />
            </div>
          </div>

          <div className="columns">
            <div id="profile-timeline-widgets" className="column is-4">
              <BasicInfosWidget user={user} />

              <PhotosWidget />

              <StarFriendsWidget user={user} />

              <VideosWidget />

              <TripsWidget />

              <div className="box-heading">
                <h4>Events</h4>
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
                          <i data-feather="calendar"></i>
                          <div className="media-content">
                            <h3>All Events</h3>
                            <small>View all your events</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="search"></i>
                          <div className="media-content">
                            <h3>Search</h3>
                            <small>Search for events.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="compass"></i>
                          <div className="media-content">
                            <h3>Suggestions</h3>
                            <small>View trendy suggestions.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* {{> schedule-widget}} */}
            </div>

            <div className="column is-8">
              <div id="profile-timeline-posts" className="box-heading">
                <h4>Posts</h4>
                <div className="button-wrap">
                  <button type="button" className="button is-active">
                    Recent
                  </button>
                  <button type="button" className="button">
                    Popular
                  </button>
                </div>
              </div>

              <div className="profile-timeline">
                <TimelinePost username={username} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {{> change-cover-modal}} */}

      {/* {{> change-profile-pic-modal}} */}

      {/* {{> user-photos-modal}} */}

      {/* {{> upload-crop-profile-modal}} */}

      {/* {{> upload-crop-cover-modal}} */}
    </div>
  );
}

export default ProfileMain;
