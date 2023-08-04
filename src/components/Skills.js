import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar';
import { setTechnicalSkills, setSoftSkills, setTechnicalSkillsExist, setSoftSkillsExist } from '../Data/skillSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function Skills() {

    let { technicalSkills, softSkills, technicalSkillsExist, softSkillsExist } = useSelector((state) => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/api/techskills')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setTechnicalSkills(res.data[0].technicalSkills));
                    dispatch(setTechnicalSkillsExist(true));

                } else {
                    dispatch(setTechnicalSkills(['']));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        axios.get('http://localhost:4000/api/softskills')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setSoftSkills(res.data[0].softSkills));
                    dispatch(setSoftSkillsExist(true));

                } else {
                    dispatch(setSoftSkills(['']));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChangeTechnical = (e, index) => {
        const updatedSkills = technicalSkills.map((item, i) => {
            if (index === i) {
                return e.target.value;
            } else {
                return item;
            }
        });
        dispatch(setTechnicalSkills(updatedSkills));
    };
    const handleChangeSoft = (e, index) => {
        const updatedSkills = softSkills.map((item, i) => {
            if (index === i) {
                return e.target.value;
            } else {
                return item;
            }
        });
        dispatch(setSoftSkills(updatedSkills));
    };

    const handleAddTechnical = () => {
        const updatedTechnicalSkills = [...technicalSkills, '']

        dispatch(setTechnicalSkills(updatedTechnicalSkills));

    }
    const handleAddSoft = () => {
        const updatedSoftSkills = [...softSkills, '']
        dispatch(setSoftSkills(updatedSoftSkills));

    }

    const SaveTech = () => {
        if (technicalSkillsExist) {
            console.log("put")
            axios.put('http://localhost:4000/api/techskills', technicalSkills)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log("post")
            axios.post('http://localhost:4000/api/techskills', technicalSkills)
                .then((res) => {
                    console.log(res);
                    dispatch(setTechnicalSkillsExist(true));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }


    const SaveSoft = () => {
        if (softSkillsExist) {
            console.log("put")
            axios.put('http://localhost:4000/api/softskills', softSkills)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log("post")
            axios.post('http://localhost:4000/api/softskills', softSkills)
                .then((res) => {
                    console.log(res);
                    dispatch(setSoftSkillsExist(true));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const handleTechDelete = (index) => {
        if (technicalSkillsExist) {

            const updatedTechSkills = technicalSkills.filter((item, i) => i !== index)
            dispatch(setTechnicalSkills(updatedTechSkills));

            axios.put('http://localhost:4000/api/techskills', updatedTechSkills)
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => {
                    console.log(e);
                })

        }
    }
    const handleSoftDelete = (index) => {
        if (softSkillsExist) {

            const updatedSoftSkills = softSkills.filter((item, i) => i !== index)
            dispatch(setSoftSkills(updatedSoftSkills));

            axios.put('http://localhost:4000/api/softskills', updatedSoftSkills)
                .then((res) => {
                    console.log(res)
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
                <div className="skills form">
                    <h2>Skills</h2>
                    <div className="cardWrapper">
                        <h3>Technical Skills</h3>
                        {

                            technicalSkills.map((item, index) => {

                                return (
                                    <div className="technical_skills flex-column" key={index}>
                                        <div className="input_btn">
                                            <input type="text" id='technical_skills' value={item} onChange={(e) => handleChangeTechnical(e, index)} />
                                            <button className='save_delete_btn' onClick={() => handleTechDelete(index)}>X</button>
                                        </div>

                                    </div>
                                )
                            }
                            )
                        }
                        <div className="btn">
                            < button className='save_delete_btn' onClick={handleAddTechnical} >Add</button>
                            <button className='save_delete_btn' onClick={SaveTech}>Save</button>
                        </div>
                    </div>

                    <div className="cardWrapper">
                        <h3>Soft Skills</h3>
                        {
                            softSkills.map((item, index) => {
                                return (
                                    <div className="soft_skills flex-column" key={index}>
                                        <div className="input_btn">
                                            <input type="text" id='soft_skills' value={item} onChange={(e) => handleChangeSoft(e, index)} />
                                            <button className='save_delete_btn' onClick={() => handleSoftDelete(index)}>X</button>
                                        </div>

                                    </div>


                                )
                            }
                            )
                        }
                        <div className="btn">
                            < button className='save_delete_btn' onClick={handleAddSoft} >Add</button>
                            <button className='save_delete_btn' onClick={SaveSoft}>Save</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Skills