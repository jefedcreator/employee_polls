import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Home from './Home'
import Login from './Login';
import { LoadingBar } from 'react-redux-loading-bar';


function App({dispatch, authedUser}) {
  
  useEffect(()=>{
    dispatch(handleInitialData())
  },[]);

  return (
    <Fragment>
      <LoadingBar/>
      <div className="container px-10 py-5 h-screen">
        {
          authedUser == null ? 
          <Login/> 
          :
           <Home/>
        }

      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ questions,users, authedUser }) => ({
  questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  users: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length),
  usersObj: users,
  authedUser,
  questionsObj: questions,
  loading: authedUser === null || undefined
})


export default connect(mapStateToProps)(App);
