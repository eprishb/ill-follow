import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./setting/reducers";
export const Store = configureStore({
  reducer: {
    setting: settingReducer,
  },
});
