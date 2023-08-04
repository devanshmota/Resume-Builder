import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import { setPersonalinfo } from '../Data/personalinfoSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'


function PersonalInfo() {


    let { personalinfo } = useSelector((state) => state.personalinfo);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/api/personalinfo')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setPersonalinfo(res.data[0]));

                }
                else {
                    dispatch(setPersonalinfo(personalinfo));
                }

            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleChange = (e, fieldName) => {
        let updatedPersonalinfo = { ...personalinfo, [fieldName]: e.target.value };
        dispatch(setPersonalinfo(updatedPersonalinfo));
    };

    const Save = () => {
        if (personalinfo._id) {
            axios.put('http://localhost:4000/api/personalinfo', personalinfo)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            axios.post('http://localhost:4000/api/personalinfo', personalinfo)
                .then((res) => {
                    console.log(res);
                    // eslint-disable-next-line no-undef

                    let updatedPersonalinfo = { ...personalinfo, _id: res.data._id };

                    dispatch(setPersonalinfo(updatedPersonalinfo));
                })
                .catch((e) => {
                    console.log(e);
                })
        }

    }

    return (

        <>
            <Sidebar />
            <div className="container">
                <div className='personal_info form'>
                    <h2>Personal Information</h2>
                    <div className="cardWrapper" >

                        <div className='fullName flex-column'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id='fullname' value={personalinfo.fullName ?? ""} onChange={(e) => handleChange(e, "fullName")} />
                        </div>


                        <div className='email flex-column'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={personalinfo.email} onChange={(e) => handleChange(e, "email")} />
                        </div>

                        <div className="phone_number flex-column">
                            <label htmlFor="phonenumber">Phone Number</label>
                            <input type="number" id='phonenumber' value={personalinfo.phoneNumber} onChange={(e) => handleChange(e, "phoneNumber")} />
                        </div>

                        <div className="address flex-column">
                            <label htmlFor="address">Address</label>
                            <input type="text" id='address' value={personalinfo.address} onChange={(e) => handleChange(e, "address")} />
                        </div>

                        <div className="dateOfBirth flex-column">
                            <label htmlFor="DOB">Date Of Birth</label>
                            <input type='date' id='DOB' value={personalinfo.dateOfBirth} onChange={(e) => handleChange(e, "dateOfBirth")} />
                        </div>

                        <div className="nationality flex-column">
                            <label htmlFor="nationality">Nationality</label>
                            <input type="text" value={personalinfo.nationality} onChange={(e) => handleChange(e, "nationality")} />
                        </div>
                        <div className="introduction flex-column">
                            <label htmlFor="introduction">Professional Summary</label>
                            <input type="text" value={personalinfo.professionalSummary} onChange={(e) => handleChange(e, "professionalSummary")} />
                        </div>
                        <div className="btn">
                            <button onClick={Save} className='save_delete_btn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PersonalInfo