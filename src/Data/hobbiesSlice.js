import { createSlice } from "@reduxjs/toolkit";

const hobbiesSlice = createSlice({
    name: 'hobbies',
    initialState: {

        hobbies: [''],
        hobbiesExist: false

    },
    reducers: {
        setHobbies: (state, action) => {
            state.hobbies = action.payload;
        },
        setHobbiesExist: (state, action) => {
            state.hobbiesExist = action.payload
        }

    }
})

export default hobbiesSlice;
export const { setHobbies, setHobbiesExist } = hobbiesSlice.actions;