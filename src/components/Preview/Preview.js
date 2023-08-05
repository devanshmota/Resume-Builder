import React, { useEffect, useState } from 'react'
import styles from './Preview.module.css'
import { setPersonalinfo } from '../../Data/personalinfoSlice'
import { setEducation } from '../../Data/educationSlice'
import { setWorkExperience } from '../../Data/workexpSlice'
import { setTechnicalSkills, setSoftSkills } from '../../Data/skillSlice'
import { setProjects } from '../../Data/projectsSlice'
import { setCertificate } from '../../Data/certificateSlice'
import { setAwards } from '../../Data/awardsSlice'
import { setHobbies } from '../../Data/hobbiesSlice'
import { useDispatch, useSelector } from 'react-redux'
import FirstTemplate from '../Templates/firstTemplate/FirstTemplate';
import TemplateSecond from '../Templates/secondTemplate/TemplateSecond';
import axios from 'axios';


function Preview() {
    const [input, setInput] = useState("FirstTemplate");

    let { personalinfo } = useSelector((state) => state.personalinfo);
    let { education } = useSelector((state) => state.educationinfo);
    let { workExperience } = useSelector((state) => state.workexperience);
    let { projects } = useSelector((state) => state.projects);
    let { certificate } = useSelector((state) => state.certifications);
    let { awards } = useSelector((state) => state.awards);
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

        axios.get('http://localhost:4000/api/techskills')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setTechnicalSkills(res.data[0].technicalSkills));
                } else {
                    dispatch(setTechnicalSkills(['']));
                }
            })
            .catch((e) => {
                console.log(e);
            });

        axios.get('http://localhost:4000/api/softskills')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setSoftSkills(res.data[0].softSkills));
                } else {
                    dispatch(setSoftSkills(['']));
                }
            })
            .catch((e) => {
                console.log(e);
            });

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

        axios.get('http://localhost:4000/api/certificates')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setCertificate(res.data));
                }
                else {
                    dispatch(setCertificate(certificate));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        axios.get('http://localhost:4000/api/awards')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setAwards(res.data));
                }
                else {
                    dispatch(setAwards(awards));
                }

            })
            .catch((e) => {
                console.log(e);
            });
        axios.get('http://localhost:4000/api/hobbies')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setHobbies(res.data[0].hobbies));

                    // console.log(hobbiesExist);
                } else {
                    dispatch(setHobbies(['']));
                }

            })
            .catch((e) => {
                console.log(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='Preview'>
            <div className={styles.wrapper_template}>
                <div className={styles.choose_template}>
                    <p className={styles.p}>Select the template</p>
                    <div className={styles.first_template}>
                        <input type="radio" id='firstTemplate' value='FirstTemplate' name='template' checked={input === 'FirstTemplate'} onChange={(e) => setInput(e.target.value)} />
                        <label htmlFor="firstTemplate" className={styles.label}>First Template</label>
                    </div>

                    <div className="second_template">
                        <input type="radio" id='secondTemplate' value='SecondTemplate' name='template' checked={input === 'SecondTemplate'} onChange={(e) => setInput(e.target.value)} />
                        <label htmlFor="secondTemplate" className={styles.label}>Second Template</label>
                    </div>
                </div>
            </div>

            {

                input === 'FirstTemplate' ? <FirstTemplate /> : input === 'SecondTemplate' ? <TemplateSecond /> : null
            }
        </div>
    )
}

export default Preview