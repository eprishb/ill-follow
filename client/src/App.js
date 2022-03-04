import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Pageloader from "./components/pageloader/Pageloader";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import Feed from "./pages/Feed";
import ChatWrapper from "./components/chat/ChatWrapper";
import ProfileMain from "./pages/ProfileMain";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
      {/* <div className="signup-wrapper"> */}
      {/* <Login /> */}
      {/* <Link to="/register">Register</Link> */}
      {/* </div> */}
      {/* <div className="app-overlay is-sidebar-v1"></div> */}
      {/* <Sidebar /> */}
      <Link to="/feed">
        Feed
        {/* <Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} /> */}
      </Link>
      <div className="view-wrapper is-sidebar-v1 is-fold">
        <Routes>
          <Route path="feed" element={<Feed />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* <ProfileMain /> */}
      </div>
      {/* <ChatWrapper /> */}
    </div>
  );
}

export default App;
