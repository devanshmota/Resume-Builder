import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { setWorkExperience } from '../Data/workexpSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function WorkExperience() {

    let { workExperience } = useSelector((state) => state.workexperience);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/api/workexperience')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setWorkExperience(res.data));

                }
                else {
                    dispatch(setWorkExperience(workExperience));
                }

            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleChange = (e, i, fieldName) => {
        let updatedworkExperience = [...workExperience]
        workExperience.forEach((item, index) => {
            if (index === i) {
                updatedworkExperience[i] = { ...updatedworkExperience[i], [fieldName]: e.target.value };
            }
        })
        dispatch(setWorkExperience(updatedworkExperience));
    };

    const handleAdd = () => {
        let updatedworkExperience = [...workExperience]
        updatedworkExperience.push({
            companyName: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            jobDescription: ""
        })
        dispatch(setWorkExperience(updatedworkExperience));
    }

    const Save = (index) => {

        if (workExperience[index]._id && workExperience[index]._id !== '') {
            console.log("put")
            axios.put('http://localhost:4000/api/workexperience', workExperience[index])
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log("post")
            axios.post('http://localhost:4000/api/workexperience', workExperience[index])
                .then((res) => {
                    console.log(res);
                    const new_work_exp = { ...workExperience[index], _id: res.data._id };
                    const updatedworkExperience = [...workExperience]
                    updatedworkExperience[index] = new_work_exp
                    dispatch(setWorkExperience(updatedworkExperience));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const Delete = (index) => {
        const id = workExperience[index]._id
        if (!id || id === undefined) {
            const updatedworkExperience = workExperience.filter((item, i) => i !== index)
            dispatch(setWorkExperience(updatedworkExperience))
        }
        else {
            axios.delete(`http://localhost:4000/api/workexperience/${id}`)
                .then((res) => {
                    const updatedworkExperience = workExperience.filter((item, i) => i !== index)
                    dispatch(setWorkExperience(updatedworkExperience))
                })
                .catch((e) => {
                    console.log(e);
                })
        }

    }



    return (
        <>
            <div className="container">
                <Sidebar />
                <div className="work_experience form">
                    <h2> Work Experience </h2>
                    {
                        workExperience.map((item, index) => {
                            return (

                                <div className="cardWrapper" key={index}>
                                    <div className="company flex-column">
                                        <label htmlFor="company">Company/Organization Name</label>
                                        <input type="text" id='company' value={item.companyName} onChange={(e) => handleChange(e, index, "companyName")} />
                                    </div>
                                    <div className="jobTitle flex-column">
                                        <label htmlFor="jobTitle">Job Title</label>
                                        <input type="text" id='jobTitle' value={item.jobTitle} onChange={(e) => handleChange(e, index, "jobTitle")} />
                                    </div>

                                    <div className='start-date flex-column'>
                                        <label htmlFor="start-date">Start Date:</label>
                                        <input type="date" id="start-date" name="start-date" required value={item.startDate} onChange={(e) => handleChange(e, index, "startDate")} />
                                    </div>

                                    <div className='end-date flex-column'>
                                        <label htmlFor="end-date">End Date:</label>
                                        <input type="date" id="end-date" name="end-date" value={item.endDate} onChange={(e) => handleChange(e, index, "endDate")} />
                                    </div>
                                    <div className="job_description flex-column">
                                        <label htmlFor="job_description">Job Description and Responsibilities</label>
                                        <input type="text" id='job_description' value={item.jobDescription} onChange={(e) => handleChange(e, index, "jobDescription")} />
                                    </div>
                                    <div className="btn">
                                        <button className='save_delete_btn' onClick={() => Save(index)}>Save</button>
                                        <button className='save_delete_btn' onClick={() => Delete(index)}>Delete</button>
                                    </div>
                                </div >
                            )
                        })
                    }
                    <button className='add_btn' onClick={handleAdd}>Add</button>
                </div>
            </div>

        </>
    )
}

export default WorkExperience