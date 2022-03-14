import React,{ useRef, useEffect, useState } from "react";
import TabContent from "./composer/TabContent";
import Tabs from "./composer/Tabs";

function ComposeCard({ setOverlay }) {
	const composeCard = useRef(null);
	const [newContent, setNewContent] = useState(false);

	useEffect(() => {
		if (!composeCard.current) return;
	}, [])

  return (
    <div ref={composeCard} id="compose-card" className={`card is-new-content ${newContent ? "is-highlighted" : ""}`}>
      <div className="tabs-wrapper">
        <Tabs />
				<TabContent setOverlay={setOverlay} setNewContent={setNewContent} />
      </div>
    </div>
  );
}

export default ComposeCard;
