import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'

import { setHobbies, setHobbiesExist } from '../Data/hobbiesSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function Hobbies() {


    let { hobbies, hobbiesExist } = useSelector((state) => state.hobbies);
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://localhost:4000/api/hobbies')
            .then((res) => {

                if (res.data !== null && res.data.length) {
                    dispatch(setHobbies(res.data[0].hobbies));
                    dispatch(setHobbiesExist(true));
                    // console.log(hobbiesExist);
                } else {
                    dispatch(setHobbies(['']));
                }

            })
            .catch((e) => {
                console.log(e);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e, index) => {
        let updatedHobbies = hobbies.map((item, i) => {
            if (index === i) {
                return e.target.value;
            } else {
                return item;
            }
        });
        dispatch(setHobbies(updatedHobbies));
    };

    const handleAdd = () => {

        let updatedHobbies = [...hobbies]
        updatedHobbies.push("")
        dispatch(setHobbies(updatedHobbies));
    }
    const Save = () => {
        if (hobbiesExist) {
            console.log('put');
            axios.put('http://localhost:4000/api/hobbies', hobbies)
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log(e);
                });

        } else {
            console.log('post');
            axios.post('http://localhost:4000/api/hobbies', hobbies)
                .then((res) => {
                    console.log(res);
                    dispatch(setHobbiesExist(true));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    const handleDelete = async (index) => {
        if (hobbiesExist) {


            const updatedHobbies = hobbies.filter((item, i) => i !== index)
            dispatch(setHobbies(updatedHobbies));

            axios.put('http://localhost:4000/api/hobbies', updatedHobbies)
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => {
                    console.log(e);
                })

        }
    }
    return (

        <div className="container">
            <Sidebar />
            <div className="hobbies_interests form">
                <h2>Hobbies/Interests</h2>
                <div className="cardWrapper">

                    {
                        hobbies.map((i, index) => {

                            return (
                                <div key={index}>
                                    <div className="hobbies flex-column">
                                        <label htmlFor="hobbies">Hobbies/Interests</label>
                                        <div className="input_btn">
                                            <input type="text" id='hobbies' value={i} onChange={(e) => handleChange(e, index)} required />
                                            <button className='save_delete_btn' onClick={() => handleDelete(index)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                    < div className="btn">
                        <button className='save_delete_btn' onClick={handleAdd}>Add</button>
                        <button className='save_delete_btn' onClick={Save}>Save</button>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Hobbies