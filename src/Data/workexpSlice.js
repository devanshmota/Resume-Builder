import { createSlice } from "@reduxjs/toolkit";

const workexpSlice = createSlice({
    name: 'workExperience',
    initialState: {
        workExperience: [{
            companyName: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            jobDescription: ""
        }]
    },
    reducers: {
        setWorkExperience: (state, action) => {
            state.workExperience = action.payload;
        }

    }
})

export default workexpSlice;
export const { setWorkExperience } = workexpSlice.actions;