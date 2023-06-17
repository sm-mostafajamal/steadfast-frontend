import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "All",
  reducers: {
    searchValue(state, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { searchValue } = filterSlice.actions;

export default filterSlice.reducer;
