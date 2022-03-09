import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
 
const INITIAL_STATE = {
  user: {
    _id: "6227d8da9a292b4f21dc4463",
    username: "Jenna D.",
    email: "jenna.davis@testmail.com",
    title: "Blogger",
    position: "Influencer",
    location: "Melbourne",
    followers: [],
    following: [],
    commonFriends: 21,
    firstFriend: "Alan Maynard",
    secondFriend: "Margaret Bowles",
    profilePicture: "https://randomuser.me/api/portraits/women/32.jpg",
    coverImage: "https://unsplash.com/photos/FT1ePvQ1HlE",
  },
  isFetching: false,
  error: false,
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
