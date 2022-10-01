import React from 'react'
import { connect } from 'react-redux'


const Leaderboards = ({answers, questions, name}) => {
    
  return (
    <div className='h-full w-full'>

      <div className='h-full w-full flex justify-between items-center text-center'>
          <h3 className='max-w-0.1 text-center'>{name}</h3>
          <h3 className='px-2 text-center'>{answers.length}</h3> 
          <h3 className='px-2 text-center'>{questions.length}</h3>
      </div>
    </div>
  )
}

const mapStateToProps = ( {users}, {id} ) =>{
    const { answers, questions, name } = users[id]


    return {
        answers: Object.keys(answers),
        questions,
        name
    }
}

export default connect(mapStateToProps)(Leaderboards)