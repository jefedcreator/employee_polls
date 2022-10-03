import React from 'react'
import { connect } from 'react-redux'


const Leaderboards = ({answers, questions, name, avatarURL}) => {
    
  return (
    <div className='h-full w-full'>

      <div className='h-full w-full flex justify-between items-center text-center'>
          <span className='flex w-1/6 justify-between items-center'>
            <img src={avatarURL} className='w-10 h-10 rounded-full' alt=''/>
            <h3 className='max-w-0.1 text-center px-2'>{name}</h3>
          </span>
          <h3 className='px-2 text-center'>{answers.length}</h3> 
          <h3 className='px-2 text-center'>{questions.length}</h3>
      </div>
    </div>
  )
}

const mapStateToProps = ( {users}, {uid} ) =>{
    const { answers, questions, name, avatarURL } = users[uid]

    return {
        answers: Object.keys(answers),
        questions,
        name,
        avatarURL
    }
}

export default connect(mapStateToProps)(Leaderboards)