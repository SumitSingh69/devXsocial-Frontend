import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducers from "./connectionSlice";
import requestsReducer from "./requestsSlice";
const appstore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionReducers,
    requests: requestsReducer,
  },
});

export default appstore;
