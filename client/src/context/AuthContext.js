import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
 
const INITIAL_STATE = {
	user: null,
	isFetching: false,
	error: false
};

// Context
export const AuthContext = createContext(INITIAL_STATE);

// Wrapper
export const AuthContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

// Login & Register dispatch an action. Reducer decides which properties to update. 