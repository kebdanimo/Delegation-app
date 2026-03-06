import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const userInfoSlice = createSlice({
    name: "userINfo",
    initialState,
    reducers: {
        storeInfo: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { storeInfo } = userInfoSlice.actions
export default userInfoSlice.reducer