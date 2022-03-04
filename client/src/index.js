import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Feed from "./pages/Feed";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      {/* <Routes>
				<Route path="/" element={<App />} >
					<Route path="feed" element={<Feed />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
				</Route>
      </Routes> */}
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);