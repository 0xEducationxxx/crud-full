import React from 'react'
import './AddUser.css'
import { Link } from 'react-router-dom'

const AddUser = () => {
  return (
    <div className='addUser'>
        <Link to="/" type="button" className='btn btn-secondary'>
            <i className="fa-solid fa-backward"></i> Back</Link>

        <h3>Add New User</h3>
        <form className='addUserForm'>
            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' placeholder='Enter Name' required />
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' placeholder='Enter Email' required />
            </div>
            <div className='inputGroup'>
            <button type="submit" className='btn btn-primary'>Add User</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser 