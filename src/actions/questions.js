import questions from "../reducers/questions";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { handleInitialData } from "./shared";
import {addAnswerUser, addQuestionUser} from "./users";

export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTIONS = "VOTE_QUESTIONS";

export function addQuestions(question) {
    return {
        type: ADD_QUESTIONS,
        question,
    }   
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }   
}

function voteQuestions(qid, authedUser, voteId) {
    return {
        type: VOTE_QUESTIONS,
        qid,
        authedUser,
        voteId
    }   
}


export function handleVoteQuestion(info){
    console.log("info is:", info);
 
    return (dispatch, getState) =>{
        // const {authedUser} = getState()
        const {authedUser, qid, voteId} = info
        // dispatch(voteQuestions(info));
        return saveQuestionAnswer(authedUser,qid,voteId)
        .then(
            // dispatch(addQuestions(question)),
            dispatch(voteQuestions(qid,authedUser,voteId)),
            dispatch(handleInitialData())
        
        ).catch(e =>{
            console.warn("Error in voting: ", e);
            // dispatch(voteQuestions(info));
            console.log("info:",info);
            alert("The was an error voting for the poll. Try again.")
        })
        // console.log("info is:",_saveQuestionAnswer(info));
    }
}

export function handleAddQuestion(info) {
    console.log("info is:", info);
    return (dispatch, getState) => {
        // dispatch(addQuestions(info));
        // const { authedUser } = getState()
        const {optionOneText, optionTwoText, author} = info
        return saveQuestion(optionOneText, optionTwoText,author).then(question =>
            dispatch(addQuestions(question)),
            dispatch(handleInitialData())
        ).catch(e =>{
            console.warn("Error in creating: ", e);
            // dispatch(voteQuestions(info));
            console.log("info:",info);
            alert("The was an error creating a new poll. Try again.")
        })
    }
    
}