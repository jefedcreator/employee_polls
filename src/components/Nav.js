import React from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

const Nav = ({authedUser, dispatch, users}) => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    dispatch(setAuthedUser(null))
    navigate('/questions')
  }

  const { avatarURL } = users[authedUser]

  return (
    <nav className="flex w-full justify-between pb-3 items-center">
      <ul className='flex justify-between w-2/3'>
        <li>
          <Link to="/questions" className='no-underline hover:underline'>Home</Link>
        </li>
        <li>
          <Link to="/leaderboards" className='no-underline hover:underline'>Leaderboards</Link>
        </li>
        <li>
          <Link to="/add" className='no-underline hover:underline'>Create poll</Link>
        </li>
      </ul>

      <div className='flex justify-around w-1/3 items-center'>
        <p className='font-bold'>{`Welcome ${authedUser}`}</p>
        <img src={avatarURL} className='w-7 h-10 rounded-full' alt=''/>
        <span className='bg-indigo-500 px-3 py-2 text-slate-200 cursor-pointer'>
            <p onClick={handleLogOut}> Log out</p>
        </span>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ authedUser, users }) =>({
    authedUser,
    users
})

export default connect(mapStateToProps)(Nav)