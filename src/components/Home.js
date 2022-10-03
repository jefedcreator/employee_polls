import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Questionpage from './Questionpage';
import Poll from './Poll';
import Leaderboard from './Leaderboard';
import Nav from './Nav';
import Error from './Error';
import RequireAuth from './RequireAuth';

const Home = ({ loading}) => {
  

  return (
    <div className='h-full'>
        <Nav/>
      {
       loading === true ? null :
       ( <Routes>
            <Route path='/questions' exact element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
            }/>
            <Route path='/leaderboards' element={
            <RequireAuth>
              <Leaderboard/>
            </RequireAuth>
            }/>
            <Route path="/questions/:id" exact element={
            <RequireAuth>
              <Questionpage />
            </RequireAuth>
            } />
            <Route path="/add" element={
            <RequireAuth>
              <Poll />
            </RequireAuth>
            } />
            <Route path="*" element={<Error />} />
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
