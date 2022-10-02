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
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='h-1/3 w-4/5 font-bold'>Employee Polls</h1>
        <div className='h-2/3'>
            <form className='flex flex-col h-2/3 justify-between'>
                <input type="text" placeholder='username' value={details.username} name='username' onChange={handleChange} className='p-2 outline-none border-2 border-indigo-500'/>
                <input type="text" placeholder='password' value={details.password} name='password' onChange={handleChange} className='p-2 outline-none border-2 border-indigo-500'/>
                <button className='bg-indigo-500 px-1 py-1 text-slate-200' onClick={handleClick}>Login</button>
            </form>
        </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users
})

export default connect(mapStateToProps)(Login)