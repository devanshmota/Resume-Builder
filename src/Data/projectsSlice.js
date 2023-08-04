import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [{
            projectName: "",
            description: "",
            yourRole: ""
        }]
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        }

    }
})

export default projectsSlice;
export const { setProjects } = projectsSlice.actions;