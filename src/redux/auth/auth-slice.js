import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import register from "./auth-operations"

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.token.payload;
            state.isLoggedIn = true;
            
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.token.payload;
            state.isLoggedIn = true;
            
        },
        [authOperations.logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
    }
})

export default authSlice.reducer