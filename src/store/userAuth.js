import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    newAccount: false,
    avatar: '',
    user: {
        id: '',
        email: '',
        password: ""
    }
}
// hello
const userAuth = createSlice({
    name: "userAuth",
    initialState,
    reducers: {

        updateUser(state, action) {
            state.user = {
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            }
            state.login = true;
            state.avatar = action.payload.email.slice(0, 1);
            console.log("state.login", state.login)
        },

        logoutUser(state) {
            state.login = false;
        },

        switchButton(state) {
            state.newAccount = !state.newAccount;
        },




    }
})

export const userAuthActions = userAuth.actions;

export default userAuth.reducer;