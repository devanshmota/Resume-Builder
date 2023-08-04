import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { setEducation } from '../Data/educationSlice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import { useEffect } from 'react'

function EducationInfo() {

    let { education } = useSelector((state) => state.educationinfo);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/api/educationinfo')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setEducation(res.data));
                }
                else {
                    dispatch(setEducation(education));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, i, fieldName) => {
        let updatedEducation = [...education]
        updatedEducation.forEach((item, index) => {
            if (index === i) {
                updatedEducation[i] = { ...updatedEducation[i], [fieldName]: e.target.value };
            }
        })
        dispatch(setEducation(updatedEducation));
    };
    const handleAdd = () => {

        const updatedEducation = [...education]
        updatedEducation.push({
            nameOfInstitution: "",
            fieldOfStudy: "",
            degree: "",
            graduationYear: "",
            cgpa: ""
        })
        dispatch(setEducation(updatedEducation));
    }

    const Save = (index) => {

        if (education[index]._id && education[index]._id !== '') {
            axios.put('http://localhost:4000/api/educationinfo', education[index])
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            axios.post('http://localhost:4000/api/educationinfo', education[index])
                .then((res) => {
                    console.log(res);
                    const neweducation = { ...education[index], _id: res.data._id };
                    const updatedEducation = [...education]
                    updatedEducation[index] = neweducation
                    dispatch(setEducation(updatedEducation));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const Delete = (index) => {
        const id = education[index]._id
        if (!id || id === undefined) {
            const updatedEducation = education.filter((item, i) => i !== index)
            dispatch(setEducation(updatedEducation))
        }
        else {
            axios.delete(`http://localhost:4000/api/educationinfo/${id}`)
                .then((res) => {
                    const updatedEducation = education.filter((item, i) => i !== index)
                    dispatch(setEducation(updatedEducation))
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

                <div className="education_info form">
                    <h2>Education</h2>

                    {
                        education.map((item, index) => {
                            return (

                                <div className="cardWrapper" key={index}>
                                    <div className="institution flex-column">
                                        <label htmlFor="institution">Name of the educational institution</label>
                                        <input type="text" value={item.nameOfInstitution} onChange={(e) => handleChange(e, index, "nameOfInstitution")} />
                                    </div>

                                    <div className="major flex-column">
                                        <label htmlFor="major">Major/Field of Study</label>
                                        <input type="text" id='major' value={item.fieldOfStudy} onChange={(e) => handleChange(e, index, "fieldOfStudy")} />
                                    </div>

                                    <div className="certification flex-column">
                                        <label htmlFor="certification">Degree or Certification obtained</label>
                                        <input type="text" id='certification' value={item.degree} onChange={(e) => handleChange(e, index, "degree")} />
                                    </div>

                                    <div className="graduation flex-column">
                                        <label htmlFor="graduation">Graduation Year</label>
                                        <input type="number" id='graduation' value={item.graduationYear} onChange={(e) => handleChange(e, index, "graduationYear")} />
                                    </div>
                                    <div className="cgpa flex-column">
                                        <label htmlFor="cgpa">CGPA</label>
                                        <input type="number" id='cgpa' value={item.cgpa} onChange={(e) => handleChange(e, index, "cgpa")} />
                                    </div>
                                    <div className="btn">
                                        <button className='save_delete_btn' onClick={() => Save(index)}>Save</button>
                                        <button className='save_delete_btn' onClick={() => Delete(index)}>Delete</button>
                                    </div>
                                </div>

                            )
                        })

                    }
                    <button className='add_btn' onClick={handleAdd}>Add</button>

                </div>
            </div>

        </>
    )
}

export default EducationInfo