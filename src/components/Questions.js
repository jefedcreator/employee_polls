import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

const Questions = ({questions, users, authedUser, usersObj, loading}) => {
  const { id, answers, timestamp, optionOne, optionTwo } = usersObj[authedUser]

  console.log("usersObj:", usersObj);

  console.log("id is:", id);
  console.log("question is", questions);
  console.log("answers is:", Object.keys(answers));

  return  (
    <div className='w-full h-4/5'>
        <div className='w-full h-1/2 py-5'>
          <h2 className='font-bold'>Answered Polls</h2>
          <div className='flex justify-around pt-5 h-full'>
              {
                  questions.filter(id => Object.keys(answers).includes(id)).map(id => <Question key={id} id={id}/>)
              }
          </div>
        </div>
        
        <div className='w-full h-1/2 py-5'>
            <h2 className='font-bold'>Unanswered Polls</h2>
            <div className='flex justify-around pt-5 h-full'>
                {
                    questions.filter(id => !Object.keys(answers).includes(id)).map(id => <Question key={id} id={id}/>)
                }
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = ({ questions,users, authedUser }) => ({
  questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  usersObj: users,
  users: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length),
  authedUser,
//   questionsObj: questions,
  loading: authedUser === null,
})


export default connect(mapStateToProps)(Questions)