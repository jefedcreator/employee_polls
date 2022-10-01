import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleVoteQuestion, voteQuestions } from '../actions/questions';
import { _saveQuestionAnswer } from '../utils/_DATA';
import { BsCheck } from "react-icons/bs";


const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return <Component {...props} router={{ location, navigate, params }} />;
    };
  
    return ComponentWithRouterProp;
};

const Questionpage = ({question, authedUser, dispatch, user}) => {
    const { id, author, optionOne, optionTwo } = question

    const { answers } = user

    const myOption = answers[id];


    const handleVote = (e) =>{
        console.log("vote id:", id, "user:", authedUser, "option:", e.target.id);
        const voteId = Number(e.target.id)
        dispatch(handleVoteQuestion({
            authedUser,
            qid:id,
            voteId
        }))
    }

  return (
    <div className='h-4/5 flex flex-col'>
        <h2 className='font-bold'>{`Poll by ${author}`}</h2>
        <div className='flex flex-col justify-around items-center h-full'>
        <h3 className='font-bold'>Would you rather?</h3>
            {
                myOption == undefined ?
                (
                    <div className='flex w-1/2 text-center justify-between'>
                        <div className='cursor-pointer'>
                            <p id={1} onClick={handleVote}>{`${optionOne.text}?`}</p>
                        </div>
                        <div className='cursor-pointer'>
                            <p id={2} onClick={handleVote}>{`${optionTwo.text}?`}</p>
                        </div>
                    </div>
                ) : (
                    <div className='flex w-2/3 text-center justify-between items-center'>
                        <div>
                            {
                                myOption == "optionOne" 
                                ? 
                                <span className='flex items-center bg-indigo-500 px-3 py-2 text-slate-200 cursor-pointer'>
                                    <p id={1} onClick={handleVote}>{`${optionOne.text}`}</p> 
                                    <BsCheck color='white'/>
                                </span>
                                : 
                                <p id={1} onClick={handleVote} className='cursor-pointer'>{`${optionOne.text}`}</p>
                            }
                        </div>
                        <div>
                            {
                                myOption == "optionTwo" 
                                ? 
                                <span className='flex items-center bg-indigo-500 px-3 py-2 text-slate-200 cursor-pointer'>
                                    <p id={2} onClick={handleVote}>{`${optionTwo.text}`}</p> 
                                    <BsCheck color='white'/>
                                </span>
                                :
                                <p id={2} onClick={handleVote} className='cursor-pointer'>{`${optionTwo.text}`}</p> 
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

const mapStateToProps = ({ questions, authedUser, users },props) => {
    const {id} = props.router.params
    const question = questions[id];
    const user = users[authedUser];
    return {
        question,
        authedUser,
        user
    };
}

export default withRouter(connect(mapStateToProps)(Questionpage))