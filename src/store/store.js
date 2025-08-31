import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "../store/EventsSlice"
import workshopReducer from "../store/WorkshopSlice"
import authReducer from "../store/AuthSlice"
const store = configureStore({
  reducer: {
    auth:authReducer,
    events: eventsReducer,
    workshops:workshopReducer,
  },
  
});

export default store;