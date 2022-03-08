import React, { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
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
      <Link to="/feed">Feed</Link>
			<Link to="/profile">Profile</Link>
      <Link to="/register">Register</Link>
			<Link to="/login">Login</Link>
      <Pageloader ref={pageloader} plActive={plActive} ilActive={ilActive} />
      <div className="signup-wrapper">
				<Routes>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
      </div>
      <div className="app-overlay is-sidebar-v1"></div>
      <Sidebar />
      {/* <div className="view-wrapper is-sidebar-v1 is-fold">
        <Routes>
          <Route
            path="feed"
            element={
              <Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} />
            }
          />
          <Route path="profile/:username" element={<ProfileMain />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div> */}
      {/* <ChatWrapper /> */}
    </div>
  );
}

export default App;
