import React from 'react';
import {Link} from 'react-router-dom';

function Users() {
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
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users