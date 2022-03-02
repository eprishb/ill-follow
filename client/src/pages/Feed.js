import React from "react";
import Toolbar from "../components/navigation/toolbar/Toolbar";
import FeedMenuShadowDom from "../components/placeloads/feed-page/FeedMenuShadowDom";
import ComposeCard from "../components/pages/feed/ComposeCard";

function Feed() {
  return (
    <div>
      <div className="toolbar-v1-fixed-wrap">
        <Toolbar />
      </div>

      <div
        id="main-feed"
        className="container sidebar-boxed"
        data-open-sidebar
        data-page-title="Timeline"
      >
        <Toolbar />

        <FeedMenuShadowDom />
        <div id="activity-feed" className="view-wrap true-dom is-hidden">
          <div className="columns">
            <div className="column is-8">
              <ComposeCard />

              {/* {{> feed-post1}} */}

              {/* {{> feed-post2}} */}

              {/* {{> feed-post3}} */}

              {/* {{> feed-post4}} */}

              {/* {{> feed-post5}} */}

              {/* {{> feed-post6}} */}

              <div className=" load-more-wrap has-text-centered">
                <a href="#" className="load-more-button">
                  Load More
                </a>
              </div>
            </div>

            <div className="column is-4">
              {/* {{> stories-widget}} */}

              {/* {{> birthday-widget}} */}

              {/* {{> suggested-friends-1-widget}} */}

              {/* {{> new-job-widget}} */}
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
}

export default Feed;
