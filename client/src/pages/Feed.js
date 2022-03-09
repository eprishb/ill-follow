import React, { forwardRef, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Toolbar from "../components/navigation/toolbar/Toolbar";
import FeedMenuShadowDom from "../components/misc/placeloads/feed-page/FeedMenuShadowDom";
import ComposeCard from "../components/pages/feed/ComposeCard";
import FeedPost from "../components/pages/feed/posts/FeedPost";
import StoriesWidget from "../components/misc/widgets/StoriesWidget";
import BirthdayWidget from "../components/misc/widgets/BirthdayWidget";
import SuggestedFriendsWidget from "../components/misc/widgets/SuggestedFriendsWidget";
import { AuthContext } from "../context/AuthContext";

const Feed = forwardRef((props, ref) => {
	const [posts, setPosts] = useState([]);
	const {user} = useContext(AuthContext)

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("api/posts/timeline/" + user._id);
			setPosts(res.data);
		};
		fetchPosts();
	}, [user._id])
	
  return (
    <div>
      <div className="toolbar-v1-fixed-wrap">
        <Toolbar />
      </div>

      <div
        id="main-feed"
        ref={ref}
        className="container sidebar-boxed"
        data-open-sidebar
        data-page-title="Timeline"
      >
        <Toolbar />

        {props.shadowDom && <FeedMenuShadowDom />}

        <div
          id="activity-feed"
          className={`view-wrap true-dom ${props.trueDom ? "" : "is-hidden"}`}
        >
          <div className="columns">
            <div className="column is-8">
              <ComposeCard />

              {/* <Link to={`/feed/${post.id}`} key={post._id}>
                <FeedPost post={post} />
              </Link> */}
              {posts.map((post) => (
                <FeedPost key={post._id} post={post} />
              ))}

              <div className=" load-more-wrap has-text-centered">
                <a href="#" className="load-more-button">
                  Load More
                </a>
              </div>
            </div>

            <div className="column is-4">
              <StoriesWidget />

              <BirthdayWidget />

              <SuggestedFriendsWidget />
            </div>
          </div>
        </div>
      </div>

      {/* {{> create-group-modal}} */}

      {/* {{> albums-help-modal}} */}

      {/* {{> albums-modal}} */}

      {/* {{> videos-help-modal}} */}

      {/* {{> videos-modal}} */}

      {/* {{> share-modal}} */}

      {/* {{> no-stream-modal}} */}
    </div>
  );
})

export default Feed;
