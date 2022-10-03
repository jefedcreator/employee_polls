import React from 'react'
import { connect } from 'react-redux'
import Leaderboards from './Leaderboards'

const Leaderboard = ({users}) => {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='h-4/5 flex flex-col w-4/5'>
        <h1 className='font-bold'>Leaderboards</h1>
          <div className='h-full w-full flex justify-between items-center text-center'>
            <h3 className='flex w-1/6 justify-between items-center'>name</h3>
            <h3 className='px-2 text-center'>answered</h3> 
            <h3 className='px-2 text-center'>polls</h3>
          </div>
          {
              users.map(id => <Leaderboards key={id} uid={id}/>)
          }
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }) => ({
    users: Object.keys(users).sort((a,b) =>{
    if(users[b].questions.length > users[a].questions.length ) {
      return 1
    }
    if(users[b].questions.length < users[a].questions.length ) {
      return -1
    }
    if (Object.keys(users[b].answers).length > Object.keys(users[a].answers).length){
      return 1
   }
    if (Object.keys(users[b].answers).length < Object.keys(users[a].answers).length){
      return -1
   }
    }),
    // users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
  })

export default connect(mapStateToProps)(Leaderboard)