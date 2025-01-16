import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showMenuBar: true,
  },
  reducers: {
    toggleMenuBar: (state) => {
      state.showMenuBar = !state.showMenuBar;
    },
    closeMenu: (state) => {
      state.showMenuBar = false;
    },
  },
});
export const { toggleMenuBar, closeMenu } = appSlice.actions;

export default appSlice.reducer;
