// Change Direction (RTL) dispatch an action. Reducer decides which properties to update.

const DirReducer = (state, action) => {
  switch (action.type) {
    case "DIRMODE":
      return Object.assign({}, state, {
        rtl: action.value,
      });
    
    default:
      return state;
  }
};

export default DirReducer;
