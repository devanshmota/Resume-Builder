import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { setProjects } from '../Data/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';



function Projects() {

    let { projects } = useSelector((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/api/projects')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setProjects(res.data));
                }
                else {
                    dispatch(setProjects(projects));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, i, fieldName) => {
        let updatedProjects = [...projects]
        projects.forEach((item, index) => {
            if (index === i) {
                updatedProjects[i] = { ...updatedProjects[i], [fieldName]: e.target.value };
            }
        })
        dispatch(setProjects(updatedProjects));
    };

    const handleAdd = () => {
        let updatedEducation = [...projects]
        updatedEducation.push({
            projectName: "",
            description: "",
            yourRole: ""
        })
        dispatch(setProjects(updatedEducation));
    }

    const Save = (index) => {

        if (projects[index]._id && projects[index]._id !== '') {
            console.log('put')
            axios.put('http://localhost:4000/api/projects', projects[index])
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log('post')
            axios.post('http://localhost:4000/api/projects', projects[index])
                .then((res) => {
                    console.log(res);
                    const newprojects = { ...projects[index], _id: res.data._id };
                    const updatedProjects = [...projects]
                    updatedProjects[index] = newprojects
                    dispatch(setProjects(updatedProjects));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const Delete = (index) => {
        const id = projects[index]._id
        if (!id || id === undefined) {
            const updatedProjects = projects.filter((item, i) => i !== index)
            dispatch(setProjects(updatedProjects))
        }
        else {
            axios.delete(`http://localhost:4000/api/projects/${id}`)
                .then((res) => {
                    const updatedProjects = projects.filter((item, i) => i !== index)
                    dispatch(setProjects(updatedProjects))
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
                <div className="projects form">
                    <h2>Projects (if applicable)</h2>

                    {
                        projects.map((item, index) => {

                            return (

                                <div className="cardWrapper" key={index}>
                                    <div className="projectName flex-column">
                                        <label htmlFor="projectName">Project Name</label>
                                        <input type="text" id='projectName' value={item.projectName} onChange={(e) => handleChange(e, index, "projectName")} />
                                    </div>
                                    <div className="descriptionOfProject flex-column">
                                        <label htmlFor="descriptionOfProject">Description of the project</label>
                                        <input type="text" id='descriptionOfProject' value={item.description} onChange={(e) => handleChange(e, index, "description")} />
                                    </div>
                                    <div className="yourRole flex-column">
                                        <label htmlFor="yourRole">Your role and contributions</label>
                                        <input type="text" id='yourRole' value={item.yourRole} onChange={(e) => handleChange(e, index, "yourRole")} />
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

export default Projects