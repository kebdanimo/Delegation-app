import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import userInfoSlice from "./userInfoSlice";

export const store = configureStore({
    reducer: {
        login: authSlice,
        infos: userInfoSlice,
    }
})
