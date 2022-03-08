import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <Router>
    <React.StrictMode>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);