import React, { useEffect, useRef, useState } from "react";
import Pageloader from "./components/Pageloader";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Feed from "./pages/Feed";
import ChatWrapper from "./components/chat/ChatWrapper";

function App() {
	const pageloader = useRef(null);
	const mainfeed = useRef(null);
	const [plActive, setPlActive] = useState(false);
	const [ilActive, setIlActive] = useState(true);
	const [shadowDom, setShadowDom] = useState(true);
	const [trueDom, setTrueDom] = useState(false);

	useEffect(() => {
    if (!pageloader.current) return;
		
		setPlActive((active) => !active);

		const pageloaderTimeout = setTimeout(() => {
			setPlActive((active) => !active);
			setIlActive((active) => !active);
			clearTimeout(pageloaderTimeout);
		}, 700);
		
		if (!mainfeed.current) return;

		const shadowDomTimeout = setTimeout(() => {
			setShadowDom(false);
			setTrueDom(true);
			clearTimeout(shadowDomTimeout);
		}, 2500);

  }, []);

  return (
    <div>
      <Pageloader ref={pageloader} plActive={plActive} ilActive={ilActive} />
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar />
      <div className="view-wrapper is-sidebar-v1 is-fold">
				<Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} />
			</div>
      <ChatWrapper />
    </div>
  );
}

export default App;
