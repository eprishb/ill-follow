import React, { useContext, useEffect, useRef, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";
import DefaultWrapper from "./layouts/DefaultWrapper";
import SignUpWrapper from "./layouts/SignUpWrapper";
import Pageloader from "./components/pageloader/Pageloader";
import ChatWrapper from "./components/chat/ChatWrapper";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import ProfileMain from "./pages/ProfileMain";

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
      <Pageloader ref={pageloader} plActive={plActive} ilActive={ilActive} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Routes>
								<Route path="/" element={<DefaultWrapper />}>
									<Route
										index
										element={
											<Feed
												ref={mainfeed}
												shadowDom={shadowDom}
												trueDom={trueDom}
											/>
										}
									/>
									<Route
										path="feed"
										element={
											<Feed
												ref={mainfeed}
												shadowDom={shadowDom}
												trueDom={trueDom}
											/>
										}
									/>
									<Route path="profile/:username" element={<ProfileMain />} />
								</Route>
              </Routes>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/" element={<SignUpWrapper />}>
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {/* <ChatWrapper /> */}
    </div>
  );
}

export default App;
