import { createSlice } from "@reduxjs/toolkit";

const login_signupSlice = createSlice({
    name: 'login',
    initialState: {
        username: "",
        email: "",
        password: "",
        message: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        }


    }
})

export default login_signupSlice;
export const { setEmail, setPassword, setData, setUsername, setMessage } = login_signupSlice.actions;