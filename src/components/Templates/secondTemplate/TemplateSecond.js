import React from 'react'
import styles from './TemplateSecond.module.css';
import { useSelector } from 'react-redux'

function TemplateSecond() {

    let { personalinfo } = useSelector((state) => state.personalinfo);
    let { education } = useSelector((state) => state.educationinfo);
    let { workExperience } = useSelector((state) => state.workexperience);
    let { technicalSkills, softSkills } = useSelector((state) => state.skills);
    let { projects } = useSelector((state) => state.projects);
    let { certificate } = useSelector((state) => state.certifications);
    let { awards } = useSelector((state) => state.awards);
    let { hobbies } = useSelector((state) => state.hobbies);

    return (

        <div className='TemplateSecond' id='SecondTemplate'>
            <div className={styles.details}>
                <div className={styles.personal_details}>
                    <div className={styles.heading}>
                        <h1>{personalinfo.fullName}</h1>

                    </div>
                    <div className={styles.description}>
                        <p className={styles.p}><strong>{personalinfo.email}</strong></p>
                        <p className={styles.p}><strong>{personalinfo.phoneNumber}</strong></p>
                        <p className={styles.p}><strong>{personalinfo.professionalSummary}</strong></p>
                    </div>

                </div>
                <div className={styles.wrapper} >

                    <div className={styles.left}>
                        <div className="work_exp">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Work Experience</h2>

                            </div>
                            <ul className={styles.TemplateSecond_ul}>
                                {
                                    workExperience.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.separator}>
                                                <li><strong>Company/Organization Name :</strong> {workExperience[i].companyName}</li>
                                                <li><strong>Job Title :</strong> {workExperience[i].jobTitle}</li>
                                                <li><strong>Start Date :</strong> {workExperience[i].startDate}</li>
                                                <li><strong>End Date :</strong> {workExperience[i].endDate}</li>
                                                <li><strong>Job Description and Responsibilities :</strong> {workExperience[i].jobDescription}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="education_info">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Education Info</h2>

                            </div>

                            <ul className={styles.TemplateSecond_ul}>
                                {
                                    education.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.separator}>
                                                <li><strong>Name of the educational institution :</strong> {education[i].nameOfInstitution}</li>
                                                <li><strong>Major/Field of Study :</strong> {education[i].fieldOfStudy}</li>
                                                <li><strong>Degree or Certification obtained :</strong> {education[i].degree}</li>
                                                <li><strong>Graduation Year :</strong> {education[i].graduationYear}</li>
                                                <li><strong>CGPA :</strong> {education[i].cgpa}</li>
                                            </div>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="skills">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Skills</h2>

                            </div>
                            <div className={styles.skill_wrapper}>

                                <div className={styles.technical_skills}>
                                    <h4>Technical Skills</h4>

                                    <ul className={styles.TemplateSecond_ul}>

                                        {
                                            technicalSkills.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <li>{technicalSkills[i]}</li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="soft_skills">
                                    <h4>Soft Skills</h4>
                                    <ul className={styles.TemplateSecond_ul}>

                                        {
                                            softSkills.map((item, i) => {
                                                return (
                                                    <div key={i}>
                                                        <li>{softSkills[i]}</li>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className="projects">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Projects</h2>

                            </div>

                            <ul className={styles.TemplateSecond_ul}>
                                {
                                    projects.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.separator} >
                                                <li><strong>Project Name :</strong> {projects[i].projectName}</li>
                                                <li><strong>Description of the project :</strong> {projects[i].description}</li>
                                                <li><strong>Your role and contributions :</strong> {projects[i].yourRole}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="certifications">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Certifications</h2>

                            </div>

                            <ul className={styles.TemplateSecond_ul}>
                                {
                                    certificate.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.separator}>
                                                <li><strong>Certification Name :</strong> {certificate[i].certificationName}</li>
                                                <li><strong>Issuing Organization :</strong> {certificate[i].issuingOrganization}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="certifications">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Awards and Achievements</h2>

                            </div>

                            <ul className={styles.TemplateSecond_ul}>
                                {
                                    awards.map((item, i) => {
                                        return (
                                            <div key={i} className={styles.separator}>
                                                <li><strong>Name of the award/achievement :</strong> {awards[i].nameOfAward}</li>
                                                <li><strong>Date of receiving the award :</strong> {awards[i].dateWhenReceived}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="hobbies">
                            <div className={styles.heading}>
                                <h2 className={styles.h2}>Hobbies</h2>

                            </div>

                            <ul className={styles.hobby_ul}>
                                {
                                    hobbies.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                <li>{hobbies[i]}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default TemplateSecond