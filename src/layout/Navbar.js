import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav class="navbar bg-primary ">
            <div class="container-fluid ">
                <Link class="navbar-brand" to="/"><b>STUDENT MANAGEMENT SYSTEM</b></Link>
                <Link className='btn btn-secondary mx-5' to="/adduser">Add Student</Link>
                

            </div>
            
        </nav>
        
        
    
    </div>
  )
}
