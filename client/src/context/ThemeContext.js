import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE = {
  scheme: false,
};

// Context
export const ThemeContext = createContext(INITIAL_STATE);

// Wrapper
export const ThemeContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

	return (
		<ThemeContext.Provider
			value={{
				scheme: state.scheme,
				dispatch
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
