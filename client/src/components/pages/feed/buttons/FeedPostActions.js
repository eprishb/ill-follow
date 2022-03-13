import React from "react";
import Icon from "../../../misc/icon/Icon";

function FeedPostActions({ likeHandler, isLiked }) {
  return (
    <>
      <div className="like-wrapper">
        <div onClick={likeHandler} className={`like-button ${isLiked ? "is-active" : ""}`}>
          <i className="mdi mdi-heart not-liked bouncy"></i>
          <i className="mdi mdi-heart is-liked bouncy"></i>
          <span className="like-overlay"></span>
        </div>
      </div>

      <div className="fab-wrapper is-share">
        <a
          className="small-fab share-fab modal-trigger"
          data-modal="share-modal"
        >
          <Icon icon="link-2" />
        </a>
      </div>

      <div className="fab-wrapper is-comment">
        <a className="small-fab">
          <Icon icon="message-circle" />
        </a>
      </div>
    </>
  );
}

export default FeedPostActions;
