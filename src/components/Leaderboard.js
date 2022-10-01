import React from 'react'
import { connect } from 'react-redux'
import Leaderboards from './Leaderboards'

const Leaderboard = ({users}) => {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='h-4/5 flex flex-col w-4/5'>
        <h1 className='font-bold'>Leaderboards</h1>
          <div className='h-full w-full flex justify-between items-center text-center'>
            <h3 className='max-w-0.1 text-center'>name</h3>
            <h3 className='px-2 text-center'>answers</h3> 
            <h3 className='px-2 text-center'>questions</h3>
          </div>
          {
              users.map(id => <Leaderboards key={id} id={id}/>)
          }
      </div>
    </div>
  )
}

const mapStateToProps = ({ questions,users, authedUser }) => ({
    // questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    users: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length),
    // usersObj: users,
    // authedUser,
    // questionsObj: questions,
    // loading: authedUser === null,
  })

export default connect(mapStateToProps)(Leaderboard)