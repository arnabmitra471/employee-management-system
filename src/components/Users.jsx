import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Users() {
    const [employees,setEmployees] = useState([])

    useEffect(()=>{
        const fetchAllEmployees = async ()=>{
            try
            {
                const res = await axios.get("http://localhost:3000/employees")
                console.log(res.data);
                setEmployees(res.data);
            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchAllEmployees()
    },[])
  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center p-3'>Employee management system</h2>
        <div className='row'>
            <div className="col-md-12">
                <p><Link to="/add" className="btn btn-success">Add new users</Link></p>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.password}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.salary}</td>
                                        <td>
                                            <Link to={`/read/${employee.id}`} className='btn btn-success mx-2'>Read</Link>
                                            <Link to={`/edit/${employee.id}`} className='btn btn-primary mx-2'>Edit</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users