import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT, LIVE_CHAT_INDEX } from "./constants";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      if (state.messages.length > LIVE_CHAT_COUNT) {
        state.messages.splice(LIVE_CHAT_INDEX, 1);
      }

      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessages } = chatSlice.actions;

export default chatSlice.reducer;
