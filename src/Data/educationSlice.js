import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        education: [{
            nameOfInstitution: "",
            fieldOfStudy: "",
            degree: "",
            graduationYear: "",
            cgpa: ""
        }]
    },
    reducers: {
        setEducation: (state, action) => {
            state.education = action.payload;
        }

    }
})

export default educationSlice;
export const { setEducation } = educationSlice.actions;