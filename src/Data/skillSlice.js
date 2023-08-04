import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: 'skill',
    initialState: {
        technicalSkills: [''],
        softSkills: [''],
        technicalSkillsExist: false,
        softSkillsExist: false

    },
    reducers: {
        setTechnicalSkills: (state, action) => {
            state.technicalSkills = action.payload;
        },
        setSoftSkills: (state, action) => {
            state.softSkills = action.payload;
        },
        setTechnicalSkillsExist: (state, action) => {
            state.technicalSkillsExist = action.payload;
        },
        setSoftSkillsExist: (state, action) => {
            state.softSkillsExist = action.payload;
        }

    }
})

export default skillSlice;
export const { setTechnicalSkills, setSoftSkills, setTechnicalSkillsExist, setSoftSkillsExist } = skillSlice.actions;