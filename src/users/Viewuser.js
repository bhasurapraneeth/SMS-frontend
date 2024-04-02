import React, { useState, useEffect } from 'react';
import { Link,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Viewuser() {
    const [user, setUser] = useState({
        username: "",
        kduid: "",
        dob: "",
        academicyear: "",
        degreepro: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <div className='card mt-5'>
                        <div className='card-header bg-primary text-white'>
                            <h2 className='text-center m-0'>Student Details</h2>
                        </div>
                        <div className='card-body'>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'><b>Name:</b> {user.username}</li>
                                <li className='list-group-item'><b>Registration No:</b> {user.kduid}</li>
                                <li className='list-group-item'><b>Date of Birth:</b> {user.dob}</li>
                                <li className='list-group-item'><b>Academic Year:</b> {user.academicyear}</li>
                                <li className='list-group-item'><b>Degree Programme:</b> {user.degreepro}</li>
                            </ul>
                        </div>
                        <div className='card-footer'>
                            <Link className='btn btn-primary' to={"/"}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
