// Change Theme dispatch an action. Reducer decides which properties to update.

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARKMODE":
      return Object.assign({}, state, {
        scheme: action.value,
      });
    
    default:
      return state;
  }
};

export default ThemeReducer;
