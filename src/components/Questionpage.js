import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams, Navigate } from "react-router-dom";
import { handleVoteQuestion } from '../actions/questions';
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

const Questionpage = ({question, authedUser, dispatch, user, users}) => {

    // useEffect(()=>{
    //     if (question == undefined) {
    //        return <Navigate to="/error" replace />
    //     }
    // },[])

    const { id, author, optionOne, optionTwo } = question

    const { answers } = user

    const { avatarURL } = users[author]


    const myOption = answers[id];

    const votes1 = parseInt(optionOne.votes.length)
    const votes2 = parseInt(optionTwo.votes.length)
    const totalVotes = votes1 + votes2;

    const getoptionOnePecentage = () =>{
        let percent = (votes1 / totalVotes) * 100;
        return parseInt(percent)
    }

    const getoptionTwoPecentage = () => {
        let percent = (votes2 / totalVotes) * 100;
        return parseInt(percent)
    }

    const handleVote = (e) =>{
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
        <img src={avatarURL} alt="" className='w-20 h-20'/>
            {
                myOption === undefined ?
                (
                    <div className='flex w-1/2 text-center justify-between'>
                        <div className='cursor-pointer'>
                            <p id={1} onClick={handleVote}>{`${optionOne.text}?`}</p>
                            {/* <p>{`${getoptionOnePecentage()}%`}</p> */}
                        </div>
                        <div className='cursor-pointer'>
                            <p id={2} onClick={handleVote}>{`${optionTwo.text}?`}</p>
                            {/* <p>{`${getoptionTwoPecentage()}%`}</p> */}
                        </div>
                    </div>
                ) : (
                    <div className='flex w-2/3 text-center justify-between items-center'>
                        <div>
                            {
                                myOption === "optionOne" 
                                ?
                                <div>
                                    <span className='flex items-center bg-indigo-500 px-3 py-2 text-slate-200'>
                                        <p>{`${optionOne.text}`}</p> 
                                        <BsCheck color='white'/>
                                        <p>{`${getoptionOnePecentage()}%`}</p>
                                    </span>
                                    <span>
                                        <p>{votes1}</p>
                                    </span>
                                </div> 
                                :
                                <div>
                                    <span>
                                        <p>{`${optionOne.text}`}</p>
                                        <p>{`${getoptionTwoPecentage()}%`}</p>
                                    </span>
                                    <span>
                                        <p>{votes1}</p>
                                    </span>
                                </div>
                            }
                        </div>
                        <div>
                            {
                                myOption === "optionTwo" 
                                ?
                                <div>
                                    <span className='flex items-center bg-indigo-500 px-3 py-2 text-slate-200'>
                                        <p>{`${optionTwo.text}`}</p> 
                                        <BsCheck color='white'/>
                                        <p>{`${getoptionOnePecentage()}%`}</p>
                                    </span>
                                    <span>
                                        <p>{votes2}</p>
                                    </span>
                                </div> 
                                :
                                <div>
                                    <span>
                                        <p>{`${optionTwo.text}`}</p> 
                                        <p>{`${getoptionTwoPecentage()}%`}</p>
                                    </span>
                                    <span>
                                        <p>{votes2}</p>
                                    </span>
                                </div>
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
        user,
        users
    };
}

export default withRouter(connect(mapStateToProps)(Questionpage))