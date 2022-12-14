import { saveQuestionAnswer, saveQuestion } from "../utils/api";
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
    return (dispatch) =>{
        const {authedUser, qid, voteId} = info
        return saveQuestionAnswer(authedUser,qid,voteId)
        .then(() =>{
            dispatch(voteQuestions(qid,authedUser,voteId));
            dispatch(addAnswerUser(authedUser,qid,voteId));
        }).catch(e =>{
            console.warn("Error in voting: ", e);
            console.log("info:",info);
            alert("The was an error voting for the poll. Try again.")
        })
    }
}

export function handleAddQuestion(info) {
    console.log("info is:", info);
    return (dispatch) => {
        const {optionOneText, optionTwoText, author} = info
        return saveQuestion(optionOneText, optionTwoText,author).then(question => {
            dispatch(addQuestions(question));
            dispatch(addQuestionUser(question))
        }).catch(e =>{
            console.warn("Error in creating: ", e);
            console.log("info:",info);
            alert("The was an error creating a new poll. Try again.")
        })
    }
    
}