import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    newAccount: false,
    avatar: '',
    users: [{
        id: "user001",
        name: "Bond",
        password: "007",
    }]
}

const userAuth = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        verificateUser(state, action) {

            state.users.map(user => {
                if (user.name === action.payload.inputName && user.password === action.payload.inputPassword) {
                    state.login = true;
                    state.avatar = user.name.slice(0, 1);
                    console.log(state.avatar)
                    return;
                }


                return;
            })
        },

        logoutUser(state) {
            state.login = false;
        }

    }
})

export const userAuthActions = userAuth.actions;

export default userAuth.reducer;