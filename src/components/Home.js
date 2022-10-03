import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Questionpage from './Questionpage';
import Poll from './Poll';
import Leaderboard from './Leaderboard';
import Nav from './Nav';

const Home = ({ loading}) => {
  

  return (
    <div className='h-full'>
        <Nav/>
      {
       loading === true ? null :
       ( <Routes>
            <Route path='/questions' exact element={<Dashboard/>}/>
            <Route path='/leaderboards' element={<Leaderboard/>}/>
            <Route path="/questions/:id" exact element={<Questionpage />} />
            <Route path="/add" element={<Poll />} />
            {/* <Route path="*" element={<Error />} /> */}
        </Routes>)
      }
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => ({
    authedUser,
    loading: authedUser === null 
})

export default connect(mapStateToProps)(Home)
