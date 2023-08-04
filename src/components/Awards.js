import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { setAwards } from '../Data/awardsSlice';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

function Awards() {

    let { awards } = useSelector((state) => state.awards);
    const dispatch = useDispatch();

    useEffect(() => {
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, i, fieldName) => {
        let updatedAwards = [...awards]
        awards.forEach((item, index) => {
            if (index === i) {
                updatedAwards[i] = { ...updatedAwards[i], [fieldName]: e.target.value };
            }
        })
        dispatch(setAwards(updatedAwards));
    };
    const handleAdd = () => {
        let updatedAwards = [...awards]
        updatedAwards.push({
            nameOfAward: "",
            dateWhenReceived: ""
        })
        dispatch(setAwards(updatedAwards));
    }


    const Save = (index) => {

        if (awards[index]._id && awards[index]._id !== '') {
            console.log('put')
            axios.put('http://localhost:4000/api/awards', awards[index])
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        else {
            console.log('post')
            axios.post('http://localhost:4000/api/awards', awards[index])
                .then((res) => {
                    console.log(res);
                    const newawards = { ...awards[index], _id: res.data._id };
                    const updatedAwards = [...awards]
                    updatedAwards[index] = newawards
                    dispatch(setAwards(updatedAwards));
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    const Delete = (index) => {
        const id = awards[index]._id
        if (!id || id === undefined) {
            const updatedAwards = awards.filter((item, i) => i !== index)
            dispatch(setAwards(updatedAwards))
        }
        else {
            axios.delete(`http://localhost:4000/api/awards/${id}`)
                .then((res) => {
                    const updatedAwards = awards.filter((item, i) => i !== index)
                    dispatch(setAwards(updatedAwards))
                })
                .catch((e) => {
                    console.log(e);
                })
        }


    }

    return (

        <div className="container">
            <Sidebar />
            <div className="awards_achievements form">
                <h2>Awards and Achievements (if applicable)</h2>
                {
                    awards.map((item, index) => {
                        return (

                            <div className="cardWrapper" key={index}>
                                <div className="nameofAward flex-column">
                                    <label htmlFor="nameofAward">Name of the award/achievement</label>
                                    <input type="text" id='nameofAward' value={item.nameOfAward} onChange={(e) => handleChange(e, index, "nameOfAward")} />
                                </div>

                                <div className="dateofAward flex-column">
                                    <label htmlFor="dateofAward">Date of receiving the award</label>
                                    <input type="date" id='dateofAward' value={item.dateWhenReceived} onChange={(e) => handleChange(e, index, "dateWhenReceived")} />
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

    )
}

export default Awards