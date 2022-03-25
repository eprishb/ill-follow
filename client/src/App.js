import React, { useContext, useEffect, useRef, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from "./context/AuthContext";
import DefaultWrapper from "./layouts/DefaultWrapper";
import SignUpWrapper from "./layouts/SignUpWrapper";
import Pageloader from "./components/pageloader/Pageloader";
import ChatWrapper from "./components/chat/ChatWrapper";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	const pageloader = useRef(null);
	const [plActive, setPlActive] = useState(false);
	const [ilActive, setIlActive] = useState(true);

	const {user} = useContext(AuthContext);

	useEffect(() => {
    if (!pageloader.current) return;
		
		setPlActive((active) => !active);

		const pageloaderTimeout = setTimeout(() => {
			setPlActive((active) => !active);
			setIlActive((active) => !active);
			clearTimeout(pageloaderTimeout);
		}, 700);
  }, []);

  return (
    <div>
      <Pageloader ref={pageloader} plActive={plActive} ilActive={ilActive} />
      <Routes>
        <Route
          path="/*"
          element={
            user ? (
              <Routes>
								<Route path="/*" element={<DefaultWrapper />} />
              </Routes>
            ) : (
              <Login />
            )
          }
        />
        <Route path="signup/" element={<SignUpWrapper />}>
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
