import React from 'react'
import { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Read() {
    const {id} = useParams();
    const [employee,setEmployees] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/employeesDetails/"+id)
        .then((res)=>{
            console.log(res.data);
            setEmployees(res.data[0])
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h1>User Details</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Salary</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.password}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Read