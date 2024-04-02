import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate=useNavigate()

  const {id}=useParams()

  const [user,setUsers]=useState({
    username:"",
    kduid:"",
    dob:"",
    academicyear:"",
    degreepro:""
  })

  const{username,kduid,dob,academicyear,degreepro}=user

  const onInputChange=(e)=>{
    setUsers({...user,[e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user)
    navigate("/")
  };

  const loadUsers=async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUsers(result.data)
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-2 mt-2 shadow'>
          <form onSubmit={(e) => onSubmit(e)}>
            <fieldset >
              <legend>EDIT USER</legend>
              
              <div className="mb-3">
                <label htmlFor="TextInput" className="form-label"> Student Name</label>
                <input type="text" id="TextInput" className="form-control" placeholder=" Enter Student Name" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="TextInput" className="form-label"> Registration Number</label>
                <input type="text" id="TextInput" className="form-control" placeholder=" D/Bxx/xx/xxxx" name="kduid" value={kduid} onChange={(e)=>onInputChange(e)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="TextInput" className="form-label">Date Of Birth</label>
                <input type="text" id="TextInput" className="form-control" placeholder="dd/mm/yyyy " name="dob" value={dob} onChange={(e)=>onInputChange(e)}/>
              </div>

              <div className="mb-3">
                <label htmlFor="Select" className="form-label">Intake</label>
                <select id="Select" className="form-select" name="academicyear" value={academicyear} onChange={(e)=>onInputChange(e)}>
                  <option>intake 38</option>
                  <option>intake 39</option>
                  <option>intake 40</option>
                  <option>intake 41</option>

                </select>
              </div>
              <div className="mb-5">
                <label htmlFor="Select" className="form-label">Degree Programme</label>
                <select id="Select" className="form-select" name="degreepro" value={degreepro} onChange={(e)=>onInputChange(e)}>
                  <option>BSc Software Engineering</option>
                  <option>BSc  Computer Engineering</option>
                  <option>BSc  Computer Science</option>
                  <option>BSc  Infomation Technology</option>
                  <option>BSc  Information Systems</option>
                  <option>BSc  Data Science</option>

                </select>
              </div>
 
              <button type="submit" className="btn btn-outline-primary">Add</button>
              <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
