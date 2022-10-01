import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import questions from '../reducers/questions';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/helper';


const Home = ({ question, authedUser, users }) => {
    const { id, author, timestamp, optionOne, optionTwo } = question

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`${id}`)
    }
    
  return (
    <div className='flex flex-col h-full justify-around outline px-5 text-center'>
        <p>{author}</p>
        <p>{formatDate(timestamp)}</p>
        <span onClick={handleNavigate} className='bg-indigo-500 px-3 py-2 text-slate-200 cursor-pointer'>
            Show
        </span>
    </div>

  )
}

const mapStateToProps = ({ questions, authedUser, users },{id}) => {
    const question = questions[id];

    return {
        question,
        authedUser,
        users
    };
}

export default connect(mapStateToProps)(Home)