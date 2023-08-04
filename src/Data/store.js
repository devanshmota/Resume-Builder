import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import personalinfoSlice from "./personalinfoSlice";
import educationSlice from "./educationSlice";
import workexpSlice from "./workexpSlice";
import skillSlice from "./skillSlice";
import projectsSlice from "./projectsSlice";
import certificateSlice from "./certificateSlice";
import awardsSlice from "./awardsSlice";
import hobbiesSlice from "./hobbiesSlice";



const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        personalinfo: personalinfoSlice.reducer,
        educationinfo: educationSlice.reducer,
        workexperience: workexpSlice.reducer,
        skills: skillSlice.reducer,
        projects: projectsSlice.reducer,
        certifications: certificateSlice.reducer,
        awards: awardsSlice.reducer,
        hobbies: hobbiesSlice.reducer
    }
})

export default store;