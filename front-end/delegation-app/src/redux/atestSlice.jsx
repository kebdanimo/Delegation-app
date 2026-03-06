import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const atestSlice = createSlice({
  name: "atestation",

  initialState,

  reducers: {
    storeAtest: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { storeAtest } = atestSlice.actions;
export default atestSlice.reducer;
