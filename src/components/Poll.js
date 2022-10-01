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
    <div>
        <h2>Would you Rather?</h2>
        <p>Create your own poll</p>
        <form>
            <label htmlFor="optionOneText">First Option</label>
            <input name='optionOneText' type="text" placeholder='first question' value={poll.optionOneText} onChange={handlePoll}/>
            <label htmlFor="optionTwoText">Second Option</label>
            <input name='optionTwoText' type="text" placeholder='second question' value={poll.optionTwoText} onChange={handlePoll}/>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser
})

export default connect(mapStateToProps)(Poll)