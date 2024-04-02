import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() { 
    const [users, setUsers] = useState([]);

    const {id}=useParams()

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };
    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    };

    return (
        <div className='container mt-5'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Registration No</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Intake</th>

                        <th scope="col">Degree Programme</th>
                        <th scope="col">Option</th>




                    </tr>
                </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                    <th scope="row" key={index}>
                                        {index+1}
                                    </th>
                                    <td>{user.username}</td>
                                    <td>{user.kduid}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.academicyear}</td>

                                    <td>{user.degreepro}</td>
                                    <td>
                                        <Link className='btn btn-primary' to={`/viewuser/${user.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-1' to={`/edituser/${user.id}`}> Edit</Link>
                                        <button className='btn btn-danger  ' onClick={()=>deleteUser(user.id)}> Delete</button>

                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
            </table>
        </div>
    );
}

