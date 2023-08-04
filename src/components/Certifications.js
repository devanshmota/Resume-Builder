import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { setCertificate } from '../Data/certificateSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Certifications() {

    let { certificate } = useSelector((state) => state.certifications);
    const dispatch = useDispatch();

    useEffect(() => {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, i, fieldName) => {
        let updatedCertificate = [...certificate]
        certificate.forEach((item, index) => {
            if (index === i) {
                updatedCertificate[i] = { ...updatedCertificate[i], [fieldName]: e.target.value };
            }
        })
        dispatch(setCertificate(updatedCertificate));
    };
    const handleAdd = () => {
        let updatedCertificate = [...certificate]
        updatedCertificate.push({
            certificationName: "",
            issuingOrganization: ""
        })
        dispatch(setCertificate(updatedCertificate));
    }


    const Save = (index) => {

        if (certificate[index]._id && certificate[index]._id !== '') {
            console.log('put')
            axios.put('http://localhost:4000/api/certificates', certificate[index])
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log('post')
            axios.post('http://localhost:4000/api/certificates', certificate[index])
                .then((res) => {
                    console.log(res);
                    const newcertificates = { ...certificate[index], _id: res.data._id };
                    const updatedCertificatse = [...certificate]
                    updatedCertificatse[index] = newcertificates
                    dispatch(setCertificate(updatedCertificatse));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const Delete = (index) => {
        const id = certificate[index]._id
        if (!id || id === undefined) {
            const updatedCertificate = certificate.filter((item, i) => i !== index)
            dispatch(setCertificate(updatedCertificate))
        }
        else {
            axios.delete(`http://localhost:4000/api/certificates/${id}`)
                .then((res) => {
                    const updatedCertificate = certificate.filter((item, i) => i !== index)
                    dispatch(setCertificate(updatedCertificate))
                })
                .catch((e) => {
                    console.log(e);
                })
        }

    }

    return (

        <div className="container">
            <Sidebar />
            <div className="certifications form flex-column">
                <h2>Certifications (if applicable)</h2>
                {
                    certificate.map((item, index) => {
                        return (

                            <div className="cardWrapper" key={index}>
                                <div className="certificateName flex-column">
                                    <label htmlFor="certificateName">Certification Name</label>
                                    <input type="text" id='certificateName' value={item.certificationName} onChange={(e) => handleChange(e, index, "certificationName")} />
                                </div>

                                <div className="issuingOrganization flex-column">
                                    <label htmlFor="issuingOrganization">Issuing Organization</label>
                                    <input type="text" id='issuingOrganization' value={item.issuingOrganization} onChange={(e) => handleChange(e, index, "issuingOrganization")} />
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
    )
}

export default Certifications