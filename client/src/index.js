import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Contexts
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { DirContextProvider } from "./context/DirContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<AuthContextProvider>
				<ThemeContextProvider>
					<DirContextProvider>
						<App />
					</DirContextProvider>
				</ThemeContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();