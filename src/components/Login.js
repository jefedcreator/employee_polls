import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { useNavigate, useLocation } from 'react-router-dom'
import { handleLogin } from '../actions/authedUser'


const Login = ({dispatch}) => {
    const [details, setDetails] = useState({
        username:"",
        password:""
    })

    // const { state } = useLocation()

    // const navigate = useNavigate()

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDetails({...details,[name]:value})
    }

    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(handleLogin(details.username,details.password))
        // navigate(state?.path || '/questions')
        setDetails({username:"",password:""})
    }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='h-1/3 w-4/5 font-bold'>Employee Polls</h1>
        <div className='h-2/3'>
            <form className='flex flex-col h-2/3 justify-between'>
                <input type="text" placeholder='employee id' value={details.username} name='username' onChange={handleChange} className='p-2 outline-none border-2 border-indigo-500' data-testid='username-input'/>
                <input type="text" placeholder='password' value={details.password} name='password' onChange={handleChange} className='p-2 outline-none border-2 border-indigo-500' data-testid='password-input'/>
                <button className='bg-indigo-500 px-1 py-1 text-slate-200' onClick={handleClick} data-testid="submit-button">Login</button>
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