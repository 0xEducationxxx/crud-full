import React, { useEffect } from 'react'
import './UpdateUser.css'
import { Link , useNavigate} from 'react-router-dom' 
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const users = {
        name: '',
        email: ''
    }
    const [user, setUser] = useState(users)
    const navigate = useNavigate();
    const {id} = useParams();
useEffect(()=>{
    axios.get(`http://localhost:9000/api/user/${id}`)
    .then((response) => {
        setUser(response.data);
    }).catch((err) =>{
        console.log(err);
    })
},[id]);
    const inputHandler = (e) => {
        const { name, value } = e.target
        console.log(name ,":", value)
        setUser({ ...user, [name]: value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9000/api/update/user/${id}`, user)
        .then((response) => {
            toast.success(response.data.message,{position: "top-right"});
            navigate("/");
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <div className='addUser'>
        <Link to="/" type="button" className='btn btn-secondary'>
            <i className="fa-solid fa-backward"></i> Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitHandler}>
            <div className='inputGroup'>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' onChange={inputHandler} value={user.name} id='name' placeholder='Enter Name' required />
            </div>
            <div className='inputGroup'>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' onChange={inputHandler} value={user.email} id='email' placeholder='Enter Email' required />
            </div>
            <div className='inputGroup'>
            <button type="submit" className='btn btn-primary'>Update User</button>
            </div>
        </form>
    </div>
  )
}

export default UpdateUser