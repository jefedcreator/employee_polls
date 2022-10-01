import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleLogin, setAuthedUser } from '../actions/authedUser'
import { handleInitialData } from '../actions/shared'
import { handleAddUser } from '../actions/users'
import authedUser from '../reducers/authedUser'

const Login = ({authedUser, dispatch, users}) => {
    const [details, setDetails] = useState({
        username:"",
        password:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDetails({...details,[name]:value})
    }

    // useEffect(()=>{
    //     console.log(dispatch(handleInitialData()))
    //   }, [])
    console.log("Authed user is:", authedUser);
    console.log("users user is:", users);

    console.log("login details:", details);

    const navigate = useNavigate()
    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(handleLogin(details.username,details.password))
        // dispatch(setAuthedUser(details.username))
        navigate('/home')
        setDetails({username:"",password:""})
    }
    

  return (
    <div className='flex items-center justify-center h-screen'>
        
        <form className='flex flex-col h-1/2 justify-between'>
            <input type="text" placeholder='username' value={details.username} name='username' onChange={handleChange} className='border-4 px-0.5 py-1 outline-none'/>
            <input type="text" placeholder='password' value={details.password} name='password' onChange={handleChange} className='border-4 px-0.5 py-1 outline-none'/>
            <button className='bg-indigo-500 px-1 py-1 text-slate-200' onClick={handleClick}>Login</button>
        </form>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users
})

export default connect(mapStateToProps)(Login)