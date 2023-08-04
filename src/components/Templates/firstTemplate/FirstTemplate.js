import React from 'react'
import './FirstTemplate.css';
import { useSelector } from 'react-redux'

function FirstTemplate() {

    let { personalinfo } = useSelector((state) => state.personalinfo);
    let { education } = useSelector((state) => state.educationinfo);
    let { workExperience } = useSelector((state) => state.workexperience);
    let { technicalSkills, softSkills } = useSelector((state) => state.skills);
    let { projects } = useSelector((state) => state.projects);
    let { certificate } = useSelector((state) => state.certifications);
    let { awards } = useSelector((state) => state.awards);
    let { hobbies } = useSelector((state) => state.hobbies);
    return (
        <div className='FirstTemplate' id='FirstTemplate'>

            <div className='details'>
                <div className="wrapper">
                    <div className="personal_details">
                        <div className='heading'>
                            <h1>{personalinfo.fullName}</h1>


                        </div>
                        <div className='description'>
                            <p><strong>{personalinfo.email}</strong></p>
                            <p><strong>{personalinfo.phoneNumber}</strong></p>
                            <p><strong>{personalinfo.professionalSummary}</strong></p>
                        </div>

                    </div>
                    <div className="education_info">
                        <div className="heading">
                            <h2>Education Info</h2>

                        </div>

                        <ul className='FirstTemplate_ul'>
                            {
                                education.map((item, i) => {
                                    return (
                                        <div key={i} className='separator'>
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
                    <div className="work_exp">
                        <div className="heading">
                            <h2>Work Experience</h2>

                        </div>
                        <ul className='FirstTemplate_ul'>
                            {
                                workExperience.map((item, i) => {
                                    return (
                                        <div key={i} className='separator'>
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
                    <div className="skills">
                        <div className="heading">
                            <h2>Skills</h2>

                        </div>
                        <div className="skill_wrapper">

                            <div className="technical_skills">
                                <h4>Technical Skills</h4>

                                <ul className='FirstTemplate_ul'>

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
                                <ul className='FirstTemplate_ul'>

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



                    <div className="projects">
                        <div className="heading">
                            <h2>Projects</h2>

                        </div>

                        <ul className='FirstTemplate_ul'>
                            {
                                projects.map((item, i) => {
                                    return (
                                        <div key={i} className='separator' >
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
                        <div className="heading">
                            <h2>Certifications</h2>

                        </div>

                        <ul className='FirstTemplate_ul'>
                            {
                                certificate.map((item, i) => {
                                    return (
                                        <div key={i} className='separator'>
                                            <li><strong>Certification Name :</strong> {certificate[i].certificationName}</li>
                                            <li><strong>Issuing Organization :</strong> {certificate[i].issuingOrganization}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="certifications">
                        <div className="heading">
                            <h2>Awards and Achievements</h2>

                        </div>

                        <ul className='FirstTemplate_ul'>
                            {
                                awards.map((item, i) => {
                                    return (
                                        <div key={i} className='separator'>
                                            <li><strong>Name of the award/achievement :</strong> {awards[i].nameOfAward}</li>
                                            <li><strong>Date of receiving the award :</strong> {awards[i].dateWhenReceived}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="hobbies">
                        <div className="heading">
                            <h2>Hobbies</h2>

                        </div>

                        <ul className='FirstTemplate_ul hobby_ul'>
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
    )
}

export default FirstTemplate