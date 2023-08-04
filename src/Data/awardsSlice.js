import { createSlice } from "@reduxjs/toolkit";

const awardsSlice = createSlice({
    name: 'awards',
    initialState: {
        awards: [{
            nameOfAward: "",
            dateWhenReceived: ""

        }]
    },
    reducers: {
        setAwards: (state, action) => {
            state.awards = action.payload;
        }

    }
})

export default awardsSlice;
export const { setAwards } = awardsSlice.actions;