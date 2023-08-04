import { createSlice } from "@reduxjs/toolkit";

const personalinfoSlice = createSlice({
    name: 'personalinfo',
    initialState: {
        personalinfo: {
            _id: "",
            fullName: "",
            email: "",
            phoneNumber: "",
            address: "",
            dateOfBirth: "",
            nationality: "",
            professionalSummary: ""
        }
    },
    reducers: {
        setPersonalinfo: (state, action) => {
            state.personalinfo = action.payload;
        }

    }
})

export default personalinfoSlice;
export const { setPersonalinfo } = personalinfoSlice.actions;