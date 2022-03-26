import { createContext, useReducer } from "react";
import DirReducer from "./DirReducer";

const INITIAL_STATE = {
  rtl: false,
};

// Context
export const DirContext = createContext(INITIAL_STATE);

// Wrapper
export const DirContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(DirReducer, INITIAL_STATE);

	return (
		<DirContext.Provider
			value={{
				rtl: state.rtl,
				dispatch
			}}
		>
			{children}
		</DirContext.Provider>
	)
}
