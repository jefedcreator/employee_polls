import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import questions from '../reducers/questions';
import users from '../reducers/users';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Nav from './Nav';
import { LoadingBar } from 'react-redux-loading-bar';
import { Route, Routes } from 'react-router-dom';
import Questions from './Questions';
import Questionpage from './Questionpage';
import Poll from './Poll';

function App({questions,users, usersObj , dispatch, authedUser, loading}) {
  
  // const ansArr = Object.keys(props.users[props.authedUser].answers)
  // console.log("answer arr:",props.usersObj[props.authedUser]);
  // const { id, answers, timestamp, optionOne, optionTwo } = usersObj[authedUser]

  // console.log("id is:", id);
  // console.log("answers is:", Object.keys(answers));
  // console.log("users is:", users);
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
