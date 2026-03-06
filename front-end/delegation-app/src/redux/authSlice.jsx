import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false
}

export const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.status = true
        },
        logout: (state) => {
            state.status = false
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer


// affect_id: 2;
// cin: "FB458778";
// created_at: "2023-03-14T12:03:23.000000Z";
// date_depart: null;
// date_prise_dervice: null;
// date_recrutement: null;
// email: "yassin22@gmailcom";
// email_verified_at: null;
// fonction_id: 2;
// grade_id: 2;
// matricule: "22";
// motif_depart: null;
// nom: "rehmouni";
// observation: null;
// password: "admin";
// prenom: "yassin";
// remember_token: null;
// statu_id: 1;
// status: 1;
// tele: 6856395;
// updated_at: "2023-03-14T23:35:48.000000Z";