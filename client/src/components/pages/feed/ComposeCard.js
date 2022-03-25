import classNames from "classnames";
import React,{ useRef, useEffect, useState } from "react";
import TabContent from "./composer/TabContent";
import Tabs from "./composer/Tabs";

// TODO: Add autocomplete functionality. Follow tutorial on https://www.digitalocean.com/community/tutorials/react-react-autocomplete, or find one better

function ComposeCard({ setOverlay }) {

	const composeCard = useRef(null);
	const [newContent, setNewContent] = useState(false);
	const [composeOptions, setComposeOptions] = useState(false);

	useEffect(() => {
		if (!composeCard.current) return;
	}, [])

  return (
    <div
      ref={composeCard}
      id="compose-card"
      className={ classNames(
				"card", "is-new-content", {
				"is-highlighted": newContent
			})}
    >
      <div className="tabs-wrapper">
        <Tabs setOverlay={setOverlay} setNewContent={setNewContent} setComposeOptions={setComposeOptions} />
        <TabContent setOverlay={setOverlay} setNewContent={setNewContent} setComposeOptions={setComposeOptions} composeOptions={composeOptions} />
      </div>
    </div>
  );
}

export default ComposeCard;
