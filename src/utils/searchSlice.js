import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    searchSuggestions: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { searchSuggestions } = searchSlice.actions;

export default searchSlice.reducer;
