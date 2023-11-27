import React from 'react'
import {Link,useParams ,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react"
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
    const {id} = useParams();
    const [employees,setEmployees] = useState({
        name: "",
        email: "",
        password: "",
        salary: "",
        address: ""
    });
    useEffect(()=>{
        axios.get("http://localhost:3000/employeesDetails/"+id).then((res)=>{
            console.log(res.data);
            setEmployees(res.data[0])
        }).catch((err)=>{
            console.log(err);
        })
    },[])
    /* useNavigate is used to navigate between different routes in our react app
    It returns a method which can be used to navigate between different endpoints in our application
    */ 
    const navigate = useNavigate();
    const location = useLocation(); 
    
    const emp_id = location.pathname.split("/")[2];
    console.log(emp_id);
    const handleOnChange = (e)=>{
        setEmployees((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleEdit = async(e)=>{
        e.preventDefault();
        try
        {
            await axios.put(`http://localhost:3000/employees/${emp_id}`,employees)
            navigate("/");
        }
        catch(err)
        {
            console.log(err);
        }
    }
  return (
    <div className='container'>
        <h1>Edit your Details</h1>
        <form>
            <div className='mb-3 mt-3'>
                <label htmlFor="id" className='form-label'>ID</label>
                <input type="text" className="form-control" id="id" value={id} placeholder='Enter your id' name="id" disabled/>
            </div>
            <div className='mb-3 mt-3'>
                <label htmlFor="name" className='form-label'>Full Name</label>
                <input type="text" className="form-control" id="name" value={employees.name} placeholder='Enter your full name' name="name" onChange={handleOnChange}/>
            </div>
            <div className='mb-3 mt-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="text" className="form-control" id="email" value={employees.email} placeholder='Enter your email' name="email" onChange={handleOnChange}/>
            </div>
            <div className='mb-3 mt-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" className="form-control" id="password" value={employees.password} placeholder='Change your password' name="password" onChange={handleOnChange}/>
            </div>
            <div className='mb-3 mt-3'>
                <label htmlFor="salary" className='form-label'>Salary</label>
                <input type="text" className="form-control" id="salary" value={employees.salary} placeholder='Change your Salary' name="salary" onChange={handleOnChange}/>
            </div>
            <div className='mb-3 mt-3'>
                <label htmlFor="address" className='form-label'>Address</label>
                <input type="text" className="form-control" id="address" value={employees.address} placeholder='Enter your updated address' name="address" onChange={handleOnChange}/>
            </div>
            <div className='mb-3 mt-3'>
            <button type="submit" className='btn btn-primary' onClick={handleEdit}>Update</button>
            </div>
            <div className='mb-3 mt-3'>
            <Link to="/" className='btn-btn-info'>See all Users</Link>
            </div>
        </form>
    </div>
  )
}
