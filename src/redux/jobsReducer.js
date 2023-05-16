import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    appendJobs(state, action) {
      return action.payload;
    },
  },
});
export const { appendJobs } = jobsSlice.actions;

export default jobsSlice.reducer;
