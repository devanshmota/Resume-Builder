import { createSlice } from "@reduxjs/toolkit";

const certificateSlice = createSlice({
    name: 'certificate',
    initialState: {
        certificate: [{
            certificationName: "",
            issuingOrganization: ""
        }]
    },
    reducers: {
        setCertificate: (state, action) => {
            state.certificate = action.payload;
        }

    }
})

export default certificateSlice;
export const { setCertificate } = certificateSlice.actions;