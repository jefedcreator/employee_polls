import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Questions from './Questions';
import Questionpage from './Questionpage';
import Poll from './Poll';
import { handleInitialData } from '../actions/shared';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import authedUser from '../reducers/authedUser';

const Home = ({dispatch, loading, authedUser}) => {
  
  // useEffect(()=>{
  //   dispatch(handleInitialData())
  // },[]);

  return (
    <div className='h-full'>
        <Nav/>
      {
       loading == true ? null :
       ( <Routes>
            <Route path='/home' exact element={<Questions/>}/>
            <Route path='/leaderboards' element={<Leaderboard/>}/>
            <Route path="/home/:id" exact element={<Questionpage />} />
            <Route path="/create" element={<Poll />} />
            {/* <Route path="/" element={<Login />} /> */}
        </Routes>)
      }
    </div>
  )
}

const mapStateToProps = ({ questions,users, authedUser }) => ({
    // questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    // users: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length),
    // usersObj: users,
    authedUser,
    // questionsObj: questions,
    loading: authedUser === null 
})

export default connect(mapStateToProps)(Home)
