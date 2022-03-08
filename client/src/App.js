import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";
import Pageloader from "./components/pageloader/Pageloader";
import Sidebar from "./components/navigation/sidebar/Sidebar";
import ChatWrapper from "./components/chat/ChatWrapper";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import ProfileMain from "./pages/ProfileMain";
import Register from "./pages/Register";

function App() {
	const pageloader = useRef(null);
	const mainfeed = useRef(null);
	const [plActive, setPlActive] = useState(false);
	const [ilActive, setIlActive] = useState(true);
	const [shadowDom, setShadowDom] = useState(true);
	const [trueDom, setTrueDom] = useState(false);

	const {user} = useContext(AuthContext)

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
					<Route path="/" element={
						user ? <Feed ref={mainfeed} shadowDom={shadowDom} trueDom={trueDom} /> : <Register />
					} />				
					<Route path="register" element={
						user ? <Navigate to="/" /> : <Register />}
					/>
					<Route path="login" element={
					  user ? <Navigate to="/" /> : <Login />}
					/>
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
