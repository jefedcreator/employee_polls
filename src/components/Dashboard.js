import React, { useState } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

const Dashboard = ({questions, authedUser, usersObj}) => {
  const[toggle, setToggle] = useState(false)
  const { answers } = usersObj[authedUser]

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return  (
    <div className='w-full h-4/5'>
          <button onClick={handleToggle}>{toggle === false ? "Show unaswered" : "Show answered"}</button>
          {
            toggle === false ?
            <div className='w-full h-full py-5'>
                <h2 className='font-bold'>Answered Polls</h2>
                <div className='flex justify-around pt-5 h-full'>
                    {
                        questions.filter(id => Object.keys(answers).includes(id)).map(id => <Question key={id} id={id}/>)
                    }
                </div>
            </div>
            :
            <div className='w-full h-full py-5'>
            <h2 className='font-bold'>Unanswered Polls</h2>
            <div className='flex justify-around pt-5 h-full'>
                {
                    questions.filter(id => !Object.keys(answers).includes(id)).map(id => <Question key={id} id={id}/>)
                }
            </div>
        </div>
          }
        
    </div>
  )
}

const mapStateToProps = ({ questions,users, authedUser }) => ({
  questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  usersObj: users,
  users: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length),
  authedUser,
  loading: authedUser === null,
})


export default connect(mapStateToProps)(Dashboard)