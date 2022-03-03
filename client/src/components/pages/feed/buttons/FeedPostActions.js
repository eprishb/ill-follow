import React from "react";

function FeedPostActions({ likeHandler }) {
  return (
    <>
      <div className="like-wrapper">
        <div onClick={likeHandler} className="like-button">
          <i className="mdi mdi-heart not-liked bouncy"></i>
          <i className="mdi mdi-heart is-liked bouncy"></i>
          <span className="like-overlay"></span>
        </div>
      </div>

      <div className="fab-wrapper is-share">
        <a
          href="javascript:void(0);"
          className="small-fab share-fab modal-trigger"
          data-modal="share-modal"
        >
          <i data-feather="link-2"></i>
        </a>
      </div>

      <div className="fab-wrapper is-comment">
        <a href="javascript:void(0);" className="small-fab">
          <i data-feather="message-circle"></i>
        </a>
      </div>
    </>
  );
}

export default FeedPostActions;
