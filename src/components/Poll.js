import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';


const Poll = ({dispatch, authedUser}) => {
    const [poll, setPoll] = useState({
        optionOneText: "",
        optionTwoText: "",
    });

    const navigate = useNavigate()

    const handlePoll = (e) =>{
        const {name, value} = e.target;
        setPoll({...poll, [name]: value})
    }
    console.log("Poll options:", poll);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(handleAddQuestion({
            optionOneText: poll.optionOneText,
            optionTwoText: poll.optionTwoText,
            author:authedUser
        }))
        setPoll({optionOneText:"",optionTwoText:""})
        navigate('/home')
    }

  return (
    <div className='h-full flex flex-col'>
        <h2 className='font-bold'>Would you Rather?</h2>
        <div className='h-4/5 flex flex-col justify-around items-center'>
            <p>Create your own poll</p>
            <form className='h-1/2 flex flex-col justify-between'>
                <input name='optionOneText' type="text" placeholder='first question' value={poll.optionOneText} onChange={handlePoll} className='outline-indigo-500 p-3 border-2 border-indigo-500'/>
                <input name='optionTwoText' type="text" placeholder='second question' value={poll.optionTwoText} onChange={handlePoll} className='outline-indigo-500 p-3 border-2 border-indigo-500'/>
                <button onClick={handleSubmit} className='bg-indigo-500 px-3 py-2 text-slate-200 cursor-pointer'>
                    Create
                </button>
            </form>
        </div>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
})

export default connect(mapStateToProps)(Poll)