import React from "react";
import QuestionsMenuPlaceload from "../../placeloads/placeloads/QuestionsMenuPlaceload";
import ComposeCardPlaceload from "../../placeloads/placeloads/ComposeCardPlaceload";
import PostPlaceloads from "../../placeloads/placeloads/PostPlaceloads";
import StoriesPlaceload from "../../placeloads/placeloads/StoriesPlaceload";
import MiniWidgetPlaceload from "../../placeloads/placeloads/MiniWidgetPlaceload";
import ListPlaceload from "../../placeloads/placeloads/ListPlaceload";

function FeedMenuShadowDom() {
  return (
    <div id="shadow-dom" className="view-wrap">
      <div className="columns">
        <div className="column is-3">
          <QuestionsMenuPlaceload />
        </div>

        <div className="column is-6">
          <ComposeCardPlaceload />
          <PostPlaceloads />
          <PostPlaceloads />
          <PostPlaceloads />
          <PostPlaceloads />
        </div>

        <div className="column is-3">
          <StoriesPlaceload />
          <MiniWidgetPlaceload />
          <ListPlaceload />
        </div>
      </div>
    </div>
  );
}

export default FeedMenuShadowDom;
