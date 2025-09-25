import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequest: (state, action) => {
      return action.payload;
    },
    removeRequest: () => {
      return null;
    },
  },
});

export const { addRequest, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
