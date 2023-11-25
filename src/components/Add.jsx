import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'

export default function Add() {

  const [employees,setEmployees] = useState({
    name:"",
    email:"",
    password: "",
    salary: "",
    address: "",

  })
  const navigate = useNavigate();
    const handleOnChange = (e)=>{
        setEmployees((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(employees)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try
        {
            await axios.post("http://localhost:3000/create",employees)
            // console.log("The user has been added successfully");
            navigate("/")
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return (
        <div className='container'>
            <h2 className='w-100 d-flex justify-content-center p-3'>Add New User</h2>
            <div className="row">
                <div className="col-md-12">
                    <h3>Add Your Detail</h3>
                    <form>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="fullName" className='form-label'>Full Name</label>
                            <input type="text" className='form-control' id='fullName' placeholder='Enter your full name' name='name' required onChange={handleOnChange} autoComplete='off' />
                        </div>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="text" className='form-control' id='email' placeholder='Enter your email' onChange={handleOnChange}name='email' autoComplete='off' required/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="password" className='form-label'>Password</label>
                            <input type="text" className='form-control' id='password' placeholder='Enter your password' name='password' autoComplete='off'required onChange={handleOnChange}/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="salary" className='form-label'>Salary</label>
                            <input type="text" className='form-control' id='salary' placeholder='Enter your salary' name='salary' required onChange={handleOnChange}/>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label htmlFor="address" className='form-label'>Address</label>
                            <input type="text" className='form-control' id='address' placeholder='Enter your address' name='address' required onChange={handleOnChange}/>
                        </div>
                        <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Add User</button>
                        <div className='mb-3 mt-3'>
                            <Link to="/" className="link-info">See all Users</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
